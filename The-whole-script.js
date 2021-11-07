function show_more() {
    var accordion = document.getElementsByClassName('more');
    for (var i = 0; i < accordion.length;i++) {
        // accordion[i].className += " block"
        if (accordion[i].classList[1] == "open") {
            console.log(2)
            accordion[i].nextElementSibling.style.height = accordion[i].nextElementSibling.scrollHeight + "px";
        } else {
            console.log(1)
            accordion[i].nextElementSibling.style.height = 0;
        }
        accordion[i].addEventListener('click', function() {
            this.classList.toggle('open');
            console.log(this.classList)
            if (this.classList[1] == "open") {
                this.innerHTML = "<img src='static-icons/close-icon.svg' alt='close'>Show less"
                this.nextElementSibling.style.height = this.nextElementSibling.scrollHeight + "px";
            } else {
                this.innerHTML = "<img src='static-icons/open-icon.svg' alt='close'>Show more"
                this.nextElementSibling.style.height = 0;
            }
        })
    }
}
show_more();
function side_bar(element, trigger) {
    var button_trigger = document.querySelector(trigger);
    var elem = document.querySelector(element.query_selector);
    button_trigger.addEventListener('click', function() {
        if (elem.className == (element.default + " enabled")) {
            elem.className = element.default
        } else {
            elem.className = element.default + " enabled"
        }
    })
}
side_bar({query_selector:".morphing-navigation", default:"morphing-navigation"}, ".tablinks-toggle")
side_bar({query_selector:".sidebar", default:"sidebar"}, ".tablinks-toggle")
function tabs (ui) {
    document.cookie = "lasttab =" + "'" + ui.targetElement + "'";
    var tablinks = document.getElementsByClassName(ui.tabs), 
    tabcontent = document.getElementById(ui.targetElement), i, 
    alltabs = document.getElementsByClassName(ui.tabcontent), 
    icon = document.getElementById('icon');
    try {
        icon.href = event.currentTarget.childNodes[0].src;
        document.title = event.currentTarget.textContent;        
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
var themebutton = document.getElementById("theme-toggle");
var circle_toggle = themebutton.children[0].children[1];
function setRaC() {
    if (document.body.className == "") {
        themebutton.children[0].style.transform = "rotate(180deg)"
        document.body.className = "dark";
        themebutton.title="switch to light mode"
        circle_toggle.style.transform = "translateX(0)" 
    }
    else if (document.body.className == "dark") {
        themebutton.children[0].style.transform = null
        document.body.className = "";
        themebutton.title="switch to dark mode"
        circle_toggle.style.transform = "translateX(-15%)"
    }
}
themebutton.addEventListener('click', function() {
    setRaC()
    document.cookie = "theme =" + "'" + document.body.className + "'";
})
var lasttheme = getcookie("theme")
switch(lasttheme) {
    case "dark":
        themebutton.children[0].style.transform = "rotate(180deg)"
        document.body.className = "dark";
        circle_toggle.style.transform = "translateX(0)" 
        break;
        case "":
            themebutton.children[0].style.transform = null;
            document.body.className = "";
            circle_toggle.style.transform = "translateX(-15%)"
        break;
}