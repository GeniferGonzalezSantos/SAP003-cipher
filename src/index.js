document.getElementById("btnDecode").addEventListener("click", clickDecode);
document.getElementById("btnCode").addEventListener("click", clickCode);

function clickCode(event) {
  event.preventDefault();
  let msg = document.getElementById("entradaTexto").value;
  let offset = parseInt(document.getElementById("desloc").value);
  let encode = window.cipher.encode(offset, msg);
  document.getElementById("saidaTexto").value = encode;
}

function clickDecode(event) {
  event.preventDefault();
  let msg = document.getElementById("entradaTexto").value;
  let offset = parseInt(document.getElementById("desloc").value);
  let decode = window.cipher.decode(offset, msg);
  document.getElementById("saidaTexto").value = decode;
}
