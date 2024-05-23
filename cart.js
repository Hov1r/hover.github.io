document.addEventListener('DOMContentLoaded', function () {
    const myTickets = document.getElementById('myTickets');
    const checkoutButton = document.getElementById('checkoutButton');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    function renderCart() {
      myTickets.innerHTML = '';
      if (cart.length === 0) {
        myTickets.innerHTML = '<p>Корзина пуста.</p>';
        checkoutButton.classList.add('hidden');
      } else {
        cart.forEach((ticket, index) => {
          const ticketElement = document.createElement('div');
          ticketElement.classList.add('ticket');
          ticketElement.innerHTML = `
            <p>${ticket.time}</p>
            <p>${ticket.from}</p>
            <p>${ticket.to}</p>
            <p>${ticket.date}</p>
            <p>${ticket.price} <button class="remove-from-cart" data-index="${index}">Удалить</button></p>
          `;
          myTickets.appendChild(ticketElement);
        });
        checkoutButton.classList.remove('hidden');
      }
    }
  
    myTickets.addEventListener('click', function (e) {
      if (e.target && e.target.classList.contains('remove-from-cart')) {
        const index = e.target.getAttribute('data-index');
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
      }
    });
  
    checkoutButton.addEventListener('click', function () {
      window.location.href = 'sign in.html';
    });
  
    renderCart();
});