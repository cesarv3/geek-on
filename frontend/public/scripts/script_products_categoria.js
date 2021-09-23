console.log(location.href);
const url =  location.href;
const id = url.substring(url.lastIndexOf('/') + 1);

fetch("http://localhost:3000/productos/categoria/" +id)
        .then((response) => {
          return response.json();
        })
        .then((products) => {
          populateProductos(products)
        })
        .catch((e) => {
          console.log(e);
        });

        
function populateProductos(productos) {
    //const divArticulo = document.querySelector("#todos-productos");
    const divBody = document.querySelector("#todos-productos");
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