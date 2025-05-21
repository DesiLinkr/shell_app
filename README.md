# 🧩 DesiLinkr Shell Ap

This is the **Shell (Container) App** of the **DesiLinkr** microfrontend architecture. It acts as the host for all remote microfrontend apps like:

- Auth App
- Dashboard_shell
- Admin Panel

## 🧠 Tech Stack

- 🧩 Module Federation (Webpack 5)
- ⚛️ React with TypeScript (TSX)
- 📦 Docker-ready

## Features ✨

- 🧩 Hosts remote MFEs via Module Federation
- ⚡ Fast dev

## 🧪 Run & Build Scripts (Casual Dev Style)

Here’s what each script does and when you might use it:

| Script                   | Description                                                                                                |
| ------------------------ | ---------------------------------------------------------------------------------------------------------- |
| 🟢 `npm start`           | Starts the dev server on [http://localhost:3000](http://localhost:3000). Live reload, good for local work. |
| 🧱 `npm run build`       | Builds the app for **production** using Rspack. Use this before deploying.                                 |
| 🧪 `npm run build:dev`   | Builds in **development mode** (no optimizations, faster build). Great for testing MFEs.                   |
| 🚀 `npm run build:start` | Runs the **production build** locally from the `dist/` folder. Use to test your prod output.               |

## 🐳 Docker Usage

- 🛠 Build Docker Image

docker build -t shell_app .

- 🚀 Run the Container

sudo docker run -p 3000:3000 shell_app

## 📌 Notes

- Shell is the single entry point for all MFEs
- Allways run on port `3000` 🛠️

## 🧑‍💻 License

MIT License  
Copyright © 2025 Harsh Tagra, DesiLinkr  
See the [LICENSE](./LICENSE) file for details.
