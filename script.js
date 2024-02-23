



const key = "45ca79d6bde83a560d4022a96091d02e"

function colocarDadosNaTela(dados) {
    console.log(dados)
    document.querySelector(".name-city").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".text-forecast").innerHTML = dados.weather[0].description
    document.querySelector(".moisture").innerHTML = dados.main.humidity + "%"
    document.querySelector(".forecast").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

}


async function buscarCidade(cidade) {

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric
    `).then( resposta => resposta.json())

    colocarDadosNaTela(dados)

}

function cliqueiNoBotao() {
    const cidade = document.querySelector(".city").value

   buscarCidade(cidade)
}