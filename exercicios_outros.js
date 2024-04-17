/*Crie um objeto chamado animal com as seguintes propriedades e valores:
    porte = grande
    especie = cachorro
    raca = golden
*/

let animal = {nome: "animal", porte: "grande", especie: "cachorro", raca: golden};

/*Crie um objeto curso que receba as propriedades: nome, período, professora.
Em seguida, escolha qual propriedade você queira acessar.*/

let curso = {nome: " " , periodo: " " , professora: " "} ;
console.log(curso.nome)




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
    if(produtosEcologicos.disponivel[i] === true)
    produtosDisponíveis.push(rodutosEcologicos.disponivel[i])
}

console.log(produtosDisponíveis)

/* Crie uma lista com os seguintes itens:
Sabonete de Argila, Shampoo sólido, Máscara Capilar.
Em seguida, no console.log(),
mostre a quantidade de itens que contém
na lista criada.  */

let lista = ["Sabonete de Argila", "Shampoo sólido", "Máscara Capilar"]
console.log(lista.length)



/*Crie um objeto curso que receba as propriedades: nome, período, professora.
Atribua valores as propriedades criadas e separadamente mostre as propriedades no console.log */

let curso = {nome: " ", periodo: " ", professora: " "}

curso.nome = "Front-End"
curso.periodo = "2 modulo"
curso.professora = "Jess"
console.log(curso)