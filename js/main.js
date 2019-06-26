function showMobileMenu() {
  var x = document.getElementById('mobilemenu');
  if (x.style.display === 'none') {
    x.style.display = 'block';
    x.style.width = '100vw';
    x.style.height = '100vh';
  } else {
    x.style.display = 'none';
  }
}

function closeMobileMenu() {
  var x = document.getElementById('mobilemenu');
  if (x.style.display === 'block') {
    x.style.display = 'none';
    x.style.width = '0vw';
    x.style.height = '0vh';
  } else {
    x.style.display = 'block';
  }
}
