# React Todo — Props, State ve Component Mantığını Öğrenme Projesi

Bu repo, React’te component, props ve state kavramlarını pratik ederek öğrenmek için hazırlanmış basit bir Todo uygulamasıdır. Uygulama; yeni görev ekleme, görevleri listeleme, tamamlandı olarak işaretleme ve silme işlemlerini gösterir. Odak “wow” bir ürün çıkarmak değil, temel React veri akışını doğru kurmaktır.

## ✨ Özellikler

Yeni görev ekleme (Enter veya buton ile)

Görevleri listeleme

Görevi tamamlandı olarak işaretleme (checkbox)

Görevi silme

Basit, anlaşılır stil dosyası (CSS)

## 🧠 Öğrenme Hedefleri

State’i en yakın ortak üst bileşende (App) tutmak

Çocuk bileşenlerden callback (props) ile yukarı veri göndermek

Controlled input mantığı (input değeri state ile yönetilir)

Basit stillerle arayüzü düzenlemek

## Dosya Yapısı
Aslında dosya yapısı my-react projemi termianlde açıp 
npx create-react-app my-react
şeklinde oluşturmuştum. Ama değişiklik yaptığım dosyalar yukarda yüklü olanlar. Dediğim gibi tamamen react mantığında geldiğim yere kadar anlayabilmek için uğraştığım bir proje oldu.
'''
src/
├─ App.js               # Kök component: state ve iş mantığı burada
├─ App.css              # Genel stiller
└─ components/
   ├─ todo.jsx          # Yeni görev ekleme alanı (input + buton)
   ├─ todolist.jsx      # Görevleri listeleyen component
   └─ todo1.jsx         # Tek bir görev satırı (checkbox + sil)
   '''

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


