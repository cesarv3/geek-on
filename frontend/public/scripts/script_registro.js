function doActionRegistro() {
const email = document.querySelector('#email');
const password = document.querySelector('#password')
const nombre = document.querySelector('#first_name');
const apellido = document.querySelector('#last_name');
const rol = document.querySelector('#category');
const avatar = document.querySelector('#archivo');
const formData = new FormData();
formData.append('avatar', avatar.files[0]);

const data = {
    "nombre": nombre.value,
    "apellido": apellido.value,
    "rol": rol.value,
    "email": email.value,
    "password": password.value,
    "avatar": avatar.files[0]
}
const settings = {
    "method": "POST",
    "headers": {
        "content-type": "application/json",        
    },
    "body": JSON.stringify(data)
}

fetch("http://localhost:3000/usuarios/registro", settings)
.then(res => {
    //console.log(res);
    return res.json();
})
.then(info => {
    console.log(info)
})
    console.log(data);
    return false;
}