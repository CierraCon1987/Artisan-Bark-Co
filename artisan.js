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

  const maxToppings = 4;

  function updatePreview() {
    const chocolateType = $('input[name="chocolate-type"]:checked').val();
    const selectedToppings = $('input[type="checkbox"]:checked').map(function () {
      return $(this).val();
    }).get();

    // Set chocolate base image
    $('#chocolate-base').attr('src', baseImages[chocolateType]);

    // Clear previous toppings
    $('.chocolate-topping').remove();

    // Add new toppings
    selectedToppings.slice(0, maxToppings).forEach(topping => {
      $('#chocolate-preview').append(
        `<img src="${toppingImages[topping]}" alt="${topping}" class="chocolate-img chocolate-topping">`
      );
    });
  }

  // Start with milk chocolate by default
  $('input[name="chocolate-type"][value="milk"]').prop('checked', true);
  updatePreview();

  // Attach change event listeners
  $('input[name="chocolate-type"]').change(updatePreview);
  $('input[type="checkbox"]').change(updatePreview);
});

//FAQ JS
document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    question.addEventListener("click", () => {
      if (item.classList.contains("active")) {
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
  const articleItems = document.querySelectorAll(".article-item");

  articleItems.forEach(item => {
    const title = item.querySelector(".article-title");
    const content = item.querySelector(".article-content");

    title.addEventListener("click", () => {
      const isVisible = item.classList.contains("active");
      if (isVisible) {
        item.classList.remove("active");
        content.style.maxHeight = null;
      } else {
        articleItems.forEach(i => {
          i.classList.remove("active");
          i.querySelector(".article-content").style.maxHeight = null;
        });
        item.classList.add("active");
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
  // Subscribe Button JS
  const subscribeButton = document.querySelector('.subscribe-button');
  const subscribeMessage = document.querySelector('.subscribe-message');
  const emailInput = document.querySelector('#subscribe-email');

  subscribeButton.addEventListener('click', function (event) {
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
// Contact Form JS

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById('contact-form');
  const formMessage = document.getElementById('form-message');

  form.addEventListener('submit', function (event) {
      event.preventDefault(); 

      const firstName = document.getElementById('first-name').value.trim();
      const lastName = document.getElementById('last-name').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const email = document.getElementById('email').value.trim();
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value.trim();

      if (firstName && lastName && phone && email && subject && message) {
          if (validateEmail(email)) {
            window.location.href = 'contact-confirmation.html';
          } else {
              formMessage.style.color = 'red';
              formMessage.textContent = 'Please enter a valid email address.';
          }
      } else {
          formMessage.style.color = 'red';
          formMessage.textContent = 'Please fill out all required fields.';
      }
  });

  function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(String(email).toLowerCase());
  }
});
