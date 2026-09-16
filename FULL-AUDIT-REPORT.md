# Pełny audyt SEO i GEO — brbn.pl

**Data audytu:** 15 września 2026  
**Zakres:** produkcja `https://www.brbn.pl/`, canonical host `https://brbn.pl`, aktualny `master` i lokalny build produkcyjny  
**Typ witryny:** portfolio osobiste / marka ekspercka, PL + EN  
**Wynik łączny:** **79/100**

## Ocena

| Obszar | Waga | Wynik | Wkład |
|---|---:|---:|---:|
| SEO techniczne | 22% | 78 | 17.2 |
| Treść i E-E-A-T | 23% | 67 | 15.4 |
| On-page SEO | 20% | 88 | 17.6 |
| Schema.org | 10% | 91 | 9.1 |
| Wydajność | 10% | 99 | 9.9 |
| GEO / AI readiness | 10% | 65 | 6.5 |
| Obrazy | 5% | 75 | 3.8 |

Witryna ma bardzo dobrą bazę techniczną: statyczny HTML, szybki build produkcyjny, kompletne metadane, poprawną internacjonalizację i rozbudowany JSON-LD. Największa strata wynika ze sprzecznych sygnałów hosta oraz z tego, że portfolio nadal podaje za mało weryfikowalnych rezultatów, dat, skali i zewnętrznych potwierdzeń.

## Najważniejsze wyniki

- Crawl objął **20 indeksowalnych URL-i**. Wszystkie odpowiadają `200` na `www.brbn.pl`, mają jeden H1, unikalny title i unikalny meta description.
- Wszystkie **20 canonicali, wpisów sitemap i hreflangów wskazuje `brbn.pl`**, podczas gdy ten host zwraca `307` do `www.brbn.pl`. To konflikt silnego sygnału redirect z canonicalem i sitemapą.
- Hreflang PL/EN jest kompletny i wzajemny, łącznie z `x-default`. Przetłumaczone slugi `/about` ↔ `/pl/o-mnie` są obsłużone prawidłowo.
- Produkcyjny build uzyskał Lighthouse: **Performance 99 mobile / 100 desktop, SEO 100, Best Practices 100, Accessibility 96**. Mobile LCP 1,9 s, desktop LCP 0,4 s, TBT 0 ms, CLS 0.
- Roboty wyszukiwarek AI są jawnie dozwolone, `llms.txt` jest rozbudowany, a dane `Person`, `WebSite`, `ProfilePage` i projektów są serwowane w HTML.
- Publiczny test dziesięciu CTA wykrył **martwy link do repozytorium Cibaria (`404`)**. Stary adres demo Gamelog działa, ale przekierowuje do `https://gameloggd.vercel.app/`.
- Cztery wersje stron projektowych mają mniej niż 300 słów: SosniakPortfolio EN/PL (231/235) oraz StrefaSA EN/PL (285/278).
- Cztery z siedmiu projektów nie mają screenshotu produktu; LlamaTalks pokazuje zamiast niego diagram pipeline'u. Wszystkie strony używają jednego ogólnego obrazu OG.
- Próbne wyszukiwania marki nie zwróciły `brbn.pl`; pojawiły się za to treści Todrawn przypisane Jakubowi Kuźnickiemu. To sygnał do sprawdzenia w GSC, a nie definitywny dowód braku indeksacji.

## Priorytety według ważności

### Critical

Nie wykryto problemu, który blokuje renderowanie lub indeksację całej witryny.

### High

#### 1. Sprzeczny canonical host na całej witrynie

**Dowód:** `https://brbn.pl/` zwraca `307 Location: https://www.brbn.pl/`, a produkcja na `www` zwraca `200`. Jednocześnie `astro.config.mjs:9`, `src/consts.ts:8`, `public/robots.txt:70`, sitemap, canonical, hreflang, OG i identyfikatory JSON-LD używają hosta bez `www`.

Google traktuje redirect i `rel=canonical` jako silne sygnały, a sitemapę jako sygnał słabszy. Obecna konfiguracja każe algorytmowi rozstrzygać sprzeczność na każdym URL-u. Powoduje też dodatkowy hop dla crawlerów i wszystkich linków z `llms.txt`.

**Naprawa:** wybrać jeden host. Najmniej zmian operacyjnych wymaga uznanie obecnie serwowanego `https://www.brbn.pl` za canonical, ustawienie permanentnego `308` z apexu i aktualizacja jednej konfiguracji oraz statycznych adresów w `robots.txt` i `llms.txt`. Alternatywnie zachować apex w kodzie i odwrócić routing Vercel tak, aby `www` robiło `308` do apexu.

#### 2. Brak danych o rzeczywistej widoczności

