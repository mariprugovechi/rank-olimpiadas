const  urlSite = "https://kenzie-olimpiadas.herokuapp.com/paises" 

// API com os dados
fetch(urlSite)
.then(response => response.json())
.then(data => tratarDadosMedalhas(data) )

let quadroMedalhas = document.querySelector(".quadro-medalhas")





function criarTemplateLinha(colocacao, country, flag_url, country, medal_gold, medal_silver, medal_bronze) {

	// Criando Linha do Quadro 
	let linha = document.createElement("div")
	// Adicionando classe para a div linha
	linha.classList.add("linha")

	//Colunas
	let coluna_rank = criaColuna_rank(`${colocacao}º`)
	let coluna_country = criaColuna_country(country, flag_url)
	let gold = criaMedal_gold(medal_gold)
	let silver = criaMedal_silver(medal_silver)
	let bronze = criaMedal_bronze(medal_bronze)
	let totalMedalhas = (medal_gold + medal_silver + medal_bronze)
	let total = criaColuna_total(totalMedalhas)

	linha.appendChild(coluna_rank)
	linha.appendChild(coluna_country)
	linha.appendChild(gold)
	linha.appendChild(silver)
	linha.appendChild(bronze)
	linha.appendChild(total)

	quadroMedalhas.appendChild(linha)
	
}

// Funca que cria a coluna rank
function criaColuna_rank(rank) {

	// Coluna Rank
	let coluna_rank = document.createElement("div")
	coluna_rank.classList.add("coluna", "coluna-rank")

	// Criando span titulo
	let coluna_rank_titulo = document.createElement("span")
	coluna_rank_titulo.innerText = rank

	// Colocar span dentro da div
	coluna_rank.appendChild(coluna_rank_titulo)

	return coluna_rank

}

// Funcao que cria a coluna country
function criaColuna_country(country, urlimagem) {

	// Coluna Country
	let coluna_country = document.createElement("div")
	coluna_country.classList.add("coluna", "country")

	// Criando span titulo
	let coluna_country_titulo = document.createElement("span")
	coluna_country_titulo.innerText = country

	// Criando img titulo
	let coluna_country_imagem = document.createElement("img")
	coluna_country_imagem.src = urlimagem	
	coluna_country_imagem.alt = country

	// Colocar img dentro da div
	coluna_country.appendChild(coluna_country_imagem)

	// Colocar span dentro da div
	coluna_country.appendChild(coluna_country_titulo)

	return coluna_country

}

// Funca que cria a coluna medalha gold
function criaMedal_gold(gold) {

	// Coluna Rank
	let coluna = document.createElement("div")
	coluna.classList.add("coluna", "medal_gold")

	// Criando span titulo
	let coluna_titulo = document.createElement("span")
	coluna_titulo.innerText = gold

	// Colocar span dentro da div
	coluna.appendChild(coluna_titulo)

	return coluna

}

// Funca que cria a coluna medalha silver
function criaMedal_silver(silver) {

	// Coluna Rank
	let coluna = document.createElement("div")
	coluna.classList.add("coluna", "medal_silver")

	// Criando span titulo
	let coluna_titulo = document.createElement("span")
	coluna_titulo.innerText = silver

	// Colocar span dentro da div
	coluna.appendChild(coluna_titulo)

	return coluna

}

// Funca que cria a coluna medalha bronze
function criaMedal_bronze(bronze) {

	// Coluna Rank
	let coluna = document.createElement("div")
	coluna.classList.add("coluna", "medal_bronze")

	// Criando span titulo
	let coluna_titulo = document.createElement("span")
	coluna_titulo.innerText = bronze

	// Colocar span dentro da div
	coluna.appendChild(coluna_titulo)

	return coluna

}

// Funca que cria a coluna total
function criaColuna_total(total) {

	// Coluna Total
	let coluna_total = document.createElement("div")
	coluna_total.classList.add("coluna", "total")

	// Criando span titulo
	let coluna_total_titulo = document.createElement("span")
	coluna_total_titulo.innerText = total

	// Colocar span dentro da div
	coluna_total.appendChild(coluna_total_titulo)

	return coluna_total

}


// funcao para tratar os dados da API e chamar a lista
function tratarDadosMedalhas(arrayPaises) {
	let paisesOrdenados = ordenarPaises(arrayPaises)
	for(let i = 0; i<paisesOrdenados.length; i++) {
		let pais = paisesOrdenados[i]

		criarTemplateLinha(
			i + 1,
			pais.colocacao,
			pais.flag_url,
			pais.country,
			pais.medal_gold,
			pais.medal_silver,
			pais.medal_bronze,
		)
	}
}

function ordenarPaises(arrayPaises) {
	// ordenar paises + medalhas de ouro para menos
	let newArrayPaises = arrayPaises.map((pais)=> pais).sort((a,b) => b.medal_gold - a.medal_gold)
	return newArrayPaises
}
