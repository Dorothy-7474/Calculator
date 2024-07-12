let boxes=document.querySelectorAll(".boxes");
let result=document.querySelector("#fname");
let box=document.querySelector(".box");

string="";
let arr=Array.from(boxes);
console.log(arr);
arr.forEach(b1=>{
   b1.addEventListener('click',(e)=>{
      handle(e.target.innerHTML);
      toggle(e.target);
   })
})


   document.addEventListener('keydown',(e)=>
   {
      let k=e.key;
      if((k>='0' && k<='9') || ['+','-','*','%','/'].includes(k))
      {
         handle(k);
         e.preventDefault();
      }
      else if(k==='Backspace')
      {
         handle('DEL');
         e.preventDefault();
      }
      else if(k==='Escape')
      {
         handle('AC');
         e.preventDefault();
      }
      else if(k==='Enter')
      {
         handle('=');
         e.preventDefault();
      }
});

function handle(button)
{
   if(button==="=")
      {          
         string=eval(string);
         result.value=string;
         console.log(string);
      }
   else if(button==="AC"){
      string="";
      result.value=string;
       
   }
   else if(button==="DEL")
      {
         a=string.length;
         string=string.replace(string[a-1],"");
         result.value=string;
         console.log(string);
          
      }
   else{
      string +=button;
      result.value=string;
      console.log(string);
      
   }
}


function toggle(button){
         button.classList.add('button-enlarged');
   setTimeout(() => {
      button.classList.remove('button-enlarged');
   }, 100);
}

