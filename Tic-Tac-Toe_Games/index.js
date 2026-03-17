let boxes=document.querySelectorAll(".box");
let reset_Btn=document.querySelector("#restet_btn");
let newGameBtn=document.querySelector("#new_btn");
let msg_Container=document.querySelector(".msg_container");
let Msg=document.querySelector(".msg");
let turnO=true;
let win_Patern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetGames=()=>{
    turnO=true;
    enable_btn();
    msg_Container.classList.add("hide");
}
const disable_btn=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enable_btn=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
           box.innerHTML="O";
           box.style.color = "#ff0000";
           turnO=false;
        }else{
            box.innerHTML="X";
           box.style.color = "#5318d1";
            turnO=true;
        }
        box.disabled=true;
        check_Winner();
    })
})
     const showWinner=(win)=>{
          Msg.innerText=`Congoratulation the winner of:${win}`;
          msg_Container.classList.remove("hide");
          disable_btn();
     }
const check_Winner=()=>{
       for(let patern of win_Patern){
            let posValue_01=boxes[patern[0]].innerText;
            let posValue_02=boxes[patern[1]].innerText;
            let posValue_03=boxes[patern[2]].innerText;
            if(posValue_01 != "" && posValue_02 != "" && posValue_03 != ""){
                if(posValue_01 == posValue_02 && posValue_02 == posValue_03){
                     showWinner(posValue_01);
                }
            }
       }
}
newGameBtn.addEventListener("click",resetGames);
reset_Btn.addEventListener("click",resetGames);



