const personagem1 = prompt("Digite nome do primeiro personagem")
let atk1 = parseFloat(prompt("Digite o poder de ataque do primeiro personagem"))
const personagem2 = prompt("Digite nome do segundo personagem")
let life = parseFloat(prompt("Digite a vida do segundo personagem"))
let def = parseFloat(prompt("Digite a defesa do segundo personagem"))
const shield = confirm("Ele possui um escudo?")
let dano
if ( atk1 > def && shield === false){
    dano = atk1 - def
}else if( atk1 > def && shield === true){
    dano = (atk1 - def)/2
}else{
    dano = 0
}
let lifeAtual = life - dano
document.write(`O personagem ${personagem1} com seu poder de ${atk1}\n
Causou um dano de ${dano} no personagem ${personagem2} que possuia ${def} pontos de defesa.\n
Agora o personagem ${personagem2} possui ${lifeAtual} pontos de vida.`)