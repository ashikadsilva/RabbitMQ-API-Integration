import React, { useState } from 'react';
import axios from 'axios';

const PostMessage = () => {
  const [user, setUser] = useState({
    id: '',
    firstName: '',
    lastName: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value.trim()
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8080/api/json/v1/publishmessage', user)
      .then((res) => {
        console.log(res.data);
        alert('Message sent successfully to RabbitMQ');
      })
      .catch((error) => {
        alert("Message didn't deliver");
        console.log(error);
      });
  };

  return (
    <div>
      <br />
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h2 className="card-header text-center">Post a Message</h2>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group row">
                  <label htmlFor="id" className="col-sm-3 col-form-label">
                    ID:
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="number"
                      id="id"
                      placeholder="Enter User ID"
                      name="id"
                      className="form-control"
                      value={user.id}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label htmlFor="firstName" className="col-sm-3 col-form-label">
                    First Name:
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      id="firstName"
                      placeholder="Enter User Firstname"
                      name="firstName"
                      className="form-control"
                      value={user.firstName}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label htmlFor="lastName" className="col-sm-3 col-form-label">
                    Last Name:
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      id="lastName"
                      placeholder="Enter User LastName"
                      name="lastName"
                      className="form-control"
                      value={user.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <button type="submit" className="btn btn-success">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostMessage;


