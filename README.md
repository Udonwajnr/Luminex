# Luminex Luxury Mobility Experience 🏎️

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![React](https://img.shields.io/badge/React-19-61DAFB.svg?style=flat&logo=react&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC.svg?style=flat&logo=tailwind-css&logoColor=white)
![License](https://img.shields.io/badge/License-Commercial-green.svg)

A visually stunning, high-performance landing page for a futuristic luxury electric vehicle brand. Built with React, TypeScript, and Tailwind CSS, featuring advanced 3D visualizations via Three.js and complex animations with Framer Motion.

---

## ✨ Key Features

### 🏎️ **Immersive Hero Section**
*   **Parallax Scrolling:** Multi-layered depth effects combining background video, floating 3D vehicle elements, and foreground content.
*   **Dynamic Interaction:** Mouse-responsive movement and smooth scroll transformations using `framer-motion`.

### 🌐 **3D Model Showcase**
*   **Interactive Viewer:** Integrated **Three.js** viewer allowing users to inspect vehicle models in a 3D space.
*   **Live Telemetry:** Simulated real-time data visualization for specific models (Battery, Range, Motor Temp) using animated charts.
*   **Smart Filtering:** Sort and filter vehicles by category, price, and features.

### ⚙️ **Advanced Technology HUD**
*   **Holographic Visualization:** A "Digital Soul" section featuring a rotating, glowing holographic core that reacts to user selection.
*   **Interactive Hotspots:** Explore vehicle systems (Neural Core, Solid State Battery, etc.) with futuristic UI feedback.

### 🎨 **Vehicle Configurator**
*   **Real-time Pricing:** Select colors, interiors, and performance packages with instant price updates.
*   **Visual Feedback:** Dynamic image updates based on configuration choices.

### 💎 **Premium UI/UX**
*   **Glassmorphism:** Extensive use of backdrop filters and semi-transparent layers for a modern, luxury feel.
*   **Responsive Design:** Fully optimized experience from mobile devices to large desktop screens.
*   **Lazy Loading:** Performance-optimized component loading for heavy assets.

---

## 🛠️ Tech Stack

*   **Framework:** [React 19](https://react.dev/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Animations:** [Framer Motion](https://www.framer.com/motion/)
*   **3D Graphics:** [Three.js](https://threejs.org/)
*   **Icons:** [Lucide React](https://lucide.dev/)

---

## 🚀 Getting Started

### Prerequisites
*   Node.js (v16 or higher)
*   npm or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/your-username/luminex-mobility.git
    cd luminex-mobility
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the application**
    ```bash
    npm start
    ```

---

## 📁 Project Structure

```bash
luminex-mobility/
├── components/          # UI Components
│   ├── Hero.tsx         # Parallax landing section
│   ├── ModelShowcase.tsx # 3D viewer and list
│   ├── Technology.tsx   # Holographic tech visualization
│   ├── PricingReveal.tsx # Configurator logic
│   ├── Header.tsx       # Adaptive navigation
│   └── ...
├── App.tsx              # Main layout and lazy loading
├── index.tsx            # Entry point
└── tailwind.config.js   # Style configuration
```

---

## 📄 License

This project is distributed under the **RocketTemplateKit Commercial License**.

**You are allowed to:**
✅ Use in unlimited personal/client projects.
✅ Modify and customize.

**You are NOT allowed to:**
❌ Resell or redistribute as a template.
❌ Open source the code without attribution.

See [LICENSE](./LICENSE) for full details.

---

<div align="center">
  <p>Built with ❤️ by RocketTemplateKit</p>
  <p><a href="https://rockettemplatekit.com">rockettemplatekit.com</a></p>
</div>