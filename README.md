
# 💻 Courses UI — ReactJS Frontend

This is the **frontend application** built using ReactJS for the **Courses Management System**. It is part of the internship assignment for **Application Software Centre, IIT Bombay**.

The frontend consumes REST APIs provided by the backend Spring Boot service and allows users to manage courses and course delivery instances.

---

## 📦 Features

- Create a new course with one or more prerequisites
- View all courses and their prerequisites
- Delete a course (if it is not used as a prerequisite)
- Create a course delivery instance (year and semester)
- View all course deliveries in a given year and semester
- Delete course instances
- Visual UI indicators for dependency-based restrictions

---

## 🧰 Tech Stack

- ReactJS (v18)
- Axios
- React Router DOM
- TailwindCSS / Bootstrap (choose as per setup)
- Docker
- GitHub Actions for CI/CD

---

## 🚀 Getting Started

### Clone the Repository

```bash
git clone https://github.com/<your-username>/courses-ui.git
cd courses-ui
````

### Install Dependencies

```bash
npm install
```

### Run the App

```bash
npm start
```

Visit `http://localhost:3000` in your browser. Make sure the backend is running at `http://localhost:8080`.

---

## 🐳 Docker Instructions

### Build Docker Image

```bash
docker build -t <your-dockerhub-username>/courses-ui .
```

### Push to DockerHub

```bash
docker push <your-dockerhub-username>/courses-ui
```

---

## 📦 Docker Compose (With Backend)

Here is a sample `docker-compose.yml` file to run both frontend and backend together:

```yaml
version: '3'
services:
  backend:
    image: <your-dockerhub-username>/courses-api
    ports:
      - "8080:8080"

  frontend:
    image: <your-dockerhub-username>/courses-ui
    ports:
      - "3000:3000"
```

To run locally:

```bash
docker-compose up
```

---

## 🔁 GitHub Actions Workflow

Add this to `.github/workflows/docker-image.yml` in the frontend repo:

```yaml
name: Docker Build & Push

on:
  push:
    branches:
      - main

jobs:
  build-and-push:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Log in to DockerHub
        uses: docker/login-action@v2
        with:
          username: ${{ secrets.DOCKER_USERNAME }}
          password: ${{ secrets.DOCKER_PASSWORD }}

      - name: Build and push Docker image
        uses: docker/build-push-action@v4
        with:
          context: .
          push: true
          tags: <your-dockerhub-username>/courses-ui:latest
```

> Make sure to set `DOCKER_USERNAME` and `DOCKER_PASSWORD` as GitHub repository secrets.

---

## 🧠 Design Justifications

* **ReactJS** provides modular, scalable component-based architecture.
* **Axios** enables clean separation of API logic and frontend logic.
* **Conditional rendering** helps in handling prerequisites and deletion constraints visually.
* **Docker** ensures consistency across environments.
* **GitHub Actions** automates image builds and pushes for faster iteration.

---

## 👤 Author

**Shivraj Bhattacharya**
📧 Email: [shivraj.xe.45@gmail.com](mailto:shivraj.xe.45@gmail.com)
🔗 GitHub: [ShivrajCodes](https://github.com/ShivrajCodes)

---

## 📄 License

This project is created for the internship application at the **Application Software Centre, IIT Bombay**.

```


