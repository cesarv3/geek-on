fetch("http://localhost:3000/productos/")
.then((response) => {
    return response.json();
})
.then((products) => {    
    products.data.map(camiseta => {
        console.log(camiseta);
        populateCamisetas(camiseta);
    })        
})
.catch(e => {
    console.log(e);
})

function populateCamisetas(camiseta) {
    
    
    const divArticulo = document.querySelector('#todos-productos');    
    const articulo = document.createElement('article');
    articulo.classList.add('caja-box-shadow');
    articulo.innerHTML = 
    `<a href="/productos/${camiseta.id}">
        <img src="${camiseta.imagen}" alt="producto"/>
        <div class="caja">
            <p><i class="fas fa-shipping-fast"></i></p>
            <p class="precios">${camiseta.precio}</p>
            <p class="descuentos">${camiseta.descuento}</p>            
        </div>
        <p class="descripciones">${camiseta.descripcion} </p>
    </a>
    `;
    
    divArticulo.appendChild(articulo);
    
    //Le agregamos el onclick al elemento para que nos lleve al detalle
    //articulo.addEventListener('click', () => {
        //fetch('http://localhost:3000/productos/'+camiseta.id)
        //.then(res => res.json())
        //.then(camiseta => {
        //    console.log(camiseta.data);
      //  })
    //})
}

