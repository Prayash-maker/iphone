document.getElementById("notch-container").addEventListener("mousedown",function(){
    document.getElementById("top-contents").style.transform="scale(1,.78)";
    var songtime=document.getElementById("songtime");
    songtime.style.width="100px";
    songtime.style.height="10px";
   

})
document.getElementById("notch-container").addEventListener("mouseup",function(){



    document.getElementById("top-contents").style.transform="scale(1,1)";
    document.getElementById("sontime").style.height="0px";

    document.getElementById("sontime").style.width="0px";
})
