window.cipher = {
  encode: (textElement,offsetNumber) => {



let result="";

    for (let i=0; i < textElement.length; i++){
      let ascii =textElement.charCodeAt(i);
      let asciiOffset =(ascii - 65 + offsetNumber)%26 + 65;

      result +=String.fromCharCode(asciiOffset);


    }
// console.log(result);
    return result;

  },


  decode: () => {
    /* Acá va tu código */
  }


}
