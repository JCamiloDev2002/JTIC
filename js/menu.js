/* let menu = [
  {
    bebidas: [
      {
        titulo: "AGUA DE PANELA",
        imagen: "img/agua-de-panela.jpg",
        descripcion: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Minus possimus, labore, odio fugit quaerat, voluptatum 
        nisi soluta deserunt facilis pariatur accusantium corporis
        laudantium odit culpa quae illo laborum error quos.
        `,
        valor_unit: "$5.000",
      },
      {
        titulo: "AGUARDIENTE",
        imagen: "img/aguardiente.jpg",
        descripcion: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Minus possimus, labore, odio fugit quaerat, voluptatum 
        nisi soluta deserunt facilis pariatur accusantium corporis
        laudantium odit culpa quae illo laborum error quos.
        `,
        valor_unit: "$20.000",
      },
      {
        titulo: "CHAMPUS CARIBEÑO",
        imagen: "img/El-champus-colombiano.png",
        descripcion: `Lorem ipsum dolor sit amet consectetur adipisicing elit 
        Minus possimus, labore, odio fugit quaerat, voluptatum 
        nisi soluta deserunt facilis pariatur accusantium corporis
        laudantium odit culpa quae illo laborum error quos.
        Lorem ipsum dolor sit amet consectetur adipisicing elit 
        Minus possimus, labore, odio fugit quaerat, voluptatum 
        nisi soluta deserunt facilis pariatur accusantium corporis
        laudantium odit culpa quae illo laborum error quos.`,
        valor_unit: "$5.000",
      },
      {
        titulo: "CHICHA",
        imagen: "img/chicha-camba-1761.jpg",
        descripcion: `Lorem ipsum dolor sit amet consectetur adipisicing elit 
        Minus possimus, labore, odio fugit quaerat, voluptatum 
        nisi soluta deserunt facilis pariatur accusantium corporis
        laudantium odit culpa quae illo laborum error quos.
        Lorem ipsum dolor sit amet consectetur adipisicing elit 
        Minus possimus, labore, odio fugit quaerat, voluptatum 
        nisi soluta deserunt facilis pariatur accusantium corporis
        laudantium odit culpa quae illo laborum error quos.`,
        valor_unit: "$8.000",
      },
      {
        titulo: "CHIRRINCHÍ",
        imagen: "img/chirrinchi.jpg",
        descripcion: `Lorem ipsum dolor sit amet consectetur adipisicing elit 
        Minus possimus, labore, odio fugit quaerat, voluptatum 
        nisi soluta deserunt facilis pariatur accusantium corporis
        laudantium odit culpa quae illo laborum error quos.
        Lorem ipsum dolor sit amet consectetur adipisicing elit 
        Minus possimus, labore, odio fugit quaerat, voluptatum 
        nisi soluta deserunt facilis pariatur accusantium corporis
        laudantium odit culpa quae illo laborum error quos.`,
        valor_unit: "$25.000",
      },
      {
        titulo: "SABAJÓN DE COCO",
        imagen: "img/coconut-sabajon.jpg",
        descripcion: `Lorem ipsum dolor sit amet consectetur adipisicing elit 
        Minus possimus, labore, odio fugit quaerat, voluptatum 
        nisi soluta deserunt facilis pariatur accusantium corporis
        laudantium odit culpa quae illo laborum error quos.
        Lorem ipsum dolor sit amet consectetur adipisicing elit 
        Minus possimus, labore, odio fugit quaerat, voluptatum 
        nisi soluta deserunt facilis pariatur accusantium corporis
        laudantium odit culpa quae illo laborum error quos.`,
        valor_unit: "$18.000",
      },
      {
        titulo: "REFAJO",
        imagen: "img/refajo.jpg",
        descripcion: `Lorem ipsum dolor sit amet consectetur adipisicing elit 
        Minus possimus, labore, odio fugit quaerat, voluptatum 
        nisi soluta deserunt facilis pariatur accusantium corporis
        laudantium odit culpa quae illo laborum error quos.
        Lorem ipsum dolor sit amet consectetur adipisicing elit 
        Minus possimus, labore, odio fugit quaerat, voluptatum 
        nisi soluta deserunt facilis pariatur accusantium corporis
        laudantium odit culpa quae illo laborum error quos.`,
        valor_unit: "$5.000",
      },
      {
        titulo: "SORBETE DE BOROJÓ",
        imagen: "img/sorbete-de-borojo-2826.gif",
        descripcion: `Lorem ipsum dolor sit amet consectetur adipisicing elit 
        Minus possimus, labore, odio fugit quaerat, voluptatum 
        nisi soluta deserunt facilis pariatur accusantium corporis
        laudantium odit culpa quae illo laborum error quos.
        Lorem ipsum dolor sit amet consectetur adipisicing elit 
        Minus possimus, labore, odio fugit quaerat, voluptatum 
        nisi soluta deserunt facilis pariatur accusantium corporis
        laudantium odit culpa quae illo laborum error quos.`,
        valor_unit: "$8.000",
      },
      {
        titulo: "VICHÉ",
        imagen: "img/Viche.jpg",
        descripcion: `Lorem ipsum dolor sit amet consectetur adipisicing elit 
        Minus possimus, labore, odio fugit quaerat, voluptatum 
        nisi soluta deserunt facilis pariatur accusantium corporis
        laudantium odit culpa quae illo laborum error quos.
        Lorem ipsum dolor sit amet consectetur adipisicing elit 
        Minus possimus, labore, odio fugit quaerat, voluptatum 
        nisi soluta deserunt facilis pariatur accusantium corporis
        laudantium odit culpa quae illo laborum error quos.`,
        valor_unit: "$15.000",
      },
    ],
  },
];

let lista_platillos = document.getElementById("Lista-platillos");

const agregandoListadoMenu = (i, divRow) => {
  let divFourColumns = document.createElement("div");
  divFourColumns.classList.add("four", "columns");
  divFourColumns.setAttribute("id", `four-columns-${i}`);

  const card = `
  <div id="card_${i}" class="card">
  <img id="imagen_${i}" src=${menu[0].bebidas[i].imagen} class="imagen-agua-de-panela u-full-width">
  <div class="info-card">
      <div>
          <h4 id="titulo_${i}">${menu[0].bebidas[i].titulo}</h4>
      <div>
      <p id="descripcion_${i}" style="text-align: justify;">
      <i> 
      ${menu[0].bebidas[i].descripcion}
      </i>
      </p>
      <h6 class="text"><b>Precio</b><span id="valor-unitario_${i}" class="u-pull-right">${menu[0].bebidas[i].valor_unit}</h6></span>
      </div>
      <button id="btn-agregar_${i}" type="button" class="button-primary u-full-width button agregar-carrito"
        data-toggle="modal"
        data-target="#modal">
       Agregar al carrito
      </button>
      </div>
  </div>
</div>
  `;

  divFourColumns.innerHTML = card;

  divRow.appendChild(divFourColumns);
};

(function () {
  "Lista Menu";
  let tamaño = menu[0].bebidas.length;
  console.log(menu);
  console.log(tamaño);
  let divTamaño = tamaño / 3;
  let cantFilas = divTamaño % 1 == 0 ? divTamaño : Math.round(divTamaño) + 1;
  console.log(cantFilas);
  let i = 0;
  for (let index = 1; index <= cantFilas; index++) {
    let cont = 0;
    console.log(index);
    let divRow = document.createElement("div");
    divRow.classList.add("row");
    console.log("divRow");
    console.log(divRow);

    lista_platillos.appendChild(divRow);
    while (cont < 3 && i < tamaño) {
      console.log(cont);
      agregandoListadoMenu(i, divRow);
      i++;
      cont++;
    }
  }
})();

let list_card = document.querySelectorAll("#Lista-platillos .card");

list_card.forEach((element) => {
  console.log(element.id);
  let btn_agregar = document.querySelectorAll(`btn-agregar_${element.id.split("")}`).split;
  console.log(btn_agregar);

});
 */

