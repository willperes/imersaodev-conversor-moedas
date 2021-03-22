/* Definir valores das conversões monetárias */
let BRLtoUSD = 0.18;
let BRLtoEUR = 0.15;
let BRLtoGBP = 0.13;

let USDtoBRL = 5.51;
let USDtoEUR = 0.84;
let USDtoGBP = 0.72;

let EURtoBRL = 6.58;
let EURtoUSD = 1.19;
let EURtoGBP = 0.86;

let GBPtoBRL = 7.64;
let GBPtoUSD = 1.39;
let GBPtoEUR = 1.16;

function converter() {
    setTimeout(function() {
        /* Receber valores dos IDS HTML */
        let valorFinal = document.getElementById("valor-final");
        let convertFrom = document.getElementById("converter-de");
        let convertTo = document.getElementById("converter-para");
        let valorInput = document.getElementById("valor");

        /* Converter Real para Dólar */
        if (convertFrom.value == "BRL" && convertTo.value == "USD") {
            if (valorInput.value == 0) {
                valorFinal.innerHTML = "$" + (0).toFixed(2);
            } else {
                valorFinal.innerHTML = "$" + (valorInput.value * BRLtoUSD).toFixed(2);
            }
        }

        /* Converter Real para Euro */
        if (convertFrom.value == "BRL" && convertTo.value == "EUR") {
            if (valorInput.value == 0) {
                valorFinal.innerHTML = "€" + (0).toFixed(2);
            } else {
                valorFinal.innerHTML = "€" + (valorInput.value * BRLtoEUR).toFixed(2);
            }
        }

        /* Converter Real para Libra Esterlina */
        if (convertFrom.value == "BRL" && convertTo.value == "GBP") {
            if (valorInput.value == 0) {
                valorFinal.innerHTML = "£" + (0).toFixed(2);
            } else {
                valorFinal.innerHTML = "£" + (valorInput.value * BRLtoGBP).toFixed(2);
            }
        }

        /* Converter Dólar para Real */
        if (convertFrom.value == "USD" && convertTo.value == "BRL") {
            if (valorInput.value == 0) {
                valorFinal.innerHTML = "R$" + (0).toFixed(2);
            } else {
                valorFinal.innerHTML = "R$" + (valorInput.value * USDtoBRL).toFixed(2);
            }
        }

        /* Converter Dólar para Euro */
        if (convertFrom.value == "USD" && convertTo.value == "EUR") {
            if (valorInput.value == 0) {
                valorFinal.innerHTML = "€" + (0).toFixed(2);
            } else {
                valorFinal.innerHTML = "€" + (valorInput.value * USDtoEUR).toFixed(2);
            }
        }

        /* Converter Dólar para Libra Esterlina */
        if (convertFrom.value == "USD" && convertTo.value == "GBP") {
            if (valorInput.value == 0) {
                valorFinal.innerHTML = "£" + (0).toFixed(2);
            } else {
                valorFinal.innerHTML = "£" + (valorInput.value * USDtoGBP).toFixed(2);
            }
        }

        /* Converter Euro para Real */
        if (convertFrom.value == "EUR" && convertTo.value == "BRL") {
            if (valorInput.value == 0) {
                valorFinal.innerHTML = "R$" + (0).toFixed(2);
            } else {
                valorFinal.innerHTML = "R$" + (valorInput.value * EURtoBRL).toFixed(2);
            }
        }

        /* Converter Euro para Dólar */
        if (convertFrom.value == "EUR" && convertTo.value == "USD") {
            if (valorInput.value == 0) {
                valorFinal.innerHTML = "$" + (0).toFixed(2);
            } else {
                valorFinal.innerHTML = "$" + (valorInput.value * EURtoUSD).toFixed(2);
            }
        }

        /* Converter Euro para Libra Esterlina */
        if (convertFrom.value == "EUR" && convertTo.value == "GBP") {
            if (valorInput.value == 0) {
                valorFinal.innerHTML = "£" + (0).toFixed(2);
            } else {
                valorFinal.innerHTML = "£" + (valorInput.value * EURtoGBP).toFixed(2);
            }
        }

        /* Converter Libra Esterlina para Real */
        if (convertFrom.value == "GBP" && convertTo.value == "BRL") {
            if (valorInput.value == 0) {
                valorFinal.innerHTML = "R$" + (0).toFixed(2);
            } else {
                valorFinal.innerHTML = "R$" + (valorInput.value * GBPtoBRL).toFixed(2);
            }
        }

        /* Converter Libra Esterlina para Dólar */
        if (convertFrom.value == "GBP" && convertTo.value == "USD") {
            if (valorInput.value == 0) {
                valorFinal.innerHTML = "$" + (0).toFixed(2);
            } else {
                valorFinal.innerHTML = "$" + (valorInput.value * GBPtoUSD).toFixed(2);
            }
        }

        /* Converter Libra Esterlina para Euro */
        if (convertFrom.value == "GBP" && convertTo.value == "EUR") {
            if (valorInput.value == 0) {
                valorFinal.innerHTML = "€" + (0).toFixed(2);
            } else {
                valorFinal.innerHTML = "€" + (valorInput.value * GBPtoEUR).toFixed(2);
            }
        }

        /* Caso as moedas sejam as mesmas */
        if (convertFrom.value == convertTo.value) {
            if (convertFrom.value == "BRL") {
                if (valorInput.value == 0) {
                    valorFinal.innerHTML = "R$" + (0).toFixed(2);
                } else {
                    valorFinal.innerHTML = "R$" + parseInt(valorInput.value).toFixed(2);
                }
            }

            if (convertFrom.value == "USD") {
                if (valorInput.value == 0) {
                    valorFinal.innerHTML = "$" + (0).toFixed(2);
                } else {
                    valorFinal.innerHTML = "$" + parseInt(valorInput.value).toFixed(2);
                }
            }

            if (convertFrom.value == "EUR") {
                if (valorInput.value == 0) {
                    valorFinal.innerHTML = "€" + (0).toFixed(2);
                } else {
                    valorFinal.innerHTML = "€" + parseInt(valorInput.value).toFixed(2);
                }
            }

            if (convertFrom.value == "GBP") {
                if (valorInput.value == 0) {
                    valorFinal.innerHTML = "£" + (0).toFixed(2);
                } else {
                    valorFinal.innerHTML = "£" + parseInt(valorInput.value).toFixed(2);
                }
            }
        }
        
    }, 1);
}