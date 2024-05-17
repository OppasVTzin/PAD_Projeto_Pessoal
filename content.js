var div = document.getElementById("content");
var title = document.querySelector("title");
var h2 = document.getElementById("conteudo");
var P1 = document.getElementById("P1");
var P2 = document.getElementById("P2");
var P3 = document.getElementById("P3");
function verify_content(value){
    switch(value){
        case 1:
            title.innerText ="Home"
            div.style.color = "white"
            h2.innerText = "Olá Mundo"
            P1.innerText = "Este é o meu primeiro site publicado oficialmente na GitHub"
            P2.innerText = "Espero que gostem 😘👍"
            div.style.opacity = 1
            break
        case 2:
            title.innerText = "Biografia"
            div.style.color = "white"
            h2.innerText = "Nosso criador, VT"
            P1.innerText = "Nascido em São Paulo e criado no Rio de Janeiro."
            P2.innerText = "VT se tornou a figura iconica do NAVE-RIO, programando jogos e sites adoidado."
            P3.innerText = "Olá, eu sou o VT da turma 2003/24 do [Núcleo Avançado em Educação] Colégio Estadual José Leite Lopes, dedico este site ao meu futuro e a todos que me acompanharam nessa trajetória."
            div.style.opacity = 1
            break
        case 3:
            title.innerText = "Onde surgimos?"
            div.style.color = "white"
            h2.innerText = "Onde fomos feitos?"
            P1.innerText = "Nossa Origem veio no NAVE-RIO em 2024."
            P2.innerText = "Com o nosso proprietário, VT."
            P3.innerText = "Somos uma empresa o qual fazemos jogos por amor à nossa profissão."
            div.style.opacity = 1
            break
        case 4:
            title.innerText = "Bem-vindo"
            div.style.opacity = 0
    }
}