function execute(){
    var x=document.getElementById("data").value;
    var img=document.querySelector('#out');
    for(i=0;i<x;i++){
        var div=document.createElement('div');
        div.innerHTML='<img height="90px" width="90px" src="../Images/Gift.jpg">';
        img.appendChild(div);
    }
}