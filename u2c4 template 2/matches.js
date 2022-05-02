// write js code here corresponding to matches.html
var report=document.querySelector("#body");
matcharr=JSON.parse(localStorage.getItem("schedule"));
storearr(matcharr);
favarr=JSON.parse(localStorage.getItem("favourites"))||[];

function selectdata(){
    var selecter=document.querySelector("#filterVenue").value
    var filterlist=matcharr.filter(function(el){
      return el.Role==selecter;
    });
    storearr(matcharr);
  }


function storearr(matcharr){
matcharr.forEach(function(el){
   
    var Tr=document.createElement("tr");
   
   var td1=document.createElement("td");
        td1.innerText=el.matchN
   var td2=document.createElement("td");
   td2.innerText=el.A
   var td3=document.createElement("td");
   td3.innerText=el.B
   var td4=document.createElement("td");
   td4.innerText=el.Date
   var td5=document.createElement("td");
   td5.innerText=el.Venue
   
   var td6=document.createElement("td")
   td6.innerText="Addfav";
   td6.style.textDecorationLine="underline";
   td6.style.color="green";
   td6.style.cursor="pointer";
   td6.addEventListener("click",function(){
       Displaydata(el);
   })
       Tr.append(td1,td2,td3,td4,td5,td6);
       report.append(Tr);

});
}
function Displaydata(el){
favarr.push(el);
localStorage.setItem("favourites",JSON.stringify(favarr));
window.location.href="favourites.html";
}
