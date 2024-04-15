let select = document.getElementById('card-dropdown');
let activeCreditCard;
select.addEventListener('click',function(){
  let node;
  for (let i = 0; i < this.childNodes.length-1; i++)
    node = this.childNodes[i];
    if (node.className === 'dropdown-select') {
      node.classList.add('visible');
       activeCreditCard = node; 
    };
})

window.onclick = function(e) {
  console.log(e.target.tagName)
  console.log('dropdown');
  console.log(activeCreditCard)
  if (e.target.tagName === 'LI' && activeCreditCard){
    if (e.target.innerHTML === 'Master Card') {
      document.getElementById('credit-card-image').src = 'https://nrb2002.github.io/wdd230/scoots/images/MasterCard_Logo.svg.webp';
          activeCreditCard.classList.remove('visible');
      activeCreditCard = null;
      e.target.innerHTML = document.getElementById('current-card').innerHTML;
      document.getElementById('current-card').innerHTML = 'Master Card';
    }
    else if (e.target.innerHTML === 'American Express') {
         document.getElementById('credit-card-image').src = 'https://nrb2002.github.io/wdd230/scoots/images/amex-icon-6902.webp';
          activeCreditCard.classList.remove('visible');
      activeCreditCard = null;
      e.target.innerHTML = document.getElementById('current-card').innerHTML;
      document.getElementById('current-card').innerHTML = 'American Express';      
    }
    else if (e.target.innerHTML === 'Visa') {
         document.getElementById('credit-card-image').src = 'https://nrb2002.github.io/wdd230/scoots/images/visa_logo.webp';
          activeCreditCard.classList.remove('visible');
      activeCreditCard = null;
      e.target.innerHTML = document.getElementById('current-card').innerHTML;
      document.getElementById('current-card').innerHTML = 'Visa';
    }
  }
  else if (e.target.className !== 'dropdown-btn' && activeCreditCard) {
    activeCreditCard.classList.remove('visible');
    activeCreditCard = null;
  }
}
