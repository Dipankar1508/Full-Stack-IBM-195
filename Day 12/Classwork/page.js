let form = document.querySelector('#form');
form.addEventListener('submit', (event) => {
    event.preventDefault(); // prevent the form from submitting
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let age = document.getElementById("age").value;

    let obj = {
        name, email, phone, password, confirmPassword, age
    }

    if (obj.password !== obj.confirmPassword) {
        alert("Passwords do not match");
        return;
    }
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.innerText = obj.name;
    let td2 = document.createElement("td");
    td2.innerText = obj.email;
    let td3 = document.createElement("td");
    td3.innerText = obj.phone;
    let td4 = document.createElement("td");
    td4.innerText = obj.password;
    let td5 = document.createElement("td");
    td5.innerText = obj.confirmPassword;
    let td6 = document.createElement("td");
    td6.innerText = obj.age;

    tr.append(td1, td2, td3, td4, td5, td6);
    document.getElementById("tbody").append(tr);
})