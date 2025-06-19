# Geer Intern Assignment

A full-stack web application that allows users to view, add, and filter products. Built as part of the Geer internship assignment.

---

## 🔧 Features

- 🛍 **Display Products**: Lists all available products on the homepage,shpwing their name , price and and image(changes on hovering on them).
- ➕ **Add Product**: Users can add new products via a form.
- 🔎 **Filter Products**: Filter by name(A-Z or Z-A) or price(high to low OR low to high) for a better browsing experience.
- 📄 **Product Details**: Click on a product to view its complete details.

---

### 📁 Folder Structure
geer-intern-assignment/
├── backend/
└── frontend/

**🌐 Deployed Version
The deployed version of this project has been shared via Internshala.**
**Below is the link to the deployed version :
    https://geer-frontend.vercel.app/


## 🚀 How to Run the Project Locally
### 1. Clone the Repository
    git clone https://github.com/Dhruv-sha/geer-intern-assignment.git
    cd geer-intern-assignment

### 2. Run the Backend
cd backend
npm install
Create a config.env file inside backend/ with the following content:
    DB= your MongoDB connection URI 
    PORT=8000

### 3. Then start the backend server:
    npm start

--> By default, it will run at: http://localhost:8000/api/v1  


### 4. Run the Frontend
    cd frontend
    npm install
Create a .env file inside frontend/ with the following:
    NEXT_PUBLIC_BACKEND_URL="http://localhost:8000/api/v1"

### 5. Then start the development server:
    npm run dev

--> The app will run at: http://localhost:3000



**🧑‍💻 Tech Stack
Backend:
Express.js

Node.js

MongoDB

Frontend:
Next.js (React Framework)**









