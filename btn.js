var home = document.getElementById("btn1");
home.innerText = "Home"
home.style.width = "3cm"
home.style.position = "Absolute"
home.style.top = "30px"
home.style.height = "2cm"
home.style.right = "500px"
home.style.color = "white"
home.style.backgroundColor = "Red"

var bio = document.getElementById("btn2");
bio.innerText = "Biography"
bio.style.width = "3cm"
bio.style.position = "Absolute"
bio.style.top = "30px"
bio.style.height = "2cm"
bio.style.right = "385px"
bio.style.color = "white"
bio.style.backgroundColor = "Red"

var School = document.getElementById("btn3");
School.innerText = "School"
School.style.width = "3cm"
School.style.position = "Absolute"
School.style.top = "30px"
School.style.height = "2cm"
School.style.right = "270px"
School.style.color = "white"
School.style.backgroundColor = "Red"

function BNA(value){
    var h1 = document.getElementById("Oi");
    switch(value){
        case 1:
            h1.innerText = "Home"
            body.style.backgroundImage = "none"
            body.style.backgroundColor = "Black"
            verify_content(1)
            break
        case 2:
            h1.innerText = "Biografia"
            body.style.backgroundImage = "none"
            body.style.backgroundColor = "Black"
            verify_content(2)
            break
        case 3:
            h1.innerText = "Onde surgimos?"
            body.style.backgroundImage = "none"
            body.style.backgroundColor = "Black"
            verify_content(3)
            break
        
    }
}
var body = document.body
body.style.backgroundImage = "url('Fundo.png')"
body.style.backgroundRepeat = "no-repeat"
body.style.backgroundSize = "100%"

function DNA(){
    verify_content(4)
    h1.innerText = "Bem-vindo"
    body.style.backgroundImage = "url('Fundo.png')"
    body.style.backgroundRepeat = "no-repeat"
    body.style.backgroundSize = "100%"
}