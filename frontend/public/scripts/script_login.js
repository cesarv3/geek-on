function doActionLogin(){
    
const email = document.querySelector('#email');
const password = document.querySelector('#password')
const data = {
    "email": email.value,
    "password": password.value
}
const settings = {
    "method": "POST",
    "headers": {
        "content-type": "application/json",        
    },
    "body": JSON.stringify(data)
}
//No funciona usando el boton, por el POST supongo
// fetch("http://localhost:3000/usuarios/25")
// .then(response => {
//     return response.json()
// })
// .then(inf => {
//     console.log(inf);
// })
// .catch(e=>{
//     console.log(e);
// })

fetch("http://localhost:3000/usuarios/login", settings)
.then(res => {
    //console.log(res);
    return res.json();
})
.then(info => {
    console.log(info);
    if(info.errores.length > 0){
        const loginForm = document.querySelector("#loginForm");
        const divErrores = document.createElement("div")
        divErrores.classList.add("text-danger");
        for(let x = 0; x < info.errores.length; x++){
            divErrores.innerHTML += info.errores[x].msg;
            divErrores.innerHTML += "<br/>"
        }
        loginForm.appendChild(divErrores);

    } else {
        window.location.replace("http://localhost:3030/")
    }
})
.catch(function(error){
    console.error(error)
})

console.log(email.value);
console.log(password.value);
return false;

}
