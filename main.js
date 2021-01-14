const cards = document.querySelector('.cards');
const card = document.querySelectorAll('.card');

cards.addEventListener('click', function(e) {
  removeClass();
  if (e.target.classList.contains('card')) {
    e.target.classList.toggle('active');
  }
})

function removeClass() {
  card.forEach(function(item) {
    item.classList.remove('active')
  })
}


