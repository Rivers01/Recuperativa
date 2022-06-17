function guardar(){
   
    var _nom = document.getElementById("Patente").value;

    var fila="<tr><td>"+_nom+"</td><td>";

    var btn = document.createElement("TR");
   	btn.innerHTML=fila;
    document.getElementById("tablita").appendChild(btn);
}