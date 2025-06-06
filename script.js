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
  const totalCell = document.createElement("td");

  totalCell.setAttribute("colspan", "2");
  totalCell.style.textAlign = "right";
  totalCell.textContent = `Total Price: Rs ${total}`;

  newRow.appendChild(totalCell);
  table.appendChild(newRow);

  // Disable the button to prevent multiple total rows
  getSumBtn.disabled = true;
};

getSumBtn.addEventListener("click", getSum);
