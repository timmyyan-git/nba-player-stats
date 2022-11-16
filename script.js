const userCardTemplate =document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const searchInput = document.querySelector("[data-search]")

let users = []

searchInput.addEventListener("input", e =>{ 
  const value = e.target.value.toLowerCase();
  users.forEach(user =>{
  const isVisible=user.name.toLowerCase().includes(value) || user.email.toLowerCase().includes(value)
  user.element.classList.toggle("hide", !isVisible)
})
})
fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())
.then(data => {
  users = data.map(user=> {
const card = userCardTemplate.content.cloneNode(true).children[0]
const header = card.querySelector("[data-header]")
const body = card.querySelector("[data-body]")
header.textContent = user.name
body.textContent = user.email
userCardContainer.append(card)
return { name:user.name, email:user.email, element:card }

})  
  })


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cfe114add4mshccfcf292350eb2ep16d0b9jsn3da07f460d7f',
		'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
	}
};

fetch('https://free-nba.p.rapidapi.com/players?page=0&per_page=25', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err))