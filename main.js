
const produtos = [
    {
        nome: "Bola de Futebol",
        categoria: "Futebol",
        quantidade: 10,
        preco: 99.00
    },
    {
        nome: "Raquete",
        categoria: "Tênis",
        quantidade: 25,
        preco: 89.90
    },
    {
        nome: "Bicicleta",
        categoria: "Ciclismo",
        quantidade: 15,
        preco: 2000.00
    },
    {
        nome: "Skate",
        categoria: "Skate",
        quantidade: 8,
        preco: 200.00
    },
    {
        nome: "Bola de tênis",
        categoria: "Tênis",
        quantidade: 12,
        preco: 200.00
    },
    {
        nome: "Taco",
        categoria: "Tênis",
        quantidade: 5,
        preco: 300.00
    },
    {
        nome: "Bola de basquete",
        categoria: "Basquete",
        quantidade: 20,
        preco: 100.90
    },
    {
        nome: "Bola de pingue-pongue",
        categoria: "Tênis",
        quantidade: 10,
        preco: 89.90
    }
];

const corpoTabela = document.getElementById("corpoTabela");

for (let produto of produtos) {
    const linha = document.createElement("tr");

    linha.innerHTML = `
        <td>${produto.nome}</td>
        <td>${produto.categoria}</td>
        <td>${produto.quantidade}</td>
        <td class="preco">
            ${produto.preco.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL"
            })}
        </td>
    `;

    corpoTabela.appendChild(linha);
}
