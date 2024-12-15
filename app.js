const BASE_URL =
"https://v6.exchangerate-api.com/v6/f83a700de3620cfcdb1f01c1/pair/";
const options=document.querySelectorAll("select");
let from_curr=document.querySelector(".from select");
let to_curr=document.querySelector(".to select");
let btn=document.querySelector(".btn");
let inp=document.querySelector("input");
let msg=document.querySelector(".msg");
for(opt of options){
    for(code in countryList){
        let temp=document.createElement("option");
        temp.value=code;
        temp.innerText=code;
        opt.append(temp);
    }
   
}
for(opt of options){
    opt.addEventListener("change",(evt)=>{

        let xy=evt.target;
        console.log(evt);
        console.log(evt.target);
         let temp=xy.value;
         let code=countryList[temp];
         let newSrc=`https://flagsapi.com/${code}/flat/64.png`;
         let image=xy.parentElement.querySelector("img");
         image.src=newSrc;
    });
}
 async function exc(){
    let  inpVal=inp.value;
    if(inp.value==="" || inp.value<0){
       inp.value="1";
       inpVal=1;
    }
    let URL=`https://v6.exchangerate-api.com/v6/f83a700de3620cfcdb1f01c1/pair/${from_curr.value}/${to_curr.value}`;
    let response=await fetch(URL);
    let a=await response.json();
   let rate=a.conversion_rate;
   let val=inpVal;
   console.log(rate*val);
   msg.innerText=`${val}${from_curr.value}=${rate*val}${to_curr.value}`;
}
btn.addEventListener("click", ()=>{
   exc();
});
window.addEventListener("load",async ()=>{
   exc();
});
