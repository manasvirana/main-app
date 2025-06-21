# 🎼 Main App – Micro Frontend Host

This is the **Main Application** that integrates the `music-library` micro frontend using **Module Federation** (via Vite). It includes authentication, role-based access control, and renders the music library dynamically.

---
## 🚀 Deployed Main App

🔗 [Live Main Application](https://main-app-lime.vercel.app/)

This container app loads the Music Library micro frontend dynamically using Module Federation and displays role-based access with authentication.


## 🧩 What It Does

- ✅ Dynamically loads the **Music Library** micro frontend
- 🔐 Provides simple **login for two roles**:
  - **Admin**: can add/delete songs
  - **User**: can only view/search/filter
- 🗃️ Uses **localStorage** for JWT-style in-memory token simulation
- 🎨 Clean dark-themed UI with **dusty pink accents**

---

## 🔐 Roles

| Role   | Password    | Permissions             |
|--------|-------------|--------------------------|
| admin  | `adminpass` | Can add and delete songs |
| user   | `userpass`  | Can only view/filter     |

---

## 🚀 Tech Stack

| Tool / Library     | Use                              |
|--------------------|-----------------------------------|
| React + Vite       | App framework and dev server      |
| Module Federation  | Dynamic import of micro frontend  |
| localStorage       | In-memory JWT token simulation    |
| JavaScript (ES6+)  | Auth & UI logic                   |

---

## 📂 Folder Structure

```

main-app/
├── public/
├── src/
│   ├── App.jsx
│   └── main.jsx
    └── index.css

├── .env.development
├── .env.production
├── index.html
├── vite.config.js
├── package.json
└── README.md

````

---

## 🧪 Running Locally

1. **Clone both apps** (`main-app` and `music-library`)
2. In `main-app`, configure `.env.development`:

```env
VITE_REMOTE_ENTRY=http://localhost:4174/assets/remoteEntry.js
````

3. Run the app:

```bash
npm install
npm run dev
```

Visit: `http://localhost:5173`

---


## 🖼️ Screenshots
![image](https://github.com/user-attachments/assets/03e10cf9-0946-4c22-a7f9-a265f233e3b2)
![image](https://github.com/user-attachments/assets/dcde7906-3500-44f7-a03c-3129634ac3fb)
![image](https://github.com/user-attachments/assets/2ff371d7-d6ae-427a-bf57-fc0e62b06fd8)

---

## 🧠 Notes

* 🎯 Micro frontend is dynamically loaded using `lazy()` and `Suspense`
* 💡 UI is styled with inline styles (dark theme + pink accents)
* 🛡️ Role logic and auth are fully client-side using `localStorage`

---