const Clickbutton = document.querySelectorAll(".btnAnadir");
/* let tbody = document.getElementById("tbody"); */
let carrito = [];
//carito=JSON.parse(localStorage.getItem('carito'));
console.log(Clickbutton);

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

Clickbutton.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    addToCarritoItem(e, index);
  });
});

function addToCarritoItem(e, index) {
  const card = document.querySelectorAll(`#card-${index}`)[0];
  console.log("card");
  console.log(card);
  const id_card = card.getAttribute("id");
  const info_card = card.querySelector(`.info-card`);
  console.log(info_card);
  let nombreProducto = info_card.querySelector("h4").innerText;
  let precioProducto = info_card
    .querySelector("h6")
    .querySelector("span").innerText;
  let imgProducto = card.querySelector("img").getAttribute("src");
  console.log("nombreProducto");
  console.log(nombreProducto);
  console.log("precio");
  console.log(precioProducto);
  console.log("imagen");
  console.log(imgProducto);
  /* const precioProducto = item
    .querySelector(".info-card")
    .querySelector("span").textContent;
  console.log(precioProducto);
  const imgProducto = item.querySelector(".u-full-width").src;
  console.log(imgProducto);*/

  const platillo = {
    id: id_card,
    nombre: nombreProducto,
    precio: precioProducto,
    img: imgProducto,
    cantidad: 1,
  };
  console.log("platillo");

  console.log(platillo);

  if (guardarSeleccionMenuLocalStorage(platillo)) {
    alert("SE AGREGO CON EXITO EL PLATILLO");
  } else {
    alert("EL PLATILLO YA FUE AGREGADO, POR FAVOR REVISA EL CARRITO");
  }
  console.log("localStorage");
  let pl = obtenerPlatillosLocalStorage();
  console.log(pl);

  /* additemCarrito(producto); */
}

/* function additemCarrito(nuevoProducto) {
  carrito.push(nuevoProducto);
  addLocalStorage(carrito);
  rendercarrito(carrito);
} */
/* console.log("tbody"); */
/* console.log(tbody);
tbody.innerHTML = "";
function rendercarrito(carrito) {
  carrito.map((item) => {
    const tr = document.createElement("tr");
    tr.classList.add("ItemCarrito");
    const contenido = `
            <tr>
                <th scope="row">id</th>
                <td>${item.nombre}</td>
                <td>${item.cantidad}</td>
                <td>
                    <button class="btn btn-info btn-sm">
                        +
                    </button>
                    <button class="btn btn-danger btn-sm">
                        -
                    </button>
                </td>
                <td><span>${item.precio}</span></td>
            </tr>
        `;

    tr.innerHTML = contenido;
    tbody.appendChild(tr);
  });
} */
