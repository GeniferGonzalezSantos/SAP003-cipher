document.getElementById("btnDecode").addEventListener("click", clickDecode);
document.getElementById("btnCode").addEventListener("click", clickCode);

function clickCode() {
  event.preventDefault();
  let msg = document.getElementById("entradaTexto").value;
  let offset = parseInt(document.getElementById("desloc").value);
  //console.log(msg);
  //console.log(offset);
  let encode = window.cipher.encode(offset, msg);
  //console.log("retorno do encode " + encode);
  document.getElementById("saidaTexto").value = encode;
}

function clickDecode() {
  event.preventDefault();
  let msg = document.getElementById("entradaTexto").value;
  let offset = parseInt(document.getElementById("desloc").value);
  //console.log(msg);
  //console.log(offset);
  let decode = window.cipher.decode(offset, msg);
  //console.log("retorno do decode " + decode);
  document.getElementById("saidaTexto").value = decode;
}
