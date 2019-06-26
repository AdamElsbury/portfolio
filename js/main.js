function showMobileMenu() {
  var x = document.getElementById('mobilemenu');
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}

function closeMobileMenu() {
  var x = document.getElementById('mobilemenu');
  if (x.style.display === 'block') {
    x.style.display = 'none';
  } else {
    x.style.display = 'block';
  }
}

function closeMobileMenuLinkClick() {
  var x = document.getElementById('mobilemenu');
  if (x.style.display === 'block') {
    x.style.display = 'none';
  }
}
