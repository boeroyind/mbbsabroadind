
//EASY TABS 1.2 - MENU SETTINGS
//Set the id names of your tablinks (without a number at the end)
var tablink_idname = new Array("tablink", "anotherlink")
//Set the id names of your tabcontentareas (without a number at the end)
var tabcontent_idname = new Array("tabcont", "anothercont")
//Set the number of your tabs in each menu1
var tabcount = new Array("3", "3")
//Set the Tabs wich should load at start (In this Example:Menu 1 -> Tab 2 visible on load, Menu 2 -> Tab 5 visible on load)
var loadtabs = new Array("1", "5")
//Set the Number of the Menu which should autochange (if you dont't want to have a change menu1 set it to 0)
var autochangemenu = 2;
//the speed in seconds when the tabs should change
var changespeed = 3;
//should the autochange stop if the user hover over a tab from the autochangemenu1? 0=no 1=yes
var stoponhover = 0;
//END MENU SETTINGS


/*Swich EasyTabs Functions - no need to edit something here*/
function easytabs(menunr, active) { if (menunr == autochangemenu) { currenttab = active; } if ((menunr == autochangemenu) && (stoponhover == 1)) { stop_autochange() } else if ((menunr == autochangemenu) && (stoponhover == 0)) { counter = 0; } menunr = menunr - 1; for (i = 1; i <= tabcount[menunr]; i++) { document.getElementById(tablink_idname[menunr] + i).className = 'tab' + i; document.getElementById(tabcontent_idname[menunr] + i).style.display = 'none'; } document.getElementById(tablink_idname[menunr] + active).className = 'tab' + active + ' tabactive'; document.getElementById(tabcontent_idname[menunr] + active).style.display = 'block'; } var timer; counter = 0; var totaltabs = tabcount[autochangemenu - 1]; var currenttab = loadtabs[autochangemenu - 1]; function start_autochange() { counter = counter + 1; timer = setTimeout("start_autochange()", 1000); if (counter == changespeed + 1) { currenttab++; if (currenttab > totaltabs) { currenttab = 1 } easytabs(autochangemenu, currenttab); restart_autochange(); } } function restart_autochange() { clearTimeout(timer); counter = 0; start_autochange(); } function stop_autochange() { clearTimeout(timer); counter = 0; }

window.onload = function () {
    var menucount = loadtabs.length; var a = 0; var b = 1; do { easytabs(b, loadtabs[a]); a++; b++; } while (b <= menucount);
    if (autochangemenu != 0) { start_autochange(); }
}

function Captcha() {
    var alpha = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');
    var i;
    for (i = 0; i < 6; i++) {
        var a = alpha[Math.floor(Math.random() * alpha.length)];
        var b = alpha[Math.floor(Math.random() * alpha.length)];
        var c = alpha[Math.floor(Math.random() * alpha.length)];
        var d = alpha[Math.floor(Math.random() * alpha.length)];
        var e = alpha[Math.floor(Math.random() * alpha.length)];
    }
    var code = a + b + c + d + e;
    document.getElementById("mainCaptcha").value = code
}
function ValidCaptcha() {
    var string1 = removeSpaces(document.getElementById('mainCaptcha').value);
    var string2 = removeSpaces(document.getElementById('txtInput').value);
    if (string1 == string2) {
        return true;
    }
    else {
        return false;
    }
}
function removeSpaces(string) {
    return string.split(' ').join('');
}

function validate(key) {
    //getting key code of pressed key
    var keycode = (key.which) ? key.which : key.keyCode;
    var phn = document.getElementById('txtPhn');
    //comparing pressed keycodes
    if (!(keycode == 8 || keycode == 46) && (keycode < 48 || keycode > 57)) {
        return false;
    }
    else {
        //Condition to check textbox contains ten numbers or not
        if (phn.value.length = 10) {
            return true;
        }
        else {
            return false;
        }
    }
}

