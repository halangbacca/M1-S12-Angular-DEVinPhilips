# LABMedical

- Software para gestão de inventário médico, desenvolvido utilizando HTML5, CSS3, JavaScript, TypeScript, Angular (15.1.1), Bootstrap (5.3.0-alpha1), Angular Material e JSON Server.

## Inicialização

- Iniciar o projeto com ng serve --o (localhost:4200)
- Iniciar o JSON Server com o comando npm start (localhost:3000)

## Funcionalidades

- Página de login (criação de usuário, recuperação de senha)
- Menu lateral responsivo
- Toolbar
- Página inicial contendo estatísticas de pacientes, consultas e exames e informações básica sobre pacientes
- Página de cadastro de paciente com validações e implementação da API ViaCEP, retornando o endereço a partir do CEP informado pelo usuário
- Páginas de cadastro de consultas e exames com validações
- Página de listagem de prontuário com caixa de pesquisa
- Página de prontuário do paciente, permitindo a edição e exclusão de pacientes, consultas e exames
- Utilização do Angular Guard, impedindo o acesso às páginas em que o usuário não possui acesso

## Adicionais

- Adicionado delay de 200 ms no JSON Server para a exibição correta da animação de carregamento
- Utilização de JSON Server para armazenamento dos dados
- Utilização de alguns componentes do Angular Material
- Botão que retorna o usuário ao início da página
- Impede o cadastro de pacientes duplicados
- Implementação do SweetAlert2
