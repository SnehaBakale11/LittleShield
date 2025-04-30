Little Shield – A Child Safety Wearable System
Objective
To develop a wearable device that ensures child safety through real-time GPS tracking, geofencing alerts, and SOS emergency communication using WiFi, GSM, and GPS technologies.
(Website URL : https://littleshield.netlify.app/)

System Components :
1. Hardware
ESP32 (30-pin) – Central controller with WiFi support
Neo-6 GPS Module – Provides live location data
SIM800L GSM Module – Sends SMS alerts if WiFi is unavailable
LiPo Battery – Powers the device
SOS Button/Buzzer – For emergency alerts by child or parent

2. Connectivity
WiFi – Primary communication method with Firebase
Includes captive portal for setting WiFi credentials
GSM – Fallback communication method using SMS

3. Cloud Integration
Firebase Realtime Database
Stores live GPS data and SOS alert status
URL: https://little-shield-49ee9-default-rtdb.firebaseio.com

Software Stack :
ESP32 Programming: Arduino IDE / PlatformIO
Backend (Planned): Flask API, Google Geolocation API
Frontend (Planned): Mobile/web app for viewing location, alerts, and geofence settings

Key Features :
Real-time GPS tracking
Geofencing with alert notifications
SOS button for emergencies
WiFi + GSM dual communication
Captive portal for network setup
Firebase integration for live data
