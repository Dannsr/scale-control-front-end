function checkIfRoleIsChecked(){
    let list = document.getElementsByName("role");
    let counter = 0;
    for (let radiobutton in list){
        if(radiobutton.checked == false){
            counter++;
        }
    }
    return counter == list.length;
}

function register(){
    if(checkIfRoleIsChecked()){
        alert('Marque algum perfil!');
        return;
    }
    let payload  = {
        role: document.getElementsByName('role')[0].checked == true ? 'admin' : 'user',
        fullName: document.querySelector("#fullName").value,
        enrollment: document.querySelector("#enrollment").value,
        birthDate: document.querySelector("#birthDate").value
    }
    if(document.getElementsByName("role")[0].checked == true){
        payload.role
    }
}

fetch("api/users", {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
        'Content-Type': 'application/json' 
    }
}).then(response => response.json())
