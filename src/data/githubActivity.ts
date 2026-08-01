export interface Commit {
  repo: string;
  message: string;
  sha: string;
  url: string;
  date: string;
}

/**
 * Fetched at BUILD time, not from the visitor's browser: the visitor's IP never
 * reaches GitHub, the ~250 lines of client script and the sessionStorage cache
 * disappear, and the commit list is present in the static HTML for crawlers
 * instead of the "Fetching latest activity..." placeholder a non-executing
 * crawler used to see.
 *
 * Staleness (this list is only as fresh as the last build) is mitigated by a
 * nightly scheduled rebuild — a GitHub Actions cron hitting a Vercel deploy
 * hook — not implemented in this repo yet.
 *
 * try/catch + empty-array fallback on purpose: a build must never fail because
 * GitHub rate-limited the CI runner's shared IP, which genuinely happens.
 */
async function getRecentCommits(): Promise<Commit[]> {
  try {
    const reposResponse = await fetch(
      'https://api.github.com/users/Brbn-jpg/repos?sort=pushed&direction=desc&per_page=5',
      { headers: { 'User-Agent': 'Astro-Portfolio' } }
    );
    if (!reposResponse.ok) throw new Error(`Failed to fetch repos: ${reposResponse.status}`);
    const repos: { full_name: string; name: string }[] = await reposResponse.json();

    const perRepoCommits = await Promise.all(
      repos.map(async (repo): Promise<Commit[]> => {
        const commitsResponse = await fetch(
          `https://api.github.com/repos/${repo.full_name}/commits?per_page=5`,
          { headers: { 'User-Agent': 'Astro-Portfolio' } }
        );
        if (!commitsResponse.ok) return [];
        const commits: any[] = await commitsResponse.json();
        return commits.map((c) => ({
          repo: repo.name,
          message: c.commit.message as string,
          sha: (c.sha as string).slice(0, 7),
          url: c.html_url as string,
          date: c.commit.committer.date as string,
        }));
      })
    );

    return perRepoCommits
      .flat()
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 3);
  } catch (error) {
    console.error('Error fetching GitHub activity at build time:', error);
    return [];
  }
}

/**
 * Module-level memoisation: `index.astro` (EN) and `pl/index.astro` (PL) both
 * need this list, and importing a plain async function would re-run the fetch
 * once per importer, doubling the API calls and the build-time rate-limit
 * exposure. Vite/ESM cache a module as a singleton, so this promise is created
 * exactly once per build and every importer `await`s the same in-flight (or
 * already-resolved) promise.
 */
export const recentCommitsPromise: Promise<Commit[]> = getRecentCommits();
