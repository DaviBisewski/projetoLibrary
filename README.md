# Requisitos Funcionais e Regras de Negócio

## RF 001 - O sistema deve manter livros
- **RN 001** - O sistema deve armazenar dados dos livros, incluindo título, autor, código de identificação, categoria, localização e status (disponível/emprestado).

## RF 002 - O sistema deve categorizar os livros
- **RN 002** - Deve categorizar em: Infantil, Juvenil e Adulto.

## RF 003 - O sistema deve emprestar os livros para membros da família
- **RN 003** - A família deve ser classificada como um grupo de usuários vinculados a um mesmo endereço ou unidade familiar.

## RF 004 - O sistema deve gerenciar o acervo
- **RN 004** - Deve gerenciar: livros disponíveis, livros que estão emprestados, prazo para devolução e localização dos livros (prateleira ou seção onde o livro se encontra).

## RF 005 - O sistema deve manter usuários
- **RN 005** - O sistema deve armazenar dados dos usuários, incluindo nome, e-mail, telefone e endereço.

## RF 006 - O sistema deve manter empréstimos
- **RN 006** - Deve haver uma limitação do empréstimo de um livro por pessoa.
- **RN 007** - Após devolver o livro, o usuário poderá solicitar um novo empréstimo. Deve haver um prazo máximo de dois meses para a leitura do livro.
- **RN 008** - Se o usuário não devolver o livro no prazo, deverá sofrer uma penalização de 30 dias sem poder requisitar um novo livro.
- **RN 009** - Deve permitir o controle dos empréstimos e dos livros disponíveis no acervo.

## RF 007 - O sistema deve manter relatórios
- **RN 010** - Deve gerar relatórios sobre: livros emprestados, livros disponíveis, usuários que possuem livros em atraso e histórico de empréstimos.

## RF 008 - O sistema deve permitir consulta de livros pelo usuário
- **RN 011** - A consulta deve ser feita através de um campo de pesquisa onde o usuário pode buscar por título, autor ou categoria. Os resultados devem ser exibidos em uma lista com detalhes dos livros.

## RF 009 - O sistema deve permitir consulta de prazos pelo usuário
- **RN 012** - A consulta deve permitir que o usuário veja o prazo de devolução dos livros emprestados através de uma área dedicada ou painel de controle.

## RF 010 - O sistema deve permitir gerenciar livros
- **RN 013** - A gestão de livros deve ser feita por meio de um painel administrativo onde os administradores podem adicionar, editar e remover livros do acervo.

## RF 011 - O sistema deve permitir que os pais gerenciem os livros de sua família
- **RN 001** - Os pais podem gerenciar os livros emprestados e disponíveis para seus filhos através de uma interface específica para administração familiar.
