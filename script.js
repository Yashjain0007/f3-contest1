let arr = [];
function display() {
  const newDiv = document.getElementById("new");
  newDiv.innerHTML = "";

  for (let i = 0; i < arr.length; i++) {
    const employe = arr[i];

    const added = document.createElement("div");
    added.setAttribute("class", "added");

    const empId = document.createElement("span");
    empId.innerText = `${employe.id}`;
    added.appendChild(empId);

    const empName = document.createElement("span");
    empName.innerText = `${employe.name}`;
    added.appendChild(empName);

    const empProfession = document.createElement("span");
    empProfession.innerText = `${employe.profession}`;
    added.appendChild(empProfession);

    const empAge = document.createElement("span");
    empAge.innerText = `${employe.age}`;
    added.appendChild(empAge);

    const deleteUser = document.createElement("button");
    deleteUser.setAttribute("class", "deleteBtn");
    deleteUser.innerText = "Delete User";
    deleteUser.addEventListener("click", `deleteDiv(${employe.id})`);
    const dltDiv = document.createElement("div");
    dltDiv.setAttribute("class", "dlt-div");
    dltDiv.appendChild(deleteUser);
    newDiv.appendChild(added);
    newDiv.appendChild(dltDiv);
  }
}

document.querySelector("form").addEventListener("submit", adding);

function addDetails(event) {
  event.preventDefault();
  const name = document.getElementById("name-input").value;
  const profession = document.getElementById("profession-input").value;
  const age = document.getElementById("age-input").value;
  if (name.trim() === "" || profession.trim() === "" || age.trim() === "") {
    document.getElementById("err").innerText =
      "Error: Please make sure all fields are filled before adding an employee!";
    document.getElementById("sucess").innerText = "";
    return;
  }

  const id = arr.length + 1;
  const employe = { id, name, profession, age };
  arr.push(employe);
  display();
  document.getElementById("sucess").innerText = "Success: Employee Added!";
  const added = document.getElementById("already");
  added.style.display = "none";
  document.getElementById("err").innerText = "";
  document.getElementsByTagName("form").reset();
}

function deleteDiv(e) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === e) {
      arr.splice(i, 1);

      document.getElementById("success").innerText = "";
      document.getElementById("error").innerText = "Employee Removed!";
      break;
    }
  }

  if (arr.length === 0) {
    const added = document.getElementById("already");
    added.style.display = "block";
    document.getElementById("err").innerText = "";
  }
  display();
}

display();
