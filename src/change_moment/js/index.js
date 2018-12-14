(()=>{
    window.onload = ()=> {
        let swiper = new Swiper('.swiper-container', {
            direction: 'vertical',
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
          });
    }
})();
