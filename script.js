const quotes = [
    "A vida é como andar de bicicleta: para manter o equilíbrio, você precisa se manter em movimento. - Albert Einstein",
    "O sucesso é ir de fracasso em fracasso sem perder entusiasmo. - Winston Churchill",
    "A única maneira de fazer um excelente trabalho é amar o que você faz. - Steve Jobs",
    "A criatividade é a inteligência se divertindo. - Albert Einstein",
    "A persistência é o caminho do êxito. - Charles Chaplin",
    "Os covardes morrem várias vezes antes da sua morte, mas o homem corajoso experimenta a morte apenas uma vez. - William Shakespeare",
    "A vida é curta demais para ser pequena. - Benjamin Disraeli",
    "Não importa o que você decidiu. O que importa é que isso te faça feliz. - Frida Kahlo",
    "Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado. - Roberto Shinyashiki",
    "Dedicatória: Ao verme que primeiro roeu as frias carnes do meu cadáver dedico como saudosa lembrança estas memórias póstumas. - Trecho do livro 'Memórias Póstumas de Brás Cubas' de Machado de Assis",
];

function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

function displayRandomQuote() {
    const quoteElement = document.getElementById("quote");
    const randomQuote = getRandomQuote();
    quoteElement.textContent = randomQuote;
}

const newQuoteButton = document.getElementById("new-quote");
newQuoteButton.addEventListener("click", displayRandomQuote);

// Exibindo uma citação aleatória ao carregar a página
displayRandomQuote();
