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
<img width="2998" height="1718" alt="image" src="https://github.com/user-attachments/assets/bdb05c63-06ac-4d19-a78b-a951abd99518" />
<img width="3000" height="1720" alt="image" src="https://github.com/user-attachments/assets/c1fc06ca-6037-4ea1-aec2-a7e9a4454ff9" />
<img width="3000" height="1720" alt="image" src="https://github.com/user-attachments/assets/b521cdfd-0bb7-4297-91c2-ca7ed4ea7c30" />
<img width="3000" height="1718" alt="image" src="https://github.com/user-attachments/assets/901eb93a-d204-4683-8aaa-1bba2efb5d97" />
<img width="3000" height="1722" alt="image" src="https://github.com/user-attachments/assets/554f8fed-4a08-4d03-a219-2a33d19939be" />

---

## 🚀 Features
🎧 Custom audio player with play/pause, forward, and backward controls

🎨 Song-specific visuals and color palettes

📜 Scrollable seek bar for audio playback progress

🔄 Doubly circular linked list for intuitive song navigation

📱 Responsive layout and embedded fonts/icons via CDN

🎶 Includes a repeat button that allows users to play the song on loop

--- 

## 📱 Responsive Design – @media Query
This project includes responsive design for screens smaller than 1249px using CSS @media queries. Elements like the title, song range slider, buttons, and the "Now Playing" box adjust in size and position to better fit smaller screens.

# Smaller Screen Screenshots: 
<img width="1700" height="1722" alt="image" src="https://github.com/user-attachments/assets/b7cb862c-e974-4d46-8313-af32f9687548" />
<img width="1694" height="1726" alt="image" src="https://github.com/user-attachments/assets/48a94488-2ead-454e-ac81-c723bc91ad85" />
<img width="1700" height="1718" alt="image" src="https://github.com/user-attachments/assets/7e9e7242-e3c5-4092-a7e7-1aecefbb6219" />
<img width="1700" height="1720" alt="image" src="https://github.com/user-attachments/assets/e9741d39-2f51-4013-95a7-38f6814b876e" />
<img width="1688" height="1722" alt="image" src="https://github.com/user-attachments/assets/018b5ba5-e070-4755-8e7e-f7a650b0897e" />

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



