const btn_01=document.querySelectorAll("button");
const input=document.querySelector("#result");
for(let i=0;i<btn_01.length;i++){
    btn_01[i].addEventListener("click",()=>{
        const btnValue=btn_01[i].textContent;
        if(btnValue === "C"){
             clearFn();
        }else if(btnValue === "="){
             calculate();
        }else{
            apendValue(btnValue);
        }
    })
}
function clearFn(){
    input.value="";
}
function calculate(){
    input.value=eval(input.value);
}
function apendValue(btnValue){
    input.value+=btnValue;
}