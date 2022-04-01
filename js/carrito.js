/*
function obtenerCarito(){
    carito=JSON.parse(localStorage.getItem('carrito'));
    return(carito)
}
carito=[]
carito=obtenerCarito()
console.log(carito)

tbody=document.querySelector(".tbody")
renderCarrito(carito)
function renderCarrito(carito){
    
    tbody.innerHtml=""
    carito.map(item=>{
        const tr=document.createElement("tr")
        tr.classList.add("itemCarrito");
        const Content = `
    
    <th scope="row">1</th>
            <td class="table__productos">
              <img src=${item.img}  alt="">
              <h6 class="title">${item.nombre}</h6>
            </td>
            <td class="table__price"><p>${item.precio}</p></td>
            <td class="table__cantidad">
              <input type="number" min="1" value=${item.cantidad} class="input__elemento">
              <button class="delete btn btn-danger">x</button>
            </td>
    
            `
        tr.innerHTML=Content 
        tbody.append(tr)

        
    })
}
*/
/*
function CarritoTotal(){
    let Total = 0;
    const itemCartTotal = document.querySelector('.itemcartTotal')
    carito.forEach((item) => {
      const precio = Number(item.price.replace("$", ''))
      Total = Total + precio*item.cantidad
    })
  
    itemCartTotal.innerHTML = `Total $${Total}`
    addLocalStorage()
  }
  CarritoTotal()
  */

/* -------------- NOS PERMITE OBTENER LOS PLATILLOS DEL LOCALSTORAGE CONVERTIDOS EN JSON -------------- */
const obtenerPlatillosLocalStorage = () => {
  let platilloLS;
  if (localStorage.getItem("platillos") === null) {
    platilloLS = [];
  } else {
    platilloLS = JSON.parse(localStorage.getItem("platillos"));
  }
  return platilloLS;
};
/* -------------- FIN -------------- */

const saberPlatilloExistente = (platilloLS, platillo) => {
  return platilloLS.id === platillo.id ? true : false;
};
/* -------------- FIN -------------- */

/* -------------- NOS PERMITE LEER EL LOCALSTORAGE Y NOS DEVULEVE TRUE O FALSE SI ALGUN ELEMENTO
   YA FUE CREADO EN EL LOCALSTORAGE -------------- */
const leerLocalStorage = (platilloLS, platillo) => {
  let saber = platilloLS.some((platilloLS) => {
    return saberPlatilloExistente(platilloLS, platillo);
  });
  return saber;
};
/* -------------- FIN -------------- */

/* -------------- NOS PERMITE ELIMINAR UN PLATILLO SEGUN SU ID DEL LOCALSTORAGE -------------- */
const eliminarPlatilloByIdLocalStorage = (platillo) => {
  let platilloLS = obtenerPlatillosLocalStorage();

  platilloLS.forEach((platillos, index) => {
    if (saberPlatilloExistente(platillos, platillo)) {
      platilloLS.splice(index, 1);
    }
  });
  localStorage.setItem("platillos", JSON.stringify(platilloLS));
};
/* -------------- FIN -------------- */

/* -------------- NOS PERMITE REMOVER POR EL ITEM CREADO,
  QUE SE ENCUENTRAN ALMACENADA EN EL LOCALSTORAGE -------------- */
const removerItemLocalStorage = () => {
  localStorage.removeItem("platillos");
};
/* -------------- FIN -------------- */

/* -------------- NOS PERMITE VACIAR EL LOCALSTORAGE -------------- */
const vaciarLocalStorage = () => {
  localStorage.clear();
};
/* -------------- FIN -------------- */

/* -------------- NOS PERMITE GUARDAR EL PLATILLO SELECCIONADO EN EL LOCALSTORAGE */
const guardarSeleccionMenuLocalStorage = (platillo) => {
  let platilloLS = obtenerPlatillosLocalStorage();
  if (!leerLocalStorage(platilloLS, platillo)) {
    platilloLS.push(platillo);
    localStorage.setItem("platillos", JSON.stringify(platilloLS));
    return true;
  } else {
    return false;
  }
  console.log(platilloLS);
};
/* --------------FIN -------------- */
/* -------------- FIN -------------- */

