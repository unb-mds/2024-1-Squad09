# Tabela de Requisitos Funcionais

| ID   | Alvo   | Funcionalidade          | Requisito                             | Prioridade | Status      |
|------|--------|-------------------------|---------------------------------------|------------|-------------|
| #U1  | User   | Criar uma conta         | Salvar Cadastro de login              | Alta       | Working on  |
| #U2  | User   | Logar no site           | Acessar lista de cadastros de login  | Alta       | Working on  |
| #AU1 | Admin & User | Remover conta     | Remover cadastro de login            | Alta       | Working on  |
| #U3  | User   | Editar conta            | Mudar parâmetros do cadastro de login| Alta       | Working on  |
| #U4  | User   | Acessar Matérias        | Acessar lista de matérias cadastradas| Alta       | Waiting     |
| #U5  | User   | Cadastrar Matérias      | Salvar o cadastro de matéria         | Alta       | Waiting     |
| #U6  | User   | Editar Matérias         | Mudar parâmetros da matéria cadastrada| Alta       | Waiting     |
| #U7  | User   | Remover Matérias        | Remover da lista de matérias         | Alta       | Waiting     |
| #U8  | User   | Cadastrar provas        | Salvar no cadastro de provas         | Alta       | Waiting     |
| #U9  | User   | Acessar provas          | Acessar lista de provas cadastradas  | Alta       | Waiting     |
| #U10 | User   | Editar provas           | Mudar parâmetros da prova cadastrada | Alta       | Waiting     |
| #U11 | User   | Remover Provas          | Remover da lista de provas           | Alta       | Waiting     |
| #U12 | User   | Cadastrar tarefas       | Salvar no cadastro de tarefas        | Alta       | Waiting     |
| #U13 | User   | Acessar tarefas         | Acessar lista de tarefas cadastradas | Alta       | Waiting     |
| #U14 | User   | Editar tarefas          | Mudar parâmetros da tarefa cadastrada| Alta       | Waiting     |
| #U15 | User   | Remover tarefas         | Remover da lista de tarefas          | Alta       | Waiting     |
| #U16 | User   | Cadastrar livro         | Salvar no cadastro de livros         | Média      | Waiting     |
| #U17 | User   | Acessar livros          | Acessar lista de livros cadastrados  | Média      | Waiting     |
| #U18 | User   | Editar livros           | Mudar parâmetros do livro cadastrado | Média      | Waiting     |
| #U19 | User   | Remover livro           | Remover da lista de livros           | Média      | Waiting     |
| #U20 | User   | Visualizar Calendário Acadêmico | Acessar calendário da “SAA Unb” | Média      | Waiting     |
| #U21 | User   | Visualizar Cardápio Semanal do RU | Acessar  cardápio do “RU Unb” | Média      | Waiting     |
| #S1  | System | Notificar sobre prova   | Acessar cadastro dos parâmetros das provas| Média      | Waiting     |
| #S2  | System | Notificar sobre livro   | Acessar cadastro dos parâmetros dos livros| Média      | Waiting     |
| #S3  | System | Notificar sobre tarefa  | Acessar cadastro dos parâmetros das tarefas| Média      | Waiting     |
| #U22 | User   | Pedir cadastro de evento| Notificar Admin                      | Baixa      | Waiting     |
| #A1  | Admin  | Cadastrar Evento        | Salvar cadastro de evento            | Baixa      | Waiting     |
| #A2  | Admin  | Remover Evento          | Remover cadastro de evento           | Baixa      | Waiting     |

ESCOPO DO MVP1: #U1, #U2, #AU1, #U3, #U4, #U5, #U6, #U7, #U8, #U9, #U10, #U11, #U12, #U13, #U14, #U15.


# Requisitos das Páginas

## Home
- Início
- Funcionalidades
- Sobre Nós
- Acessar a página de SignIn
- Acessar a página de SignUp

## SignIn
- Entrar no DashBoard com email e senha
- Recuperar senha
- Entrar no DashBoard com Google
- Acessar página do SignUp ("Não possui uma conta")
- Voltar para a página Inicial

## SignUp
- Cadastrar email
- Cadastrar senha
- Cadastrar nome de usuário
- Acessar página de SignIn ("Já possui uma conta")

## DashBoard
- Ver matérias em andamento
- Ver provas não finalizadas
- Ver tarefas não finalizadas
- Acessar página das Matérias
- Acessar página das Provas
- Acessar página das Tarefas
- Acessar o Cárdapio semanal do RU
- Acessar o Calendário Acadêmico da SAA
- Acessar a Grade Horária Semanal
- Acessar página de livros emprestados da Biblioteca
- Acessar página de eventos

## Matérias
- Ver matérias em andamento
- Ver matérias finalizadas
- Editar parâmetros das matérias
- Adicionar matérias
- Finalizar matérias
- Trancar (Remover) matérias
- Acessar matéria específica

## Matéria Específica
- Editar parâmetros da matéria
- Ver provas dessa matéria
- Adicionar provas para essa matéria
- Editar provas dessa matéria
- Remover provas dessa matéria
- Ver tarefas dessa matéria
- Editar tarefas dessa matéria
- Adicionar tarefas para essa matéria
- Remover tarefas dessa matéria

## Tarefas
- Ver tarefas concluidas
- Ver tarefas em progresso
- Ver tarefas atrasadas
- Editar parâmetros das tarefas
- Concluir uma tarefa
- Remover uma tarefa

## Calendário
- Ver o calendário acadêmico do SAA

## Cardápio do RU
- Ver o cardápio semanal de café da manhã do RU
- Ver o cardápio semanal de almoço do RU
- Ver o cardápio semanal de Jantar do RU

## Biblioteca
- Ver livros emprestados da biblioteca
- Ver livros atrasados da biblioteca
- Editar parâmetros dos livros
- Editar data de entrega dos livros
- Remover Livros

## Tabela de Horários
- Ver grade horária semanal

## Eventos
- Em Analise

## Notificações
- Notificar sobre prova próxima
- Notificar sobre devolução de livro próxima
- Notificar sobre encerramento de tarefa próxima
- Notificar mensagem do Admin

## Configuraçôes
- Editar nome de Usuário
- Editar Curso
- Editar Semestre
- Trocar Senha
- Editar notificações
- Excluir conta

# Requisitos do Banco de dados
```
Usuário:
└── Nome: String
└── Email: String
└── Senha: String
└── Curso: String
└── Semetre: Integer
└── Materias:
|   └── Materia1:
|   |   └── Nome: String
|   |   └── Professor: String
|   |   └── DiasSemana: String
|   |   └── Horarios: Time
|   |   └── Local: String
|   |   └── Provas:
|   |   |   └──  P1:
|   |   |   |    └── Código: String
|   |   |   |    └── Nota: String
|   |   |   |    └── Data: String
|   |   |   |    └── Horário: Time
|   |   |   |    └── Sala: String
|   |   |   |    └── Conteudo: String
|   |   |   |    └── Status: String -> Completo, Por vir
|   |   └── Tarefas:
|   |   |   └── Tarefa1:
|   |   |   |   └── Nome: String
|   |   |   |   └── Descrição: String
|   |   |   |   └── DataEntrega: DateTime
|   |   |   |   └── Status: String -> Entregue, Atrasada, Em andamento
|   └── Livros:
|   |   └── Livro1:
|   |   |   └── Nome: String
|   |   |   └── DataEmprestimo: String
|   |   |   └── DataEntrega: String
|   |   |   └── Status: String -> Entregue, Atrasado, Lendo.
```
