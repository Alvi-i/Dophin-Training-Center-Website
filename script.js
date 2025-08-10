// Dynamic year
document.getElementById('year').textContent = new Date().getFullYear();

// Tabs logic for courses
const tabs = document.querySelectorAll('.tab');
const cards = document.querySelectorAll('#courseGrid [data-cat]');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const cat = tab.dataset.cat;
    cards.forEach(card => {
      card.hidden = card.dataset.cat !== cat;
    });
  });
});
