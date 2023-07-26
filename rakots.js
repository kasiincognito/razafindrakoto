function createObject( element, tag, id, textContent, src){
    var element = document.createElement(tag)
    element.setAttribute("id", id)
    element.textContent = textContent
    element.setAttribute("src", src)
    document.body.appendChild(element)
}
function interactiveMode(element){
    element.addEventListener("mouseover", function(){
        element.style.color = rgb(48, 115, 204)
        element.style.animationName = "interactive"
        element.style.animationDuration = "0.6s"
        element.style.animationIterationCount = "1"
    })
}
var counter1 = 0

var line1 = document.getElementById("line1")
var familyimg = document.getElementById("familyimg")

line1.addEventListener("mouseover", function(){
    if(counter1 < 1){
        createObject( "mariage", "img", "mariage", "", "mariage.jpg")   
        createObject( "title2", "h1", "title2", "Ny fiandohany")
        createObject( "text3", "h1", "text3", "Ny fianakaviana Razafindrakoto")
        createObject("text31", "h1", "text31", "dia nanomboka tamin'i Mbola sy Domoina")   
        createObject( "text4", "h1", "text4", "Izy ireo no nampisy ny mpandimbin'ny") 
        createObject( "text41", "h1", "text41", "taranaka Razafindrakoto mbola hitohy ")
        createObject("line2", "div", "line2")

        var counter2 = 0
        line2.addEventListener("mouseover", function(){
            if(counter2 < 1){
                createObject( "title3", "h1", "title3", "Ireo tenin'andriamanitra tianay")
                createObject( "mbopict", "img", "mbopict", "", "mbola.jpg")
                createObject( "dompict", "img", "dompict", "", "domoina.jpg")
                createObject( "hanapict", "img", "hanapict", "", "hanatia.jpg")
                createObject( "kasipict", "img", "kasipict", "", "kasi.jpg")
                createObject( "manpict", "img", "manpict", "", "manoa.jpg")
                createObject( "mitapict", "img", "mitapict", "", "mitantana.jpg")
                createObject( "text5", "h1", "text5", "Zay aloha ny androany")
                counter2++
            }
        })
        counter1++
    }
})

  