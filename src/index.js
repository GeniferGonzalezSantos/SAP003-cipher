
function clickcode() {
   event.preventDefault();
   let msg = document.getElementById("caixa1").value;
   let offset = parseInt(document.getElementById("desloc").value);
   //console.log(msg);
   //console.log(offset);
   let encode = window.cipher.encode(msg, offset);
   //console.log("retorno do encode " + encode);
   document.getElementById("msgcode").value = encode;
}

function clickDecode() {
   event.preventDefault();
   let msg = document.getElementById("msgcode").value;
   let offset = parseInt(document.getElementById("desloc").value);
   //console.log(msg);
   //console.log(offset);
   let decode = window.cipher.decode(msg, offset);
   //console.log("retorno do decode " + decode);
   document.getElementById("caixa2").value = decode;
}
