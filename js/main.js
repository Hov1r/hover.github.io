document.getElementById('searchForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const outputplace = document.querySelector('input[name="outputplace"]').value;
    const inputplace = document.querySelector('input[name="inputplace"]').value;
    const day = document.querySelector('input[name="day"]').value;
    const month = document.querySelector('input[name="month"]').value;
  
    const ticketResults = document.getElementById('ticketResults');
    ticketResults.innerHTML = '';
  
    if (outputplace === 'Красноярск' && inputplace === 'Москва' && day === '26' && month === 'мая') {
      const tickets = [
        { time: '8:30', from: 'Красноярск', to: 'Москва', date: '26 мая', price: '14999 руб.' },
        { time: '9:30', from: 'Красноярск', to: 'Москва', date: '26 мая', price: '14999 руб.' },
        { time: '11:30', from: 'Красноярск', to: 'Москва', date: '26 мая', price: '14999 руб.' },
        { time: '14:30', from: 'Красноярск', to: 'Москва', date: '26 мая', price: '14999 руб.' }
      ];
  
      tickets.forEach(ticket => {
        const ticketElement = document.createElement('div');
        ticketElement.classList.add('ticket');
        ticketElement.innerHTML = `
          <p><strong>Время:</strong> ${ticket.time}</p>
          <p><strong>Откуда:</strong> ${ticket.from}</p>
          <p><strong>Куда:</strong> ${ticket.to}</p>
          <p><strong>Дата:</strong> ${ticket.date}</p>
          <p><strong>Цена:</strong> ${ticket.price} <button class="add-to-cart">+</button></p>
        `;
        ticketResults.appendChild(ticketElement);
      });
  
      ticketResults.classList.remove('hidden');
    } else {
      ticketResults.innerHTML = '<p>Билетов в эту дату нет. Предлагаем билеты на 26 мая.</p>';
      const suggestion = document.createElement('button');
      suggestion.innerText = 'Показать билеты на 26 мая';
      suggestion.addEventListener('click', () => {
        document.querySelector('input[name="day"]').value = '26';
        document.querySelector('input[name="month"]').value = 'мая';
        document.getElementById('searchForm').dispatchEvent(new Event('submit'));
      });
      ticketResults.appendChild(suggestion);
      ticketResults.classList.remove('hidden');
    }
  });
  
  document.addEventListener('click', function (e) {
    if (e.target && e.target.classList.contains('add-to-cart')) {
      const ticket = e.target.closest('.ticket');
      const time = ticket.querySelector('p:nth-child(1)').textContent;
      const from = ticket.querySelector('p:nth-child(2)').textContent;
      const to = ticket.querySelector('p:nth-child(3)').textContent;
      const date = ticket.querySelector('p:nth-child(4)').textContent;
      const price = ticket.querySelector('p:nth-child(5)').textContent;
  
      const ticketData = { time, from, to, date, price };
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      cart.push(ticketData);
      localStorage.setItem('cart', JSON.stringify(cart));
  
      alert('Билет добавлен в корзину!');
    }
});