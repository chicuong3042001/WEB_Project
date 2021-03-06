const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let users = localStorage.getItem('myUsers') ? JSON.parse(localStorage.getItem('myUsers')) : [{
   email: "congty@gmail.com",
   password: "12345678",
   phone: "0142125671",
   typeUser: "admin",
}
];
let loginUser = JSON.parse(localStorage.getItem('loginUser'))
let products = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [
   {
      name: 'Samsung Galaxy s21 Ultra',
      type: 'Samsung',
      price: 29000000,
      quantity: 200,
      img: './img/s21-ultra.jpg',
   },
   {
      name: 'Samsung Galaxy s21 Plus',
      type:'Samsung',
      price: 26900000,
      quantity: 200,
      img: './img/s21+.jpg'
   },
   {
      name: 'Samsung Galaxy s20 Plus',
      type:'Samsung',
      price: 23000000,
      quantity: 200,
      img: './img/s20+.jpg'
   },
   {
      name: 'Samsung Galaxy s21',
      type:'Samsung',
      price: 26000000,
      quantity: 200,
      img: './img/s21.jpg'
   },
   {
      name: 'Oppo Find X3',
      type:'Oppo',
      price: 20000000,
      quantity: 200,
      img: './img/oppo-find-x3.jpg'
   },
   {
      name: 'Oppo Find X3 Pro',
      type:'Oppo',
      price: 23000000,
      quantity: 200,
      img: './img/oppo-find-x3-pro-black.jpg'
   },
   {
      name: 'Oppo Find X3 Neo',
      type:'Oppo',
      price: 22000000,
      quantity: 200,
      img: './img/oppofindx3neo.jpg'
   },{
      name: 'Iphone 12',
      type:'Apple',
      price: 21000000,
      quantity: 200,
      img: './img/ip12.jpg'
   },{
      name: 'Iphone 12 Pro Max',
      type:'Apple',
      price: 29900000,
      quantity: 200,
      img: './img/iphone-12-pro-max.jpg'
   },{
      name: 'Iphone 11 Pro Max',
      type:'Apple',
      price: 25900000,
      quantity: 200,
      img: './img/ip-11promax.jpg'
   },{
      name: 'Iphone 11 Pro',
      type:'Apple',
      price: 23900000,
      quantity: 200,
      img: './img/iphone-11-pro.jpg'
   },{
      name: 'Iphone 8 Plus',
      type:'Apple',
      price: 18000000,
      quantity: 200,
      img: './img/iphone-8-plus.jpg'
   },{
      name: 'Samsung Galaxy Note20',
      type:'Samsung',
      price: 20000000,
      quantity: 200,
      img: './img/note20.jpg'
   },{
      name: 'Samsung Galaxy Note20 Ultra',
      type:'Samsung',
      price: 24950000,
      quantity: 200,
      img: './img/note20-ultra.jpg'
   },{
      name: 'Asus Rog Phone 2',
      type:'Asus',
      price: 20900000,
      quantity: 200,
      img: './img/asus-rog-phone-2.jpg'
   },{
      name: 'Asus Rog Phone 5 5G',
      type:'Asus',
      price: 22900000,
      quantity: 200,
      img: './img/asus-rog-phone-5g.jpg'
   },{
      name: 'Tai nghe Logitech H250',
      type:'phukien',
      price: 700000,
      quantity: 200,
      img: './img/tai-nghe-Logitech-H250.jpg'
   },{
      name: 'Tai nghe Jays',
      type:'phukien',
      price: 600000,
      quantity: 200,
      img: './img/tai-nghe-Jays.jpg'
   },{
      name: 'Tai nghe bluetooth Airpod 2',
      type:'phukien',
      price: 5000000,
      quantity: 200,
      img: './img/tai-nghe-bluetooth-airpods-2.jpg'
   },{
      name: 'Tai nghe bluetooth Mozard TS13',
      type:'phukien',
      price: 850000,
      quantity: 200,
      img: './img/tai-nghe-bluetooth-true-wireless-mozard-ts13.jpg'
   },{
      name: '????? s???c kh??ng d??y Xmobile',
      type:'phukien',
      price: 3000000,
      quantity: 200,
      img: './img/de-sac-khong-day-qi-10w-xmobile-ts-c106w-b-den-avatar-1-600x600.jpg'
   },{
      name: 'Adapter s???c type-C Xmobile',
      type:'phukien',
      price: 200000,
      quantity: 200,
      img: './img/adapter-sac-type-c-pd-gan-30w-xmobile-mfm30-trang-thumb-2-600x600.jpeg'
   },{
      name: 'Adapter s???c type-C Ava',
      type:'phukien',
      price: 210000,
      quantity: 200,
      img: './img/adapter-sac-1a-ava-jc62a-trang-600x600.jpg'
   },{
      name: 'Adapter s???c 2 c???ng Xmobile',
      type:'phukien',
      price: 390000,
      quantity: 200,
      img: './img/adapter-2-cong-pd-qc-30-gan-65w-xmobile-mfr65-thumb-1-600x600.jpeg'
   },{
      name: 'C??p lightning 20cm Ava',
      type:'phukien',
      price: 150000,
      quantity: 200,
      img: './img/cap-lightning-20cm-ava-ltpl-01-den-avatar-ava-600x600.jpg'
   },{
      name: 'C??p micro 20cm Ava',
      type:'phukien',
      price: 100000,
      quantity: 200,
      img: './img/cap-micro-20cm-ava-speed-ii-1-600x600.jpg'
   },{
      name: 'C??p type-C 1m Hydrus',
      type:'phukien',
      price: 150000,
      quantity: 200,
      img: './img/cap-type-c-1m-hydrus-dr-t01-thumb-600x600.jpg'
   },{
      name: 'Bao da Galaxy S21 Plus Clear View',
      type:'phukien',
      price: 700000,
      quantity: 200,
      img: './img/bao-da-galaxy-s21-plus-clear-view-samsung-240821-040856-600x600.jpg'
   },{
      name: 'Bao da n???p g???p Galaxy S21 Ultra Clear View',
      type:'phukien',
      price: 800000,
      quantity: 200,
      img: './img/bao-da-galaxy-s21-ultra-nap-gap-clear-view-samsung-1-1-600x600.jpg'
   },{
      name: '???p l??ng nh???a d???o Galaxy S21',
      type:'phukien',
      price: 130000,
      quantity: 200,
      img: './img/op-lung-galaxy-s21-nhua-deo-sliipa-jm-nude-1-600x600.jpg'
   },{
      name: '???p l??ng Galaxy Zflip 3',
      type:'phukien',
      price: 150000,
      quantity: 200,
      img: './img/op-lung-galaxy-z-flip3-5g-nhua-deo-trong-samsung-kem-vong-deo-ava-600x600.jpg'
   },{
      name: '???p l??ng Iphone 13 Pro Spectrum',
      type:'phukien',
      price: 200000,
      quantity: 200,
      img: './img/op-lung-iphone-13-pro-itskins-nhua-deo-spectrum-clear-antimicrobial-xam-1.jpg'
   },{
      name: '???p l??ng Iphone 13 Pro Max Native Union',
      type:'phukien',
      price: 250000,
      quantity: 200,
      img: './img/op-lung-iphone-13-pro-max-native-union-da-clic-classic-xanh-1.jpg'
   },
];


