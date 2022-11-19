const userCardTemplate = document.querySelector("[data-user-template]");
const userCardContainer = document.querySelector("[data-user-cards-container]");
const searchInput = document.querySelector("[data-search]");
const buttonSearch = document.querySelector("[button-search]");
const tableRow = document.querySelector("[tableRow]");
const color = document.querySelector("[changeColor]");

let stats = {
  players: [
    {
      jersey_number: "13",
      name: "Ike Anigbogu",
      points: "0.9",
      rebounds: "0.9",
      assists: "0.1",
      stl: "0.1",
      blk: "0.3",
      to: "0.2",
      fg: "33%",
      ft: "40%",
      threept: "N/A",
    },
    {
      jersey_number: "31",
      name: "Ron Baker",
      points: "3.1",
      rebounds: "1.4",
      assists: "1.8",
      stl: "0.7",
      blk: "0.2",
      to: "0.8",
      fg: "36%",
      ft: "71%",
      threept: "27%",
    },
    {
      jersey_number: "26",
      name: "Jabari Bird",
      points: "3.0",
      rebounds: "1.5",
      assists: "0.6",
      stl: "0.2",
      blk: "0.1",
      to: "0.6",
      fg: "58%",
      ft: "46%",
      threept: "43%",
    },
    {
      jersey_number: "9",
      name: "MarShon Brooks",
      points: "8.0",
      rebounds: "2.1",
      assists: "1.4",
      stl: "0.6",
      blk: "0.2",
      to: "1.2",
      fg: "45%",
      ft: "75%",
      threept: "35%",
    },
    {
      jersey_number: "7",
      name: "Lorenzo Brown",
      points: "2.8",
      rebounds: "1.2",
      assists: "1.1",
      stl: "0.6",
      blk: "1.1",
      to: "1.5",
      fg: "36%",
      ft: "71%",
      threept: "17%",
    },
    {
      jersey_number: "18",
      name: "Omri Casspi",
      points: "7.9",
      rebounds: "4.0",
      assists: "1.1",
      stl: "0.6",
      blk: "0.2",
      to: "1.0",
      fg: "45%",
      ft: "68%",
      threept: "37%",
    },
    {
      jersey_number: "8",
      name: "Alex Abrines",
      points: "5.3",
      rebounds: "1.4",
      assists: "0.5",
      stl: "0.5",
      blk: "0.1",
      to: "0.4",
      fg: "39%",
      ft: "88%",
      threept: "37%",
    },
    {
      jersey_number: "34",
      name: "Tyler Davis",
      points: "0",
      rebounds: "1.0",
      assists: "0",
      stl: "0",
      blk: "0",
      to: "0",
      fg: "0%",
      ft: "N/A",
      threept: "N/A",
    },
    {
      jersey_number: "N/A",
      name: "Keenan Evans",
      points: "N/A",
      rebounds: "N/A",
      assists: "N/A",
      stl: "N/A",
      blk: "N/A",
      to: "N/A",
      fg: "N/A",
      ft: "N/A",
      threept: "N/A",
    },
    {
      jersey_number: "13",
      name: "Marcin Gortat",
      points: "9.9",
      rebounds: "7.9",
      assists: "1.1",
      stl: "0.5",
      blk: "0.5",
      to: "1.2",
      fg: "55%",
      ft: "68%",
      threept: "15%",
    },
    {
      jersey_number: "6",
      name: "Andrew Bogut",
      points: "9.6",
      rebounds: "8.7",
      assists: "2.2",
      stl: "0.6",
      blk: "1.5",
      to: "1.7",
      fg: "54%",
      ft: "56%",
      threept: "12%",
    },
    {
      jersey_number: "25",
      name: "Amir Johnson",
      points: "7.0",
      rebounds: "5.4",
      assists: "1.2",
      stl: "0.6",
      blk: "1.0",
      to: "1.1",
      fg: "57%",
      ft: "67%",
      threept: "33%",
    },
    {
      jersey_number: "5",
      name: "Malachi Richardson",
      points: "2.8",
      rebounds: "1.0",
      assists: "0.3",
      stl: "0.2",
      blk: "0",
      to: "0.4",
      fg: "36%",
      ft: "78%",
      threept: "30%",
    },
    {
      jersey_number: "18",
      name: "Zach Lofton",
      points: "0",
      rebounds: "0",
      assists: "0",
      stl: "1.0",
      blk: "0",
      to: "0",
      fg: "0%",
      ft: "N/A",
      threept: "0%",
    },
    {
      jersey_number: "41",
      name: "Kosta Koufos",
      points: "5.7",
      rebounds: "5.0",
      assists: "0.5",
      stl: "0.4",
      blk: "0.7",
      to: "0.7",
      fg: "53%",
      ft: "58%",
      threept: "0%",
    },
    {
      jersey_number: "N/A",
      name: "Billy Preston",
      points: "N/A",
      rebounds: "N/A",
      assists: "N/A",
      stl: "N/A",
      blk: "N/A",
      to: "N/A",
      fg: "N/A",
      ft: "N/A",
      threept: "N/A",
    },
    {
      jersey_number: "9",
      name: "Zhou Qi",
      points: "1.3",
      rebounds: "1.2",
      assists: "0.1",
      stl: "0.1",
      blk: "0.7",
      to: "0.5",
      fg: "21%",
      ft: "67%",
      threept: "11%",
    },
    {
      jersey_number: "50",
      name: "Zach Randolph",
      points: "16.6",
      rebounds: "9.1",
      assists: "1.8",
      stl: "0.7",
      blk: "0.3",
      to: "2.1",
      fg: "47%",
      ft: "76%",
      threept: "27%",
    },
    {
      jersey_number: "15",
      name: "DJ Stephens",
      points: "2.3",
      rebounds: "1.3",
      assists: "0",
      stl: "0.3",
      blk: "0",
      to: "0.3",
      fg: "44%",
      ft: "100%",
      threept: "N/A",
    },
    {
      jersey_number: "4",
      name: "Milos Teodosic",
      points: "8.0",
      rebounds: "2.4",
      assists: "4.0",
      stl: "0.4",
      blk: "0.1",
      to: "2.0",
      fg: "42%",
      ft: "81%",
      threept: "38%",
    },
    {
      jersey_number: "9",
      name: "Gary Trent Jr.",
      points: "13.7",
      rebounds: "2.2",
      assists: "1.4",
      stl: "1.1",
      blk: "0.2",
      to: "0.7",
      fg: "42%",
      ft: "82%",
      threept: "38%",
    },
    {
      jersey_number: "34",
      name: "Michael Smith",
      points: "5.6",
      rebounds: "7.1",
      assists: "1.5",
      stl: "0.8",
      blk: "0.6",
      to: "1.2",
      fg: "54%",
      ft: "53%",
      threept: "14%",
    },
    {
      jersey_number: "23",
      name: "John Morton",
      points: "4.8",
      rebounds: "1.3",
      assists: "2.7",
      stl: "0.7",
      blk: "0.2",
      to: "1.5",
      fg: "39%",
      ft: "79%",
      threept: "22%",
    },
    {
      jersey_number: "41",
      name: "Howard Wright",
      points: "3.3",
      rebounds: "2.5",
      assists: "0.2",
      stl: "0.2",
      blk: "0.3",
      to: "0.6",
      fg: "44%",
      ft: "62%",
      threept: "0%",
    },
    {
      jersey_number: "45",
      name: "Michael Ansley",
      points: "6.9",
      rebounds: "4.2",
      assists: "0.4",
      stl: "0.3",
      blk: "0.2",
      to: "0.6",
      fg: "51%",
      ft: "72%",
      threept: "N/A",
    },
  ],
};

searchInput.addEventListener("input", (e) => { 
  e.preventDefault();

  const firstName = e.target.value.split(" ")[0];
  const lastName = e.target.value.split(" ")[1];
  console.log(e.target.value)

  cards.forEach((user) => {
    const isVisible = 
      user.firstname.toLowerCase() === firstName.toLowerCase() ||
      user.lastname.toLowerCase() === lastName.toLowerCase() ||
      e.target.value.trim() == "";

    user.element.classList.toggle("hide", !isVisible);
  });
});

buttonSearch.addEventListener("click", (e) => {
  if (e.preventDefault) {
    e.preventDefault();
  }
  const playername = searchInput.value;

  var player = stats.players.find(
    (p) => p.name.toLowerCase() === playername.toLowerCase()
  );

  const points = tableRow.querySelector("[points]");
  const rebounds = tableRow.querySelector("[rebounds]");
  const assists = tableRow.querySelector("[assists]");
  const steals = tableRow.querySelector("[steals]");
  const blocks = tableRow.querySelector("[blocks]");
  const turnovers = tableRow.querySelector("[turnovers]");
  const fieldgoal = tableRow.querySelector("[fieldgoal]");
  const freethrow = tableRow.querySelector("[freethrow]");
  const threepoint = tableRow.querySelector("[threepoint]");

  if (player) {
    points.textContent = player.points;
    rebounds.textContent = player.rebounds;
    assists.textContent = player.assists;
    steals.textContent = player.stl;
    blocks.textContent = player.blk;
    turnovers.textContent = player.to;
    fieldgoal.textContent = player.fg;
    freethrow.textContent = player.ft;
    threepoint.textContent = player.threept;
  } else {
    points.textContent = "N/A";
    rebounds.textContent = "N/A";
    assists.textContent = "N/A";
    steals.textContent = "N/A";
    blocks.textContent = "N/A";
    turnovers.textContent = "N/A";
    fieldgoal.textContent = "N/A";
    freethrow.textContent = "N/A";
    threepoint.textContent = "N/A";
  }
});

color.addEventListener("mouseover", (e) => {
  document.body.style.backgroundColor = "salmon";
});

fetch("https://www.balldontlie.io/api/v1/players")
  .then(res => res.json())
  .then(data => {
    //  console.log(data);
    cards = data.data.map((user) => {
      const card = userCardTemplate.content.cloneNode(true).children[0];
      const header = card.querySelector("[data-header]");
      const body = card.querySelector("[data-body]");
      const footer = card.querySelector("[data-footer]");
      header.textContent = user.first_name;
      body.textContent = user.last_name;
      footer.textContent = user.position;
      userCardContainer.append(card);

      return { 
        firstname: user.first_name, 
        lastname: user.last_name , 
        element: card,
      };
    });
  });