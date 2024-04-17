/* Dado uma lista de produtos ecologicos, filtre quais produtos ainda estão disponíveis. */

let produtosEcologicos = [
    { nome: 'Copo de bambu', disponivel: true },
    { nome: 'Sacola retornável', disponivel: false },
    { nome: 'Escova de dentes de bambu', disponivel: true },
    { nome: 'Canudos de metal', disponivel: true },
    { nome: 'Frasco de vidro para armazenamento', disponivel: false }
];


let produtosDisponíveis = []

for (i in produtosEcologicos){
    if(produtosEcologicos[i].disponivel === true)
    produtosDisponíveis.push(produtosEcologicos[i].nome)
}

console.log(produtosDisponíveis)