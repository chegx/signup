const inpEmail = document.forms['form']['email'];

document.forms['form'].addEventListener('submit', e => {
  e.preventDefault();
  var x = 0; //count valid input

  document.querySelectorAll('input').forEach(function(inp) {
    if (inp.value === '') {
      inp.classList.add('fail');
      inp.nextElementSibling.innerHTML = inp.placeholder + ' cannot be empty';
    } else {
      inp.classList.remove('fail');
      inp.nextElementSibling.innerHTML = ''
      x++;
    }
  });

  if (!validateEmail(inpEmail.value) && inpEmail.value !== '') {
    inpEmail.classList.add('fail');
    inpEmail.nextElementSibling.innerHTML = 'Looks like this is not an email';
    inpEmail.nextElementSibling.style.display = 'inline';
  } else if (validateEmail(inpEmail.value)) {
    inpEmail.classList.remove('fail');
    x++;
  }

  if (x === 5) {
    document.body.classList.add('success');
    document.querySelector('header').innerHTML = 'Thank you!';
  }
});

function validateEmail(email) {
  let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return pattern.test(String(email).toLowerCase());
}
