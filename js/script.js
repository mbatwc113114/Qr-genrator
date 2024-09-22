
var genrateBtn = document.getElementById("genrateBtn");
var textBox = document.getElementById("text");
var qr;
var qrComp = document.getElementById("qrcode");
textBox.addEventListener("input",()=>{
    var tex =document.getElementById("text").value;
    console.log(tex);
if(qrComp.firstChild!=null){
    while(qrComp.firstChild){
    qrComp.removeChild(qrComp.firstChild);
}
}
    qr = new QRCode("qrcode", {
        text: tex,
        
        width: 356,
        height: 356,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
       });
      
    }
)
