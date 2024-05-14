function checkIfRoleIsCheked() {
    let list = document.getElementsByName("role");
    let counter = 0;
    for (let radioButton of list) {
        if (radioButton.checked == false) {
            counter++;
        }
    }
    return counter !== list.length;
}

function register() {

    if(checkIfRoleIsCheked() === false){
        alert('Marque alguma role!')
        return;
    }


    let payload = {
        role: document.getElementsByName("role")[0].checked == true ? 'user' : 'admin',
        fullName: document.querySelector("#fullName").value,
        enrollment: document.querySelector("#enrollment").value,
        birthDate: document.querySelector("birthDate").value,
        password: document.querySelector("#password").value,
        email: document.querySelector("#email").value,
        chart: document.querySelector("#chart").value,
        rank: document.querySelector("#rank").value
    }
}