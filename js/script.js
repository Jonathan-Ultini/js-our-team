// MILESTONE 0: Creazione dell'array di oggetti
const team = [
  {
    nome: 'Wayne Barnett',
    ruolo: 'Founder & CEO',
    foto: 'wayne-barnett-founder-ceo.jpg'
  },
  {
    nome: 'Angela Caroll',
    ruolo: 'Chief Editor',
    foto: 'angela-caroll-chief-editor.jpg'
  },
  {
    nome: 'Walter Gordon',
    ruolo: 'Office Manager',
    foto: 'walter-gordon-office-manager.jpg'
  },
  {
    nome: 'Angela Lopez',
    ruolo: 'Social Media Manager',
    foto: 'angela-lopez-social-media-manager.jpg'
  },
  {
    nome: 'Scott Estrada',
    ruolo: 'Developer',
    foto: 'scott-estrada-developer.jpg'
  },
  {
    nome: 'Barbara Ramos',
    ruolo: 'Graphic Designer',
    foto: 'barbara-ramos-graphic-designer.jpg'
  }
];


for (const membro of team) {
  console.log(`Nome: ${membro.nome}, Ruolo: ${membro.ruolo}, Foto: ${membro.foto}`);
}


// MILESTONE 2: Stampa nel DOM delle informazioni dei membri del team
const teamContainer = document.getElementById('team-container');

team.forEach(membro => {
  const memberInfo = document.createElement('div');
  memberInfo.classList.add('team-member');
  memberInfo.innerText = `Nome: ${membro.nome}, Ruolo: ${membro.ruolo}, Foto: ${membro.foto}`;
  teamContainer.appendChild(memberInfo);
});
