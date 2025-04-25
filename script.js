let tdata = document.querySelector(".tdata");
let btn = document.getElementById("submit");
let msg = document.getElementById("msg");
let dnf = document.querySelector(".DNF");

let employees = []; // Changed from {} to []
let count = 0;

// Initialize UI state
dnf.style.display = "block";
tdata.style.border = "none";

btn.addEventListener("click", () => {
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let profession = document.getElementById("profession").value;

  if (!name || !profession || !age) {
    msg.innerText = "Error :Please Make sure All the field before adding in an emplyee";
    msg.style.color = "red";
    return;
  } else {
    const employee = {
      id: Date.now(), 
      name,
      profession, 
      age
    };
    employees.push(employee); 

    msg.innerText = "Success : Data Added";
    msg.style.color = "green";
    dnf.style.display = "none";

    let row = document.createElement("tr");
    row.dataset.id = employee.id; 
    row.innerHTML = `
      <td>${name}</td>
      <td>${profession}</td>
      <td>${age}</td>
      <td><button class="delete">Delete</button></td>
    `;
    tdata.appendChild(row);
    tdata.style.border = "1px solid white";

    document.getElementById("name").value = '';
    document.getElementById("profession").value = '';
    document.getElementById("age").value = '';
  }
});

tdata.addEventListener("click", (e) => {
  if(e.target.classList.contains("delete")) {
    const row = e.target.closest("tr");
    const id = Number(row.dataset.id); 
    
    employees = employees.filter(emp => emp.id !== id);
    
    row.remove();
    
    if(employees.length === 0) {
      dnf.style.display = "block";
      tdata.style.border = "none";
    }
  }
});