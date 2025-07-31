const togglebutton =document.getElementById('tooglebutton');
const sidebar = document.getElementById('sidebar');

function togglesidebar() {
    sidebar.classList.toggle('close');
    tooglebutton.classList.toggle('rotate');
}

function togglesubmenu(button){
    button.nextElementSibling.classList.toggle('show');
    button.classList.toggle('rotate');
}