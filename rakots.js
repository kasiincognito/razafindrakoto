function createObject( element, tag, id, src, text){
    var element = document.createElement(tag)
    element.id = id
    element.setAttribute("src", src)
    element.textContent = text
    document.body.appendChild(element)
}


function createInteractive(){
    createObject( "title2", "h1", "title2", "", "Members")


    createObject( "mbopict", "img", "mbopict", "mbola.jpg")
    createObject( "dompict", "img", "dompict", "domoina.jpg")
    createObject( "hanapict", "img", "hanapict", "hanatia.jpg")
    createObject( "kaspict", "img", "kaspict", "kasi.jpg")
    createObject( "manpict", "img", "manpict", "manoa.jpg")
    createObject( "mitpict", "img", "mitpict", "mitantana.jpg")
    createObject( "ilopict", "img", "ilopict", "ilo.jpg")

    createObject( "father", "h2", "father", "", "Mbola")
    createObject( "mother", "h2", "mother", "", "Domoina")
    createObject( "daughter", "h2", "daughter", "", "Hanatia")
    createObject( "son1", "h2", "son1", "", "Kasi")
    createObject( "son2", "h2", "son2", "", "Manoa")
    createObject( "son3", "h2", "son3", "", "Mitantana")
    createObject( "cousin", "h2", "cousin", "", "We consider our little cousin ilo as a member of the family")
    
    createObject( "textReturn", "button", "textReturn", "", "Return")

    textReturn.addEventListener("mouseover", function(){
        textReturn.style.backgroundColor = "white";
        textReturn.style.color = "#41B77F";
    })
    textReturn.addEventListener("mouseout", function(){
        textReturn.style.backgroundColor = "#41B77F";
        textReturn.style.color = "white";
    }) 
}


function removeSecondPage(){
    document.body.removeChild(textReturn)
    document.body.removeChild(father)
    document.body.removeChild(mother)
    document.body.removeChild(daughter)
    document.body.removeChild(son1)
    document.body.removeChild(son2)
    document.body.removeChild(son3)
    document.body.removeChild(mbopict)
    document.body.removeChild(dompict)
    document.body.removeChild(hanapict)
    document.body.removeChild(kaspict)
    document.body.removeChild(manpict)
    document.body.removeChild(mitpict)
    document.body.removeChild(title2)
    document.body.removeChild(cousin)
    document.body.removeChild(ilopict)
}


function imageEventListener(image){
    image.addEventListener("mouseover", function(){
        image.style.borderColor = "#41B77F"
    })
    image.addEventListener("mouseout", function(){
        image.style.borderColor = "white"
    })
}


var title = document.getElementById("title")
var member = document.getElementById("member");
var text1 = document.getElementById("text1");

member.addEventListener("mouseover", function(){
    member.style.backgroundColor = "white";
    text1.style.color = "#41B77F";
})

member.addEventListener("mouseout", function(){
    member.style.backgroundColor = "#41B77F";
    text1.style.color = "white";
})

member.addEventListener("click", function(){

    createInteractive()
    member.style.display = "none"
    text1.style.display = "none"
    title.style.display = "none"

    imageEventListener(mbopict)
    imageEventListener(dompict)
    imageEventListener(hanapict)
    imageEventListener(kaspict)
    imageEventListener(manpict)
    imageEventListener(mitpict)
    imageEventListener(ilopict)
    
    textReturn.addEventListener("click", function(){
        removeSecondPage()
        title.style.display = "block"
        member.style.display = "block"
        text1.style.display = "block"
    })
})
  