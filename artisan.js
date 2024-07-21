!

document.addEventListener('DOMContentLoaded', function () {
  const chocolateTypeSelect = document.getElementById('chocolate-type');
  const chocolateStyleRadios = document.getElementsByName('chocolate-style');
  const toppingCheckboxes = document.querySelectorAll('.toppings input[type="checkbox"]');
  const chocolatePreview = document.getElementById('chocolate-preview');

  function updateChocolatePreview() {
    let chocolateType = chocolateTypeSelect.value;
    let chocolateStyle = Array.from(chocolateStyleRadios).find(radio => radio.checked).value;
    let selectedToppings = Array.from(toppingCheckboxes).filter(checkbox => checkbox.checked).map(checkbox => checkbox.value);

    // Update chocolate base image
    chocolatePreview.innerHTML = `<img src="images/${chocolateType}-${chocolateStyle}.jpg" class="chocolate-img" alt="Chocolate Image">`;

    // Add toppings to the chocolate image
    selectedToppings.forEach(topping => {
      let toppingElement = document.createElement('div');
      toppingElement.className = `topping ${topping}`;
      toppingElement.textContent = topping;
      chocolatePreview.appendChild(toppingElement);
    });
  }

  function handleToppingChange() {
    let selectedToppings = Array.from(toppingCheckboxes).filter(checkbox => checkbox.checked);

    if (selectedToppings.length > 4) {
      alert("You can select a maximum of 4 toppings.");
      this.checked = false;
    }
    updateChocolatePreview();
  }

  chocolateTypeSelect.addEventListener('change', updateChocolatePreview);
  chocolateStyleRadios.forEach(radio => radio.addEventListener('change', updateChocolatePreview));
  toppingCheckboxes.forEach(checkbox => checkbox.addEventListener('change', handleToppingChange));

  updateChocolatePreview(); // Initial preview update
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
