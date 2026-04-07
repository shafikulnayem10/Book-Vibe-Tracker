# 📚 Book Vibe Tracker
> A modern **Book Discovery & Tracking** web app built with React and Tailwind CSS that helps readers explore books, track their reading progress, and manage their personal reading wishlist.

---

## 🔗 Live Demo
👉 https://book-vibe-tracker.netlify.app/

---

## 🎯 Project Goal
The goal of this project was to build a polished book tracking platform that:
- Helps readers discover and explore a curated collection of books in one place
- Provides a seamless experience for managing read lists and wishlists
- Visualizes reading progress with an interactive pages chart
- Delivers a fast, responsive, and accessible UI across all devices

This project demonstrates how a modern **reading tracker app** can be built using **component-based frontend architecture** with persistent local storage.

---

## ✨ Key Features
- 📖 Browse a curated catalog of 9 classic and popular books
- 🔍 View detailed book info including review, publisher, and year
- ✅ Mark books as **Read** with real-time state updates
- 💛 Add books to a personal **Wishlist**
- 📊 Visualize total pages of read books in an interactive **Area Chart**
- 💾 Persistent storage — read list and wishlist survive page refresh
- 🔔 Live toast notifications via React Toastify
- 🛒 Direct **Buy Now** link to purchase books on Amazon
- 📱 Fully responsive across all devices

---

## 🧠 How It Works (Technical Breakdown)
- Built with **React** using a clean component-based architecture
- Used **Vite** for lightning-fast development and optimized builds
- Styled with **Tailwind CSS** utility classes for rapid UI development
- Integrated **DaisyUI** components for accessible, pre-built UI elements
- Managed **global state** with React Context API shared across all pages
- Used **localStorage** to persist read list and wishlist between sessions
- Used **React Router** for client-side navigation with dynamic book detail routes
- Visualized reading data with **Recharts** Area Chart on the Pages to Read page
- Used **React Toastify** for non-intrusive user feedback on all book actions

---

## ⚙️ Tech Stack (With Justification)
| Technology | Why It Was Used |
|---|---|
| React | Component-based UI for scalable and reusable structure |
| Vite | Fast development build tool with optimized HMR |
| Tailwind CSS | Utility-first styling for rapid and consistent UI |
| DaisyUI | Pre-built accessible components to speed up development |
| React Router | Client-side routing with dynamic route params for book details |
| React Context API | Global state management for read list and wishlist |
| localStorage | Persistent data storage between page refreshes |
| Recharts | Lightweight and composable charting library for reading stats |
| React Toastify | Lightweight toast notifications for user feedback |

---

## 🧩 Problem-Solving Highlights
- 📖 **Dynamic Book Details:** Used React Router loader to fetch book data and match by `bookId` param
- 💾 **Persistent State:** Synced read list and wishlist with localStorage so data is never lost on refresh
- 📊 **Reading Visualization:** Built an area chart that dynamically renders based on the user's read list
- 🔔 **Smart Notifications:** Prevented duplicate entries and showed clear toast feedback on every action
- 🛡️ **Context Provider:** Wrapped the entire layout with `BookProvider` so all pages share the same state
- 📱 **Responsive Design:** Ensured consistent layout across mobile, tablet, and desktop

---

## 📈 Impact & Results
- 📚 Delivered a smooth and intuitive book tracking experience
- ⚡ Achieved fast load times with Vite's optimized build pipeline
- 🎨 Built a visually consistent and professional book discovery UI
- 🧱 Established a scalable structure ready for backend and authentication integration
- 💾 Zero data loss between sessions with localStorage persistence

---
