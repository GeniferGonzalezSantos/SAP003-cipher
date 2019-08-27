window.cipher = {
  encode: encode,
  decode: decode
}

function encode(msg, offset) {
  let abc = "";
  let formula;
  let valorLetraCifrada;
  for (let i = 0; i < msg.length; i++) {
    let numeroLetra = msg.charCodeAt(i);
    if (numeroLetra >= 65 && numeroLetra <= 90) {
      formula = (numeroLetra - 65 + offset) % 26 + 65;
    } else if (numeroLetra >= 97 && numeroLetra <= 122) {
      formula = (numeroLetra - 97 + offset) % 26 + 97;
    } else if (numeroLetra >= 33 && numeroLetra <= 47) {
      formula = (numeroLetra - 33 + offset) % 26 + 47;
    } else if (numeroLetra >= 58 && numeroLetra <= 64) {
      formula = (numeroLetra - 58 + offset) % 26 + 58;
    } else if (numeroLetra >= 91 && numeroLetra <= 96) {
      formula = (numeroLetra - 91 + offset) % 26 + 91;
    //} else if (numeroLetra >= 128 && numeroLetra <= 136) {
    //formula = (numeroLetra - 128 + offset) % 26 + 128;
  } else if (numeroLetra === 32) {
    formula = 32;
  }
  else {
    alert("Caracter inválido! " + msg[i]);
    break;
  }
  //console.log("valor de abc = " + abc);
  valorLetraCifrada = String.fromCharCode(formula);
  abc += valorLetraCifrada;
}
return abc;
}

function decode(msg, offset) {
  let abc = "";
  let formulaDecifra;
  let valorLetraDecifra
  for (let i = 0; i < msg.length; i++) {
    let numeroLetra = msg.charCodeAt(i);
    if (numeroLetra >= 65 && numeroLetra <= 90) {
      formulaDecifra = ((numeroLetra - 65) - offset + 26) % 26 + 65;
    } else if (numeroLetra >= 97 && numeroLetra <= 122) {
      formulaDecifra = ((numeroLetra - 97) - offset + 26) % 26 + 97;
    } else if (numeroLetra >= 33 && numeroLetra <= 47) {
      formulaDecifra = ((numeroLetra - 33) - offset + 14) % 14 + 33;
    /*} else if (numeroLetra >= 58 && numeroLetra <= 64) {
      formulaDecifra = ((numeroLetra - 58) - offset + 26) % 26 + 58;
    } else if (numeroLetra >= 91 && numeroLetra <= 96) {
      formulaDecifra = ((numeroLetra - 91) - offset + 26) % 26 + 91;
    //} else if (numeroLetra >= 128 && numeroLetra <= 136) {
    //formulaDecifra = ((numeroLetra - 128) - offset + 136) % 26 + 128;*/
    } else if (numeroLetra === 32) {
    formulaDecifra = 32
  }
  else {
    alert("Caracter inválido!");
    break;
  }
  //console.log("valor de abc = " + abc);
  valorLetraDecifra = String.fromCharCode(formulaDecifra);
  abc += valorLetraDecifra;
}
return abc;
}



