let sortBtn =document.querySelector('.sort_table')
let filterDiv = document.querySelector('#sortToggle')

sortBtn.addEventListener("click", ()=> {
  // sortBtn.classList.toggle("active");
  // filterDiv.classList.toggle("active");
  filterDiv.style.display = 'block'
})