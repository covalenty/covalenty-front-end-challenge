🧪 Teste Técnico – Listagem e Detalhe de Produtos com React + Redux + React Query + Tailwind
🎯 Objetivo
Criar uma aplicação frontend que exibe uma lista de produtos e permite visualizar os detalhes de cada um, utilizando React, Tailwind CSS para o estilo, React Query para consumo de APIs, Redux para estado global e Axios como cliente HTTP.

🛒 API pública sugerida (fictícia ou real)
Use a seguinte API pública de exemplo:

📦 Produtos: https://fakestoreapi.com/products

📦 Detalhes de um produto: https://fakestoreapi.com/products/:id

📌 Funcionalidades obrigatórias
✅ Página de Listagem de Produtos
Listar os produtos da API

Exibir por produto:

Imagem (image)

Nome (title)

Preço (price)

Organizar os produtos em cards responsivos com Tailwind

Ao clicar em um produto, redirecionar para a página de detalhe

✅ Página de Detalhe do Produto
Buscar produto por ID via React Query e exibir:

Nome

Imagem

Descrição

Categoria

Preço

Botão para voltar para a listagem

🧠 Requisitos técnicos
React
Componentização limpa e reutilizável

Tailwind CSS
Usar Tailwind para toda a estilização

Responsividade obrigatória

React Query
Utilizar React Query para busca de dados da API

Tratar loading e erros

Axios
Utilizar Axios como cliente HTTP

Redux
Armazenar no Redux:

Produto selecionado (ao clicar em um produto)

Exemplo: selectedProductId

Mostrar no topo da tela da listagem (como demonstração de uso do Redux):

"Último produto selecionado: [nome do produto]"

✳️ Extras opcionais (diferenciais)
Implementar uma busca por nome (filtro local)

Dark mode

Loader animado com Tailwind

Deploy no Vercel ou Netlify

Testes com React Testing Library

📦 Entrega
Repositório no GitHub com README contendo:

Instruções para rodar localmente

Tecnologias utilizadas

(Opcional) Link de deploy

🚨 Importante
O foco não está na complexidade visual, mas sim em organização de código, boas práticas, integração com a API, estado global e estilo com Tailwind.
