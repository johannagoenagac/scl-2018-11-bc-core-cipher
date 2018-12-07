window.cipher = {
  encode: (textElement,offsetNumber) => {

    let result="";

      for (let i=0; i < textElement.length; i++){
        let ascii =textElement.charCodeAt(i);
        if (ascii >=65 && ascii <=90){
        let asciiOffset =(ascii - 65 + offsetNumber)%26 + 65;
        result +=String.fromCharCode(asciiOffset);
      }else if (ascii >=97 && ascii <=122){
        let asciiOffset =(ascii - 97 + offsetNumber)%26 + 97;
        result +=String.fromCharCode(asciiOffset);
    }
  }
      return result;
},
  decode: (textElement,offsetNumber) => {

    let result="";

      for (let i=0; i < textElement.length; i++){
        let ascii =textElement.charCodeAt(i);
        if (ascii >=65 && ascii <=90){
        let asciiOffset =(ascii - 65 - offsetNumber)%26 + 65;
        if (asciiOffset<65){
          asciiOffset+=26;
        }
        result +=String.fromCharCode(asciiOffset);
      }else if (ascii >=97 && ascii <=122){
        let asciiOffset =(ascii - 97 - offsetNumber)%26 + 97;
        if (asciiOffset<97){
          asciiOffset+=26;
        }
        result +=String.fromCharCode(asciiOffset);
      }else {
        result +=textElement[i]
    }
  }
    return result;
  },
}
