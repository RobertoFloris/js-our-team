const cardTeamMembers = document.querySelector(".card-teamMembers");

const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

//creo una funzione che mi permette di creare l'html della card di un memebro, destrutturando l'oggetto e ottenendo le variabili che mi servono
function createHtmlCard(member){
  const {name, role, email, img} = member;
  return `
      <div class="col-12 col-lg-6 col-xxl-4">
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-4">
              <img src="./assets/${img}" class="img-fluid rounded-start" alt="${name}">
            </div>
            <div class="col-8">
              <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <p class="card-text">${role}</p>
                <p class="card-text">${email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  `
}

//creo una funzione che mi permette di avere una concatenazione di membri, ogni volta con diverse variabili
function htmlMembers(array){
  cardTeamMembers.innerHTML = "";
  for (let card of array){
    cardTeamMembers.innerHTML += createHtmlCard(card)
  }
}

//richiamo la funzione per concatenare
htmlMembers(teamMembers)


//al submit del form richiama la funzione newMember
const form = document.querySelector("form")
form.addEventListener("submit", (e)=>{
  e.preventDefault();
  newMember();
})


//Creo un nuovo oggetto con le proprietà name, role, email, img con il valore dell'elemento corrispondente 
function newMember(){
  const name = document.getElementById("name").value;
  const role = document.getElementById("role").value;
  const email = document.getElementById("email").value;
  const img = document.getElementById("img").value;

  const newCard = {
    name,
    role,
    email,
    img
  }

  //mi permette di aggiornare la lista con l'elemento in più senza ricaricare tutto l'array
  cardTeamMembers.innerHTML += createHtmlCard(newCard);

  // teamMembers.push(newCard)
  // htmlMembers(teamMembers)
  
}

