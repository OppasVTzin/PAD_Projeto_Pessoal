var div = document.getElementById("content")
var h2 = document.getElementById("conteudo")
var P1 = document.getElementById("P1")
var P2 = document.getElementById("P2")

function verify_content(value){
    switch(value){
        case 1:
            div
            div.style.color = "white"
            h2.innerText = "Olá Mundo"
            P1.innerText = "Este é o meu primeiro site publicado oficialmente na GitHub"
            P2.innerText = "Espero que gostem 😘👍"
            div.style.opacity = 1
            break
        case 2:
            div.style.color = "white"
            h2.innerText = "Nosso criador, VT"
            P1.innerText = "Nascido em São Paulo e criado no Rio de Janeiro."
            P2.innerText = "VT se tornou a figura iconica do NAVE-RIO, programando jogos e sites adoidado."
            div.style.opacity = 1
            break
        case 3:
            div.style.color = "white"
            h2.innerText = "Onde fomos feitos?"
            P1.innerText = "Nossa Origem veio no NAVE-RIO em 2024."
            P2.innerText = "Com o nosso proprietário, VT."
            div.style.opacity = 1
            break
        case 4:
            div.style.opacity = 0
    }
}