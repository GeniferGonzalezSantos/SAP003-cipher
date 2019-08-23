window.cipher = {
  //criar funções e chamar no index html// 
};
//function encode(p1 msg,p2 deslocamento){
// alert(p1,p2);
//}

function cifrar(code) {
  let ABC = "";
  for (i = 0, i < ABC.lenght, i++){
    let numeroletra = ABC.charCodeAt();
    let formula;
    let valorletracifrada;
  }if (numeroletra <= 65 && numeroletra >= 90){ /*para deixar as letras maoúscula*/
     formula = (numeroletra - 65 + /*offset*/)% 26 - 65;
     valorletracifrada = String.fromCharCode(formula);
    ABC += valorletracifrada; //para cifrar//
  }else if(numerodaletra <= 97 && numeroletra >= 122){
    formula = (numeroletra - 97 + /*offset*/)% 26 - 97;
    valorletracifrada += String.fromCharCode()
    }




  

}

