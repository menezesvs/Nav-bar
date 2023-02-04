
  let navItem = document.querySelectorAll('.nav-item');
  let magicDot = document.querySelectorAll('.magic-dot');
  let magicDotBase = document.querySelectorAll('.magic-dot-base');
  navItem.forEach((item) => {
    item.addEventListener('click', function() {
      navItem.forEach((elem) => {
        elem.classList.remove('active');
      })
      this.classList.add('active');

      magicDot.classList.add('loading');
      magicDot.style.left = (this.offsetLeft + this.clientWidth / 2 - 9) + 'px';
      magicDotBase.style.left = (this.offsetLeft + this.clientWidth / 2 - 16) + 'px';

      setTimeOut(() => {
        magicDot.classList.remove('loading');
      }, 800)
    })
  })
