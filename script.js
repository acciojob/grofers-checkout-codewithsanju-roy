const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  const prices = document.querySelectorAll(".price");
  let total = 0;

  prices.forEach(cell => {
    total += Number(cell.textContent);
  });

  const table = document.querySelector("table");
  const newRow = document.createElement("tr");
  let totalCell = document.createElement("td"); // changed from const to let

  totalCell.setAttribute("colspan", "2");
  totalCell.setAttribute("id", "ans"); // required by Cypress
  totalCell.style.textAlign = "right";
  totalCell.textContent = `Total Price: Rs ${total}`;

  newRow.appendChild(totalCell);
  table.appendChild(newRow);

  getSumBtn.disabled = true;
};

getSumBtn.addEventListener("click", getSum);
