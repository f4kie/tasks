# Gerenciador de Tarefas

## Descrição

Este projeto é um **Gerenciador de Tarefas** que consiste em um backend construído com Node.js e Express e um frontend desenvolvido em React. A aplicação permite que você adicione, liste, atualize e exclua tarefas de forma eficiente.

## Estrutura do Projeto

O projeto é dividido em duas partes principais:

### Backend (Node.js/Express)

- **Arquivos principais:**
  - `app.js`: Configura o servidor Express e as rotas.
  - `models/Task.js`: Define o modelo de dados para as tarefas.
  - `routes/tasks.js`: Contém as rotas da API para operações com tarefas.

### Frontend (React)

- **Arquivos principais:**
  - `src/App.js`: Componente principal da aplicação React.
  - `src/components/TaskForm.js`: Componente para adicionar novas tarefas.
  - `src/components/TaskList.js`: Componente para listar e gerenciar tarefas.
  - `public/index.html`: Arquivo HTML principal onde a aplicação React é montada.

## Configuração do Backend

1. **Clone o repositório:**

   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd git/backend
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente:**

   Crie um arquivo `.env` na pasta `backend` com o seguinte conteúdo:

   ```env
   MONGO_URI=mongodb://localhost:27017/taskmanager
   PORT=5000
   ```

4. **Inicie o servidor:**

   ```bash
   npm start
   ```

   Certifique-se de que o MongoDB está rodando na URL especificada.

## Configuração do Frontend

1. **Navegue para o diretório `frontend`:**

   ```bash
   cd ../frontend
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Inicie a aplicação React:**

   ```bash
   npm start
   ```

   A aplicação será iniciada em [http://localhost:3000](http://localhost:3000). Certifique-se de que o backend está rodando para que o frontend possa se comunicar com ele.

## Funcionalidades

- **Adicionar tarefas:** Crie novas tarefas para gerenciar.
- **Listar tarefas:** Visualize todas as tarefas existentes.
- **Atualizar tarefas:** Marque tarefas como concluídas ou edite detalhes.
- **Excluir tarefas:** Remova tarefas que não são mais necessárias.

---
