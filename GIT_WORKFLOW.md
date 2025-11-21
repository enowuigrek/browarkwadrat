# 🔧 Git Workflow - Browar Kwadrat

## 📋 Podstawowe komendy Git

### Sprawdzanie stanu
```bash
git status                    # Zobacz co się zmieniło
git branch                    # Na jakim branchu jesteś
git log --oneline -5          # Ostatnie 5 commitów
```

### Pobieranie zmian
```bash
git fetch origin              # Pobierz info o zmianach (bez mergowania)
git pull origin <branch>      # Pobierz i zmerguj zmiany z brancha
```

### Zapisywanie zmian
```bash
git add -A                    # Dodaj wszystkie zmiany
git commit -m "wiadomość"     # Commitnij zmiany
git push                      # Wypchnij na GitHub
```

### Przełączanie branchów
```bash
git checkout <branch>         # Przełącz się na branch
git checkout main             # Wróć na main
```

### Tymczasowe schowanie zmian
```bash
git stash                     # Schowaj lokalne zmiany
git stash pop                 # Przywróć schowane zmiany
```

---

## 🤖 Workflow: Ty + Claude

### 1️⃣ **Claude robi zmiany**
Claude edytuje pliki → commituje → pushuje do brancha:
```
Branch: claude/initial-project-setup-01S1Xrd4iMNZV49S9F5ZR4sR
```

### 2️⃣ **Ty pobierasz zmiany Claude'a**

**Jeśli NIE masz lokalnych zmian:**
```bash
# Pobierz najnowsze zmiany z brancha Claude'a
git pull origin claude/initial-project-setup-01S1Xrd4iMNZV49S9F5ZR4sR

# Zrestartuj dev server
# (Ctrl+C w terminalu, potem:)
npm run dev
```

**Jeśli MASZ lokalne zmiany (uncommitted):**
```bash
# 1. Schowaj swoje zmiany tymczasowo
git stash

# 2. Pobierz zmiany Claude'a
git pull origin claude/initial-project-setup-01S1Xrd4iMNZV49S9F5ZR4sR

# 3. (Opcjonalnie) Przywróć swoje zmiany
git stash pop

# 4. Zrestartuj dev
npm run dev
```

### 3️⃣ **Hard refresh w przeglądarce**
Po każdym `git pull`:
- **Mac:** `Cmd + Shift + R`
- **Windows:** `Ctrl + Shift + R`
- **Lub:** Tryb incognito

---

## 🚀 Wrzucenie na produkcję (browarkwadrat.pl)

Gdy Ci się spodoba to co Claude zrobił:

```bash
# 1. Przełącz się na main
git checkout main

# 2. Zmerguj branch Claude'a
git merge claude/initial-project-setup-01S1Xrd4iMNZV49S9F5ZR4sR

# 3. Wypchnij na produkcję
git push origin main
```

☁️ **Netlify automatycznie zdeployuje na browarkwadrat.pl**

---

## 🆘 Ratowanie gdy coś się zepsuje

### Git lock files
```bash
# Jeśli widzisz: "Unable to create .lock file"
rm .git/refs/remotes/origin/main.lock
rm .git/refs/heads/main.lock
```

### Konflikt przy checkout
```bash
# Schowaj zmiany i spróbuj ponownie
git stash
git checkout <branch>
```

### Wycofanie zmian
```bash
# Wycofaj wszystkie lokalne zmiany (OSTROŻNIE!)
git reset --hard HEAD

# Wycofaj ostatni commit (zachowaj pliki)
git reset --soft HEAD~1
```

---

## 📚 Przydatne
- Branch Claude'a: `claude/initial-project-setup-01S1Xrd4iMNZV49S9F5ZR4sR`
- Branch produkcyjny: `main`
- Dev server: `npm run dev` (localhost:5173)
- Build: `npm run build`

---

💡 **Pro tip:** W WebStorm możesz włączyć auto-update z gita:
`VCS` → `Git` → `Fetch` → Auto-fetch every X minutes
