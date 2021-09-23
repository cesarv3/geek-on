let contenedor = document.querySelector('.contenedor');
const url =  location.href;
const id = url.substring(url.lastIndexOf('/') + 1);
let product = fetch("http://localhost:3000/productos/"+id)
.then(response => {
    return response.json();
})
.then(prod => {

    console.log(prod);
contenedor.innerHTML += 
`
<div class="vista768">
            <div class="contenedor-imagenes-carrito">   
                <div class="contenedor-imagenes">
                    <div class="imagen-principal">
                        <img src="${prod.data.imagen}" alt="banner"> <!-- product.image-->
                    </div>
                </div>
            </div>
            <div class="detalles">
                <div id="titulo-juego">
                    <h3>${prod.data.nombre}</h3> <!--product.nombre-->
                </div>
                <div class="precio">
                    <p>Price ${prod.data.price}$ </p> <!---producto.price-->
                    <p id="discount">${prod.data.descuento}% OFF</p><!---producto.descuento-->
                </div>
                <div class="final-price">
                    <h4><span>Final price ${prod.data.price * (100 - prod.data.descuento)/100}</span>$</h4> <!--precio ya con el descuento-->
                </div>
                <div >
                    <!--<form class="btn" action="/productCart" method="POST">
                            <label for="productCart"></label>
                            <select class="label-productCart" name="productCart" id="productCart">
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                            </select>
                            <div class="espacio-form"></div>
                            <input class="btn-productCart" type="submit" value="Añadir al carrito">
                    </form>-->
                </div>
                <div class="descripcion-envio">
                    <div class="envio">
                        <i class="fas fa-shipping-fast"><span> Envío Gratis</span></i>
                        <div id="letra-envio" ><p>Recibelo pronto en tu domicilio</p> </div>
                    </div>
                </div>
               <!--  if (locals.isLogged) { -->
                    <div class="content-button">
                        <form class="btn-size" action="/products//edit"> <!--product.id-->
                            <button class="btn-productCart-edit">EDITAR</button>
                        </form>
                        <form class="btn-size" action="/products/?_method=DELETE" method="POST"> <!--product.id -->
                            <button class="btn-productCart-delete" type="submit" >ELIMINAR</button>
                        </form>
                    </div>
              <!-- else{%>-->   
                    
                <!-- }%>-->
                
            </div>
        </div>
        <div class="descripcion">
            <div class="detalles-producto espacio">
                <div>
                    <label for="show-nav2">
                        Detalle del Producto <span>+</span>
                    </label>  
                </div>
                    <input type="checkbox" id="show-nav2" hidden>
                    <ul class="navbar__menu2">
                      <li>                          
                        ${prod.data.descripcion}<!--product.descripcion-->
                      </li>
                    </ul>
            </div>
            <div class="caracteristicas espacio">
                <div>
                    <label for="show-nav3">
                        Características destacadas <span>+</span>
                    </label>  
                </div>
                    <input type="checkbox" id="show-nav3" hidden>
                    <ul class="navbar__menu3">
                        <li>Telas de la mejor calidad</li>
                        <li>Diseños únicos y con mucho estilo</li>
                        <li>El mejor servicio al cliente</li>
                        
                    </ul>
            </div>    
        </div>
`
})
