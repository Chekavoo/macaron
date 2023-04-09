document.getElementById('burger').onclick = function () {
    document.getElementById('menu').classList.add('open')
}
document.querySelectorAll('#menu *').forEach((item) => {
    item.onclick = () => {
        document.getElementById('menu').classList.remove('open');
    }
})

let productInput = $('#product-input')
let inputTel = $('#input-tel');
inputTel.inputmask({"mask": "+375(99)999-99-99"});

$('#button-macaron').click(function () {
    $('.order')[0].scrollIntoView({ behavior: "smooth"});
});

$('.btn-btn').click((e) => {
    productInput.val( $(e.target).parents('.order-block').find('.order-block-title').text());
    $('.checkout')[0].scrollIntoView({ behavior: "smooth"});
});
let nameInput = $('#input-name');
let telInput = $('#input-tel');
let loader = $('.loader')
$('#submit').click(function (){
    let product = $('#product-input');
    let name = $('#input-name');
    let phone = $('#input-tel');
    let hasError = false;
    let inputRed = $('.input-white');
    inputRed.css('border-color', 'rgb(130, 19, 40');
    $('.error-input').hide();



    if (!product.val()) {
        product.next().show();
        productInput.css('border-color', 'red');
        hasError = true;
    }
    if (!name.val()) {
        name.next().show();
        nameInput.css('border-color', 'red');
        hasError = true;
    }
    if (!phone.val()) {
        phone.next().show();
        telInput.css('border-color', 'red');
        hasError = true;
    }

    if (!hasError) {
        loader.css('display', 'flex')
        $.ajax({
            method: "POST",
            url: "https://testologia.site/checkout",
            data: {product: product.val(), name: name.val(), phone: phone.val() }
        })
            .done(function( msg ) {
                loader.hide();
                if(msg.success){
                    $(".checkout-block").css("display", "none");
                    $(".checkout-pop").css("display", "block");
                } else  {
                    alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ');
                }
            });
    }
})