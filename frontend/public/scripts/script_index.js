let categorias = fetch("http://localhost:3000/categorias/")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data.data.map((cat) => {
      
      fetch("http://localhost:3000/productos/categoria/" + cat.id)
        .then((response) => {          
          return response.json();
        })
        .then((products) => {
          popularProductos(products);
          
        })
        .catch((e) => {
          console.log(e);
        });
    });
  });

  

  function popularProductos(productos) {
    //console.log(productos);
    let categoriaTitle = productos.data[0].categorias.nombre;
   // console.log(productos.data[0].categorias.nombre);
    const divBody = document.querySelector("#todos-productos");
    const divSeparador = document.createElement("div");
    divSeparador.classList.add('contenedor-separador');
    const texto = document.createElement("h1");
    //texto.classList.add('texto-separador');
    divSeparador.innerHTML = `<img src="/images/separador.jpg" alt="separador" class="img-separador"/>`
    texto.innerText = categoriaTitle;
    texto.classList.add('texto-separador');
    divSeparador.appendChild(texto);
    divBody.appendChild(divSeparador);
    

    const divArticulo = document.createElement("div");
    divArticulo.classList.add("caja-wrap");

    productos.data.map((producto) => {        
      const articulo = document.createElement("article");
    articulo.classList.add("caja-box-shadow");
    articulo.innerHTML = `<a href="/productos/${producto.id}">
        <img src="${producto.imagen}" alt="producto"/>
        <div class="caja">
            <p><i class="fas fa-shipping-fast"></i></p>
            <p class="precios">Precio: ${producto.price}$</p>
            <p class="descuentos">${producto.descuento}% OFF</p>
            <p class="precios">Precio final: <b>${producto.price*(100-producto.descuento)/100}$</b></p>
        </div>
        <p class="descripciones">${producto.descripcion} </p>
    </a>
    `;    
    divArticulo.appendChild(articulo);
    });
    divBody.appendChild(divArticulo);
  }

function populateProductos(producto) {  
  const divArticulo = document.querySelector("Camiseta");  
  const articulo = document.createElement("article");
  articulo.classList.add("caja-box-shadow");
  articulo.innerHTML = `<a href="/productos/${producto.id}">
        <img src="${producto.imagen}" alt="producto"/>
        <div class="caja">
            <p><i class="fas fa-shipping-fast"></i></p>
            <p class="precios">${producto.precio}</p>
            <p class="descuentos">${producto.descuento}</p>            
        </div>
        <p class="descripciones">${producto.descripcion} </p>
    </a>
    `;    
    divArticulo.appendChild(articulo);
    

  
}