let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
let order = localStorage.getItem('order') ? JSON.parse(localStorage.getItem('order')) : [];
let pageProduct = []

updateLocalStorage()

let productsHtml = [...products];
let productsInPage = 8;

const modal = $('.modal')
const btnOpenRegister = $('.js-register')
const btnOpenLogin = $('.js-login')

const topsale = $('.top-sale select')
const listtopsale = $('.top-sale .product-list')

const navItems = $$('.nav-content-list li a')

render();

// Modal
function closeModal(modalElement) {
   modalElement.classList.remove('open');
}

function openModal(modalElement) {
   modalElement.classList.add('open');
}

let htmlRegister = `
<div class="form-header">
<a href="#" onclick="closeModal(modal)"><i class="fas fa-times"></i></a>
<h2>????ng k??</h2>
</div>
<div class="warning"></div>
<form class="form-content form-register">
<div class="form-group">
   <label class="form-label">Email</label>
   <input
      class="form-input"
      type="email"
      name="email"
      placeholder="Example@email.com"
      value=""                
   />
   <span class="message-error"></span>
</div>
<div class="form-group">
   <label class="form-label">M????t kh????u</label>
   <input
      class="form-input"
      type="password"
      name="password"
      placeholder="Nh????p m????t kh????u t???? 6 ki?? t???? tr???? l??n"
      value=""                
   />
   <span class="message-error"></span>
</div>
<div class="form-group">
   <label class="form-label">Nh????p la??i m????t kha??u</label>
   <input
      class="form-input"
      type="password"
      name="comfirmpass"
      placeholder="Nh????p la??i m????t kh????u"
      value=""                
   />
   <span class="message-error"></span>
</div>
<div class="form-group">
   <label class="form-label">S??T</label>
   <input
      class="form-input"
      type="number"
      name="phone"
      placeholder="0123456789"
      value=""                
   />
   <span class="message-error"></span>
</div>
<div class="form-group">
   <label class="form-label"></label>
   <div>
      <input
         class="form-input"
         type="checkbox"
         name="checkbox"
         placeholder="0123456789"
         value=""                
      />
      T??i ??????ng y?? v????i <a href="#">??i????u khoa??n s???? du??ng</a>
   </div>
   <span class="message-error"></span>
</div>
<button class="form-submit">????ng k??</button>
</form>
`

