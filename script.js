const userCardTemplate =document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const searchInput = document.querySelector("[data-search]")

let cards = []

searchInput.addEventListener("input", e =>{ 
  
  const value = e.target.value
  cards.forEach(user =>{

  const isVisible=user.first_name.includes(value) || user.last_name.toLowerCase().includes(value)
 
  user.element.classList.toggle("hide", !isVisible)
  
})
})
fetch("https://www.balldontlie.io/api/v1/players")
.then(res => res.json())
.then(data => {
console.log(data)
  cards = data.data.map(user=> {
const card = userCardTemplate.content.cloneNode(true).children[0]
const header = card.querySelector("[data-header]")
const body = card.querySelector("[data-body]")
const footer=card.querySelector("[data-footer]")
header.textContent = user.first_name
body.textContent = user.last_name
footer.textContent = user.position
userCardContainer.append(card)

return { firstname:user.first_name, lastname:user.last_name , element:card }

})  
  })