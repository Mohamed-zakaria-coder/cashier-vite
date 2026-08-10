# ⚡ StorePulse — Modern POS & Retail Analytics Platform

![React](https://img.shields.io/badge/React-19.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-7.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Chart.js](https://img.shields.io/badge/Chart.js-5.3-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white)

**StorePulse** is a modern, dark-themed Point of Sale (POS) and retail management platform built with React 19 and Vite. Designed for speed and visual clarity, it combines order management, inventory tracking, peak-hour customer insights, and financial analytics into one sleek application.

---

## ✨ Features

### 🛒 1. Point of Sale & Order Counter
* **Interactive Catalog**: Search and filter items by category in real-time.
* **Customization Modal**: Options for item sizing, extra toppings/add-ons, and quantities.
* **Live Order Cart**: Real-time receipt calculation, item removal, and tax/discount calculations.
* **Instant Checkout**: One-click order placement with immediate receipt generation.

### 📦 2. Inventory & Stock Management
* **Live Stock Tracking**: Monitor product stock levels, categories, and pricing.
* **Low Stock Alerts**: Visual indicators for items nearing depletion.
* **Catalog Control**: Manage menu offerings directly from the inventory dashboard.

### ⏱️ 3. Peak Hours & Traffic Analytics
* **Hourly Insights**: Identify high-traffic hours to optimize staffing and prep work.
* **Order Volume Distribution**: Visualize customer rush trends throughout the business day.

### 📊 4. Financial Statistics & Sales History
* **Interactive Charts**: Powered by `Chart.js` for revenue and sales trend visualization.
* **Complete Receipt History**: Chronological log of past transactions with itemized detail cards.
* **Executive Dashboard**: Top metrics including total revenue, order count, top sellers, and average order value.

### 🎨 5. Premium Dark Mode UI
* **Glassmorphism Styling**: Sleek semi-transparent dark panels.
* **Fully Responsive**: Optimized for desktop monitors, tablets, and POS terminals.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **React 19** | Modern component framework |
| **Vite 7** | Lightning-fast development & build tool |
| **Tailwind CSS v4** | Modern utility-first styling system |
| **Chart.js / react-chartjs-2** | High-performance interactive data charts |
| **React Router v7** | Single Page Application routing |
| **React Icons** | Clean UI icons |


```

## 📁 Project Structure

```
store-pulse/
├── src/
│   ├── assets/              # Static media assets
│   ├── components/
│   │   ├── Nav.jsx          # Navigation sidebar & branding
│   │   ├── Pizza.jsx        # Product catalog card
│   │   ├── Modal.jsx        # Product customization dialog
│   │   ├── OrderMenu.jsx    # Live order item row
│   │   └── ShowOrderMenu.jsx# Cart summary sidebar
│   ├── screens/
│   │   ├── Home.jsx         # Main POS counter & ordering
│   │   ├── Inventory.jsx    # Stock management dashboard
│   │   ├── PeakHours.jsx    # Traffic & hourly analytics
│   │   ├── Sales.jsx        # Transaction history log
│   │   ├── Statistics.jsx   # Financial analytics charts
│   │   └── Dashboard.jsx    # Business KPI overview
│   ├── Data.jsx             # Mock data store (products, sales, stats)
│   ├── App.jsx              # Main app wrapper & router
│   └── main.jsx             # Entry point
├── index.html               # Page template
├── vite.config.js           # Vite & deployment configuration
└── package.json             # Dependencies & scripts
```

---
