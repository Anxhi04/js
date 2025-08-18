const togglebutton =document.getElementById('tooglebutton');
const sidebar = document.getElementById('sidebar');
const lightDarkButton = document.getElementById('light-dark'); 
const allSidebarItems = document.querySelectorAll('.sidebar .dropdown-btn, .sidebar .not-dropdown');

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

document.addEventListener("DOMContentLoaded", function () {
    const mainSections = document.querySelectorAll("main .Container");
    const rightSections = document.querySelectorAll("#right > div");

    // Funksioni që gjen seksionin aktual
    function updateRightSidebar() {
        let currentId = mainSections[0].id;

        mainSections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 150) { // 150px nga top-i i viewport-it
                currentId = section.id;
            }
        });

        rightSections.forEach(r => r.style.display = "none");

        const match = document.querySelector(`#right > div#${currentId}`);
        if (match) {
            match.style.display = "block";
        }
    }

    updateRightSidebar();
    window.addEventListener("scroll", updateRightSidebar);
});



allSidebarItems.forEach(item => {
    item.addEventListener('click', () => {
        allSidebarItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
    });
});

