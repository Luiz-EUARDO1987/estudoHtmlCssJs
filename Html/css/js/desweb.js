//-------------------load
// Adiciona um evento para que o código JavaScript seja executado
// apenas quando o conteúdo HTML da página estiver completamente carregado
document.addEventListener("DOMContentLoaded", function() {
    // Obtém o elemento HTML com o ID "listaProduto" e o armazena na constante "listaProduto"
    const listaProduto = document.getElementById("listaProduto");
});

//-------------------print
// Exibe uma mensagem no console indicando que o JavaScript está sendo executado
console.log("JavaScript está sendo executado!");

// Obtém o elemento HTML com o ID "myList" e o armazena na constante "list"
const list = document.getElementById("listaProduto");

// Exibe no console o elemento com o ID "myList" (verifica se ele existe)
console.log(document.getElementById("listaProduto"));

// Exibe no console os elementos filhos do "myList", ou seja, os itens da lista (li)
console.log(document.getElementById("listaProduto").children);

//-------------------transformando uma lista em botões
// Obtém o elemento com o ID "listaProduto" e o armazena na constante "listaProdutos"
const listaProdutos = document.getElementById("listaProduto");

// Armazena todos os filhos (itens da lista) de "listaProduto" na constante "itemProduto"
const itemProduto = listaProdutos.children;

// Inicia um loop que percorre todos os itens da lista
for (let i = 0; i < itemProduto.length; i++) {
    // Armazena o item atual da lista na constante "listaProduto"
    const listaProduto = itemProduto[i];

    // Cria um novo elemento de botão
    const botao = document.createElement("button");

    // Define o texto do botão como o texto do item atual da lista
    botao.textContent = listaProduto.textContent;

    // Adiciona um evento de clique ao botão que, quando clicado,
    // exibirá um alerta mostrando que o item foi "vendido"
    botao.addEventListener("click", function() {
        // Exibe um alerta com a mensagem de venda e o nome do produto
        alert('Vendido: ' + botao.textContent + '!');
    });

    // Substitui o item da lista pelo botão recém-criado
    listaProduto.replaceWith(botao);
}
