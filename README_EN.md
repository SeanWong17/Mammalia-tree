<div align="center">
  <img src="assets/logo.png" alt="DeepTime Mammalia Logo" width="120" height="120">
  <h1>DeepTime Mammalia</h1>
  <h3>Interactive Phylogenetic Tree of Mammals · Immersive Experience</h3>

  <p>
    <b>From the embers of Synapsids to the flourishing Cenozoic.</b><br>
    A 200-million-year epic of life, flowing at your fingertips.
  </p>

  <p>
    <a href="README.md">中文</a> | <b>English</b>
  </p>

  <p>
    <a href="https://mammalia-tree.pages.dev/">
      <img src="https://img.shields.io/badge/Live_Demo-Try_it_now-c5a059?style=for-the-badge&logo=safari" alt="Live Demo">
    </a>
  </p>

  <p>
    <img src="https://img.shields.io/badge/license-CC%20BY--NC--SA%204.0-lightgrey?style=flat-square" alt="License">
    <img src="https://img.shields.io/badge/Three.js-r128-black?style=flat-square&logo=three.js" alt="Three.js">
    <img src="https://img.shields.io/badge/D3.js-v7-orange?style=flat-square&logo=d3.js" alt="D3.js">
  </p>
</div>

---

## 📖 Introduction

**DeepTime Mammalia** is an interactive data visualization project running in modern browsers. Unlike dry textbook charts, this project leverages WebGL and CSS3D technologies to reconstruct our perception of "Deep Time" and evolution.

Based on the latest **Mammal Diversity Database (MDD) v2.3**, it presents the complex evolutionary branches—from the Synapsid ancestors of the late Permian to modern mammals (167 families, over a thousand nodes)—through a 3D double-helix gallery and a dynamic phylogenetic tree.

> **🌟 Highlight:** This project contains not only scientific data but also a hidden "Easter Egg" mode about our ancestors, waiting for you to discover.

## ✨ Features

### 🌌 Immersive 3D Prologue
- **DNA Helix Gallery**: Built with `Three.js (CSS3DRenderer)`, symbolizing the genetic code of life.
- **Dynamic Starfield**: A WebGL particle system that flows with mouse and touch interactions, creating a sense of profound time.
- **Cinematic Transitions**: Smooth camera movements seamlessly transition from the micro view (cards) to the macro view (phylogenetic tree).

### 🌿 Interactive Phylogeny
- **Dynamic D3.js Tree**: High-performance rendering supporting the expansion/collapse of branches from "Class" down to "Family" level.
- **Full Gesture Support**: Smooth mouse wheel zooming, pinch-to-zoom, and drag panning. Optimized for mobile devices.
- **Geological Timeline**: An integrated dynamic ruler at the bottom displays the geological epoch corresponding to the current viewport (MYA - Million Years Ago).
- **Smart Search**: Supports real-time search and highlighting by Latin scientific names or Chinese names.

### 🥚 The Origin Easter Egg
- A hidden mode paying tribute to the resilience of life.
- Find and click the "Origin" (溯源) button to reveal a ghostly wireframe path crossing the great extinctions—the path we walked as the last survivors of the Synapsids.

## 📸 Screenshots

| 3D Helix Gallery | Tree Overview |
|:---:|:---:|
| <img src="examples/gallery.png" alt="Gallery View" width="100%"> | <img src="examples/tree.png" alt="Tree View" width="100%"> |

| Specimen Card | Origin Easter Egg (Ghost View) |
|:---:|:---:|
| <img src="examples/card.png" alt="Detail Card" width="100%"> | <img src="examples/egg.png" alt="Easter Egg View" width="100%"> |

## 🛠️ Tech Stack

This project is built with **Vanilla JavaScript (ES6+)** with no complex build tool dependencies, keeping the code pure and lightweight.

* **Core**: HTML5, CSS3, JavaScript
* **Visualization**: [D3.js](https://d3js.org/) (v7) - Handles complex tree data structures and layout calculations.
* **3D Engine**: [Three.js](https://threejs.org/) (r128) - Handles WebGL particle backgrounds and CSS3D transformations.
* **Animation**: [Tween.js](https://github.com/tweenjs/tween.js/) - Handles smooth interpolation animations.
* **Fonts**: Noto Serif SC & Playfair Display (via Google Fonts).

## 📂 Structure

The project maintains a flat file structure for easy learning. All data and image resources are preloaded via JS variables, requiring **no backend environment**.

```text
Mammalia-tree-main/
├── index.html       # Entry point (HTML/CSS/Shader)
├── main.js          # Core logic (Three.js scene + D3.js tree + Interactions)
├── data.js          # Phylogenetic topology data (JSON Object)
├── images_data.js   # Image resources (Base64 encoded)
└── README.md        # Chinese Documentation
```

## 🚀 How to Run

Thanks to its zero-dependency and embedded data design, this project is extremely portable:

1.  **Download**: Clone or download the repository.
2.  **Run**: Simply double-click `index.html` to run smoothly in your browser.
3.  **Note**: No Node.js installation required, no local server configuration needed (though recommended to avoid potential local CORS strictness in some browsers).

## 🤝 Credits & Disclaimer

The birth of this project relied on collaboration between the open-source community and AI technology:

* **Data Basis**: Taxonomy based on **Mammal Diversity Database (MDD) v2.3** and **Paleobiology Database**.
* **AI Assistance**: Core code logic and Shader optimization assisted by **Google Gemini**.
* **AI Image Generation**: Specimen restoration images generated by the AI model **nanobanana**.
    * *Note: AI-generated images are intended for artistic visual reference and may contain anatomical inaccuracies. Please do not use them for rigorous academic citations.*

## 📄 License

This work is licensed under a [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License (CC BY-NC-SA 4.0)](http://creativecommons.org/licenses/by-nc-sa/4.0/).

* ✅ You are free to share and adapt this project.
* ❌ Commercial use is prohibited.
* 📝 Please attribute the original author: **Sean Wong**.

---

<div align="center">
  <sub>Designed with ❤️ by Sean Wong</sub>
</div>