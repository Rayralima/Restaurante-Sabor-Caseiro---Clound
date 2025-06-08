# 🍽️ Sabor Caseiro Restaurant

## 🧭 Overview

**Sabor Caseiro Restaurant** is a Node.js application with cloud infrastructure provisioned via Terraform (Azure). It enables restaurants to manage table reservations and food orders, with modern DevOps and cloud deployment strategies integrated.

---
## Link do site:

https://webapp-sabor-caseiro.azurewebsites.net

## ✅ Features

- Table reservation with date and time
- Order management
- Scalable backend using Node.js
- Automatic CI/CD via GitHub Actions
- Infrastructure as Code (IaC) using Terraform
- Azure-ready deployment

---

## 🛠️ Tech Stack

- **Node.js**
- **Express**
- **Terraform (Azure Provider)**
- **GitHub Actions**
- **VSCode + JSON Configs**

---

## 📁 Project Structure
Falta algumas coisas ainda(Organizar futuramente🦊)
```bash
├── app.js                      # Express server
├── package.json                # Dependencies
├── Staging/                    # Infrastructure using Terraform
│   ├── main.tf                 # Azure infrastructure definition
│   └── terraform.tfstate       # Terraform state file
├── .github/workflows/          # GitHub Actions for CI/CD
├── README.md                   # Project documentation
```

---

## 📦 Installation Guide

### Prerequisites

| Technology | Recommended Version |
|------------|---------------------|
| Node.js    | >= 18.x             |
| NPM        | >= 9.x              |
| Terraform  | >= 1.5              |
| Azure Account | ✔️ Required       |

---

### Local Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-user/Sabor-Caseiro-Restaurant.git
cd Sabor-Caseiro-Restaurant

# 2. Install dependencies
npm install

# 3. Run the application
node app.js
```

> The app will be available at:
```
http://localhost:3000
```

---

### Cloud Deployment with Terraform (Azure)

1. Authenticate via Azure CLI  
```bash
az login
```

2. Go to the `Staging/` folder  
```bash
cd Staging/
```

3. Initialize Terraform  
```bash
terraform init
```

4. Apply the provisioning plan  
```bash
terraform apply
```

5. Confirm with `yes` when prompted

---

## 🔌 API Reference

### `GET /`

- **Description:** Returns the system’s welcome message.
- **Response:**
```json
{
  "message": "Welcome to Sabor Caseiro Restaurant!"
}
```

---

### `POST /reserva`

- **Description:** Create a new table reservation.
- **Request Body:**
```json
{
  "nome": "John",
  "mesa": 5,
  "data": "2025-06-10",
  "hora": "19:30"
}
```

- **Response:**
```json
{
  "status": "Reservation confirmed",
  "reservaId": "abc123"
}
```

---

### `GET /pedidos`

- **Description:** Fetch all active orders.
- **Response:**
```json
[
  {
    "pedidoId": "xyz789",
    "mesa": 5,
    "itens": ["Lasagna", "Orange Juice"]
  }
]
```

---

## 🤝 Contribution Guide

### How to Contribute

1. **Fork the repository**  
2. **Create a feature branch:**  
```bash
git checkout -b feature/your-feature
```
3. **Commit your changes with meaningful messages:**  
```bash
git commit -m "feat: add new orders endpoint"
```
4. **Push your branch and open a Pull Request**

---

### Pull Request Rules

- Follow the existing code style in `app.js`
- Always document new endpoints in the API section
- Include basic testing where applicable

---

## 📞 Contact
Em Desenvolvimento(🦊)
- 👤 Developer: ...
- 📧 Email: your-email@example.com  
- 🌐 GitHub: [github.com/your-user](https://github.com/your-user)

---

## 🛡️ License

Em desenvolvimento(🦊)
MIT © 2025 — Developed by ...


˙✧˖°🦊 ༘ ⋆｡˚