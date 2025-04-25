let tdata = document.querySelector(".tdata");
let btn = document.getElementById("submit");
let msg = document.getElementById("msg");

// let deletBtn = document.getElementById("delet")

btn.addEventListener("click", () => {
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let professiom = document.getElementById("profession").value;
  let dnf = document.querySelector(".DNF")

  if (!name || !professiom || !age) {
    msg.innerText =
      "Error :Please Make sure All the field before adding in an emplyee";
    msg.style.color = "red";
    return;
    

  }else {
    msg.innerText = "Success : Data Added";
    msg.style.color="green";
    dnf.style.display = "none";
    

  }

  let row = document.createElement("tr");
  row.innerHTML = `
    <td>${name}</td>
    <td>${professiom}</td>
    <td>${age}</td>
    <td><button class="delete"> Delete </button></td>`;
  tdata.appendChild(row);

  document.getElementById("name").value = '';
    document.getElementById("profession").value = '';
    document.getElementById("age").value = '';
});

tdata.addEventListener("click", (e) => {
    if(e.target.classList.contains("delete")){
        e.target.closest("tr").remove();

    }
}
);

