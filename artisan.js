//Custom Chocolate Builder JS
$(document).ready(function () {
  const baseImages = {
    milk: 'images/toppings/milk-chocolate.png',
    dark: 'images/toppings/dark-chocolate.png',
    white: 'images/toppings/white-chocolate.png'
  };

  const toppingImages = {
    almonds: 'images/toppings/almonds.png',
    blueberries: 'images/toppings/blueberries.png',
    caramel: 'images/toppings/caramel.png',
    chia: 'images/toppings/chia.png',
    coconut: 'images/toppings/coconut.png',
    coconutcream: 'images/toppings/coconutcream.png',
    cookiebits: 'images/toppings/cookiebits.png',
    cranberries: 'images/toppings/cranberries.png',
    ginger: 'images/toppings/ginger.png',
    hazelnuts: 'images/toppings/hazelnuts.png',
    maplecream: 'images/toppings/maplecream.png',
    marshmallows: 'images/toppings/marshmallows.png',
    mintcream: 'images/toppings/mintcream.png',
    orangezest: 'images/toppings/orangezest.png',
    peanutbutter: 'images/toppings/peanutbutter.png',
    peanuts: 'images/toppings/peanuts.png',
    pretzel: 'images/toppings/pretzel.png',
    pumpkinseeds: 'images/toppings/pumpkinseeds.png',
    quinoa: 'images/toppings/quinoa.png',
    raspberrycream: 'images/toppings/raspberrycream.png',
    seasalt: 'images/toppings/seasalt.png',
    toffeebits: 'images/toppings/toffeebits.png',
    truffle: 'images/toppings/truffle.png',
    vanillacream: 'images/toppings/vanillacream.png',
    walnuts: 'images/toppings/walnuts.png',
  };

  function updatePreview() {
    const chocolateType = $('#chocolate-type').val();
    const toppings = $('input[type="checkbox"]:checked').map(function () {
      return $(this).val();
    }).get();

    let previewImage = baseImages[chocolateType];
    if (toppings.length > 0) {
      previewImage = baseImages[chocolateType] + '?toppings=' + toppings.join(',');
    }

    $('#chocolate-preview').css('background-image', 'url(' + previewImage + ')');

  }

  $('#chocolate-type').change(updatePreview);
  $('input[name="chocolate-style"]').change(updatePreview);
  $('input[type="checkbox"]').change(updatePreview);

});

//FAQ JS
document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    question.addEventListener("click", () => {
      const isVisible = item.classList.contains("active");
      if (isVisible) {
        item.classList.remove("active");
        answer.style.maxHeight = null;
      } else {
        faqItems.forEach(i => {
          i.classList.remove("active");
          i.querySelector(".faq-answer").style.maxHeight = null;
        });
        item.classList.add("active");
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });
});

//Article JS
document.addEventListener("DOMContentLoaded", function () {
  const articleItem = document.querySelectorAll(".article-item");

  articleItem.forEach(item => {
    const title = item.querySelector(".article-title");
    const content = item.querySelector(".article-content");

    title.addEventListener("click", () => {
      const isVisible = item.classList.contains("active");
      if (isVisible) {
        item.classList.remove("active");
        answer.style.maxHeight = null;
      } else {
        articleItem.forEach(i => {
          i.classList.remove("active");
          i.querySelector(".article-content").style.maxHeight = null;
        });
        item.classList.add("active");
        answer.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
});


//Subscribe JS - Contact Form

document.addEventListener("DOMContentLoaded", function () {
  const subscribeButton = document.querySelector('.subscribe-button');
  const subscribeMessage = document.querySelector('.subscribe-message');
  const emailInput = document.querySelector('input[type="email"');

  subscribeButton.addEventListener('click', function () {
    event.preventDefault();
    const emailValue = emailInput.value;
    if (validateEmail(emailValue)) {
      subscribeMessage.style.display = 'block';
      subscribeMessage.textContent = 'Thank you for subscribing!';
    } else {
      subscribeMessage.style.display = 'block';
      subscribeMessage.textContent = 'Please enter a valid email address.';
    }
  });
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
});