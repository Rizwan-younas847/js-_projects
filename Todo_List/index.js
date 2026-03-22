const btn_01=document.querySelector(".btn");
const inpt_01=document.querySelector("#input_field");
const taskele=document.querySelector(".list_item");
btn_01.addEventListener("click",()=>{
   if(inpt_01.value ==""){
        alert("Please eneter the task");
   }else{
        let listEle=document.createElement("li");
        listEle.textContent=inpt_01.value;
        taskele.appendChild(listEle);
        let spanele=document.createElement("span");
        spanele.textContent="\u00d7";
        listEle.appendChild(spanele);
   }
   inpt_01.value="";
   saveli();
});
taskele.addEventListener("click",(e)=>{
        if(e.target.tagName=="LI"){
            e.target.classList.toggle("checked");
            saveli();
        }else if(e.target.tagName == "SPAN"){
              e.target.parentElement.remove();
              saveli();
        }
})
function getele(){
     taskele.innerHTML=localStorage.getItem("task");
}
function saveli(){
     localStorage.setItem("task",taskele.innerHTML);
}
getele();
