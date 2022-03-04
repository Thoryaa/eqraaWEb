//slider
const dots = document.querySelectorAll(".btn-slid-container button");
const images = document.querySelectorAll(".image-container img");
let i = 0; // current slide
let j = 3; // total
function next() {
    document.getElementById("content" + (i + 1)).classList.remove("active");
    i = (j + i + 1) % j;
    document.getElementById("content" + (i + 1)).classList.add("active");
    indicator(i + 1);
}

function prev() {
    document.getElementById("content" + (i + 1)).classList.remove("active");
    i = (j + i - 1) % j;
    document.getElementById("content" + (i + 1)).classList.add("active");
    indicator(i + 1);
}

function indicator(num) {
    dots.forEach(function(dot) {
        dot.style.backgroundColor = "white";
    });
    document.querySelector(".btn-slid-container button:nth-child(" + num + ")").style.backgroundColor = " rgb(164 191 164)";
}

function dot(index) {
    images.forEach(function(image) {
        image.classList.remove("active");
    });
    document.getElementById("content" + index).classList.add("active");
    i = index - 1;
    indicator(index);
}
//model open
var modelbtn = document.querySelector('#model-btn');
var model = document.querySelector('.model-container');
var closelbtn = document.querySelector('.close');
modelbtn.addEventListener('click', function() {
    model.classList.add('model-active');
});
//mpdelclose

closelbtn.addEventListener('click', function() {
        model.classList.remove('model-active');
    })
    //addproduct
