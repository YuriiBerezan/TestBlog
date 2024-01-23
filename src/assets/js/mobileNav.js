let burger = document.getElementById('sidebarToggle');
const sidebar = document.getElementById('sidebar');
// const page = document.getElementById('page');
const body = document.body;

burger.addEventListener('click', function () {
    body.classList.toggle('show-sidebar');
    console.log(body.classList.contains('show-sidebar'))
    // document.body.classList.add('show-sidebar');
    // if( body.classList.contains('show-sidebar') ) {
    //    document.body.classList.remove('show-sidebar');
    //     console.log('yes');
    // // } else {
    // //     document.body.classList.add('show-sidebar');

    // //      console.log('no');
    // }
});

// function showSidebar() {
//     let mask = document.createElement('div');
//     mask.classList.add('page__mask');
//     mask.addEventListener('click', closeSidebar);
//     page.appendChild(mask);
    
//     body.classList.add('show-sidebar');
// }

// function closeSidebar() {
//     body.classList.remove('show-sidebar');
//     document.querySelector('.page__mask').remove();
// }