Nie ma dostępu do Google Search Console, CrUX ani GA4. Publiczne zapytania próbne z `site:brbn.pl`, `site:www.brbn.pl`, nazwą i handlem nie pokazały portfolio. Operator `site:` nie jest pełnym indeksem, dlatego potrzebna jest weryfikacja GSC.

**Naprawa:** zweryfikować dokładny canonical host w GSC i Bing Webmaster Tools, wysłać właściwą sitemapę, sprawdzić URL Inspection dla home, About, Todrawn, LlamaTalks i MapGenerator oraz monitorować branded impressions.

#### 3. Case studies mają za mało dowodów na rezultat

Struktura `problem → rola → decyzje → rezultat` jest dobra, lecz rezultaty najczęściej brzmią „działający produkt”. Brakuje dat, zakresu odpowiedzialności w liczbach, skali danych/ruchu, opóźnień, czasu generowania, wyników testów, ograniczeń i linków do konkretnych fragmentów kodu. To osłabia rekrutacyjny SXO, E-E-A-T oraz cytowalność przez modele.

**Naprawa:** dla Todrawn, LlamaTalks i MapGenerator dodać 2–4 prawdziwe pomiary lub weryfikowalne fakty, krótki opis kompromisu i sekcję „jak sprawdziłem wynik”. Nie dodawać liczb bez źródła.

### Medium

#### 4. Martwy link do kodu Cibaria

`https://github.com/Brbn-jpg/Cibaria-Recipe-Manager` zwraca `404`, mimo że jest prezentowany jako „View code”. Należy poprawić URL, upublicznić repo albo usunąć CTA i `codeRepository` z JSON-LD.

#### 5. Nierówna jakość stron projektowych

SosniakPortfolio i StrefaSA są cienkie treściowo, a Cibaria ma generyczny opis bez własnego case study. LlamaTalks, Cibaria, SosniakPortfolio i StrefaSA nie pokazują screenshotu produktu. Brak materiału wizualnego obniża zaufanie i ogranicza wejścia z Google Images.

#### 6. Jeden OG image dla wszystkich stron

Layout domyślnie emituje ten sam obraz 1200×630 na home, About i każdy projekt (`src/layouts/layout.astro:49–60`, `207–220`). Strony projektów powinny mieć własne obrazy social z nazwą, produktem i konkretnym rezultatem. Obraz projektu warto też dodać do jego węzła `WebApplication` / `SoftwareSourceCode`.

#### 7. Problemy dostępności wpływające też na agentic browsing

Lighthouse wykrył liczne małe teksty `text-slate-500/600` o kontraście 2,46–4,16:1 oraz niezgodność widocznej nazwy logo `/BRBN.PL` z `aria-label="Go to homepage"`. To daje Accessibility 96. Poprawienie nazw i kontrastu ułatwi zarówno screen readerom, jak i agentom interpretującym ARIA.

#### 8. Obraz MapGenerator i formaty rastrowe

Walidator obrazu dał 81/100: wszystkie trzy grafiki na home są JPG/PNG, a `mapgenerator.png` ma ok. 640 KB. Alt i wymiary są poprawne. Warto generować warianty WebP/AVIF i `srcset`, zachowując raster fallback.

#### 9. Brak widocznej daty i atrybucji na case studies

JSON-LD ma spójnego autora `Person`, lecz na stronach case studies nie ma widocznej daty publikacji/aktualizacji ani krótkiej metodologii weryfikacji. Dodanie dat wyłącznie wtedy, gdy są utrzymywane z danych projektu, wzmocni świeżość i wiarygodność. Obecna decyzja, aby nie generować fałszywego `dateModified` przy każdym buildzie, jest słuszna (`src/layouts/layout.astro:163–167`).

#### 10. Brak podstawowych nagłówków bezpieczeństwa

Produkcja ma HSTS, ale nie wykryto CSP, `X-Content-Type-Options`, `Referrer-Policy` ani ochrony przed framingiem. Nie jest to bezpośredni czynnik rankingowy, lecz wpływa na zaufanie techniczne i odporność strony/formularza.

### Low

- Meta description Todrawn ma 165 znaków w EN i 181 w PL. To nie jest błąd indeksacji, ale Google może częściej przepisywać snippet.
- Bezpośredni URL demo Gamelog powinien wskazywać `https://gameloggd.vercel.app/`, aby usunąć zbędny redirect.
- IndexNow nie jest skonfigurowany. Dla rzadko zmienianego portfolio korzyść będzie mała; ma sens dopiero przy regularnych publikacjach.
- `ProfilePage` jest podtypem `WebPage`, dlatego sugestia walidatora, aby dodawać drugi węzeł `WebPage` na home, została odrzucona jako niepotrzebna. Osobny `Organization` także nie jest wymagany dla osobistego portfolio.

## SEO techniczne

### Co działa

