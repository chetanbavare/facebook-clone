var settingsmenu = document.querySelector(".settings-menu")

function settingsMenuToggle()
{
    settingsmenu.classList.toggle("settings-menu-height");

}

var change= document.querySelector("#btn");
document.getElementById("btn").addEventListener("click",function()
{
    change.classList.toggle("btn-on");
    document.body.classList.toggle("dark-theme");
})



