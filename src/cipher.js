window.cipher = {
  encode: encode,
  decode: decode
};

function encode(msg, offset) {
  let abc = "";
  let formula;
  let valorLetraCifrada;
  for (let i = 0; i < msg.length; i++) {
    let numeroLetra = msg.charCodeAt(i);
    if (numeroLetra >= 65 && numeroLetra <= 90) {
      formula = (numeroLetra - 65 + offset) % 26 + 65;
      valorLetraCifrada = String.fromCharCode(formula);
    } else if (numeroLetra >= 97 && numeroLetra <= 122) {
      formula = (numeroLetra - 97 + offset) % 26 + 97;
      valorLetraCifrada = String.fromCharCode(formula);
    }
    else {
      valorLetraCifrada = msg[i];
    }
    abc += valorLetraCifrada;
    //console.log("valor de abc = " + abc);
    //valorLetraCifrada = String.fromCharCode(formula);
  }
  return abc;
}

function decode(msg, offset) {
  let abc = "";
  let formulaDecifra;
  let valorLetraDecifra;
  for (let i = 0; i < msg.length; i++) {
    let numeroLetra = msg.charCodeAt(i);
    if (numeroLetra >= 65 && numeroLetra <= 90) {
      formulaDecifra = ((numeroLetra - 65) - offset + 26) % 26 + 65;
      valorLetraDecifra = String.fromCharCode(formulaDecifra);
    } else if (numeroLetra >= 97 && numeroLetra <= 122) {
      formulaDecifra = ((numeroLetra - 97) - offset + 26) % 26 + 97;
      valorLetraDecifra = String.fromCharCode(formulaDecifra);
    }
    else {
      valorLetraDecifra = msg[i];
    }
    abc += valorLetraDecifra;
  }
  return abc;
}



