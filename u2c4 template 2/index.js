// write js code here corresponding to index.html
// You should add submit event on the form
var form=document.querySelector("#masaiForm");
matcharr=JSON.parse(localStorage.getItem("schedule"))||[]
form.addEventListener("submit",function(event){
    event.preventDefault();
    var data={
        matchN:masaiForm.matchNum.value,
        A:masaiForm.teamA.value,
        B:masaiForm.teamB.value,
        Date:masaiForm.date.value,
        Venue:masaiForm.venue.value,
    }
   matcharr.push(data);
   localStorage.setItem("schedule",JSON.stringify(matcharr));
   window.location.href="matches.html";
})