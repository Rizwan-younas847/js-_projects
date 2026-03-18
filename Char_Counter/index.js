const text=document.getElementById("text_area");
const totalchar=document.getElementById("total_char");
const remaingChar=document.getElementById("remaining_char");
const maxL=30;
text.addEventListener("keyup",()=>{
    update_counter();
})
const update_counter=()=>{
       const curentLength=text.value.length;
       totalchar.innerText=curentLength;
       totalchar.style.color="Blue";
       remaingChar.innerText=curentLength-maxL;
       remaingChar.style.color="Red";
}