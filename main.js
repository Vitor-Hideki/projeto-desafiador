document.addEventListener('click', (e) => {
    const isDropdownBtn = e.target.classList.contains('bt1') || e.target.classList.contains('icon') ;

   if (!isDropdownBtn && e.target.closest('.li-p') != null ) return;

   let currentSubmenu

   let currentIcon

   if(isDropdownBtn){
    const item = e.target.closest('.li-p')

    currentSubmenu = item.querySelector('.submenu')

    currentSubmenu.classList.toggle('show')

    currentIcon = item.querySelector('.icon')

    currentIcon.classList.toggle('reverse')
   }

   document.querySelectorAll('.submenu.show').forEach((submenu) => {
    if(submenu == currentSubmenu) return;

    submenu.classList.remove('show');

   });

   document.querySelectorAll('.icon.reverse').forEach((reverse) => {
    if(reverse == currentIcon) return;

    reverse.classList.remove('reverse');
   });

   

} );
