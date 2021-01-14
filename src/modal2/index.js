(function() {
  let btn = document.getElementById('openOrClose')
  btn.addEventListener('click', function() {
    document.getElementsByClassName('modal-container')[0].className = 'modal-container active-modal'
  })

  let close = document.getElementById('close')
  close.addEventListener('click', function() {
    document.getElementsByClassName('modal-container')[0].className = 'modal-container'
  })
})()