let htmlLogin = `
<div class="form-header">
    <a href ="#" onclick="closeModal(modal)"><i class="fas fa-times"></i></a>
    <h2>????ng Nh????p</h2>
</div>
<div class="warning">
</div>
<form class="form-content form-login">
   <div class="form-group">
      <label class="form-label">Ta??i khoa??n email</label>
      <input
         class="form-input login-input"
         type="email"
         name="email"
         placeholder="example@gmail.com"
         value=""
      />
      <span class="message-error"></span>
   </div>
   <div class="form-group">
      <label class="form-label">M???t kh???u</label>
      <input
         class="form-input login-input"
         type="password"
         name="password"
         placeholder="Nh???p m???t kh???u"
         value=""
      />
      <span class="message-error"></span>
   </div>
   <button class="form-submit">????ng nh???p</button>
   <p>Ba??n ch??a co?? ta??i khoa??n? <a href="#" onclick="tranferRegister()">????ng ky??</a></p>
</form>
`

btnOpenRegister.addEventListener('click', () => {
   openModal(modal);
   $('.modal-form').innerHTML = htmlRegister;
   runCheckRegister();
});

btnOpenLogin.addEventListener('click', () => {
   openModal(modal);
   $('.modal-form').innerHTML = htmlLogin;
   runCheckLogin();
});

function tranferRegister() {
   $('.modal-form').innerHTML = htmlRegister
   runCheckRegister();
}

// Content Code
function viewTopSale(inp) {
   switch (inp) {
      case 'ngay':
         listtopsale.innerHTML = '<ul class="product-list"><li class="products" ><img src="./img/s21-ultra.jpg" alt="product"><div class="products-content"><p class="price">29000000??</p><p class="description">Samsung Galaxy s21 Ultra </p><button class="buy">Mua ngay</button></div></li></ul> '
         break;
      case 'thang':
         listtopsale.innerHTML = '<ul class="product-list"><li class="products" ><img src="./img/iphone-12-pro-max.jpg" alt="product"><div class="products-content"><p class="price">29900000??</p><p class="description">Iphone 12 Pro Max</p><button class="buy">Mua ngay</button></div></li></ul> '
         break;
      case 'nam':
         listtopsale.innerHTML = '<ul class="product-list"><li class="products" ><img src="./img/asus-rog-phone-5g.jpg" alt="product"><div class="products-content"><p class="price">22900000??</p><p class="description">Asus Rog Phone 5 5G</p><button class="buy">Mua ngay</button></div></li></ul> '
         break;

      default:
         break;
   }
}

//Lo??c product
for (let item of navItems) {
   item.addEventListener('click', () => {
      productsHtml = [];
      for (let product of products) {
         if (item.getAttribute('typeproduct').toLowerCase() == product.type.toLowerCase())
            productsHtml.push(product);
      }
      render()
   });
}

