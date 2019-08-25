window.cipher = {
  encode: encode//,
  //decode: decode
}

function encode(msg, offset) {
  let abc = "";
  let formula;
  let valorLetraCifrada;
  for (let i = 0; i < msg.length; i++) {
    let numeroLetra = msg.charCodeAt(i);
    valorLetraCifrada = String.fromCharCode(formula);
    if (numeroLetra >= 65 && numeroLetra <= 90) {
      formula = (numeroLetra - 65 + offset) % 26 + 65;
      abc += valorLetraCifrada;
    } else if (numeroLetra >= 97 && numeroLetra <= 122) {
      formula = (numeroLetra - 97 + offset) % 26 + 97;
      abc += valorLetraCifrada;
    } else if (numeroLetra === 32) {
      abc += " ";
    }
    else {
      alert("Caracter inválido!");
      break;
    }
    console.log("valor de abc = " + abc);
  }
  return abc;
}

