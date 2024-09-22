
var genrateBtn = document.getElementById("genrateBtn");
var textBox = document.getElementById("Text");
var qr;
var qrComp = document.getElementById("qrcode");

var Status = document.getElementById("status");
var downloadBtn = document.getElementById("download");

const productName =document.getElementById("productName");
const productId =document.getElementById("productId");
const material =document.getElementById("material");
const catagory =document.getElementById("catagory");
const Discription =document.getElementById("Discription");


let inputBoxs = document.querySelectorAll(".form input")

downloadBtn.addEventListener("click", ()=>{
    const url = qrComp.querySelector('img').scr;
    const a = document.createElement('a');
    a.href = url;
    a.download = `${productName.value}-qr.jpg`; 
    a.click();
})

function qrGenrate(){
    
    
    var data = `product Id ${productId.value} \n
    product Name ${productName.value} \n
    material ${material.value} \n
    Discription ${Discription.value} \n
    catagory ${catagory.value} \n
    ` 

if(qrComp.firstChild!=null){
    while(qrComp.firstChild){
    qrComp.removeChild(qrComp.firstChild);
}
}
try{
    if(qrComp.classList.value == 'hide'){
        qrComp.classList.remove('hide');
        
    }if(downloadBtn.classList.value == 'hide'){
        downloadBtn.classList.remove('hide');
        
    }
    if(Status.classList.value == ''){
        Status.classList.add('hide');
        
    }
    qr = new QRCode("qrcode", {

        text: data,
        version:2,
        width: 256,
        height: 256,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
       });
}
catch(error){
    
    if(qrComp.classList.value == ''){
        qrComp.classList.add('hide');
    }
    if(downloadBtn.classList.value == ''){
        downloadBtn.classList.add('hide');
    }
    if(Status.classList.value == 'hide'){
        Status.classList.remove('hide');
    }
}
      
    }



inputBoxs.forEach((input)=>{
    input.addEventListener("input",qrGenrate);
})





// textBox.addEventListener("input",()=>{
   
// );