$('.search a').addEventListener('click', () => {
   let searchValue = nonAccentVietnamese($('.search-ip').value.toLowerCase());
   productsHtml = [];
   for (let product of products) {
      if (nonAccentVietnamese(product.name.toLowerCase()).includes(searchValue))
         productsHtml.push(product);
   }
   $('.search-ip').value = '';
   render();
})

function nonAccentVietnamese(str) {
   str = str.toLowerCase();
   //     We can also use this instead of from line 11 to line 17
   //     str = str.replace(/\u00E0|\u00E1|\u1EA1|\u1EA3|\u00E3|\u00E2|\u1EA7|\u1EA5|\u1EAD|\u1EA9|\u1EAB|\u0103|\u1EB1|\u1EAF|\u1EB7|\u1EB3|\u1EB5/g, "a");
   //     str = str.replace(/\u00E8|\u00E9|\u1EB9|\u1EBB|\u1EBD|\u00EA|\u1EC1|\u1EBF|\u1EC7|\u1EC3|\u1EC5/g, "e");
   //     str = str.replace(/\u00EC|\u00ED|\u1ECB|\u1EC9|\u0129/g, "i");
   //     str = str.replace(/\u00F2|\u00F3|\u1ECD|\u1ECF|\u00F5|\u00F4|\u1ED3|\u1ED1|\u1ED9|\u1ED5|\u1ED7|\u01A1|\u1EDD|\u1EDB|\u1EE3|\u1EDF|\u1EE1/g, "o");
   //     str = str.replace(/\u00F9|\u00FA|\u1EE5|\u1EE7|\u0169|\u01B0|\u1EEB|\u1EE9|\u1EF1|\u1EED|\u1EEF/g, "u");
   //     str = str.replace(/\u1EF3|\u00FD|\u1EF5|\u1EF7|\u1EF9/g, "y");
   //     str = str.replace(/\u0111/g, "d");
   str = str.replace(/??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???/g, "a");
   str = str.replace(/??|??|???|???|???|??|???|???|???|???|???/g, "e");
   str = str.replace(/??|??|???|???|??/g, "i");
   str = str.replace(/??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???/g, "o");
   str = str.replace(/??|??|???|???|??|??|???|???|???|???|???/g, "u");
   str = str.replace(/???|??|???|???|???/g, "y");
   str = str.replace(/??/g, "d");
   // Some system encode vietnamese combining accent as individual utf-8 characters
   str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // Huy???n s???c h???i ng?? n???ng 
   str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ??, ??, ??, ??, ??
   return str;
}

//========Validate=========
//Register form
function runCheckRegister() {
   Validator({
      form: '.form-register',
      formGroupSelector: '.form-group',
      errorSelector: '.message-error',
      rules: [
         Validator.isRequired(
            'input[name="email"]',
            "Vui lo??ng nh????p email"
         ),
         Validator.isEmail('input[name="email"]'),
         Validator.isRequired(
            'input[name="password"]',
            "Vui lo??ng nh????p m????t kh????u"
         ),
         Validator.minLength('input[name="password"]', 6),
         Validator.isRequired(
            'input[name="comfirmpass"]',
            'Vui lo??ng nh????p m????t kh????u'
         ),
         Validator.isDuplicated(
            'input[name="comfirmpass"]',
            () => {
               return document.querySelector('input[name="password"]')
                  .value;
            },
            "M????t kh????u kh??ng tru??ng kh????p"
         ),
         Validator.isRequired(
            'input[name="phone"]',
            "Vui lo??ng nh????p s???? ??i????n thoa??i"
         ),
         Validator.isCorrectPhone('input[name="phone"]'),
         Validator.isRequired(
            'input[name="checkbox"]',
            'Ba??n ch??a ??????ng y?? ??i????u khoa??n s???? du??ng'
         ),
      ],
      onSubmit: function (data) {
         checkRegister(data);
      },
   })

   function checkRegister(data) {
      let isFound = false;
      let errorMessage = ``
      for (let user of users) {
         if (data.email === user.email && data.phone === user.phone) {
            isFound = true;
            errorMessage = `Email va?? s???? ??i????n thoa??i na??y ??a?? ????????c ????ng ky??`
         }
         else if (data.email === user.email) {
            isFound = true;
            errorMessage = `Email na??y ??a?? ????????c ????ng ky??. `
         }
         else if (data.phone === user.phone) {
            isFound = true;
            errorMessage = `S???? ??i????n thoa??i na??y ??a?? ????????c ????ng ky??`
         }

         if (isFound) {
            $('.warning').innerHTML = `<div class="block-warning">
                    <i class="fas fa-exclamation-circle"></i> ${errorMessage}</div>`
            break;
         }
      }
      if (!isFound) {
         updateUsers(data)
         window.location = "./index.html"
      }
   }

   function updateUsers(data) {
      users.push({
         email: data.email,
         password: data.password,
         phone: data.phone,
         typeUser: "member"
      });
      loginUser = users[users.length - 1];
      updateLocalStorage();
   }

   enableSubmit();
}

