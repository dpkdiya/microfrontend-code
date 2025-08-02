# Microfrontend Example using Webpack 5 Module Federation

This project demonstrates a simple **Micro Frontend architecture** using [Webpack 5 Module Federation](https://webpack.js.org/concepts/module-federation/).

## 🧩 Apps Included

This repo is structured into 3 separate applications:

| App Name       | Port | Description                                       |
| -------------- | ---- | ------------------------------------------------- |
| `mfe-host`     | 3000 | Container/host app that loads remote MFEs         |
| `mfe-header`   | 3001 | Remote app exposing a shared Header               |
| `mfe-products` | 3002 | Remote app exposing ProductList and sharing state |

---

## 📦 Shared Features

- Shared **state** via [`zustand`](https://github.com/pmndrs/zustand) across MFEs
- Shared **utility functions**
- Federated React components

---

## 📁 Project Structure

microfrontend-example/
│
├── mfe-host/ # Main host app
│ └── src/
│ └── App.js, store.js, utils.js ...
│
├── mfe-header/ # Header MFE
│ └── src/
│ └── Header.js ...
│
├── mfe-products/ # Products MFE
│ └── src/
│ └── ProductList.js ...

---

## 🚀 How to Run

### 1. Install dependencies in all 3 apps

```bash
cd mfe-host && npm install
cd ../mfe-header && npm install
cd ../mfe-products && npm install

cd mfe-host && npm start
cd mfe-header && npm start
cd mfe-products && npm start

You should see:

http://localhost:3000 → Host app showing Header + Product list

http://localhost:3001 → Header app standalone

http://localhost:3002 → Product list app standalone

Shared State & Code
zustand store is exposed from mfe-host and consumed in mfe-header and mfe-products.

formatCurrency() utility is also shared from host.

To use shared modules in a remote:

import useStore from "host/store";
import { formatCurrency } from "host/utils";


Module Federation Highlights

mfe-host/webpack.config.js

remotes: {
  header: "header@http://localhost:3001/remoteEntry.js",
  products: "products@http://localhost:3002/remoteEntry.js",
},
exposes: {
  "./store": "./src/store.js",
  "./utils": "./src/utils.js"
}

mfe-header/webpack.config.js

remotes: {
  host: "host@http://localhost:3000/remoteEntry.js"
},
exposes: {
  "./Header": "./src/Header.js"
}

mfe-products/webpack.config.js
js
Copy
Edit
remotes: {
  host: "host@http://localhost:3000/remoteEntry.js"
},
exposes: {
  "./ProductList": "./src/ProductList.js"
}

🧠 Concepts Covered
✅ Microfrontend communication
✅ Shared state management
✅ Remote + Host composition
✅ Lazy loading via React.lazy()
✅ Webpack 5 Module Federation Plugin

🛠 Future Enhancements
Add routing with React Router in host

Add authentication shell

Dockerize the micro apps

Deploy to Vercel/Netlify with environment configs

🧑‍💻 Author
Built by [Deepak Sinha] — feel free to fork, extend, or open issues!
```

---

Let me know if you'd like it automatically added to the project or customized with your GitHub handle or team info.
