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
  let cards="";
  for (let card of array){
    cards += createHtmlCard(card)
  }

  const cardTeamMembers = document.querySelector(".card-teamMembers");
  cardTeamMembers.innerHTML = cards
}

//richiamo la funzione per concatenare
htmlMembers(teamMembers)


