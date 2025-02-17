/*
Requerimiento de reto.

1. El Usuario debe poder ingresar su usuario y contraseña.
2. El sistema debe ser capaz de validar si el usuario y contraseña ingresados por el usuario existen en la base de datos.
3. Si el usuario y la contraseña son correctos, El sistama de arrojar un mensaje de bienvenida y mostrar timeline del usuario.
4. Si el usuario y la contraseña son incorrectos, El sistema debe mostrar un mensaje de error y no mostra el timeline.

*/


const UsersDataBase = [
    {
        username: 'luis',
        password: '123'
    },
    {
        username: 'gabriel',
        password: '456'
    },
    {
        username: 'ramirez',
        password: '789'
    }
]

const userTimeLine = [
    {
        username: 'Luis',
        timeLine:'Me encata JavaScript'
    },
    {
        username: 'Gabriel',
        timeLine: 'Quiero ser FullStack .......'
    }
]

const username = prompt('Ingrese Usuario')
const password = prompt('Ingrese Password')
// function que sirve para verificar si en la base de datos existe el usuario 
function usuarioExistente (username,password){
    for(let i = 0; i < UsersDataBase.length; i++ ){
        if (
          UsersDataBase[i].username === username &&
          UsersDataBase[i].password === password
        ) {
          return true;
          break;
        }else{
            return false;
        }
    }
}
// Function que sirve para el inicio de sesión
function signIn(username,password){
    if(usuarioExistente(username,password)){
        alert(`Bienvenido a tu cuenta ${username}`)
        console.log(userTimeLine);
    }
    else{
        alert('UUps usuario o contraseña incorrecto')
    }
}
signIn(username,password);


