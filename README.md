### 🎵 My Favorite Music – Web Player
Welcome to My Favorite Music, a personal web project that plays five of my favorite songs in a simple, visually themed music player. This project combines HTML, CSS, and JavaScript to create an immersive experience with custom styling and interactive controls.

---

## 🎶 Featured Songs
Kokomo, IN – Japanese Breakfast

A Lots Gonna Change – Weyes Blood

Hello Again – Liana Flores

Men In Bars - Japanese Breakfast

Shilo - Weyes Blood

Each song comes with its own visual theme, including background images and color schemes.

--- 

## 📸 Screenshots
<img width="2962" height="1686" alt="image" src="https://github.com/user-attachments/assets/12b178d1-eec2-45f6-8966-0616f4077d81" />
<img width="2966" height="1692" alt="image" src="https://github.com/user-attachments/assets/ffbdbe6e-18df-4725-b0c1-b9e0f5bd1950" />
<img width="2968" height="1690" alt="image" src="https://github.com/user-attachments/assets/56fdb0ad-b6d8-4da8-bebd-8389aeec94c0" />
<img width="3000" height="1720" alt="image" src="https://github.com/user-attachments/assets/74838656-6418-4061-ac94-2d1c1889cdfe" />
<img width="3000" height="1720" alt="image" src="https://github.com/user-attachments/assets/7de8e567-105c-4579-aa1b-91d9bc9a423d" />

---

## 🚀 Features
🎧 Custom audio player with play/pause, forward, and backward controls

🎨 Song-specific visuals and color palettes

📜 Scrollable seek bar for audio playback progress

🔄 Doubly circular linked list for intuitive song navigation

📱 Responsive layout and embedded fonts/icons via CDN

--- 

## 📱 Responsive Design – @media Query
This project includes responsive design for screens smaller than 1249px using CSS @media queries. Elements like the title, song range slider, buttons, and the "Now Playing" box adjust in size and position to better fit smaller screens.

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
|
├── Liana Flores/
│   ├── LF_Main.jpg
│   ├── LF_Background.jpg
│   └── Hello again.mp3
|
├── Japanese Breakfast 2/
│   ├── Men in Bars 4.mp3
│   ├── MIB_Background.png
│   ├── MIB_Main.jpg
|
├── Weyes Blood 2/
│   ├── GAF_Background.jpg
│   ├── GAF_Main.jpg
│   ├── Shilo.mp3


```

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



