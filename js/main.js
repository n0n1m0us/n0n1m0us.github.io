$(document).ready(() => {
  $(() => {
    $('[data-toggle="tooltip"]').tooltip();
  });

  particlesJS.load('particles-js', 'particlesjs.json');
});

var typed = new Typed('#typed', {
  strings: ['<p class="header1">n0n1m0us</p>^400\n `<p class="header3">Student / Pentester / CTF Player</p>` ^400\n `<a class="link1" href="https://twitter.com/n0n1m0us" data-toggle="tooltip" data-placement="bottom" title="Twitter"><i class="fab fa-twitter"></i></a>` , `<a class="link1" href="https://github.com/n0n1m0us" data-toggle="tooltip" data-placement="bottom" title="Github"><i class="fab fa-github"></i></a>`'],
  typeSpeed: 90,
  backSpeed: 0,
  loop: false,
  cursorChar: '|',
  fadeout: true,
});
