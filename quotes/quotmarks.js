let allStr = document.querySelectorAll('p');

document.querySelector('.allreplace-btn').addEventListener('click', () => {
  //console.log(allStr);
  allStr.forEach(el => {
    el.textContent = el.textContent.replace(/'/g, '"');
  })
});
document.querySelector('.correctreplace-btn').addEventListener('click', () => {
  allStr.forEach(el => {
    el.textContent = el.textContent.replace(/"/g, '\'').replace(/\B'|'\B/g, '"');
  })
});
