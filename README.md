# 👶🛡️ Little Shield – A Child Safety Wearable System

**Live Site:** [https://littleshield.netlify.app/](https://littleshield.netlify.app/)

---

## 🎯 Objective

To develop a wearable IoT device that ensures **child safety** using:
- Real-time GPS tracking
- Geofencing alerts
- Emergency SOS communication  
All powered by **WiFi**, **GSM**, and **GPS** technologies.

---

## 🧩 System Components

### 📟 Hardware
- **ESP32 (30-pin)** – Microcontroller with built-in WiFi
- **Neo-6 GPS Module** – Provides real-time location coordinates
- **SIM800L GSM Module** – Sends SMS alerts when WiFi is unavailable
- **LiPo Battery** – Portable power supply
- **SOS Button/Buzzer** – Emergency alert system triggered by child or parent

---

## 🌐 Connectivity

- **WiFi**
  - Primary method for sending data to Firebase
  - Includes a **captive portal** for setting SSID and password dynamically  
- **GSM (SIM800L)**
  - Fallback method for sending alerts via SMS when WiFi is offline

---

## ☁️ Cloud Integration

- **Firebase Realtime Database**  
  Used to:
  - Store live GPS coordinates
  - Track SOS alert status

**Firebase DB URL:**  
🔗 [https://little-shield-49ee9-default-rtdb.firebaseio.com](https://little-shield-49ee9-default-rtdb.firebaseio.com)

---

## 🧠 Software Stack

- **ESP32 Programming:**  
  - [Arduino IDE](https://www.arduino.cc/en/software) / [PlatformIO](https://platformio.org/)
- **Backend (Planned):**  
  - Flask API  
  - Google Geolocation API for WiFi-based accuracy
- **Frontend (Planned):**  
  - Mobile/Web App  
  - Features: location tracking, alert display, geofence configuration

---

## 🔑 Key Features

✅ Real-time GPS tracking  
🚧 Geofencing with alert notifications  
🚨 SOS button for instant emergency signals  
📶 WiFi + GSM dual communication  
🌐 Captive portal for WiFi credentials  
🔥 Firebase Realtime DB integration  

---

## 📸 Preview (Add screenshots or diagrams if available)

_You can add system architecture diagrams, PCB layout, or screenshots of the mobile/web app here._

---

## 👨‍💻 Developed By

**Dhruv Dhemare**  
- [GitHub](https://github.com/dhruv-dhemare)  
- [LinkedIn](https://www.linkedin.com/in/dhruv-dhemare-43378728a/)  
- [LeetCode](https://leetcode.com/u/dhruv_dhemare/)

---

## 📄 License

This project is licensed under the **MIT License** – feel free to use, adapt, or contribute.

---

🛡️ *Little Shield: Because every child deserves to feel safe.*
