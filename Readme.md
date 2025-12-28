# 📘 Wyprawa 1907

Wyprawa1907 - autorska wersja strony z hasłami, stworzona jako alternatywa dla oryginalnej witryny, która obecnie jest niedostępna. Projekt ma na celu umożliwienie kontynuacji rozwiązywania zagadek z książki Dziennik 29, mimo braku dostępu do oficjalnego źródła.

Hasła i podpowiedzi zostały pobrane z archiwalnej strony internetowej. Klucze zostały uzupełnione na podstawie wcześniej zapisanych odpowiedzi użytkowników, co nie daje 100% gwarancji poprawności danych.

**⚠️ Zagadek nr 51,92,143 nie da się rozwiązać bez oryginalnej strony internetowej**

## ✨ Funkcje

- 🎮 **4 zestawy zagadek:** Wyprawa 1907 (Zakazane Kopalnie), Dziennik 29 (Przebudzenie, Wersja Pierwsza, Zapomnienie)
- 🔄 **Przełączanie między zestawami:** Wybierz edycję książki z menu rozwijanego w nagłówku
- 🔍 **System podpowiedzi i rozwiązań:** Moduły z potwierdzeniem przed wyświetleniem spoilerów
- 📍 **Nawigacja:** Paginacja, przejście do konkretnej strony, linki w URL
- ⌨️ **Obsługa klawiatury:** Naciśnij Enter aby sprawdzić odpowiedź
- 🎨 **Interfejs:** Vintage design z teksturą papieru
- 📱 **Responsywny:** Działa na wszystkich urządzeniach

## 🌐 Interaktywna strona internetowa

👉 [`https://mateusz-spychala.github.io/wyprawa1907/`](https://mateusz-spychala.github.io/wyprawa1907/)

---

## 🔄 Przełączanie między zestawami zagadek

Aplikacja obsługuje 4 różne zestawy zagadek. Wybierz zestaw z menu rozwijanego w nagłówku lub użyj bezpośredniego linku:

- **Wyprawa 1907 - Zakazane Kopalnie:**  
  `https://mateusz-spychala.github.io/wyprawa1907/#/wyprawa1907_ZakazaneKopalnie/0`

- **Dziennik 29 - Przebudzenie:**  
  `https://mateusz-spychala.github.io/wyprawa1907/#/dziennik29_Przebudzenie/0`

- **Dziennik 29 - Wersja Pierwsza:**  
  `https://mateusz-spychala.github.io/wyprawa1907/#/dziennik29_WersjaPierwsza/0`

- **Dziennik 29 - Zapomnienie:**  
  `https://mateusz-spychala.github.io/wyprawa1907/#/dziennik29_Zapomnienie/0`

Każdy zestaw ma niezależną numerację stron. Nawigacja i postęp są zapisywane oddzielnie dla każdego zestawu.

---

## 🔍 Dostęp do ukrytych stron zagadek

Aby zobaczyć dodatkowe strony związane z zagadkami (np. `/notatki`, `/rozpadlina`), możesz użyć jednego z formatów:

-   `https://mateusz-spychala.github.io/wyprawa1907/#{klucz}`
-   `https://mateusz-spychala.github.io/wyprawa1907/#/{klucz}`

Dla stron specyficznych dla zestawu, użyj pełnego formatu:

-   `https://mateusz-spychala.github.io/wyprawa1907/#/{zestaw}/{klucz}`

### 🧪 Przykłady

Strony uniwersalne (działają ze wszystkimi zestawami):
- `https://mateusz-spychala.github.io/wyprawa1907/#/notatki`
- `https://mateusz-spychala.github.io/wyprawa1907/#/rozpadlina`

Strony specyficzne dla zestawu:
- `https://mateusz-spychala.github.io/wyprawa1907/#/wyprawa1907_ZakazaneKopalnie/RAZ`
- `https://mateusz-spychala.github.io/wyprawa1907/#/dziennik29_Przebudzenie/50`

---

## 📖 Dziennik 29 - Przebudzenie, Wersja Pierwsza & Zapomnienie

Na stronie Webarchive nie zachowały się żadne strony dotyczące tych książek, dlatego klucze i odpowiedzi zostały pobrane z udostępnionych plików.

**🚫 Od pytania 64 nie są już dostępne podpowiedzi.**

Część kluczy i odpowiedzi musiała została zmieniona, jednak ich oryginalny sposób rozwiązywania pozostał bez zmian. Podane linki przekierowują na anglojęzyczną stronę, ale zagadki multimedialne są uniwersalne, chociaż odpowiedzi niestety nie zawsze.

🔗 Przykładowe zagadki:

-   124: [Cloud](https://www.journal29.com/cave/)
-   128: [Stones](https://www.journal29.com/stones/)
-   132: [Silence](https://www.journal29.com/silence/)
-   138: [Cave](https://www.journal29.com/cave/)
-   154: [Apparatus](https://www.journal29.com/apparatus/)
-   153: [Lights On](https://www.journal29.com/lightson/)
-   155: [Dial](https://www.journal29.com/dial/)
-   157: [Watch](https://www.journal29.com/watch/)
-   159: [Undergo](https://www.journal29.com/undergo/)

---

## 🛠️ Rozwój lokalny

### Wymagania

- Node.js (wersja 18+)
- npm

### Instalacja

```bash
git clone https://github.com/mateusz-spychala/wyprawa1907.git
cd wyprawa1907
npm install
```

### Dostępne komendy

```bash
npm run dev          # Uruchom serwer deweloperski
npm run build        # Zbuduj wersję produkcyjną
npm run preview      # Podgląd buildu produkcyjnego
npm run deploy       # Wdróż na GitHub Pages
```

### Stack technologiczny

- **Frontend:** React 19.1 + TypeScript 5.8
- **Build Tool:** Vite 7.1
- **Routing:** React Router DOM 7.8 (HashRouter)
- **State Management:** Zustand 5.0 z Immer
- **Styling:** SCSS/Sass
- **Deployment:** GitHub Pages
