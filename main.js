function codeFind() {
    let keyCode = event.code;
    let doc = document.getElementById('eventCode');
    doc.textContent = keyCode;
};

function whichFind() {
    let keyWhich = event.which;
    let doc2 = document.getElementsByClassName('eventWhich');
    for (i = 0; i < doc2.length; i++){
          doc2[i].textContent = keyWhich;  
    }
};

function keyFind() {
    let keyKey = event.key;
    let doc1 = document.getElementById('eventKey');
    doc1.textContent = keyKey;
}

document.addEventListener('keypress', () => {
    keyFind();
    whichFind();
    codeFind();
})