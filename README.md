### 🎵 My Favorite Music – Web Player
Welcome to My Favorite Music, a personal web project that plays three of my favorite songs in a simple, visually themed music player. This project combines HTML, CSS, and JavaScript to create an immersive experience with custom styling and interactive controls.

---

## 🎶 Featured Songs
Kokomo, IN – Japanese Breakfast

A Lots Gonna Change – Weyes Blood

Hello Again – Liana Flores

Each song comes with its own visual theme, including background images and color schemes.

--- 

## 📸 Screenshots
<img width="2962" height="1686" alt="image" src="https://github.com/user-attachments/assets/12b178d1-eec2-45f6-8966-0616f4077d81" />
<img width="2966" height="1692" alt="image" src="https://github.com/user-attachments/assets/ffbdbe6e-18df-4725-b0c1-b9e0f5bd1950" />
<img width="2968" height="1690" alt="image" src="https://github.com/user-attachments/assets/56fdb0ad-b6d8-4da8-bebd-8389aeec94c0" />

---

## 🚀 Features
🎧 Custom audio player with play/pause, forward, and backward controls

🎨 Song-specific visuals and color palettes

📜 Scrollable seek bar for audio playback progress

🔄 Doubly circular linked list for intuitive song navigation

📱 Responsive layout and embedded fonts/icons via CDN

--- 

## 🛠️ Tech Stack
HTML5 for structure

CSS3 for styling

JavaScript (Vanilla) for interactivity and logic

Font Awesome for control icons

Google Fonts and Custom Fonts for aesthetic typography

---

## 📁 Folder Structure

```
project-root/
│
├── index.html
├── style.css
├── script.js
│
├── Japanese Breakfast/
│   ├── JB_Main.jpg
│   ├── JB_Background1.png
│   └── Kokomo,IN.mp3
│
├── Weyes Blood/
│   ├── WB_Main.jpg
│   ├── WB_Background.jpg
│   └── A Lot's Gonna Change 4.mp3
│
├── Liana Flores/
│   ├── LF_Main.jpg
│   ├── LF_Background.jpg
│   └── Hello again.mp3

--- 

## 🧠 How It Works
A circular doubly linked list holds song titles in order.

Clicking the ⏪ or ⏩ buttons updates the headPointer and calls changeSong().

changeSong() swaps images, background styles, and audio sources dynamically based on the current node.

The audio player syncs with a range slider to show and control playback progress.

Hover and click effects provide visual feedback on controls.

--- 

## 📝 Notes
The music player is currently set to not autoplay on page load.

Only one <audio> element is used for playback; its src is updated as the user switches songs.

--- 



