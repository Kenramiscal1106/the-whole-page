
function tabs (ui) {
    
    var tablinks = document.getElementsByClassName(ui.tabs), tabcontent = document.getElementById(ui.targetElement), i, alltabs = document.getElementsByClassName(ui.tabcontent), icon = document.getElementById('icon')    ;
    icon.href = event.currentTarget.childNodes[0].src;
    document.title = ui.targetElement;
    for (i = 0; i < tablinks.length;i++) {
        tablinks[i].className = ui.tabs + " none";
        
    }
    for (i = 0; i < alltabs.length;i++) {
        alltabs[i].style.display = "none"
    }
    tabcontent.style.display = "block";
    //this.className = ui.tabs + ' block';
    event.currentTarget.className = ui.tabs + " block";
}
