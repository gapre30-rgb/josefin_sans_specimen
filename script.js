document.addEventListener('DOMContentLoaded', () => {
  const slider = document.getElementById('weightSlider');
  const weightVal = document.getElementById('weightVal');
  const typeTester = document.getElementById('typeTester');

  
  slider.addEventListener('input', (e) => {
    const val = e.target.value;
    weightVal.textContent = val;
    typeTester.style.fontWeight = val;
  });


  typeTester.addEventListener('focus', () => {
    if (typeTester.value === 'Escribe algo aquí...') {
      typeTester.value = '';
    }
  });

  typeTester.addEventListener('blur', () => {
    if (typeTester.value.trim() === '') {
      typeTester.value = 'Escribe algo aquí...';
    }
  });
});