- Wszystkie strony są statyczne i mają treść w pierwszej odpowiedzi HTML.
- 20/20 URL-i z sitemapy odpowiada `200` na serwowanym hoście.
- Brak duplikatów title i description; wszystkie strony indeksowalne mają self-referencing path w canonicalu, jeśli pominąć konflikt hosta.
- 404 ma `noindex, follow`, a strony indeksowalne `index, follow, max-image-preview:large`.
- `robots.txt` zezwala Google i crawlerom AI na treść, blokując katalog `/cv/`.
- Struktura URL-i jest krótka i czytelna. Polskie slugi są poprawnie lokalizowane.
- Sitemap używa prawidłowej przestrzeni nazw XHTML i podaje pełne klastry językowe.

### Ryzyka

- Cały graf canonical/hreflang/sitemap/JSON-LD jest na hoście przeciwnym do redirectu.
- Bez GSC nie da się potwierdzić Google-selected canonical, statusów „Crawled/Discovered — currently not indexed” ani skuteczności hreflang.
- `Disallow: /cv/` nie usuwa PDF-ów z indeksu, jeśli zewnętrzne linki je ujawnią. Jeśli celem jest pewne `noindex`, potrzebny jest `X-Robots-Tag: noindex` na odpowiedziach PDF.
- Bezpośrednia strona `/pl/404` jest generowana jako plik z `noindex`; należy okresowo sprawdzać, czy nieznane ścieżki na Vercel rzeczywiście zwracają HTTP 404.

## On-page i treść

| Kontrola | Wynik |
|---|---|
| Indeksowalne strony | 20 |
| Status 200 na `www` | 20/20 |
| Unikalny title | 20/20 |
| Unikalny description | 20/20 |
| Dokładnie jeden H1 | 20/20 |
| Title > 60 znaków | 0 |
| Description > 160 znaków | 2 |
| Strony < 300 słów | 4 |

Home ma 826 słów, jasną propozycję wartości i widoczne CTA. Sekcje dowodowe, doświadczenie i projekty tworzą dobrą ścieżkę dla rekrutera. Najsilniejsze karty rozróżniają problem, rolę, decyzje i rezultat. Słabsze projekty wracają do opisów funkcji i technologii, dlatego nie powinny konkurować wagą z Todrawn/LlamaTalks/MapGenerator.

Treść jest dwujęzyczna, a nie tylko przetłumaczony chrome. Nie wykryto duplikatów między stronami w tym samym języku. Część zdań ma ponad 20 słów; skrócenie najbardziej złożonych opisów poprawi skanowanie na mobile.

## Schema.org

Home zawiera jeden poprawny blok JSON-LD z typami `Person`, `WebSite`, `ImageObject` i `ProfilePage`. Projekt Todrawn przeszedł walidator skilla z wynikiem 100/100, a pozostałe strony korzystają z tego samego generatora.

Mocne elementy:

- stałe `@id` dla osoby i witryny w obu językach;
- `sameAs` do GitHub i LinkedIn;
- `worksFor`, `hasOccupation`, `knowsAbout`, lokalizacja i wariant nazwiska bez znaków diakrytycznych;
- `mainEntity` strony projektu i `BreadcrumbList`;
- brak wymyślonych ocen, cen i dat.

Ulepszenia:

- po wyborze hosta przepisać wszystkie `@id` na host docelowy;
- dodać `image`/`screenshot` do projektu, gdy istnieje prawdziwy asset;
- dodać `inLanguage` do encji projektu;
- dodać utrzymywane `datePublished` i `dateModified` do case study, jeśli istnieje źródło daty;
- usunąć martwy `codeRepository` Cibaria.

## Wydajność

| Profil | Performance | FCP | LCP | TBT | CLS | Transfer |
|---|---:|---:|---:|---:|---:|---:|
| Mobile, build produkcyjny | 99 | 1,5 s | 1,9 s | 0 ms | 0 | 205 KiB podczas audytu |
| Desktop, build produkcyjny | 100 | 0,3 s | 0,4 s | 0 ms | 0 | 996 KiB podczas audytu |

Różnica transferu wynika z lazy loadingu i różnego viewportu. Dev server osiągnął tylko 69, ale zawierał Vite, React Refresh i Astro Dev Toolbar, więc nie jest reprezentatywny dla wdrożenia. Lighthouse wskazał ok. 33 KiB możliwej redukcji nieużywanego JS w kliencie formularza/React.

To dane laboratoryjne z lokalnego builda. Brak CrUX oznacza brak potwierdzenia p75 LCP/INP/CLS u prawdziwych użytkowników.

## GEO i wyszukiwarki AI

