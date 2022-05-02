// write js code here corresponding to favourites.html
favarr=JSON.parse(localStorage.getItem("favourites"));
Displaydata(favarr)

 
function Displaydata(favarr){
    var report=document.querySelector("#body1");
    favarr.forEach(function(el){
       
        var parent=document.createElement("tr");
       
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
        
       var btn=document.createElement("button");
       btn.innerText="Delete";
     btn.style.cursor="pointer"

      
       var btn = document.createElement("button");
       btn.innerText="DELETE";
       btn.addEventListener("click",function(){
         event.preventDefault();
         event.target.parentNode.remove();
       })
       
           parent.append(td1,td2,td3,td4,td5,btn);
          report.append(parent);
    
    });
}