//Login form
function runCheckLogin() {
   Validator({
      form: '.form-login',
      formGroupSelector: '.form-group',
      errorSelector: '.message-error',
      rules: [
         Validator.isRequired(
            'input[name="email"]',
            "Vui lo??ng nh????p email"
         ),
         Validator.isEmail('input[name="email"]'),
         Validator.isRequired(
            'input[name="password"]',
            "Vui lo??ng nh????p m????t kh????u"
         ),
         Validator.minLength('input[name="password"]', 6),
      ],
      onSubmit: function (data) {
         checkLogin(data)
      }
   });

   function checkLogin(data) {
      let isFound = false;
      for (let user of users) {
         if (data.email === user.email && data.password === user.password && user.typeUser === 'member') {
            isFound = true;
            loginUser = user;
            updateLocalStorage();
            window.location = "./index.html"
         }
      }
      if (!isFound) {
         $('.warning').innerHTML = `<div class="block-warning">
                 <i class="fas fa-exclamation-circle"></i> Ta??i khoa??n ho????c m????t kh????u cu??a ba??n ??a?? sai
              </div>`
         resetInput()
      }
   }

   function resetInput() {
      let inputs = $$('input')
      for (let input of inputs) {
         input.value = '';
      }
   }
   enableSubmit();
}

function updateLocalStorage() {
   let usersData = JSON.stringify(users);
   let loginUserData = JSON.stringify(loginUser);

   localStorage.setItem('myUsers', usersData);
   localStorage.setItem('loginUser', loginUserData)
}

function enableSubmit() {
   $('body').addEventListener('keypress', (e) => {
      if (e.keyCode === 13)
         $('button[class="form-submit"]').click();
   })
}

//render
function renderProduct() {
   for (let item of $$('.product-pages-number')) {
      item.addEventListener('click', () => {
         $('.product-list').innerHTML = htmlProduct(item.getAttribute('index'));
      })
   }
}

