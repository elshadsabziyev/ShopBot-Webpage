# 🖥️ Automated Order Fulfillment System - Frontend

## 📋 Table of Contents

- [🚀 Introduction](#-introduction)
- [🎨 Frontend Overview](#-frontend-overview)
- [🛠️ Technologies Used](#%EF%B8%8F-technologies-used)
- [⚡ Features](#-features)
- [🔧 Configuration](#-configuration)
- [🚀 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)
- [📝 License](#-license)

## 🚀 Introduction

Welcome to the frontend section of the Automated Order Fulfillment System. This part encompasses the user-facing interface allowing users to place orders and manage the order pickup process.

## 🎨 Frontend Overview

The frontend is a web-based interface developed using modern web technologies. It facilitates user interaction by allowing users to place orders, associate items with RFID codes, and receive pickup confirmations.

## 🛠️ Technologies Used

The frontend utilizes the following technologies:

- **React**: JavaScript library for building user interfaces.
- **Next.js**: React framework for server-rendered applications.
- **HTML/CSS/JavaScript**: Core web technologies for structure, styling, and interactivity.
- **Vercel**: Deployment platform for hosting the frontend application.
- **Prisma DB**: ORM for TypeScript and JavaScript, enabling type-safe database access.
- **PlanetScale**: Scalable relational database system built on MySQL.

## ⚡ Features

The frontend provides the following key features:

- **Order Placement**: Allows users to place orders through a user-friendly interface.
- **RFID Association**: Associates each item within an order with a unique RFID code.
- **Order Pickup Confirmation**: Provides confirmation and pickup details for users after order completion.

## 🔧 Configuration

To configure the frontend:

1. **Install Prisma CLI**: Run `npm install prisma -g` to install the Prisma CLI globally.
2. **Setup Prisma Configuration**: Create a `prisma/schema.prisma` file and define your data model for PlanetScale.
3. **Database Connection**: Define the connection to your PlanetScale database in `prisma/schema.prisma`.
4. **Generate Prisma Client**: Run `npx prisma generate` to generate the Prisma Client.
5. **Environment Variables**: Define environment variables for the frontend to connect with Prisma and PlanetScale.

## 🚀 Deployment

For deployment:

1. **Deployment Setup on Vercel**:
   - Create an account on Vercel.
   - Connect your GitHub repository to Vercel.
   - Define environment variables related to Prisma and PlanetScale in Vercel's settings.

2. **Deploy Frontend Application**:
   - Trigger a deployment in Vercel after setting up configurations.

## 🤝 Contributing

Contributions to improve UI/UX or add new frontend features are welcome! To contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature`
3. Make changes and commit: `git commit -m 'Add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Submit a pull request.

## 📝 License

This project is licensed under the [GNU GPLv3 License](LICENSE).
