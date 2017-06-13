function getReq() {
    var req = false;
    if (window.XMLHttpRequest) {
        try {
            req = new XMLHttpRequest();
        } catch (e) {
            req = false;
        }
    } else if (window.ActiveXObject) {
        try {
            req = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) {
            req = false;
        }
    }
    if (!req) {
        console.log("Your browser does not support XMLHttpRequest.");
    }
    return req;
}

var req = getReq();

try {
    req.open("GET", 'https://my.newschool.edu/', false);
    req.send("");
} catch (e) {
    success = false;
    error_msg = "Error: " + e;
}

console.log("MyNewSchool page status is " + req.status);