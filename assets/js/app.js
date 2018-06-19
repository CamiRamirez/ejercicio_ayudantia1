const btn_hide = document.getElementById('hide');

btn_hide.addEventListener("click", () => {
  document.getElementsByClassName("text_hide")[0].classList.add("hide");
})

const btn_show = document.getElementById("show");
btn_show.addEventListener("click", () => {
  document.getElementsByClassName("img_show")[0].classList.remove("img_show");
})


const iteracion = () => {
  const name = "camila";
  let result = "";

  for (i = 0 ; i < name.length ; i++) {
    //console.log(name[i]); CON ESTO VEMOS SI FUNCIONA//
  result += name[i].toUpperCase();
   console.log(result);
  }
}
iteracion(); //hay que llamar a esta funcion para que se ejecute, osino no hara nada, para el cesar esto no va aqui, si lo llamo de otro lado//