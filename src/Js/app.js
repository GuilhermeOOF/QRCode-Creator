function SetImg(url){
    const img = document.getElementById("qrCodeImg")
    img.setAttribute("src", url);
}

document.getElementById('Create').onclick = function() {
    let size = document.getElementById("NumberBox").value;
    let text = document.getElementById("TextBox").value;

    let baseurl = "http://api.qrserver.com/v1/create-qr-code/?data="+text+"&size="+size+"x"+size
    SetImg(baseurl)
};