# Plan działań SEO/GEO — brbn.pl

Plan jest ułożony według wpływu i zależności. Najpierw porządkuje sygnały indeksacyjne, następnie wzmacnia dowody i cytowalność, a na końcu dodaje optymalizacje wspierające.

## 0–2 dni: indeksacja i wiarygodność linków

### 1. Ujednolicić canonical host

**Rekomendacja:** przyjąć `https://www.brbn.pl`, ponieważ ten host już serwuje `200`, a apex przekierowuje do niego.

Zakres:

- ustawić `site` i `SITE_URL` na `https://www.brbn.pl`;
- zaktualizować wszystkie absolutne URL-e w `robots.txt` i `llms.txt`;
- ustawić permanentny redirect `308` z `brbn.pl` do `www.brbn.pl`;
- przebudować sitemap, canonical, hreflang, OG URL i JSON-LD `@id`;
- nie zmieniać ścieżek ani slugów.

Kryteria akceptacji:

- każdy z 20 URL-i w sitemapie zwraca bezpośrednio `200`;
- canonical każdego dokumentu jest równy finalnemu URL-owi po nawigacji;
- żaden URL canonical/hreflang/JSON-LD/llms nie robi redirectu;
- redirect z alternatywnego hosta jest permanentny i ma jeden hop.

### 2. Naprawić CTA projektów

- poprawić, upublicznić lub usunąć link repo Cibaria zwracający `404`;
- jeśli repo pozostaje prywatne, usunąć `codeRepository` z JSON-LD;
- zmienić demo Gamelog na finalne `https://gameloggd.vercel.app/`.

Kryterium: wszystkie CTA i adresy schema odpowiadają `200` bez niepotrzebnych redirectów.

### 3. Włączyć pomiar widoczności

- zweryfikować property dla wybranego hosta w Google Search Console i Bing Webmaster Tools;
- wysłać finalną sitemapę;
- użyć URL Inspection dla home, About, Todrawn, LlamaTalks i MapGenerator;
- zapisać baseline: indexed pages, impressions, branded queries, clicks, average position;
- po wdrożeniu host fix poprosić o reindeksację pięciu stron priorytetowych.

Kryterium: raport GSC rozróżnia submitted/indexed i pokazuje Google-selected canonical.

## 1 tydzień: trzy strony, które mają sprzedawać kompetencje

### 4. Wzmocnić Todrawn, LlamaTalks i MapGenerator

Dla każdej strony dodać:

- jedno streszczenie 100–160 słów: problem, rozwiązanie, wynik, ograniczenie;
- datę publikacji i aktualizacji z danych projektu;
- 2–4 weryfikowalne fakty, np. mierzony czas, rozmiar mapy/dokumentu, liczba etapów pipeline'u, model wdrożenia;
- jeden konkretny kompromis i przyczynę decyzji;
- „jak sprawdziłem wynik” z linkiem do demo, testu, commita lub dokumentacji;
- screenshot produktu albo diagram architektury z opisowym alt.

Kryterium: każdy wynik daje się sprawdzić i nie opiera się na ogólnym „working product”.

### 5. Zmniejszyć wagę lub rozbudować pozostałe projekty

- dodać prawdziwy case study do Cibaria albo przenieść projekt do krótszej sekcji „Other work”;
- rozbudować SosniakPortfolio i StrefaSA do co najmniej konkretnego problemu, roli, decyzji i wyniku;
- dodać screenshoty dla LlamaTalks, Cibaria, SosniakPortfolio i StrefaSA, jeśli istnieją reprezentatywne widoki.

Nie stosować sztywnego celu liczby słów. Celem jest komplet dowodu, nie długość.

## 1–2 tygodnie: CTR, obrazy i dane strukturalne

### 6. Własne obrazy OG dla projektów

- wygenerować 1200×630 dla siedmiu projektów;
- przekazać obraz i alt do `Layout`;
- dodać `image` lub `screenshot` do encji projektu;
- zachować jeden domyślny OG wyłącznie dla stron ogólnych.

