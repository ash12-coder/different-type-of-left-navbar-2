function show() {
  document.body.classList.toggle('show');
  if (document.body.classList.contains('show')) {
    document
      .getElementById('button')
      .setAttribute('class', 'fa fa-chevron-left fa-lg');
  } else {
    document.getElementById('button').setAttribute('class', 'fa fa-chevron-right fa-lg');
  }
}
