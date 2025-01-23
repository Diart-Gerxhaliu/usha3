import React from 'react';

function Input() {
  function Save() {
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let adress = document.getElementById("adress").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let repeat = document.getElementById("repeat").value;
    let users = JSON.parse(localStorage.getItem("users")) || [];

    for (let i = 0; i < users.length; i++) {
      if (name === users[i].name || email === users[i].email) {
        alert("A user with this name or email already exists");
        return 0;
      }
    }

    if (password.length<8) {
        alert("Password too short!")
        return 0;
    }

    if (password !== repeat) {
      alert("Passwords do not match");
      return 0;
    }

    const index = users.length + 1;

    users.push({
        index: index, 
        name: name, 
        surname: surname, 
        adress: adress, 
        email: email, 
        password: password 
    });
    localStorage.setItem("users", JSON.stringify(users));
    alert("User registered successfully!");


    document.getElementById("name").value = "";
    document.getElementById("surname").value = "";
    document.getElementById("adress").value= "";
    document.getElementById("email").value= "";
    document.getElementById("password").value="";
    document.getElementById("repeat").value="";

  }

  return (
    <div>
      <form>
        <div className='row'>
          <input type='text' name='name' placeholder='name' id='name' />
          <input type='text' name='surname' placeholder='surname' id='surname' />
        </div>
        <div className='row'>
          <input type='text' name='adress' placeholder='adress' id='adress' />
          <input type='email' name='email' placeholder='email' id='email' />
        </div>
        <div className='row'>
          <input type='password' name='password' placeholder='password' id='password' />
          <input type='password' name='repeat' placeholder='repeat' id='repeat' />
        </div>
        <button type='button' id='save' onClick={Save}>Submit</button>
      </form>
    </div>
  );
}

export default Input;