Deterministyczny walidator skilla ocenił home na **55/100**: ChatGPT Search 65, Google AI Overviews 59, Perplexity 59. Ocena ręczna podnosi kategorię do 65 dzięki potwierdzonemu server-rendered HTML, spójnemu grafowi encji i bardzo dobremu `llms.txt`, których walidator nie uwzględnił w pełni.

### Co działa

- `OAI-SearchBot`, `ChatGPT-User`, `PerplexityBot`, Claude i GPTBot są dozwolone; katalog CV jest wyłączony.
- `llms.txt` ma 13 faktów, 12 linków i trzy sekcje. Rozsądnie zaznacza, że sam standard nie gwarantuje efektu.
- Person/Website/Project JSON-LD buduje spójny graf encji.
- Nazwa z diakrytykami, wariant `Jakub Kuznicki` i handle `brbn-jpg` są konsekwentne.
- Case studies używają krótkich, semantycznych bloków „Problem / Role / Decisions / Result”.

### Co ogranicza cytowalność

- Linki w `llms.txt` prowadzą przez redirect hosta.
- Bloki wyników nie zawierają wystarczająco wielu weryfikowalnych danych, dat i ograniczeń.
- Widoczna strona nie podaje autora i daty przy każdym case study, mimo że autor istnieje w JSON-LD.
- Sygnały zewnętrzne są słabe. Próbne wyniki wyszukiwania znalazły strony Todrawn z autorstwem Jakuba, lecz nie portfolio.
- Nie ma pomiaru wejść z ChatGPT/Perplexity ani logów botów. OpenAI dodaje `utm_source=chatgpt.com` do referral URLs, ale portfolio deklaruje brak analytics.

Nie zalecam dodawania sztucznego FAQ ani pytań w nagłówkach tylko po to, by podnieść wynik narzędzia. Lepsze będą samodzielne, 100–160-wyrazowe streszczenia najważniejszych case studies, z wynikiem, metodą sprawdzenia i ograniczeniem.

## Wizualne SEO i SXO

Desktop prowadzi wzrok od konkretnej obietnicy przez trzy dowody, doświadczenie, projekty i kontakt. Mobile zachowuje tę kolejność i nie ma poziomego overflow. CTA „View projects” jest widoczne nad foldem.

Strona jest długa, ale struktura jest czytelna. Największy problem wizualny ma charakter dowodowy: trzy projekty są tekstowymi kartami, a LlamaTalks pokazuje architekturę zamiast interfejsu produktu. Warto również dodać osobny indeks `/projects`, jeśli projekty staną się głównym kanałem wejścia z wyszukiwania; obecny anchor `/#projects` jest wystarczający dla nawigacji, lecz nie tworzy samodzielnej strony docelowej.

Screenshoty audytu:

- `screenshots/home-desktop.png`
- `screenshots/home-mobile.png`
- `screenshots/todrawn-desktop.png`
- `screenshots/about-desktop.png`

## Autorytet i linki

Konfiguracja wykryła dostęp do Moz, Bing i Common Crawl, ale zapytania Moz zakończyły się błędem API 400, Bing nie ma zweryfikowanej witryny, a Common Crawl nie miał lokalnego cache. Z tego powodu raport nie podaje zmyślonych wartości DA ani liczby referring domains.

Najbardziej wartościowym potwierdzonym sygnałem zewnętrznym jest Todrawn: jego About i artykuły identyfikują Jakuba Kuźnickiego jako autora/provider. Należy połączyć ten sygnał z wybranym canonicalem portfolio poprzez widoczny link z profilu autora, GitHub profile README i LinkedIn.

## Metodologia i ograniczenia

Użyte źródła i pomiary:

- pełny crawl sitemapy produkcji oraz lokalnego builda;
- nagłówki HTTP produkcji i ręczna kontrola redirectów;
- Lighthouse mobile/desktop na produkcyjnym buildzie Astro;
- walidatory skilla: technical, content, GEO, image i schema;
- Playwright desktop/mobile po uruchomieniu lazy-loaded assets;
- test dziesięciu kluczowych linków zewnętrznych;
- próbne zapytania brand/site w wyszukiwarce;
- inspekcja kodu `master`.

Brak danych GSC, Bing site data, GA4, CrUX i kompletnego backlink index. Wnioski o widoczności są zatem hipotezami do potwierdzenia, a wyniki Lighthouse są lab data.

## Źródła referencyjne

- [Google: canonicalization](https://developers.google.com/search/docs/crawling-indexing/canonicalization)
- [Google: łączenie sygnałów canonical](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
- [Google: lokalizowane wersje i hreflang](https://developers.google.com/search/docs/advanced/crawling/localized-versions)
- [Google: budowanie sitemapy](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [OpenAI: Publishers and Developers FAQ](https://help.openai.com/en/articles/12627856)
- [Perplexity: crawlers](https://docs.perplexity.ai/docs/resources/perplexity-crawlers)
