# Gadgets Selling Platform

This repository contains the source code for a **Gadgets Selling Platform**, a project designed to help you learn full-stack development for mobile and web applications. The platform is built using **React Native**, **Supabase**, **Stripe**, and **Next.js**, and it includes a mobile app for shoppers and an admin panel for managing products, orders, and payments.

## 🚀 Features

- **Mobile App**: A shopper-friendly app for browsing gadgets, adding items to the cart, and placing orders.
- **Admin Panel**: A web-based dashboard for managing categories, products, orders, and payments.
- **Authentication**: User authentication using Supabase.
- **Payments**: Secure payment integration with Stripe.
- **Push Notifications**: Real-time notifications for admins and users.
- **Deployment**: The admin panel is deployed using Vercel.

---

## 🛠 Tech Stack

### **Frontend**

- **React Native**: Mobile app development with Expo Router and Zustand for state management.
- **Next.js**: Admin panel development with server-side rendering and API routes.

### **Backend**

- **Supabase**: Backend-as-a-service for database, authentication, and storage.
- **Stripe**: Payment processing and subscriptions.

### **Other Tools**

- **React Query**: Data fetching and caching.
- **EAS**: Expo Application Services for building and deploying the mobile app.

---

## 📂 Project Structure

```plaintext
root/
├── admin/               # Next.js Admin Panel
├── mobile/              # React Native Mobile App
└── shared/              # Shared utilities and constants
```

## 🚀 Getting Started

**Prerequisites**

- Node.js and npm installed
- Expo CLI installed globally
  - steps can be found here: https://docs.expo.dev/router/installation/
- Supabase account setup
- Stripe account setup

**Installation**

1. Clone the repository

```
git clone https://github.com/dmschrein/react-native-shop.git
cd react-native-shop
```

2. Install dependencies

```
npm install
```

3. Start expo

```
npx expo start -c
```

4. Set up Supabase and Stripe accounts
5. Configure environment variables
6. Run the mobile app using Expo CLI

```
npm start
```

7. Run the admin panel using Next.js

## 🔑 Environment Variables

Set up the following environment variables in .env files for both the mobile app and the admin panel:

Mobile App (mobile/.env)
SUPABASE_URL=your-supabase-url
SUPABASE_ANON_KEY=your-supabase-anon-key
STRIPE_PUBLIC_KEY=your-stripe-public-key

## 🛠️ Commands

Mobile App
• Install dependencies: npm install
• Start Expo server: npm start
• Build for iOS/Android: eas build

Admin Panel
• Install dependencies: npm install
• Start development server: npm run dev
• Build for production: npm run build

## 📦 Deployment

Mobile App

Build and publish the app using EAS:
