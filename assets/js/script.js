

function openMenu () {

    if (document.getElementById("icon-close-hamburger").hidden == true) {
        document.getElementById("icon-close-hamburger").hidden = false //show close
        document.getElementById("icon-hamburger").hidden = true //hide hamburger
        document.getElementById("menu").style.display = "block" //show menu
        document.getElementById("icon-dropdown").style.transform = "" //icon dropdown back to normal
        return
    } else {
        document.getElementById("icon-close-hamburger").hidden = true //hide close
        document.getElementById("icon-hamburger").hidden = false //show hamburger
        document.getElementById("menu").style.display = "none"//show menu

        if (document.getElementById("portfolio-menu").style.display == "block") {
            document.getElementById("portfolio-menu").style.display = "none"
        }
        return
    }

}

function openDropdown() {

    //se è la versione desktop controlli hover
    if (innerWidth >= 780) { 
        //mostra dropdown al mouseover
        document.getElementById("dropdown").addEventListener("mouseover", function() {
            document.getElementById("portfolio-menu").style.display = "block";
            document.getElementById("icon-dropdown").style.transform = "rotateX(180deg)"
        });
        //nascondi dropdown al mouseleave dal menu
        document.getElementById("portfolio-menu").addEventListener("mouseleave", function() {
            document.getElementById("portfolio-menu").style.display = "none";
            document.getElementById("icon-dropdown").style.transform = ""
        }); 
        //mostra dropdown al mouseleave da portfolio
        document.getElementById("dropdown").addEventListener("mouseleave", function() {
            document.getElementById("portfolio-menu").style.display = "none";
            document.getElementById("icon-dropdown").style.transform = ""
        }); 
    }

    //versione standard al click
    if (document.getElementById("portfolio-menu").style.display  == "none") { //mostra menu
        document.getElementById("portfolio-menu").style.display = "block";
        document.getElementById("icon-dropdown").style.transform = "rotateX(180deg)"
    } else { //nascondi menu
        document.getElementById("portfolio-menu").style.display = "none";
        document.getElementById("icon-dropdown").style.transform = ""
    }

}

function send() {

    var noErr = true

    var nomeUtente = document.getElementById('name').value
        if (nomeUtente == '') {
            document.getElementById("empty-name").style.display = "block";
            document.getElementById("name").className = document.getElementById("name").className + " input-error";
            noErr = false
        } else if (!(/^[a-zA-Z\s]*$/.test(nomeUtente)) || (nomeUtente.length <2)){
            document.getElementById("wrong-name").style.display = "block";
            document.getElementById("name").className = document.getElementById("name").className + " input-error";
            noErr = false
        }
    

    var emailUtente = document.getElementById('email').value
    if (emailUtente == '') {
        document.getElementById("empty-email").style.display = "block";
        document.getElementById("email").className = document.getElementById("email").className + " input-error";
        noErr = false
    } else if (!(/[[A-z0-9\.\+_-]+@[A-z0-9\._-]+\.[A-z]{2,6}/.test(emailUtente))){
        document.getElementById("wrong-email").style.display = "block";
        document.getElementById("email").className = document.getElementById("email").className + " input-error";
        noErr = false
    }
        
    var messaggioUtente = document.getElementById('message').value
        if (messaggioUtente == '') {
            document.getElementById("empty-message").style.display = "block";
            document.getElementById("message").className = document.getElementById("message").className + " input-error";
            noErr = false
        }
        

    if (noErr == false) {
        return false
    } else {
        openMessage()
        return false
    }

}

function textChange(field){
    console.log(field)
    if (field == "message") {
        document.getElementById("empty-" + field ).style.display = "none";
        document.getElementById(field).className = document.getElementById(field).className.replace(" input-error", "");
    } else {
        document.getElementById("empty-" + field ).style.display = "none";
        document.getElementById("wrong-" + field).style.display = "none";
        document.getElementById(field).className = document.getElementById(field).className.replace(" input-error", "");
    }

}

function closeMessage() {
        document.getElementById("success-message").style.display = "none"
        document.getElementById("name").value = ''
        document.getElementById("email").value = ''
        document.getElementById("message").value = ''
}

function openMessage() {
    document.getElementById("success-message").style.display = "block"
}