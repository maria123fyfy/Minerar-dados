const url1 = "https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json"


async function vizualizarredessociais(){

const res = await fetch(url1)
const dadossociais = await res.json()
console.log(dadossociais);

const Facebook = (dadossociais.Facebook)
const Tiktok= (dadossociais.Tiktok)
const Youtube= (dadossociais.Youtube)
const Instagram= (dadossociais.Instagram)
const WhatsApp= (dadossociais.WhatsApp)
const WeChat= (dadossociais.WeChat)

const paragraforedes = document.createElement('p');
paragraforedes.classList.add('graficos-container__texto')

paragraforedes.innerHTML = `Na rede social FACEBOOK existem cerca de 
<span> ${Facebook} </span> pessoas conectadas aproximadamente, já na rede TIKTOK temos <span> ${Tiktok}</span> pessoas conectadas mundialmente. 
No YOUTUBE temos <span> ${Youtube} </span> e no INSTAGRAM <span> ${Instagram} </span> conectados. Da mesma forma aproximadamente <span> ${WhatsApp} </span>  
no WHATSAPP e <span> ${WeChat} </span> pesssoas conectadas no WECHAT.`

console.log(paragraforedes)

const container1  = document.getElementById("graficos-container")
container1.appendChild(paragraforedes)

}

vizualizarredessociais();