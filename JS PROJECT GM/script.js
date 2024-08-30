document.addEventListener('DOMContentLoaded', () => {
    // Variables to store elements
    const cards = document.querySelectorAll('.card-body');
    const totalPriceElement = document.querySelector('.total');
    let totalPrice = 0;
  
    // Function to update the total price
    function updateTotalPrice() {
      totalPriceElement.textContent = `${totalPrice} $`;
    }
  
    // Function to handle adding items
    function addItem(price, quantityElement) {
      // Increment the quantity by 1
      const currentQuantity = parseInt(quantityElement.textContent);
      quantityElement.textContent = currentQuantity + 1;
      // Update the total price
      totalPrice += price;
      updateTotalPrice();
    }
  
    // Function to handle removing items
    function removeItem(price, quantityElement) {
      const currentQuantity = parseInt(quantityElement.textContent);
      if (currentQuantity > 0) {
        quantityElement.textContent = currentQuantity - 1;
        totalPrice -= price;
        updateTotalPrice();
      }
    }
  
    // Function to handle deleting an item
    function deleteItem(price, quantityElement) {
      const currentQuantity = parseInt(quantityElement.textContent);
      totalPrice -= price * currentQuantity;
      quantityElement.textContent = 0;
      updateTotalPrice();
    }
  
    // Attach event listeners to each card
    cards.forEach(card => {
      const price = parseFloat(card.querySelector('.unit-price').textContent);
      const quantityElement = card.querySelector('.quantity');
  
      // Handle the plus button
      card.querySelector('.fa-plus-circle').addEventListener('click', () => {
        addItem(price, quantityElement);
      });
  
      // Handle the minus button
      card.querySelector('.fa-minus-circle').addEventListener('click', () => {
        removeItem(price, quantityElement);
      });
  
      // Handle the trash button
      card.querySelector('.fa-trash-alt').addEventListener('click', () => {
        deleteItem(price, quantityElement);
      });
    });
  });
  