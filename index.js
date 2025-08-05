const togglebutton =document.getElementById('tooglebutton');
const sidebar = document.getElementById('sidebar');
const lightDarkButton = document.getElementById('light-dark');  


function togglesidebar() {
    sidebar.classList.toggle('close');
    tooglebutton.classList.toggle('rotate');
}

function togglesubmenu(button){
    button.nextElementSibling.classList.toggle('show');
    button.classList.toggle('rotate');
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    if(document.body.classList.contains('dark-mode')){
        body.classList.remove('dark-mode');
    }else{
        body.classList.add('dark-mode');
    }
}