Kryterium: Twitter/OG debugger pokazuje nazwę i obraz właściwego projektu.

### 7. Optymalizacja obrazów

- przetwarzać JPG/PNG przez Astro Image albo `<picture>`;
- przygotować WebP/AVIF dla MapGenerator i screenshotów;
- utrzymać width/height, lazy loading na kartach i eager tylko dla obrazu LCP na stronie projektu;
- celować w <200 KB dla typowego screenshotu bez widocznej utraty jakości.

### 8. Rozszerzyć schema o fakty utrzymywane w danych

- `inLanguage` dla projektów;
- `image`/`screenshot` po dodaniu assetów;
- `datePublished` i `dateModified` wyłącznie z jawnych pól danych;
- zachować wspólne `@id` projektu dla obu wersji językowych;
- po zmianach walidować home i wszystkie siedem projektów.

## 2 tygodnie: dostępność i zaufanie techniczne

### 9. Naprawić kontrast i accessible name

- podnieść kontrast tekstów `text-slate-500/600`, zwłaszcza przy rozmiarach 9–12 px;
- zmienić nazwę dostępną logo tak, aby zawierała widoczne `/BRBN.PL`, np. `aria-label="BRBN.PL — home"`;
- ponownie uruchomić Lighthouse mobile i desktop.

Kryterium: brak błędów `color-contrast` i `label-content-name-mismatch`, Accessibility 100.

### 10. Dodać nagłówki bezpieczeństwa

Na Vercel ustawić co najmniej:

- `Content-Security-Policy` dopasowane do Formspree i zasobów strony;
- `X-Content-Type-Options: nosniff`;
- `Referrer-Policy: strict-origin-when-cross-origin`;
- ochronę przed framingiem przez `frame-ancestors 'none'` w CSP.

Kryterium: nagłówki występują na HTML i nie blokują formularza ani obrazów.

## 2–4 tygodnie: autorytet marki i GEO

### 11. Połączyć istniejące sygnały encji

- dodać link do finalnego canonical portfolio z Todrawn About/autora;
- upewnić się, że GitHub profile README i LinkedIn używają tej samej nazwy, handle, roli i URL-u;
- linkować z README projektów do odpowiadających case studies;
- zachować `sameAs` tylko dla prawdziwych profili osobistych.

### 12. Monitorować AI referrals i boty

- w logach Vercel obserwować OAI-SearchBot, PerplexityBot i ClaudeBot;
- jeśli polityka prywatności pozwoli na analytics, raportować wejścia z `utm_source=chatgpt.com`;
- co miesiąc testować 5 zapytań: imię i nazwisko, handle, „Java RAG developer Warsaw”, LlamaTalks oraz MapGenerator;
- aktualizować `llms.txt` razem z projektami i hostem.

## KPI po 30 i 90 dniach

| KPI | 30 dni | 90 dni |
|---|---:|---:|
| URL-e z poprawnym canonicalem | 20/20 | 20/20 |
| URL-e indeksowane wg GSC | baseline + trend | ≥90% zgłoszonych |
| Branded impressions | ustalić baseline | trend wzrostowy |
| Priorytetowe case studies z dowodami | 3/3 | 3/3 utrzymywane |
| Martwe CTA | 0 | 0 |
| Lighthouse Performance mobile | ≥95 | ≥95 |
| Lighthouse Accessibility | 100 | 100 |
| Projektowe OG images | 7/7 | 7/7 |
| Zewnętrzne profile linkujące do canonicala | ≥2 | ≥3 |

## Kolejność wdrożenia

1. Host i redirect.
2. GSC/Bing oraz reindeksacja.
3. Martwe linki.
4. Trzy główne case studies.
5. Screenshoty i OG/schema images.
6. Kontrast i nagłówki bezpieczeństwa.
7. Sygnały zewnętrzne i monitoring GEO.