var tbody_item = document.getElementById("items");
let total = 0;
const rendercarrito = (carrito, index) => {
  console.log("item");
  console.log(carrito);
  let tr = document.createElement("tr");
  tr.classList.add("ItemCarrito");
  const contenido = `
              
              <td id="imagen_td">
              <img src=${carrito.img} class="img" >
              </td>
              <td class="text-center">${carrito.nombre}</td>
              <td id="cantidad" class="text-center">${carrito.cantidad}</td>
              <td id="minus-plus" class="text-center">
                  <button  id="btn_minus" class="btn btn-info btn-sm">
                      -
                  </button>
                  <button id="btn_plus" class="btn btn-success btn-sm">
                      +
                  </button>
              </td>
              <td id="precio" class="text-center"><span>${carrito.precio}</span></td>
              <td id="btn_remove" class="text-center">
              <a id="remove" class="btn btn-danger"">
              <i class="fas fa-trash"></i>
              </a>
              </td>
      `;

  tr.innerHTML = contenido;
  let total_unitario = document.getElementById("total_unitario");
  total += parseInt(carrito.precio);
  total_unitario.innerText = total;

  tbody_item.appendChild(tr);
};

const restar = (index) => {
  let btn_minus = document.querySelectorAll("#btn_minus")[index];
  btn_minus.addEventListener("click", (btn) => {
    let precio = document.querySelectorAll("#precio")[index];
    let cantidad = document.querySelectorAll("#cantidad");
    let total_unit = document.getElementById("total_unitario");
    let rest = parseInt(cantidad[index].innerText) - 1;
    if (rest >= 1) {
      total -= parseInt(precio.innerText);
      cantidad[index].innerText = rest;
      total_unit.innerText = total;
    }
  });
};

const sumar = (index) => {
  let btn_plus = document.querySelectorAll("#btn_plus")[index];
  btn_plus.addEventListener("click", (btn) => {
    let precio = document.querySelectorAll("#precio")[index];
    let cantidad = document.querySelectorAll("#cantidad");
    let total_unit = document.getElementById("total_unitario");
    console.log("cantidad");
    console.log(cantidad);
    let suma = parseInt(cantidad[index].innerText) + 1;
    if (suma >= 1) {
      console.log(precio);
      total += parseInt(precio.innerText);
      cantidad[index].innerText = suma;
      total_unit.innerText = total;
    }
  });
};

const eliminar = (index, platillo) => {
  let btn_eliminar = document.querySelectorAll("#remove")[index];
  btn_eliminar.addEventListener("click", () => {
    let ind = index;
    console.log("ind");
    console.log(ind);
    let cantidad = document.querySelectorAll("#cantidad")[ind];
    let precio = document.querySelectorAll("#precio")[ind];
    let total_apagar = document.getElementById("total_unitario");
    let items = document.querySelector("#items");
    let item = items.querySelectorAll("tr")[ind];
    console.log(`items.querySelectorAll("tr")`);
    console.log(items.querySelectorAll("tr"));
    console.log("");
    console.log("cantidad");
    console.log(cantidad);
    console.log("item");
    console.log(item);

    total -= parseInt(cantidad.innerText) * parseInt(precio.innerText);
    total_apagar.innerText = total;
    eliminarPlatilloByIdLocalStorage(platillo);
    items.removeChild(item);
  });
};

(() => {
  "Cargar Platillos SELECCIONADOS";

  let platilloLS = obtenerPlatillosLocalStorage();
  let footer = document.getElementById("footer");
  if (platilloLS === null) {
    footer.classList.remove("footer-none");
    footer.classList.add("footer-block");
  } else {
    footer.classList.remove("footer-block");
    footer.classList.add("footer-none");
  }

  platilloLS.forEach((platillo, index) => {
    console.log(platillo);
    rendercarrito(platillo, index);

    restar(index);

    sumar(index);

    eliminar(index, platillo);
  });
})();
