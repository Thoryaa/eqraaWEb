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
//declare model open variable
var modelbtn = document.querySelector('#model-btn');
var model = document.querySelector('.model-container');
var closelbtn = document.querySelector('.close');
//open model
modelbtn.addEventListener('click', function() {
    model.classList.add('model-active');
});
//mpdel close

closelbtn.addEventListener('click', function() {
        model.classList.remove('model-active');
    })
    //addproduct variable-declare-
var Nameproduct = document.getElementById('Nameproduct');;
var pprice = document.getElementById('pprice');;
var newprice = document.getElementById('newprice');;
var save = document.getElementById('save');;
let id = Math.floor(Math.random() * 10000);

let allproductsContainer = document.getElementById("card_containers");
//class products

class products {

    constructor(id, Nameproduct, pprice, newprice) {
            this.id = id;
            this.Nameproduct = Nameproduct;
            this.pprice = pprice;
            this.newprice = newprice;

        }
        //show data in browser  that i insered its info 
    showData() {
            products.showCards(this.id, this.Nameproduct, this.pprice, this.newprice);
            return this;
        }
        //show all card that store in local storage in browser
    static showAllProducts() {
            if (localStorage.getItem("Products")) {
                JSON.parse(localStorage.getItem("Products")).forEach((e) => {
                    products.showCards(e.id, e.Nameproduct, e.pprice, e.newprice);


                })
            }
        }
        //store data in local storage

    storeData() {

            let prod;
            let allProduct = localStorage.getItem('Products');
            if (allProduct == null) {
                prod = [];
            } else { prod = JSON.parse(allProduct) }
            prod.push({ id: this.id, Nameproduct: this.Nameproduct, pprice: this.pprice, newprice: this.newprice });
            localStorage.setItem('Products', JSON.stringify(prod));

        }
        //structure of show card code
    static showCards(id, Nameproduct, pprice, newprice) {


        const newcard = document.createElement("div");
        newcard.innerHTML = `
        <div class="book-card">
    <img src="assests/img/1642416191030.jpg"  height="150" style="cursor:pointer">
    <div class="operation-icon">
    <ion-icon name="create-outline" class="icon edits" data-id="${id}" id="edits"></ion-icon>
    <ion-icon name="trash-outline" class="icon delets" data-id="${id}" ></ion-icon>
    </div>
    <div class=" book-detail">
        <h4>${Nameproduct}</h4>
        <div>
            <p> <span class="price">${newprice}</span><span>ريال</span>
            </p>
            <p> <span class="old-price" style="text-decoration: line-through;">${pprice}</span><span>ريال</span>
    
                <p>شامل الضريبة</p>
        </div>
    </div>
    <div class=" down-info ">
    <ion-icon name="star-outline" class='fav'></ion-icon>
    <ion-icon name="cart-outline" class='carts'></ion-icon>
    
    </div>
    
    </div>
    `;
        document.querySelector('#card_containers').appendChild(newcard);

        return newcard;
    }
}

save.addEventListener('click', function() {

    if (Nameproduct.value !== '') {

        const newproduct = new products(id, Nameproduct.value, pprice.value, newprice.value);

        newproduct.showData().storeData();

        Nameproduct.value = '';
        pprice.value = '';
        newprice.value = '';
        model.classList.remove('model-active');
    } else {
        alert("name cant't be embity plz write of book name");
    }
})



products.showAllProducts();
//structure of show card code






allproductsContainer.addEventListener("click", (e) => {
    //to delete
    if (e.target.classList.contains('delets')) {
        let sureDelete = confirm("really you want to delete this products?");
        if (sureDelete == true) {
            //reove from local host
            const id = e.target.getAttribute("data-id");
            const products = JSON.parse(localStorage.getItem("Products"));
            const newP = products.filter(e => e.id !== +id);
            localStorage.setItem("Products", JSON.stringify(newP));

            //remove from browser
            e.target.parentElement.parentElement.remove();

        }


    }
    //to update
    if (e.target.classList.contains('edits')) {

        model.classList.add("model-active");
        /* const id = +e.target.getAttribute("data-id");
        let products = JSON.parse(localStorage.getItem("Products")).find(e => e.id === id);
        Nameproduct.value = e.Nameproduct;
        pprice.value = e.pprice;
        newprice.value = e.newprice*/
        save.innerText = 'edit';

    }
})

//to update and delete