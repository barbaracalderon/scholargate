# Scholargate

Scholargate é um sistema de gerenciamento acadêmico desenvolvido utilizando Angular, Bootstrap, CSS, componentes standalone e Local Storage para armazenamento de dados. Este projeto foi criado para oferecer uma plataforma de fácil acesso e gestão para administradores, docentes e alunos, cada um com seu próprio conjunto de funcionalidades e permissões.

## Funcionalidades

### 1. **Autenticação**
- **Login:** Diferentes tipos de usuários (ADMIN, DOCENTE, ALUNO) podem se autenticar no sistema.
- **Página Inicial Personalizada:** O conteúdo da página inicial é dinâmico e se ajusta ao tipo de usuário logado, mostrando informações relevantes e personalizadas.

### 2. **Menu Lateral Dinâmico**
- O menu lateral se adapta de acordo com o tipo de usuário logado, fornecendo acesso rápido às funcionalidades específicas de cada perfil.

### 3. **Toolbar**
- Uma barra de ferramentas que permanece fixa na parte superior da página, permitindo navegação e acesso a informações importantes.

### 4. **Páginas Principais**

#### **Página Inicial**
- Apresenta uma visão geral e personalizada para o usuário logado, mostrando as informações mais relevantes de acordo com seu perfil (ADMIN, DOCENTE, ALUNO).

#### **Cadastro de Aluno**
- Página para registrar novos alunos no sistema, onde são inseridas informações pessoais e acadêmicas.

#### **Cadastro de Avaliação**
- Página destinada ao cadastro de avaliações, onde o docente pode inserir notas para os alunos em diferentes disciplinas.

#### **Cadastro de Docente**
- Permite que administradores registrem novos docentes no sistema com todas as informações necessárias.

#### **Cadastro de Turma**
- Página onde as turmas são registradas, associando-as a docentes e disciplinas específicas.

#### **Listagem de Docentes**
- Exibe uma lista de todos os docentes cadastrados no sistema, permitindo que administradores gerenciem essas informações.

#### **Listagem de Notas de Aluno**
- Mostra todas as notas cadastradas para um aluno específico, permitindo que tanto docentes quanto alunos visualizem o desempenho acadêmico.

## Tecnologias Utilizadas

- **Angular:** Framework principal utilizado para o desenvolvimento do frontend.
- **Bootstrap:** Utilizado para estilização e criação de layouts responsivos.
- **CSS:** Para customização adicional e criação de estilos personalizados.
- **Standalone Components:** Estrutura modular do Angular utilizada para melhorar a organização e reutilização dos componentes.
- **Local Storage:** Armazenamento de dados no lado do cliente para persistência de informações sem a necessidade de um backend.

## Estrutura do Projeto

- **src/app/components:** Contém todos os componentes do projeto, organizados por funcionalidades.
- **src/app/services:** Serviços que gerenciam a lógica de negócio e interações com o Local Storage.
- **src/app/models:** Definições de modelos de dados utilizados ao longo do projeto.
- **src/assets:** Arquivos estáticos, como imagens e ícones.

## Instalação e Execução

### Pré-requisitos
- Node.js
- Angular CLI

### Passos para executar o projeto localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/scholargate.git
   ```

2. Navegue até o diretório do projeto:

    ```
    cd scholargate
    ```

3. Instale as dependências

    ```
    npm install
    ```

4. Execute o projeto

    ```
    ng serve
    ```

5. Acesse o projeto no navegador

    ```
    http://localhost:4200
    ```


### Mock de usuários

O projeto também conta com um mock de usuários para realizar o login:

```typescript
    const usersMock = [
        { 
            email: 'admin@scholargate.com',
            password: 'admin123',
            role: 'ADMINISTRADOR',
            name: 'Marina Oliveira' 
        },
        { 
            email: 'docente@scholargate.com', 
            password: 'docente123', 
            role: 'DOCENTE', 
            name: 'Otávio Queiroz' 
        },
        { 
            email: 'aluno@scholargate.com', 
            password: 'aluno123', 
            role: 'ALUNO', 
            name: 'Pedro Torres' 
        }
    ];
```

## Contribuições

Contribuições são bem-vindas! Se você tiver sugestões, melhorias ou quiser corrigir algum problema, fique à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a MIT License.

