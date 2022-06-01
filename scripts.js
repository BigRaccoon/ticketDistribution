const NumberOfTicket = parseInt(prompt("Введите число билетов"));

let counter = [];

for (let i = 0; i < NumberOfTicket; i++) {
  counter[i] = i + 1;
}

const numberOfMember = parseInt(prompt("Введите число даунов"));

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

for (let i = 0; i <= membersArray.length; i++) {
  console.log(
    `Вопросы для ${membersArray[i].name}: ${membersArray[i].qustions}`
  );
}
