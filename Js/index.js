let login = true
let intentos = 0;
let user1 = "Mateo";
let password = "Coder1234*";
let rest = 2; 



do {
  
    let usuario = prompt("ingrese nombre de usuario")
    let contraseña = prompt ("ingrese contraseña")
    

    if(usuario == null){
        break
    }
    
    if((usuario === user1)&&(contraseña === password)&&(intentos <= 3)){
        alert("Bienvenido " + user1);
        login = false
    }

    else if((usuario !== user1)||(contraseña !== password)){

        alert ("acceso denegado, intentalo nuevamente te quedan: " + (rest - intentos))
        
        intentos++

        if(intentos == 3){
            alert("Se acabaron los intentos")
            break
        }

    }
   
    
    
} while(login)