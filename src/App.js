import React, { useState } from 'react';
import './index.css';
export default function App() {
  const [users, setUsers] = useState([]);

  const loadUser = async () => {
    const response = await fetch('https://reqres.in/api/users?page=1');
    const jsonResponse = await response.json();
    setUsers(jsonResponse.data);
  };
  return (
    <div className="first">
      <div className="container">
        <a href="App.js">LetsGrowMore</a>
        <button class="btn1 " onClick={loadUser}>
          Get User
        </button>
      </div>
      <div className="row">
        {users.map(({ id, email, first_name, last_name, avatar }) => (
          <div className="col-lg-4 col-md-4 col-sm-2">
            <div className="card">
              <img className="card-img-top" src={avatar} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title" key={id}>
                  <span>ID:</span> {id}
                </h5>
                <h5 className="card-title" key={id}>
                  <span>Name:</span> {`${first_name} ${last_name}`}
                </h5>
                <p className="card-title" key={id}>
                  <span>
                    <b>Email:</b>
                  </span>{' '}
                  {email}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <br/>
      <text>
     
      <h6>Harshitha</h6>
      </text>
      
    </div>
  );
}