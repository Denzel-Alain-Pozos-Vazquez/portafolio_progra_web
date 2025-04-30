function leer(){
    //referncia por pseudoclase
    var nombre=document.forms["formulario"].elements[0].value;
    //referncia por ID
    var clave=document.getElementById("pass").value;
    //referencia por TagName
    var car=document.getElementsByTagName("select")[0].value;

    document.getElementById("datos").innerHTML=
    "\<br>Nombre: "+nombre+"\<br>Password: "+clave+
    "\<br>Tu carrera es: "+car;

}