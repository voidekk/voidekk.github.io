document.querySelectorAll('.grid-item').forEach(item => {
  item.addEventListener('click', function () {
    // Fecha outros abertos
    document.querySelectorAll('.grid-item.expanded').forEach(opened => {
      if (opened !== item) opened.classList.remove('expanded');
    });
    // Alterna o atual
    item.classList.toggle('expanded');
  });
  item.addEventListener('mouseenter', function () {
    item.classList.add('hovered');
  });
  item.addEventListener('mouseleave', function () {
    item.classList.remove('hovered');
  });
});