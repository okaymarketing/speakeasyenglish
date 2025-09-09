# Instrukcja konfiguracji GitHub Pages

## 1. Utwórz repozytorium na GitHub

1. Przejdź do [GitHub.com](https://github.com) i zaloguj się
2. Kliknij przycisk "New repository" (zielony przycisk)
3. Wypełnij formularz:
   - **Repository name**: `speakeasyenglish`
   - **Description**: `SpeakEasy English - Szkoła Językowa Zakopane`
   - **Visibility**: Public (wymagane dla GitHub Pages)
   - **Initialize**: NIE zaznaczaj żadnych opcji (README, .gitignore, license)
4. Kliknij "Create repository"

## 2. Połącz lokalne repozytorium z GitHub

W terminalu wykonaj następujące komendy:

```bash
# Dodaj remote origin (zastąp YOUR_USERNAME swoją nazwą użytkownika)
git remote add origin https://github.com/YOUR_USERNAME/speakeasyenglish.git

# Ustaw główną gałąź na main
git branch -M main

# Wyślij kod na GitHub
git push -u origin main
```

## 3. Skonfiguruj GitHub Pages

1. Przejdź do swojego repozytorium na GitHub
2. Kliknij zakładkę "Settings" (na górze strony)
3. Przewiń w dół do sekcji "Pages" (w lewym menu)
4. W sekcji "Source" wybierz:
   - **Source**: Deploy from a branch
   - **Branch**: main
   - **Folder**: / (root)
5. Kliknij "Save"

## 4. Sprawdź status wdrożenia

1. Wróć do zakładki "Settings" → "Pages"
2. Sprawdź czy widzisz zielony znaczek "✓ Your site is live at..."
3. Twój adres będzie: `https://YOUR_USERNAME.github.io/speakeasyenglish`

## 5. Aktualizuj README.md

Po utworzeniu repozytorium zaktualizuj link w README.md:

```markdown
## 🌐 Demo

Strona dostępna na GitHub Pages: [https://YOUR_USERNAME.github.io/speakeasyenglish](https://YOUR_USERNAME.github.io/speakeasyenglish)
```

## 6. Automatyczne wdrożenia

GitHub Pages automatycznie wdroży stronę za każdym razem gdy:
- Wypchniesz zmiany do gałęzi `main`
- Wykonasz `git push origin main`

## 7. Sprawdzenie działania

Po wdrożeniu (może potrwać kilka minut):
1. Otwórz `https://YOUR_USERNAME.github.io/speakeasyenglish`
2. Sprawdź czy strona ładuje się poprawnie
3. Przetestuj responsywność na różnych urządzeniach

## Troubleshooting

### Problem: Strona nie ładuje się
- Sprawdź czy wszystkie pliki zostały wypchnięte
- Upewnij się że `index.html` jest w głównym katalogu
- Sprawdź logi w zakładce "Actions" w repozytorium

### Problem: Obrazy nie ładują się
- Sprawdź czy ścieżki do obrazów są względne (zaczynają się od `/`)
- Upewnij się że wszystkie pliki w folderze `Resources/` zostały dodane

### Problem: CSS nie działa
- Sprawdź czy pliki CSS są w folderze `Style/`
- Upewnij się że ścieżki w HTML są poprawne
