
let mob = document.querySelector('#mobil-menu')
let menu =    document.querySelector('.mobil_menu')
let navigation_item = document.querySelectorAll('.mobil-navigation__item')


for (var i = 0; i < navigation_item.length; i++) {
  navigation_item[i].addEventListener('click',function() {
      let navigation_list = this.querySelector('.mobil-navigation__menu');
      let navigation_icon = this.querySelector('#mobil-navigation__list');
      if(navigation_list.style.height == '' || navigation_list.style.height == '0px'){
        navigation_list.style.height = '100vh';
        navigation_icon.innerHTML = 'expand_less'
      }
      else if(navigation_list.style.height == '100vh'){
        navigation_list.style.height = '0'
        navigation_icon.innerHTML = 'expand_more'
      }
  })
}




mob.addEventListener('click',function () {
  if(menu.style.display === '' || menu.style.display == 'none'){
    menu.style.display = 'block'
    mob.innerHTML = 'close'
  }
  else if(menu.style.display == 'block'){
    menu.style.display = 'none'
    mob.innerHTML = 'menu'
  }
})
