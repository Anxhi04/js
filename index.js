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

document.addEventListener("DOMContentLoaded", function () {
    const mainSections = document.querySelectorAll("main .Container");
    const rightSections = document.querySelectorAll("#right > div");

    // Funksion që gjen seksionin aktual
    function updateRightSidebar() {
        let currentId = mainSections[0].id;

        mainSections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 150) { // 150px nga top-i i viewport-it
                currentId = section.id;
            }
        });

        // Fshihe të gjitha
        rightSections.forEach(r => r.style.display = "none");

        // Shfaq atë që përputhet me currentId
        const match = document.querySelector(`#right > div#${currentId}`);
        if (match) {
            match.style.display = "block";
        }
    }

    // Run në fillim dhe sa herë që bëhet scroll
    updateRightSidebar();
    window.addEventListener("scroll", updateRightSidebar);
});



