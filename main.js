let a=document.getElementById("menu");
a.onclick=()=>{
    
    let b=document.getElementById("menubar");
    if(b.className=="menubar")
        b.className+="2";
    else
        b.className=b.className.substr(0,b.className.length-1)
    
}

