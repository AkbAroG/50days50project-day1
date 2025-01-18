let input = document.querySelector("#text")
let card =document.querySelector(".card")
let btn =document.querySelector("#btn")


function cardName(){
    if(input.value ===''){
      alert("You must write something")
      
    }
    else{
        let li= document.createElement("li")
        li.innerHTML=input.value;
        card.appendChild(li)
        let span= document.createElement("span")
        span.innerHTML=`<i class="ri-close-fill"></i>`;
        li.appendChild(span)
    }
    input.value="";
    saveData();
}
card.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
    e.target.parentElement.remove();
    saveData();
    }
},false)
function saveData(){
    localStorage.setItem("data", card .innerHTML);
}
function showTask(){
    card.innerHTML =localStorage.getItem("data")
}
showTask();