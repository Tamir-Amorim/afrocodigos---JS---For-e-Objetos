/* Dado uma lista de carros com suas informações, calcule o preço total da locação de três dias */

let carros = [
    { modelo: "Toyota Corolla", ano: 2020, precoDia: 100, disponivel: true },
    { modelo: "Honda Civic", ano: 2019, precoDia: 90, disponivel: true },
    { modelo: "Ford Focus", ano: 2018, precoDia: 80, disponivel: false },
    { modelo: "Chevrolet Cruze", ano: 2019, precoDia: 85, disponivel: true },
    { modelo: "Volkswagen Golf", ano: 2020, precoDia: 95, disponivel: true }
];

let carrosDisponiveis = [];

for (i in carros){

    carros[i].precoDia = carros[i].precoDia *3  
    
}

console.log(carros)