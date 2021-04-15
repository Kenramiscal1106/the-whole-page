
function tabs (ui) {
    document.cookie = "lasttab =" + "'" + ui.targetElement + "'";
    var tablinks = document.getElementsByClassName(ui.tabs), 
    tabcontent = document.getElementById(ui.targetElement), i, 
    alltabs = document.getElementsByClassName(ui.tabcontent), 
    icon = document.getElementById('icon')    ;
    try {
        icon.href = event.currentTarget.childNodes[0].src;
        document.title = ui.targetElement;        
    }
    catch {
        alert("no icon/text (mandatory)")
    }
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
function getcookie(cname) {
    var name = cname + "=", decodedCookie = decodeURIComponent(document.cookie), ca = decodedCookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while(c.charAt(0) == " ") {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length + 1,c.length - 1);
        }           
    }
    return "";
}
var themebutton = document.getElementById("settings");
themebutton.style.transform = "rotate(45deg)"
function setRaC() {
    if (document.body.className == "") {
        themebutton.style.transform = "rotate(135deg)"
        document.body.className = "blue";
    }
    else if (document.body.className == "blue") {
        themebutton.style.transform = "rotate(225deg)"
        document.body.className = "matrix";
    }
    else if (document.body.className == "matrix") {
        themebutton.style.transform = "rotate(315deg)"
        document.body.className = "dark";
    }
    else if (document.body.className == "dark") {
        themebutton.style.transform = "rotate(45deg)"
        document.body.className = "";
    }
}
themebutton.addEventListener('click', function() {
    setRaC()
    document.cookie = "theme =" + "'" + document.body.className + "'";
    console.log({
        classNameOfBody:document.body.className,
        transform: themebutton.style.transform
    })
})
var lasttheme = getcookie("theme")
switch(lasttheme) {
    case "dark":
        document.body.className = "dark";
        break;
    case "matrix":
        document.body.className = "matrix";
        break;
    case "blue":
        document.body.className = "blue";
        break;
}