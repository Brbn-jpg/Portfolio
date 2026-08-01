import type { PrivacyDict } from "../en/privacy";

/**
 * Typed against English: a missing key is a build error, never a silent fallback.
 *
 * RODO terminology used deliberately: "administrator" (not "kontroler"),
 * "podstawa prawna", "prawnie uzasadniony interes", "sprzeciw" (art. 21 — NOT
 * "wycofanie zgody", since the basis is legitimate interest, not consent),
 * "Prezes Urzędu Ochrony Danych Osobowych". Articles cited as
 * "art. 6 ust. 1 lit. f RODO", not the English "art. 6(1)(f)".
 *
 * TODO_VERIFY_FORMSPREE_DPA and TODO_VERIFY_VERCEL_LOG_RETENTION are kept as
 * literal, untranslated markers (same as the English side) — they flag
 * unverified legal claims and must stay visible until resolved.
 *
 * ` ` (non-breaking space) after single-letter Polish words (w, i, z, o, a)
 * in headings and short lines.
 */
const privacy: PrivacyDict = {
  backToHome: "Powrót do strony głównej",

  header: {
    title: "Polityka prywatności",
    lastUpdatedLabel: "Ostatnia aktualizacja:",
  },

  tldr: {
    body: "Ta strona nie ustawia żadnych ciasteczek. Nie ma tu analityki, pikseli śledzących ani fingerprintingu. Jeśli nie korzystasz z formularza kontaktowego, nie dowiaduję się o Tobie niczego poza tym, co mój dostawca hostingu zapisuje w swoim logu dostępu. Jeśli z niego skorzystasz, otrzymuję Twój adres e-mail i treść wiadomości — i nic więcej.",
  },

  controller: {
    articleRef: "// art. 13 ust. 1 lit. a RODO",
    introPrefix: "Administratorem danych osobowych zbieranych przez tę stronę jest",
    introMiddle: ", z siedzibą w Warszawie, w Polsce. W sprawach dotyczących tej polityki lub Twoich danych napisz na",
    introSuffix: ".",
    noDpo: "Nie wyznaczono Inspektora Ochrony Danych (IOD). Nic, co robi ta strona, nie wymaga tego na mocy art. 37 RODO — nie ma tu przetwarzania w sektorze publicznym, wielkoskalowego systematycznego monitorowania ani wielkoskalowego przetwarzania danych szczególnych kategorii.",
  },

  whatIsCollected: {
    articleRef: "// art. 13 ust. 1 lit. c RODO",
    ifNoForm: "Jeśli nigdy nie skorzystasz z formularza kontaktowego, nie zbieram tu żadnych danych osobowych poza tym, co domyślnie zapisuje każdy serwer WWW: Twój adres IP, żądaną stronę, znacznik czasu i user agent, zapisywane w logach dostępu Vercel Inc.",
    ifForm: "Jeśli wypełnisz formularz kontaktowy, dodatkowo otrzymuję to, co w nim wpiszesz: adres e-mail (żebym mógł odpowiedzieć) i treść wiadomości. To cały formularz — nie ma pola na imię, numeru telefonu ani konta. Formspree, który obsługuje wysyłkę, automatycznie zapisuje też adres IP nadawcy, znacznik czasu i user agenta w celu ochrony przed spamem.",
  },

  why: {
    articleRef: "// art. 13 ust. 1 lit. c RODO",
    reasons: {
      reply: "Aby odpowiedzieć na Twoją wiadomość.",
      spamFilter: "Aby wykrywać i filtrować spam lub nadużycia.",
      security: "Aby utrzymywać infrastrukturę strony w bezpieczeństwie i sprawności (standardowe logi hostingowe).",
    },
  },

  legalBasis: {
    articleRef: "// art. 13 ust. 1 lit. c RODO",
    basisF: "Art. 6 ust. 1 lit. f RODO — prawnie uzasadniony interes w odpowiadaniu na kierowaną do mnie korespondencję, zapobieganiu spamowi i utrzymaniu bezpieczeństwa strony.",
    basisB: "Art. 6 ust. 1 lit. b RODO — gdy Twoja wiadomość dotyczy potencjalnej współpracy lub zlecenia, przetwarzanie jest niezbędne do podjęcia działań na Twoje żądanie przed zawarciem umowy.",
    noConsent: "Zwróć uwagę, czego na tej liście nie ma: zgody. Nikt nie zaznacza checkboxa, żeby wysłać ten formularz, i żadna zgoda nie jest potrzebna — zobacz sekcję YOUR_RIGHTS poniżej, co to oznacza dla Ciebie w praktyce.",
  },

  whoElseSeesIt: {
    articleRef: "// art. 13 ust. 1 lit. e RODO",
    processors: {
      formspree: {
        name: "Formspree Inc.",
        description: "(USA) — odbiera i przekazuje zgłoszenia z formularza kontaktowego.",
      },
      google: {
        name: "Google LLC / Gmail",
        description: "(USA) — moja skrzynka to adres gmail.com, więc Formspree dostarcza tam Twoją wiadomość.",
      },
      vercel: {
        name: "Vercel Inc.",
        description: "(USA) — hostuje tę stronę i jej logi dostępu.",
      },
    },
    noBroker: "Żaden broker danych, sieć reklamowa ani dostawca analityki niczego tu nie widzi, bo żaden z nich nie jest używany na tej stronie.",
  },

  transfersOutsideEea: {
    articleRef: "// art. 13 ust. 1 lit. f RODO",
    intro: "Wszyscy trzej wymienieni wyżej procesorzy to firmy z USA, więc dane opisane w tej polityce opuszczają EOG. Art. 46 RODO wymaga w takim przypadku odpowiedniego zabezpieczenia — zwykle standardowych klauzul umownych (SCC) i/lub certyfikacji w ramach EU-US Data Privacy Framework.",
    todoText: "— konkretny mechanizm, na którym opiera się aktualny Data Processing Addendum Formspree, nie został jeszcze zweryfikowany. Ten akapit musi wskazywać faktyczny mechanizm i linkować do opublikowanego DPA Formspree, zanim ta strona zostanie uznana za ostateczną. To samo otwarte pytanie dotyczy aktualnych umów Google i Vercel — należy je potwierdzić w tym samym czasie, a nie zakładać.",
  },

  howLong: {
    articleRef: "// art. 13 ust. 2 lit. a RODO",
    formMessages: "Wiadomości z formularza kontaktowego: przechowywane do 12 miesięcy, a następnie usuwane. Gdy wątek zostaje zamknięty i odpowiedziany, usuwam zgłoszenie z panelu Formspree, zamiast czekać na upływ pełnych 12 miesięcy.",
    logsIntro: "Logi dostępu serwera (Vercel):",
    todoText: "— rzeczywisty okres przechowywania logów hostingowych/dostępu Vercel dla tego planu nie został potwierdzony i musi zostać sprawdzony oraz podany tutaj przed publikacją.",
  },

  yourRights: {
    articleRef: "// art. 13 ust. 2 lit. b, d RODO",
    listedRights: "Na mocy RODO możesz zażądać ode mnie: dostępu do danych, które o Tobie przechowuję (art. 15 RODO), ich sprostowania (art. 16 RODO), usunięcia (art. 17 RODO), ograniczenia przetwarzania (art. 18 RODO) lub przekazania ich kopii w formie przenośnej (art. 20 RODO).",
    objectionBefore: "Przetwarzanie opiera się tutaj na prawnie uzasadnionym interesie, a nie na zgodzie, więc zastosowanie ma",
    objectionBold: "sprzeciw z art. 21 RODO",
    objectionAfter: '— a nie „wycofanie zgody", bo żadna nie została udzielona. Jeśli zgłosisz sprzeciw, przestaję przetwarzać dane, chyba że wykażę istnienie ważnych, prawnie uzasadnionych podstaw nadrzędnych wobec Twoich praw — a przy zwykłym wątku mailowym zwykle takich podstaw nie mam.',
    contactBeforeEmail: "Napisz na",
    contactAfterEmail: "w sprawie dowolnego z powyższych praw. Możesz też złożyć skargę do polskiego organu nadzorczego: Prezes Urzędu Ochrony Danych Osobowych, ul. Stawki 2, 00-193 Warszawa —",
  },

  voluntary: {
    articleRef: "// art. 13 ust. 2 lit. e RODO",
    body: "Korzystanie z formularza kontaktowego jest całkowicie dobrowolne. Nic na tej stronie tego nie wymaga — nie ma konta, newslettera ani treści zablokowanych za formularzem. Jeśli go nie wyślesz, żadne z opisanych wyżej danych związanych z formularzem nigdy nie powstają.",
  },

  noAutomatedDecisions: {
    articleRef: "// art. 13 ust. 2 lit. f RODO",
    body: "Wobec niczego, co do mnie wysyłasz, nie zachodzi profilowanie ani zautomatyzowane podejmowanie decyzji w rozumieniu art. 22 RODO. Każdą wiadomość czyta i odpowiada na nią człowiek — ja.",
  },

  cookiesAndLocalStorage: {
    articleRef: "// ePrivacy",
    cookies: "Ciasteczka: żadne, ani własne, ani stron trzecich. Dlatego nie ma tu bannera cookie — nie ma na co wyrażać zgody.",
    storageBeforeLocal: "Local storage: również żaden. Strona nie zapisuje niczego w",
    storageBetween: "ani",
    storageAfter: ". Między wczytaniami strony w Twojej przeglądarce nie jest przechowywane nic na Twój temat.",
  },

  thirdPartyRequests: {
    articleRef: "// art. 13 ust. 1 lit. e RODO",
    noRequests: "Wczytanie dowolnej strony w tej witrynie nie wysyła żadnych żądań do jakiejkolwiek strony trzeciej. Fonty, obrazy, style i skrypty są serwowane wyłącznie z tej domeny — nic nie jest pobierane z Google Fonts ani żadnego innego CDN-u.",
    githubBuildTime: "Lista ostatnich commitów na stronie głównej jest pobierana z API GitHuba podczas budowania strony, a nie podczas Twojej wizyty. Twoja przeglądarka nigdy nie kontaktuje się z GitHubem, więc Twój adres IP nigdy do niego nie trafia.",
    formOnly: "Jedynym wyjątkiem jest wysłanie formularza kontaktowego, które przekazuje Twój adres e-mail i wiadomość do Formspree Inc., jak opisano wyżej. Poza tym: żadnego beacona analitycznego, żadnego piksela reklamowego, żaden skrypt strony trzeciej nie działa na tej stronie.",
  },

  externalLinks: {
    body: "Ta strona linkuje do GitHuba, LinkedIn oraz do działających wersji niektórych moich projektów. Po kliknięciu jesteś już na cudzej stronie, rządzonej ich polityką prywatności, nie tą. Nie mam wpływu na to, co tam jest zbierane.",
  },

  changes: {
    body: "Mogę zaktualizować tę politykę w miarę zmian na stronie lub u jej procesorów — najprawdopodobniej, gdy jeden z punktów na liście kontrolnej na górze tego pliku zostanie rozwiązany. Data na górze tej strony to moment ostatniej zmiany; wróć tu, jeśli chcesz się upewnić.",
  },
};

export default privacy;
