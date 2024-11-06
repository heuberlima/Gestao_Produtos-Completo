
# Meu Projeto - Sistema CRUD de Produtos

Este repositório contém uma aplicação completa de um sistema CRUD para gerenciamento de produtos. O projeto é composto por três partes principais:
- **Backend**: Uma API REST desenvolvida com Spring Boot.
- **App Mobile**: Um aplicativo móvel desenvolvido com React Native (Expo).
- **App Web**: Uma aplicação web desenvolvida com React.

## Estrutura do Projeto

```plaintext
meu-projeto/
├── backend/      # Aplicação backend em Spring Boot
├── app-mobile/   # Aplicação mobile em React Native (Expo)
└── app-web/      # Aplicação web em React
```

Cada uma das partes do projeto é independente e pode ser executada separadamente.

---

## Tecnologias Utilizadas

- **Backend**: Java (Spring Boot), Spring Data JPA, H2 Database (ou outro banco de dados de sua preferência)
- **App Mobile**: React Native com Expo
- **App Web**: React com Bootstrap

---

## Requisitos de Instalação

Antes de começar, certifique-se de ter instalado:
- **Java** e **Maven** para o backend
- **Node.js** e **npm** para o app web e mobile
- **Expo CLI** para o app mobile (caso ainda não tenha, instale com `npm install -g expo-cli`)

---

## Passo a Passo para Executar o Projeto

### 1. Backend (Spring Boot)

A API REST para gerenciar produtos. Para rodar o backend:
1. Acesse a pasta `backend`:
   ```bash
   cd backend
   ```
2. Compile e execute o projeto:
   ```bash
   mvn spring-boot:run
   ```
3. A API estará disponível em `http://localhost:8080`.

### 2. App Mobile (React Native com Expo)

A aplicação móvel para acessar o sistema. Para rodar o app mobile:
1. Acesse a pasta `app-mobile`:
   ```bash
   cd app-mobile
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o Expo:
   ```bash
   expo start
   ```
4. Abra o app Expo Go no seu dispositivo e escaneie o QR code para visualizar o aplicativo.

### 3. App Web (React)

A interface web para o sistema. Para rodar o app web:
1. Acesse a pasta `app-web`:
   ```bash
   cd app-web
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   ```
4. O app web estará disponível em `http://localhost:3000`.

---

## Funcionalidades

- **Backend**: API REST com endpoints para criar, listar, atualizar e excluir produtos.
- **App Mobile**: Interface para acessar o sistema via dispositivos móveis.
- **App Web**: Interface web para acessar o sistema via navegador.

---

## Estrutura de Pastas e Código

Cada parte do projeto está organizada em sua própria pasta para facilitar o desenvolvimento e a manutenção.

### Backend

- `backend/src/main/java/...`: Código-fonte do backend em Java.
- `backend/src/main/resources/...`: Arquivos de configuração e schema do banco de dados.

### App Mobile

- `app-mobile/assets`: Arquivos estáticos para o app móvel.
- `app-mobile/src`: Código-fonte da aplicação móvel.

### App Web

- `app-web/public`: Arquivos estáticos para o app web.
- `app-web/src`: Código-fonte da aplicação web.

---

## Contribuindo

1. Faça um fork do projeto.
2. Crie uma nova branch (`git checkout -b feature/nova-feature`).
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`).
4. Dê um push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

---

## Licença

Este projeto é licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
