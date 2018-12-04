window.onload =() =>{


  document.getElementById("btnEncode").addEventListener("click",
  (evento)=> {
    evento.preventDefault();

    let textElement = document.getElementById("text").value.toUpperCase();
    let offsetNumber = parseInt(document.getElementById("offset").value);
    let result = cipher.encode(textElement,offsetNumber);
    document.getElementById("resultado").innerHTML=result;

})

document.getElementById("btnDecode").addEventListener("click",
(evento) => {
  evento.preventDefault();

  let textElement = document.getElementById("text").value.toUpperCase();
  let offsetNumber = parseInt(document.getElementById("offset").value);
  let result = cipher.decode(textElement,offsetNumber);
  document.getElementById("resultado").innerHTML = result;

})

document.getElementById("btnEntrar").addEventListener("click",
(evento) => {
  evento.preventDefault();

  document.getElementById("screen").style.display="none";
  document.getElementById("screen2").style.display="block";
})

}
