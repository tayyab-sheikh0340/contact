
const disableKeys = ["c","c","x","j","u","I"];

const showAlert = e => {
    e.preventDefault()
    return alert("Sorry, This is against our privacy...");
}

document.addEventListener("contextmenu", showAlert);

document.addEventListener("keydown", e => {
    if((e.ctrlKey && disableKeys.includes(e.key)) ||
    
    e.key==="F12"){
        showAlert(e);
    }

});