var Nameproduct = document.getElementById('Nameproduct');;
var pprie = document.getElementById('pprice');;
var newprice = document.getElementById('newprice');;
var save = document.getElementById('save');;
class products {
    constructor(id, Nameproduct, pprice, newprice) {
            this.id = id;
            this.Nameproduct = Nameproduct;
            this.pprice = pprice;
            this.newprice = newprice;

        }
        //show data in cart
    showData() {
            const newcard = `<div class="book-card">
    <img src="assests/img/1642416191030.jpg" alt="" height="150">
    <div class="operation-icon">
    <ion-icon name="create-outline" class="icon" id='edit'></ion-icon>
    <ion-icon name="trash-outline" class="icon" id='delete'></ion-icon>
</div>
    <div class=" book-detail">
        <h4>${this.Nameproduct}</h4>
        <div>
            <p> <span class="price">${this.newprice}</span><span>ريال</span>
            </p>
            <p> <span class="old-price" style="text-decoration: line-through;">${this.pprice}</span><span>ريال</span>

                <p>شامل الضريبة</p>
        </div>
    </div>
    <div class=" down-info ">
        <svg class="fav " xmlns:xlink="http://www.w3.org/1999/xlink " xmlns="http://www.w3.org/2000/svg " class="icon icon--default list__icon " width="24 " height="24 "><defs><symbol viewBox="0 0 24 24 " id="star " xmlns="http://www.w3.org/2000/svg
        "><path d="M12 0L8.75 8.125 0 8.719l6.719 5.625-2.125 8.469L12 18.155l7.406 4.657-2.125-8.47L24 8.72l-8.75-.594z "></path></symbol></defs>
            <use xlink:href="#star " ></use>
            </svg>
        <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" title="cart" class="button__icon" width="24" height="24"><defs><symbol viewBox="0 0 22 22" id="cart-plus" xmlns="http://www.w3.org/2000/svg"><path d="M1.408 0C.68 0 .085.604.085 1.342c0 .737.595 1.342 1.323 1.342A1.337 1.337 0 002.6.772a3 3 0 012.167 2.394l2.48 14.291a1.994 1.994 0 001.79 1.647 1.68 1.68 0 00-.352 1.022c0 .923.744 1.678 1.654 1.678a1.673 1.673 0 101.313-2.684h4.321a1.68 1.68 0 00-.34 1.006c0 .923.743 1.678 1.653 1.678s1.654-.755 1.654-1.678c0-.378-.13-.724-.34-1.006h1.663v-.67H9.204A1.326 1.326 0 017.9 17.34l-.448-2.58h10.586a2.326 2.326 0 002.252-1.801L22 5.735 5.65 4.382 5.42 3.05C5.112 1.288 3.6 0 1.835 0h-.428zM13.47 7.063c.254 0 .458.206.458.458v1.835h1.835a.458.458 0 110 .917h-1.835v1.834a.457.457 0 01-.458.459.457.457 0 01-.459-.459v-1.834h-1.834a.46.46 0 010-.917h1.834V7.52c0-.252.204-.458.459-.458z"></path></symbol></defs>
                <use xlink:href="#cart-plus" ></use>
            </svg>

    </div>
</div>`;
            document.getElementById('card_containers').innerHTML += newcard;
            return this;
        }
        //store data in local storage
    storeData() {

        const allProduct = (localStorage.getItem("Products")) ??[];
        allProduct.push({ id: this.id, Nameproduct: this.Nameproduct, pprice: this.pprice, newprice: this.newprice });

        localStorage.setItem("Products", JSON.stringify(allProduct));
    }
    static showAllProducts() {
        if (localStorage.getItem("Products")) {
            JSON.parse(localStorage.getItem("Products")).forEach((e) => {
                const newcard = `<div class="book-card">
                <img src="assests/img/1642416191030.jpg" alt="" height="150">
                <div class="operation-icon">
                <ion-icon name="create-outline" class="icon" id='edit'></ion-icon>
                <ion-icon name="trash-outline" class="icon" id='delete'></ion-icon>
            </div>
                <div class=" book-detail">
                    <h4>${e.Nameproduct}</h4>
                    <div>
                        <p> <span class="price">${e.newprice}</span><span>ريال</span>
                        </p>
                        <p> <span class="old-price" style="text-decoration: line-through;">${e.pprice}</span><span>ريال</span>
            
                            <p>شامل الضريبة</p>
                    </div>
                </div>
                <div class=" down-info ">
                    <svg class="fav " xmlns:xlink="http://www.w3.org/1999/xlink " xmlns="http://www.w3.org/2000/svg " class="icon icon--default list__icon " width="24 " height="24 "><defs><symbol viewBox="0 0 24 24 " id="star " xmlns="http://www.w3.org/2000/svg
                    "><path d="M12 0L8.75 8.125 0 8.719l6.719 5.625-2.125 8.469L12 18.155l7.406 4.657-2.125-8.47L24 8.72l-8.75-.594z "></path></symbol></defs>
                        <use xlink:href="#star " ></use>
                        </svg>
                    <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" title="cart" class="button__icon" width="24" height="24"><defs><symbol viewBox="0 0 22 22" id="cart-plus" xmlns="http://www.w3.org/2000/svg"><path d="M1.408 0C.68 0 .085.604.085 1.342c0 .737.595 1.342 1.323 1.342A1.337 1.337 0 002.6.772a3 3 0 012.167 2.394l2.48 14.291a1.994 1.994 0 001.79 1.647 1.68 1.68 0 00-.352 1.022c0 .923.744 1.678 1.654 1.678a1.673 1.673 0 101.313-2.684h4.321a1.68 1.68 0 00-.34 1.006c0 .923.743 1.678 1.653 1.678s1.654-.755 1.654-1.678c0-.378-.13-.724-.34-1.006h1.663v-.67H9.204A1.326 1.326 0 017.9 17.34l-.448-2.58h10.586a2.326 2.326 0 002.252-1.801L22 5.735 5.65 4.382 5.42 3.05C5.112 1.288 3.6 0 1.835 0h-.428zM13.47 7.063c.254 0 .458.206.458.458v1.835h1.835a.458.458 0 110 .917h-1.835v1.834a.457.457 0 01-.458.459.457.457 0 01-.459-.459v-1.834h-1.834a.46.46 0 010-.917h1.834V7.52c0-.252.204-.458.459-.458z"></path></symbol></defs>
                            <use xlink:href="#cart-plus" ></use>
                        </svg>
            
                </div>
            </div>`;
                document.getElementById('card_containers').innerHTML += newcard;
            })
        }
    }
}

save.addEventListener('click', function() {
    let id = Math.floor(Math.random() * 10000);
    const newproduct = new products(id, Nameproduct.value, pprie.value, newprice.value);

    newproduct.showData().storeData();
    alert('data insert');
    model.classList.remove('model-active');

    Nameproduct.value = '';
    pprice.value = '';
    newprice.value = '';

}) products.showAllProducts();