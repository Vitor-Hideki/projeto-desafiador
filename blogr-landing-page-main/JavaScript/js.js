document.addEventListener('click', (e) => {
    const isDropdownBtn = e.target.classList.contains('bt1');

   if (!isDropdownBtn && e.target.closest('.li-p') != null ) return;

   let currentSubmenu

   if(isDropdownBtn){
    const item = e.target.closest('.li-p')

    currentSubmenu = item.querySelector('.submenu')

    currentSubmenu.classList.toggle('show')
   }

   document.querySelectorAll('.submenu.show').forEach((submenu) => {
    if(submenu == currentSubmenu) return;

    submenu.classList.remove('show');
   });

} );