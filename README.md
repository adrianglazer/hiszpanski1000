# Hiszpanski1000 - Aplikacja do nauki hiszpańskiego

## Opis projektu

Aplikacja webowa do nauki 1000 najczęściej używanych słów w języku hiszpańskim. Aplikacja jest zoptymalizowana pod iPhone 13 i działa w przeglądarce bez potrzeby instalacji.

## Status projektu

**UKOŃCZONY W 100%** - Wszystkie 1000 słów zostało dodane do aplikacji.

## Struktura plików

```
hiszpanski1000/
├── index.html          - Główna struktura HTML aplikacji
├── styles.css          - Stylowanie CSS (mobile-first, iPhone 13)
├── script.js           - Logika aplikacji + baza 1000 słów
├── slowa.txt           - Plik źródłowy ze słowami (format: ID\tspanish\tenglish)
└── README.md           - Ten plik
```

## Technologie

- **HTML5** - struktura aplikacji
- **CSS3** - stylowanie (Flexbox, Grid, animacje, gradienty)
- **Vanilla JavaScript** - logika bez zewnętrznych bibliotek
- **localStorage** - trwałe przechowywanie postępów

## Funkcjonalności

### 1. Ekran powitalny
- Wyświetlany tylko przy pierwszej wizycie
- Flaga "appStarted" w localStorage
- Przycisk "Rozpocznij naukę" uruchamia aplikację

### 2. Tryb fiszek
- Wyświetlanie pojedynczych słów z tłumaczeniem
- Słowo hiszpańskie z formami gramatycznymi
- Polskie tłumaczenie
- Opis gramatyczny po polsku
- 3 przykładowe zdania z tłumaczeniem
- Nawigacja: "Poprzednie słowo" / "Następne słowo"
- Przycisk "Pamiętam" (szary → zielony po kliknięciu)
- Licznik postępu (X/1000)

### 3. System zapamiętywania
- Przycisk "Pamiętam" zmienia kolor na zielony
- Stan zapisywany w localStorage
- Odznaczone słowa nadal zapamiętane między sesjami

### 4. Tryb quizu
- Dostępny po zapamiętaniu min. 4 słów
- Losowe pytanie ze zapamiętanych słów
- 4 odpowiedzi do wyboru
- Wynik: X/Y poprawnych odpowiedzi
- Przycisk "Powrót do fiszek"

### 5. Automatyczne zapisywanie postępu
- **localStorage** przechowuje:
  - `currentWordIndex` - numer aktualnego słowa
  - `memorizedWords` - Set z ID zapamiętanych słów
  - `appStarted` - czy aplikacja była już uruchomiona
- Przy ponownym otwarciu aplikacji użytkownik kontynuuje od ostatniego słowa

## Struktura danych w script.js

### Format pojedynczego słowa:

```javascript
{
    id: 1,
    spanish: "el",
    polish: "on, to (przedimek)",
    description: "Przedimek określony rodzaju męskiego",
    examples: [
        { spanish: "El niño juega.", polish: "Chłopiec bawi się." },
        { spanish: "El gato es negro.", polish: "Kot jest czarny." },
        { spanish: "El libro está aquí.", polish: "Książka jest tutaj." }
    ]
}
```

### Zakres słów:
- **Słowa 1-1000**: Wszystkie słowa zostały dodane
- Każde słowo zawiera pełną strukturę (spanish, polish, description, examples)
- 3 przykładowe zdania z tłumaczeniami dla każdego słowa

## Design i UI

