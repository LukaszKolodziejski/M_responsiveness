const value = [
  { name: "Ananas", calories: 33, fat: 0, carbs: 11.8 },
  { name: "Jabłko", calories: 57, fat: 0.7, carbs: 12.1 },
  { name: "Pomarańcza", calories: 51, fat: 0.2, carbs: 11.3 },
  { name: "Wiśnia", calories: 67, fat: 0.4, carbs: 14.6 }
];

const appValues = document.querySelector(".app--values");
const deskopViewport = window.matchMedia("(min-width: 500px)");
const drawValues = isDeskop =>
  isDeskop ? dropDeskopValues() : dropMobileValues();

const dropMobileValues = () => {
  appValues.innerHTML = "";
  const list = document.createElement("ul");
  value.forEach(value => {
    const li = document.createElement("li");
    const name = document.createElement("div");
    const calories = document.createElement("div");
    const fat = document.createElement("div");
    const carbs = document.createElement("div");
    name.innerHTML = `<strong>Nazwa: </strong>${value.name}`;
    calories.innerHTML = `<strong>Kalorie: </strong>${value.calories}`;
    fat.innerHTML = `<strong>Tłuszzcz: </strong>${value.fat}`;
    carbs.innerHTML = `<strong>Węglowodany: </strong>${value.carbs}`;
    li.appendChild(name)
      .appendChild(calories)
      .appendChild(fat)
      .appendChild(carbs);
    list.appendChild(li);
  });
  appValues.appendChild(list);
};

const dropDeskopValues = () => {
  appValues.innerHTML = "";
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");
  thead.innerHTML =
    "  <tr><th>Nazwa</th><th>Kalorie</th><th>Tłuszcz</th><th>Węglowodany</th></tr>";

  value.forEach(value => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${value.name}</td><td>${value.calories}</td><td>${value.fat}</td><td>${value.carbs}</td>`;
    tbody.appendChild(row);
  });

  table.appendChild(thead);
  table.appendChild(tbody);
  appValues.appendChild(table);
};

drawValues(deskopViewport.matches);
deskopViewport.addListener(isDeskop => drawValues(isDeskop.matches));
