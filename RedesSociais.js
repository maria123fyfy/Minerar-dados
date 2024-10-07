const url1 = "https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json"


async function vizualizarredessociais(){

const res = await fetch(url1)
const dadossociais = await res.json()
console.log(dadossociais);

const Facebook = (dadossociais.Facebook)


const paragraforedes = document.createElement('p');
paragraforedes.classList.add('graficos-container__texto')

paragraforedes.innerHTML = `Você sabia que o mundo tem
<span> ${Facebook} </span>`

console.log(paragraforedes)

const container1  = document.getElementById("graficos-container")
container1.appendChild(paragraforedes)

}

vizualizarredessociais();