### Kolory:
- Gradient tła: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
- Białe karty z cieniem
- Przyciski: Niebieskie (#667eea), Zielone (#48bb78), Czerwone (#f56565)
- Szary (#718096) dla nieaktywnych stanów

### Layout:
- **Mobile-first**: Zoptymalizowane pod iPhone 13
- **100vh** wysokość - bez scrollowania
- Flexbox dla centrowania
- Grid dla przycisków nawigacji
- Responsywny design

### Animacje:
- `fadeIn` - pojawienie się ekranu
- `fadeInDown` - animacja z góry
- `slideUp` - wysuwanie z dołu
- `pulse` - pulsowanie przycisku
- Transitions na hover (transform, background-color)

## Kluczowe funkcje JavaScript

### loadProgress()
```javascript
function loadProgress() {
    const saved = localStorage.getItem('spanishProgress');
    if (saved) {
        const data = JSON.parse(saved);
        currentWordIndex = data.currentWordIndex || 0;
        memorizedWords = new Set(data.memorizedWords || []);
    }
}
```

### saveProgress()
```javascript
function saveProgress() {
    const data = {
        currentWordIndex: currentWordIndex,
        memorizedWords: Array.from(memorizedWords)
    };
    localStorage.setItem('spanishProgress', JSON.stringify(data));
}
```

### showWord(index)
- Wyświetla słowo o danym indeksie
- Aktualizuje UI (słowo, tłumaczenie, przykłady)
- Ustawia stan przycisku "Pamiętam"
- Aktualizuje licznik postępu

### toggleMemorized()
- Dodaje/usuwa słowo z Set memorizedWords
- Zmienia kolor przycisku
- Zapisuje postęp

### startQuiz()
- Sprawdza czy min. 4 słowa zapamiętane
- Generuje pytania z zapamiętanych słów
- Losuje 4 odpowiedzi (1 poprawna + 3 losowe)

## Historia zmian

### Faza 1 (Słowa 1-400)
- Stworzenie podstawowej struktury HTML/CSS/JS
- Dodanie słów 1-400
- Implementacja ekranu powitalnego
- Implementacja systemu fiszek

### Faza 2 (Słowa 401-700)
- Dodanie słów 401-500
- Dodanie słów 501-600
- Dodanie słów 601-700
- Potwierdzenie że funkcja localStorage działa poprawnie

### Faza 3 (Słowa 701-1000)
- Dodanie słów 701-800
- Dodanie słów 801-900
- Dodanie słów 901-1000
- **Projekt ukończony**

## Naprawione błędy

1. **Przycisk "Powrót do fiszek" nie działał**
   - Problem: Użycie inline onclick
   - Rozwiązanie: Event listeners w JavaScript

2. **Ekran powitalny źle wyświetlany**
   - Problem: position: absolute
   - Rozwiązanie: position: fixed

3. **Niechciana pionowa linia na hover**
   - Problem: outline na focus
   - Rozwiązanie: outline: none

## Uruchomienie aplikacji

1. Otwórz `index.html` w przeglądarce
2. Aplikacja działa lokalnie, bez serwera
3. Na pierwszym uruchomieniu pojawi się ekran powitalny
4. Postęp zapisuje się automatycznie w localStorage

## Dane źródłowe

Plik **slowa.txt** zawiera 1000 linii w formacie:
```
ID    spanish_word    english_translation
```

Przykład:
```
1     el              the
2     de              of
3     que             that
...
1000  continente      continent
```

## Możliwe rozszerzenia (opcjonalne)

- Dodanie trybu "trudnych słów" dla słów często błędnie odpowiadanych w quizie
- Export postępu do pliku JSON
- Statystyki nauki (ile słów dziennie, wykres postępu)
- Tryb powtórek oparty na algorytmie spaced repetition
- Wersja z głosem (text-to-speech dla wymowy)
- Dodanie więcej języków (angielski, niemiecki)

## Notatki techniczne

- **Brak scrollowania**: Cała aplikacja mieści się na jednym ekranie (100vh)
- **Brak zależności**: Wszystko w vanilla JS, bez bibliotek
- **Offline-ready**: Działa bez internetu po pierwszym załadowaniu
- **localStorage limit**: ~5MB (wystarczające dla tego projektu)

## Kontynuacja pracy

Aby kontynuować pracę nad projektem:

1. Otwórz folder `hiszpanski1000/`
2. Wszystkie 1000 słów jest już w `script.js`
3. Aplikacja jest w pełni funkcjonalna
4. Możesz testować otwierając `index.html` w przeglądarce
5. Wszelkie zmiany edytuj w odpowiednich plikach (HTML/CSS/JS)

## Autor

Projekt stworzony z pomocą Claude Code.

## Licencja

Projekt edukacyjny - wolne użycie.
