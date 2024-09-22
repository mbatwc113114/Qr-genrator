
var genrateBtn = document.getElementById("genrateBtn");
var textBox = document.getElementById("Text");
var qr;
var qrComp = document.getElementById("qrcode");

var productName =document.getElementById("productName");
var productId =document.getElementById("productID");
var material =document.getElementById("material");
var Discription =document.getElementById("Discription");
var catagory =document.getElementById("catagory");


function qrGenrate(){
    var data = `product Id ${productId} \n
    product Name ${productName} \n
    material ${material} \n
    Discription ${Discription} \n
    catagory ${catagory} \n
    ` 

if(qrComp.firstChild!=null){
    while(qrComp.firstChild){
    qrComp.removeChild(qrComp.firstChild);
}
}
    qr = new QRCode("qrcode", {
        text: tex,
        
        width: 256,
        height: 256,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
       });
      
    }




// textBox.addEventListener("input",()=>{
   
// );
