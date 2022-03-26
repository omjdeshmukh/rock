import React, { useState } from "react";
import "./index.css";

const ProbOne = ({ onClickBack }) => {
  const [view, setView] = useState(false);
  const [users, setUsers] = useState([]);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const { target } = event;
    setUsers((state) => [...state, Object.fromEntries(new FormData(target))]);
    setView(true);
  };

  return (
    <>
      <div className="p-4">
        <button
          type="button"
          class="btn btn-primary"
          onClick={() => onClickBack()}
        >
          Back
        </button>
      </div>
      <main className="container">
        <div className="py-3 text-center">
          <h2>Problem First</h2>
        </div>
        {view ? (
          <div>
            <button
              type="button"
              className="btn btn-link"
              onClick={() => setView(false)}
            >
              <b>Back</b>
            </button>

            <table className="table">
              <thead>
                <tr>
                  <th>Frist Name</th>
                  <th>Last Name</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>Marital Status</th>
                  <th>Qualification</th>
                </tr>
              </thead>
              <tbody>
                {users.map((x, i) => {
                  return (
                    <tr key={i}>
                      <td> {x.firstName} </td>
                      <td> {x.lastName} </td>
                      <td> {x.age} </td>
                      <td> {x.gender} </td>
                      <td> {x.maritalStatus} </td>
                      <td> {x.qualification} </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <div>
            <h4 className="mb-3">User Details</h4>
            <form
              className="needs-validation"
              noValidate
              onSubmit={handleOnSubmit}
            >
              <div className="row g-3">
                <input
                  type="text"
                  name="firstName"
                  className="form-control"
                  id="firstName"
                  placeholder="First Name"
                  required
                />

                <input
                  type="text"
                  name="lastName"
                  className="form-control"
                  id="lastName"
                  placeholder="Last Name"
                  required
                />

                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="email"
                  placeholder="you@example.com"
                />

                <select
                  className="form-select"
                  id="gender"
                  name="gender"
                  required
                >
                  <option value="">Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="others">Others</option>
                </select>

                <input
                  type="number"
                  className="form-control"
                  name="age"
                  id="age"
                  placeholder="Age"
                  required
                />

                <div className="col-6">
                  <h6 className="mt-3">Marital Status</h6>
                  <div className="form-check">
                    <input
                      id="credit"
                      name="maritalStatus"
                      type="radio"
                      className="form-check-input"
                      defaultChecked
                      value="married"
                      required
                    />
                    <label className="form-check-label">Married</label>
                  </div>
                  <div className="form-check">
                    <input
                      id="debit"
                      name="maritalStatus"
                      type="radio"
                      className="form-check-input"
                      value="single"
                      required
                    />
                    <label className="form-check-label">Single</label>
                  </div>
                </div>

                <div className="col-6">
                  <h6 className="mt-3">Qualification</h6>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      name="qualification"
                      className="form-check-input"
                      value="10th"
                      id="same-address"
                    />
                    <label className="form-check-label">10th</label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      name="qualification"
                      className="form-check-input"
                      value="12th"
                      id="save-info"
                    />
                    <label className="form-check-label">12th</label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      name="qualification"
                      className="form-check-input"
                      value="b.tech"
                      id="save-info"
                    />
                    <label className="form-check-label">B.Tech</label>
                  </div>
                </div>
              </div>

              <hr className="my-4" />
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </form>
          </div>
        )}
      </main>
    </>
  );
};

export default ProbOne;
