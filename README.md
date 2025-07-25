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
├── dev-data/
│ └── data.json # JSON data with products
├── modules/
│ └── replaceTemplate.js # Custom module for HTML templating
├── templates/
│ ├── template-overview.html # HTML for the overview page
│ ├── template-card.html # HTML for individual product cards
│ └── template-product.html # HTML for the product detail page
├── index.js # Main server file
├── package.json # Project metadata and dependencies
└── README.md # Project documentation
## 🛠️ Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/node-farm.git
Navigate into the project directory:

  ```bash
    cd node-farm

Install dependencies:
```bash
    npm install

Fix PowerShell error (if needed):
If you encounter the following error:

csharp
Copy
Edit
PS1 cannot be loaded because running scripts is disabled on this system
Run this command in your terminal:

bash
Copy
Edit
set-ExecutionPolicy RemoteSigned -Scope CurrentUser
