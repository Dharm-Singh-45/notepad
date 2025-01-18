// select dom element

const notepad = document.getElementById("notepad");
const autosaveToggle = document.getElementById("autosave-toggle");

// constants

const Local_Storage_key = "autosave-data";

// load saved content on page load 

window.addEventListener("DOMContentLoaded",()=>{
    const saveData = localStorage.getItem(Local_Storage_key)
    if(saveData){
        notepad.value = saveData
    }
    autosaveToggle.checked = false     // checkbox is unchacked on load 
})

// auto save functionality 

let autoSaveInterval = null ;

autosaveToggle.addEventListener('change',(e)=>{
    if(e.target.checked){
        // enable autosave 
        autoSaveInterval = setInterval(()=>{
            localStorage.setItem(Local_Storage_key,notepad.value)
        },1000)
    } else{
        // disable autosave 
        clearInterval(autoSaveInterval)
        autoSaveInterval = null
    }
})
