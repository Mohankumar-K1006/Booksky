var popupoverlay=document.querySelector(".popupoverlay")
var popupbox=document.querySelector(".popupbox")
var addpopupbutton=document.getElementById("popupbutton")
addpopupbutton.addEventListener("click",function(){
    popupbox.style.display="block"
    popupoverlay.style.display="block"
})

var cancelbutton=document.getElementById("cancelbook")
cancelbutton.addEventListener("click",function(event)
{ event.preventDefault()
    popupbox.style.display="none" 
    popupoverlay.style.display="none"   

})
var addbutton=document.getElementById("addbook")
addbutton.addEventListener("click",function(event)
{ event.preventDefault()

})

var container=document.querySelector(".container")
var addbook=document.getElementById("addbook")
var booktitle=document.getElementById("booktitle")
var bookauthor=document.getElementById("bookauthor")
var bookdisc=document.getElementById("bookdisc")
addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitle.value}</h2> <h5>${bookauthor.value}</h5><p>${bookdisc.value}</p> <button id="del" onclick="deletebook(event)">Delete</button>`
    container.append(div)
    popupbox.style.display="none" 
    popupoverlay.style.display="none"
})

function deletebook(event)
{
  event.target.parentElement.remove()
}