# 🍽️ Restaurante Sabor Caseiro / Sabor Caseiro Restaurant

## 🇧🇷 Visão Geral | 🇺🇸 Overview

> **PT:**  
O **Restaurante Sabor Caseiro** é uma aplicação Node.js com infraestrutura em nuvem (Azure via Terraform) projetada para modernizar o sistema de reservas e pedidos de um restaurante. Oferece gerenciamento de mesas, horários e integração com sistemas em nuvem.

> **EN:**  
**Sabor Caseiro Restaurant** is a Node.js application with Azure-based cloud infrastructure (via Terraform), designed to modernize a restaurant’s reservation and order management. It provides table, time, and order management integrated with cloud services.

---

## Link do site:
https://webapp-sabor-caseiro.azurewebsites.net 

## 🇧🇷 Funcionalidades | 🇺🇸 Features

- ✅ Cadastro de reservas com data e hora  
- ✅ Gerenciamento de pedidos  
- ✅ Backend escalável com Node.js  
- ✅ Deploy automático via GitHub Actions  
- ✅ Infraestrutura como Código com Terraform  
- ✅ Pronto para nuvem (Azure)

---

## 🇧🇷 Tecnologias Utilizadas | 🇺🇸 Technologies Used

- **Node.js**
- **Express**
- **Terraform (Azure Provider)**
- **GitHub Actions**
- **VSCode + JSON Configs**

---

## 🇧🇷 Estrutura do Projeto | 🇺🇸 Project Structure

```bash
├── app.js                      # Servidor Express
├── package.json                # Dependências
├── Staging/                    # Infraestrutura com Terraform
│   ├── main.tf                 # Definições da Azure
│   └── terraform.tfstate       # Estado do provisionamento
├── .github/workflows/          # CI/CD automático com GitHub Actions
├── README.md                   # Documentação
```

---

## 📦 Installation Guide | Guia de Instalação

### 🇧🇷 Requisitos | 🇺🇸 Requirements

| Tecnologia | Versão recomendada |
|------------|--------------------|
| Node.js    | >= 18.x            |
| NPM        | >= 9.x             |
| Terraform  | >= 1.5             |
| Conta Azure (para deploy em nuvem) | ✔️ |

---

### 🇧🇷 Instalação Local | 🇺🇸 Local Installation

```bash
# 1. Clone o repositório
git clone https://github.com/Rayralima/Restaurante-Sabor-Caseiro-Clound.git
cd Restaurante-Sabor-Caseiro-Clound

# 2. Instale as dependências
npm install

# 3. Inicie a aplicação
node app.js
```

> Por padrão, o servidor estará disponível em:
```
http://localhost:3000
```

---

### 🇧🇷 Deploy em Nuvem com Terraform (Azure) | 🇺🇸 Cloud Deployment with Terraform (Azure)

1. Configure as credenciais da Azure CLI  
```bash
az login
```

2. Acesse a pasta `Staging/`  
```bash
cd Staging/
```

3. Inicialize o Terraform  
```bash
terraform init
```

4. Aplique o plano para provisionar a infraestrutura  
```bash
terraform apply
```

5. Confirme com `yes` quando solicitado

---

## 🔌 API Reference | Referência da API

### `GET /`

- **Descrição | Description:** Página inicial do sistema.  
- **Resposta | Response:**
```json
{
  "message": "Bem-vindo ao Restaurante Sabor Caseiro!"
}
```

---

### `POST /reserva`

- **Descrição | Description:** Cria uma nova reserva.  
- **Body (JSON):**
```json
{
  "nome": "João",
  "mesa": 4,
  "data": "2025-06-10",
  "hora": "20:00"
}
```

- **Resposta | Response:**
```json
{
  "status": "Reserva confirmada",
  "reservaId": "abc123"
}
```

---

### `GET /pedidos`

- **Descrição | Description:** Retorna todos os pedidos ativos.  
- **Resposta | Response:**
```json
[
  {
    "pedidoId": "xyz789",
    "mesa": 4,
    "itens": ["Lasanha", "Suco de laranja"]
  }
]
```

---

## 🤝 Contribution Guide | Guia de Contribuição

### 🇧🇷 Como contribuir | 🇺🇸 How to contribute

1. **Fork este repositório | Fork this repository**  
2. **Crie uma branch para sua feature | Create a feature branch:**  
```bash
git checkout -b feature/nome-da-feature
```
3. **Commit suas alterações com mensagens claras | Commit with clear messages**  
```bash
git commit -m "feat: adiciona nova rota de pedidos"
```
4. **Push da sua branch e abra um Pull Request | Push and open a PR**

---

### ✅ Regras para Pull Requests | PR Guidelines

- Siga o padrão de código já estabelecido (`app.js`)
- Sempre documente endpoints novos na seção API
- Testes básicos devem ser incluídos (se aplicável)

---

## 📞 Contato | Contact

- 👤 Desenvolvedor: ...  
- 📧 Email: seu-email@example.com  
- 🌐 GitHub: [github.com/seu-usuario](https://github.com/seu-usuario)

---

## 🛡️ Licença | License

Em prototipo
MIT © 2025 — Desenvolvido por ...
