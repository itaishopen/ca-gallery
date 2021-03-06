function makeId() {
    var length = 6;
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

function saveToStorage(key, value) {
    var str = JSON.stringify(value);
    localStorage.setItem(key, str);
}
function loadFromStorage(key) {
    var str = localStorage.getItem(key)
    return JSON.parse(str)
}

function timeStamp() {
    return new Date().toLocaleString('en-GB', {
        day : 'numeric',
        month : 'short',
        year : 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    })
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}
