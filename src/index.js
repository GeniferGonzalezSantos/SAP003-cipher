
function clickcode(){
   event.preventDefault();
   let msg = document.getElementById("caixa1").value;
   let offset = parseInt(document.getElementById("desloc").value);//estava id=number ~ nao existe
   console.log(msg);
   console.log(offset);
   
   let encode = window.cipher.encode(msg, offset);

   console.log("retorno do encode " + encode);
   
   document.getElementById("msgcode").value = encode;
}
//Function pegarEncode()
//let msg=...get.....value... vai pegar a msg tem que return msg
//let deslo=...get....value...vai pegar o deslocamento tem que return um number
//let lala =cipher.encode(msg,desloca)
//..............innerHTML= lala