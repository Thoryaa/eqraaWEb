//class products
/*
class products {

    constructor(id, Nameproduct, pprice, newprice) {
            this.id = id;
            this.Nameproduct = Nameproduct;
            this.pprice = pprice;
            this.newprice = newprice;

        }
        //show data in browser  that i insered its info 
   /* showData() {
            products.showCards(this.id, this.Nameproduct, this.pprice, this.newprice);
            return this;
        }
      //show all card that store in local storage in browser
    static showAllProducts() {
            if (localStorage.getItem("Products")) {
                JSON.parse(localStorage.getItem("Products")).forEach((e) => {
                    products.showCards(e.id, e.Nameproduct, e.pprice, e.newprice);

                })
            }}
                    //store data in local storage

    storeData() {/*

            const allProduct = (localStorage.getItem("Products")) ?? [];
            allProduct.push({ id: this.id, Nameproduct: this.Nameproduct, pprice: this.pprice, newprice: this.newprice });

            localStorage.setItem("Products", JSON.stringify(allProduct));
        }
        //structure of show card code
    static showCards(id, Nameproduct, pprice, newprice) {

        const newcard = `<div class="book-card">
<button class="d" data-id="${id}">delete</button>
    <img src="assests/img/1642416191030.jpg" alt="" height="150">
    <div class="operation-icon">
    <ion-icon name="create-outline" class="icon edit"data-id="${id}" id='edit' ></ion-icon>
    <ion-icon name="trash-outline" class="icon delete" ></ion-icon>
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
 <span class='fav>fav</span>
 <span class='fav>fav</span>


    </div>
</div>`;
        document.getElementById('card_containers').innerHTML += newcard;
    }
}
/*
save.addEventListener('click', function() {
    let id = Math.floor(Math.random() * 10000);
    const newproduct = new products(id, Nameproduct.value, pprie.value, newprice.value);

    newproduct.storeData();

    Nameproduct.value = '';
    pprice.value = '';
    newprice.value = '';
    model.classList.remove('model-active');

})
products.showAllProducts();
//to delete
var modelCard = document.getElementsByClassName('book-card');
modelCard.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
        //remove  from local storage
        const id = +e.target.getAttribute('data-id');
        const pro = JSON.parse(localStorage.getItem('Products'));
        const newpro = pro.filter(e => e.id !== +id);
        localStorage.setItem('Products', JSON.stringify(newpro));
        //delete from browser
        e.target.parentElement.parentElement.remove();

    } //edit
    if (e.target.classList.contains("edit")) {
        model.classList.add('model-active');
        //remove  from local storage
        const id = +e.target.getAttribute('data-id');
        const item = JSON.parse(localStorage.getItem('Products')).find(e => e.id !== id);
        console.log(item);
        Nameproduct.value = e.Nameproduct;
        pprice.value = e.pprie;
        newprice.value = e.newprice;
        edit.value = id;
        model.classList.remove('model-active');

    }
});
//*/
 