function render() {
   let myLogo = $('.nav .login-register');

   //render UserLogin
   if (loginUser) {
      myLogo.innerHTML = `<div class="user-login">
          <p>Xin cha??o ${loginUser.email}</p>
          <a href="" id="logout" onclick="logout()">????ng xu????t</a>
          <a href="./check_order.html" id="logout">Xem ????n ha??ng</a>
       </div>`
   }

   //Number Page
   let pages = Math.ceil(productsHtml.length / productsInPage);
   let pagesHTML = [];
   for (let i = 0; i < pages; i++) {
      if (i === 0)
         pagesHTML.push(
            `<li class="product-pages-number" index="${i}"><a href="">${i + 1}</a></li>`
         )
      else
         pagesHTML.push(
            `<li class="product-pages-number" index="${i}"><a href"#">${i + 1}</a></li>`
         )
   }

   $('.product-pages').innerHTML = pagesHTML.join("");

   //render product
   $('.product-list').innerHTML = htmlProduct();
   renderProduct();

   let productBtn = $$('.products a')
   const buyBtns = $$('.products .js-buy');

   for (let i = 0; i < productBtn.length; i++) {
      let btnIndex = parseInt(productBtn[i].getAttribute('index'))

      //link to Pro Info
      productBtn[i].addEventListener('click', () => {
         pageProduct = productsHtml[btnIndex];
         localStorage.setItem('pageProduct', JSON.stringify(pageProduct));
      })
      //Handle buyBtn
      buyBtns[i].addEventListener('click', () => {
         if (loginUser) {
            alert('???? th??m v??o gi??? h??ng')
            if (cart.length === 0)
               cart.push(createCartProduct(productsHtml[btnIndex]));
            else {
               let isFind = false;
               for (let product of cart) {
                  if (product.name == productsHtml[btnIndex].name) {
                     product.count += 1;
                     isFind = true;
                     break;
                  }
               }

               if (!isFind) {
                  cart.push(createCartProduct(productsHtml[btnIndex]));
               }
            }
            updateProductToCart();
            renderCart();
         }
         else {
            alert('Ba??n pha??i ????ng nh????p ?????? co?? th???? mua ha??ng!!');
            openModal(modal);
            $('.modal-form').innerHTML = htmlLogin;
            runCheckLogin();
         }
      })

      function createCartProduct(product) {
         let cartProduct = product;
         cartProduct.count = 1;
         delete cartProduct.quantity;
         return cartProduct;
      }
   }

}

function htmlProduct(index = 0) {
   let html = [];
   for (let i = index * productsInPage; i < index * productsInPage + productsInPage && i < productsHtml.length; i++) {
      html.push(`<li class="products">
         <a href="./pro_info.html" index="${i}"><img src="${productsHtml[i].img}" alt="product" /></a>
         <div class="products-content">
            <p class="price">${productsHtml[i].price}??</p>
            <p class="description">${productsHtml[i].name}</p>
            <button class="buy js-buy">Th??m v??o gi??? h??ng</button>
         </div>
      </li>`)
   }
   return html.join("");
}

function logout() {
   loginUser = null;
   updateLocalStorage();
   render();
}

//cart
function updateProductToCart() {
   let cartData = JSON.stringify(cart);
   localStorage.setItem('cart', cartData);
}

function deleteCart(index, quantity = 1) {
   cart.splice(index, quantity);
}

function updateCount(index, count) {
   if (count < 1) return;
   cart[index].count = count;
   updateProductToCart();
   renderCart()
}

function renderCart() {
   let cartHtml = ``;
   let Total = 0;
   cart.forEach(item => Total += item.count * item.price)

   for (let item of cart) {
      cartHtml += `<li>
      <div class="info"><img src="${item.img}" alt="img">
         <p>${item.name}</p>
      </div>
      <p class="p">${item.price} ??</p>
      <div class="quantity">
         <button class="remove">-</button>
         <input type="text" value="${item.count}">
         <button class="add">+</button>
      </div>
      <p class="total-price-product">${item.price * item.count} ??</p>
      <i class="fas fa-times delete-product"></i>
   </li>`
   }


   $('.cart-list').innerHTML = cartHtml;

   let deleteBtns = $$('.delete-product');
   let addCountBtns = $$('.add');
   let removeCountBtns = $$('.remove');

   for (let i = 0; i < deleteBtns.length; i++) {
      deleteBtns[i].addEventListener('click', () => {
         deleteCart(i);
         updateProductToCart();
         renderCart();
      })

      addCountBtns[i].addEventListener('click', () => updateCount(i, cart[i].count + 1))
      removeCountBtns[i].addEventListener('click', () => updateCount(i, cart[i].count - 1))
   }

   $('.total-price').innerHTML = `${Total} ??`;
}

$('.clean-cart').addEventListener('click', () => {
   if (confirm("Ba??n co?? mu????n xo??a t????t ca?? s???n ph???m kh??ng ?")) {
      deleteCart(0, cart.length);
      updateProductToCart()
      renderCart();
   }
})


renderCart()

//responsive
var nav = $('.nav')
var navlist = $('.fa-chevron-down')

navlist.onclick = function name(params) {
   let isclose = nav.clientHeight === 48;
   if (isclose) {
      nav.style.height = 'auto'
   }
   else {
      nav.style.height = null
   }
}

