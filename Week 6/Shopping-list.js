"use strict";

(function () {

    function Product(name, price, expirationData) {
        this.id = parseInt(Math.random() * 100000);
        this.name = name;
        this.price = parseFloat(price.toFixed(2));
        this.expirationData = expirationData;
    }
    Product.prototype.getInfo = function () {
        var firstLetter = this.name.chatAt(0);
        var lastLetter = this.name.charAt(this.name.length - 1);
        return (
            firstLetter.toUpperCase() +
            lastLetter.toUpperCase() +
            zeroLeft(this.productId) +
            ", " +
            this.name +
            ", " +
            this.price
        );
    };

    function ShopingBag() {
        this.listOfProducts = [];
    }
    ShopingBag.prototype.addProduct = function (product) {
        var now = new Date();
        if (product.expirationData > now) {
            this.listOfProducts.push(product);
        }
    };

    ShopingBag.prototype.calculateTotalPrice = function () {
        var sum = 0;
        for (var i = 0; i < this.listOfProducts.length; i++) {
            sum = sum + this.listOfProducts[i].price;
        }
        return sum;
    };

    ShopingBag.prototype.averageProductPrice = function () {
        var sum = this.calculateTotalPrice();
        var average = sum / this.listOfProducts.length;

        console.log(average.toFixed(3));
    };

    ShopingBag.prototype.getMostExpencive = function () {
        var mostExpencive = this.listOfProducts[0];

        for (var i = 1; i < this.listOfProducts.length; i++) {
            if (this.listOfProducts[i].price > mostExpencive.price) {
                mostExpencive = listOfProducts[i];
            }
        }
        console.log(mostExpencive.getInfo());
    };

    function PaymentCard(accountBalance, status, data) {
        this.accountBalance = accountBalance;
        this.status = status;
        this.validData = data;
    }

    function checkoutAndBuy(ourShoppingBag, paymentCard) {
        var now = new Date();

        if (paymentCard.validData > now) {
            var totalPriceOfProducts = ourShoppingBag.calculateTotalPrice();

            if (totalPriceOfProducts < paymentCard.accountBalance) {
                console.log("Succesfull transaction");
                paymentCard.accountBalance = paymentCard.accountBalance - totalPriceOfProducts;
                return;
            }

            var missing = totalPriceOfProducts - paymentCard.accountBalance;
            console.log("Missing" + missing + "dinars.");
            return;
        }
        console.log("Credit card is not valid");
    }

    var bag = new ShopingBag();

    var product1 = new Product("Banana", 105.995, new Date(2019, 10, 29));
    var product2 = new Product("Ananas", 206.987, new Date(2019, 10, 28));
    var product3 = new Product("Apple", 206.987, new Date(2019, 10, 28));

    bag.addProduct(product1);
    bag.addProduct(product2);
    bag.addProduct(product3);

    var card = new PaymentCard(1000, "active", new Date(2019, 5, 15));

    checkoutAndBuy(bag, card);
})();