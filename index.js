document.addEventListener('DOMContentLoaded', () => { //html Готов, поехали
  const burgerButton = document.querySelector('.burger');
  const navMenu = document.querySelector('ul.menu');

  document.addEventListener('click', function(event){
    console.log(event.target);
    if(event.target == burgerButton || event.target.classList.contains('burger__icon')) {
      event.preventDefault();
      navMenu.classList.add('active');
    } else {
      navMenu.classList.remove('active');
    }
    
  });

});