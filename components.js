// Fun��o para carregar o cabe�alho
function loadHeader() {
    const headerContainer = document.getElementById('header-container');
    const xhr = new XMLHttpRequest();
    
    xhr.open('GET', 'header.html', true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            headerContainer.innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}

// Fun��o para carregar o rodap�
function loadFooter() {
    const footerContainer = document.getElementById('footer-container');
    const xhr = new XMLHttpRequest();
    
    xhr.open('GET', 'footer.html', true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            footerContainer.innerHTML = xhr.responseText;
        }
    };
    xhr.send();	
}