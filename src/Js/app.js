function SetImg(url){
    const img = document.getElementById("qrCodeImg");
    
    img.setAttribute("src", url);
};

function RomoveImg(){
    const img = document.getElementById("qrCodeImg");
    
    img.setAttribute("src", null);
};

document.getElementById('Create').onclick = function() {
    let size = document.getElementById("NumberBox").value;
    let text = document.getElementById("TextBox").value;

    const imgdiv = document.getElementById("ImgDiv");
    imgdiv.classList.add("ImageShowing");
    imgdiv.classList.remove("ImageHidden");
    let baseurl = "http://api.qrserver.com/v1/create-qr-code/?data="+text+"&size="+size+"x"+size;
    SetImg(baseurl);
};

document.getElementById('Remove').onclick = function() {
    const imgdiv = document.getElementById("ImgDiv");
    imgdiv.classList.remove("ImageShowing");
    imgdiv.classList.add("ImageHidden")
    RomoveImg();
};