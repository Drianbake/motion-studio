# Motion Studio 🎬

![Motion Studio Banner](https://placehold.co/1200x400/1a1a1a/ffffff?text=Motion%20Studio)

> A web-based, real-time motion capture tool for 3D character animation using just a webcam. Built with React, Three.js, and MediaPipe.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Pull Requests welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](.github/PULL_REQUEST_TEMPLATE.md)

---

## ✨ Features

- **Real-time Motion Capture:** Animate 3D models live using your webcam.
- **Video File Processing:** Upload pre-recorded videos to generate animations.
- **Custom Model Support:** Import your own rigged 3D characters in `.glb` and `.gltf` formats.
- **Blender Integration:** Export animation data as a Python script for easy use in Blender.
- **Animation Enhancement:** Tools for smoothing and refining captured motion.

## 🛠️ Tech Stack

- **Frontend:** React, TypeScript, Vite
- **3D Rendering:** Three.js, React Three Fiber
- **Computer Vision:** Google's MediaPipe
- **State Management:** Zustand
- **Styling:** CSS Modules / Styled-Components (TBD)
- **Code Quality:** ESLint, Prettier
- **Version Control:** Git & GitHub

## 🚀 Getting Started

Instructions on setting up this project locally.

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS version)
- [Git](https://git-scm.com/)

### Installation

1.  Clone the repository:
    ```sh
    git clone [https://github.com/YourUsername/motion-studio.git](https://github.com/YourUsername/motion-studio.git)
    ```
2.  Navigate to the project directory:
    ```sh
    cd motion-studio
    ```
3.  Install NPM packages:
    ```sh
    npm install
    ```
4.  Start the development server:
    ```sh
    npm run dev
    ```
5.  Open your browser and navigate to the HTTPS URL provided (e.g., `https://localhost:5173/`).

## usage Usage

1.  **Import a Model:** Click "Import Model" and select a rigged `.glb` or `.gltf` character.
2.  **Select Input:** Choose between "Live Webcam" or "Upload Video".
3.  **Capture Motion:** Click "Start Capture" to begin the animation process.
4.  **Export:** Once complete, stop the capture and export the animation as a Blender script.

## 🗺️ Roadmap

See the [open issues](https://github.com/Drianbake/motion-studio/issues) for a list of proposed features and known issues.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Drianbake/motion-studio/issues). Please read our [contributing guidelines](CONTRIBUTING.md) before making a pull request.

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
