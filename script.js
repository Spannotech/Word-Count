const area = document.querySelector('textarea')
const btnBtn= document.querySelector('.btn')
const h2 = document.querySelector('h2')




btnBtn.addEventListener('click', function(e){
    e.preventDefault()
    console.log(area.value.split( ' ' ).length)
    h2.innerHTML = area.value.split( ' ' ).length
})
  