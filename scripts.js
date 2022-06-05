const NumberOfTicket = parseInt(prompt("Введите число билетов"));

let counter = [];

for (let i = 0; i < NumberOfTicket; i++) {
  counter[i] = i + 1;
}

const numberOfMember = parseInt(prompt("Введите число участников"));

let membersArray = [];
for (let i = 0; i < numberOfMember; i++) {
  membersArray[i] = { name: prompt(`Введите имя лоха ${i}`), qustions: [] };
}

let counterForMembersArray = 0;
for (let i = 1; i <= counter.length; i++) {
  if (counterForMembersArray >= numberOfMember) {
    counterForMembersArray = 0;
  }
  membersArray[counterForMembersArray].qustions.push(i);
  counterForMembersArray++;
}

let numberOfQ = document.querySelector(".numberOfQ");
numberOfQ.innerHTML = `Количество вопросов: ${NumberOfTicket}`;

let numberOfM = document.querySelector(".numberofM");
numberOfM.innerHTML = `Количество участников: ${numberOfMember}`;

let tableInfo = document.querySelector(".table");
for (let i = 0; i < numberOfMember; i++) {
  let stringTr = document.createElement("tr");
  let columnTdName = document.createElement("td");
  columnTdName.innerHTML = `${membersArray[i].name}`;
  let columnTdQuest = document.createElement("td");
  columnTdQuest.innerHTML = `${membersArray[i].qustions}`;
  stringTr.appendChild(columnTdName);
  stringTr.appendChild(columnTdQuest);
  tableInfo.appendChild(stringTr);
}

for (let i = 0; i < membersArray.length; i++) {
  console.log(
    `Вопросы для ${membersArray[i].name}: ${membersArray[i].qustions}`
  );
}
