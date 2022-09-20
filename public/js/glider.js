

window.addEventListener('load', function(){
  new Glider(document.querySelector('.glider'), {
    slidesToShow: 1,
    itemWidth: "250px",
    slidesToScroll: 5,
    draggable: true,
    dots: '.dots',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    }
  });
})