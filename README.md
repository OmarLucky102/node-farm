# node-farm
Simple Node.js project using core modules to build a dynamic product website with templating and a basic API
# 🌱 Node Farm

Node Farm is a beginner-friendly Node.js project that demonstrates how to build a dynamic product website using only core Node.js modules. It showcases essential backend engineering concepts such as routing, file I/O, dynamic HTML templating, and serving a basic API.

This project was created as part of my learning journey as an IT student focusing on backend development.

---

## ✨ What This Project Demonstrates

This project showcases key Node.js concepts and techniques, including:

- **Core Modules:**  
  Using built-in modules like `fs`, `http`, and `url` for server-side logic.

- **Synchronous and Asynchronous File Operations:**  
  Handling files using both blocking and non-blocking approaches.

- **HTTP Server Creation:**  
  Building a basic HTTP server without external frameworks like Express.

- **Routing and URL Handling:**  
  Custom routing logic and parsing query parameters.

- **Dynamic HTML Templating:**  
  Replacing placeholders in HTML templates with live JSON data.

- **REST API Endpoint:**  
  Serving product data as raw JSON through a simple API.

- **Slug Generation:**  
  Creating clean, readable URLs using the `slugify` package.

- **Modular Code Structure:**  
  Organizing code using custom reusable modules.

- **npm Package Management:**  
  Installing third-party packages and managing `package.json`.

---

## 🚀 Features

✅ Overview page listing all products  
✅ Product detail pages with descriptions  
✅ Organic/non-organic product labels  
✅ JSON API endpoint for product data  
✅ Clean URL slugs for product names  
✅ No frameworks used – built with pure Node.js  

---

## 📂 Project Structure
```pgsql
starter/
├── dev-data/
│   └── data.json
├── Modules/
│   └── replaceTemplate.js
├── templates/
│   ├── template-cards.html
│   ├── template-overview.html
│   └── template-product.html
├── txt/
│   ├── append.txt
│   ├── final.txt
│   ├── input.txt
│   ├── output.txt
│   ├── read-this.txt
│   └── start.txt
├── .prettierrc
├── index.js
├── package-lock.json
├── package.json
├── README.md
└── tempCodeRunnerFile.js
```

## 🛠️ Installation

  1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/node-farm.git
   ```
3. **Navigate into the project folder:**
   ```bash
   cd node-farm
   ```
4. **Install dependencies:**
   ```bash
   npm install
   ```
5. **If you face this PowerShell security error:**
     "PS1 cannot be loaded because running scripts is disabled..."
  Run this command:
   ```bash
   set-ExecutionPolicy RemoteSigned -Scope CurrentUser
   ```
## 💻 Running the Project

  1. **Start the server:**
  ```bash
node index.js
```
  2. **Visit in your browser:**
     ```bash
     http://127.0.0.1:8000
     ```
     
