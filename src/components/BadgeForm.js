<<<<<<< HEAD
import React from 'react';

class BadgeForm extends React.Component {
  handleClick = e => {
    console.log('Button was clicked');
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log('Form was submitted');
    console.log(this.state);
=======
import React from "react";

class BadgeForm extends React.Component {
  // state = {};
  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("El boton fue presionado con submit");
  //   console.log(this.state);
  // };
  handleClick = (e) => {
    console.log("Button was clicked");
>>>>>>> develop
  };

  render() {
    return (
      <div>
<<<<<<< HEAD
        <h1>New Attendant</h1>

        <form onSubmit={this.handleSubmit}>
=======
        
        <form onSubmit={this.props.onSubmit}>
>>>>>>> develop
          <div className="form-group">
            <label>First Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="firstName"
              value={this.props.formValues.firstName}
            />
<<<<<<< HEAD
          </div>

          <div className="form-group">
=======

>>>>>>> develop
            <label>Last Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="lastName"
              value={this.props.formValues.lastName}
            />
<<<<<<< HEAD
          </div>

          <div className="form-group">
=======

>>>>>>> develop
            <label>Email</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="email"
              name="email"
              value={this.props.formValues.email}
            />
<<<<<<< HEAD
          </div>

          <div className="form-group">
=======

>>>>>>> develop
            <label>Job Title</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="jobTitle"
              value={this.props.formValues.jobTitle}
            />
<<<<<<< HEAD
          </div>

          <div className="form-group">
=======

>>>>>>> develop
            <label>Twitter</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="twitter"
              value={this.props.formValues.twitter}
            />
          </div>
<<<<<<< HEAD

          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>
=======
          <button className="btn btn-primary">Save</button>
          {this.props.error && (
            <p className="text-danger">{this.props.error.message}</p>
          )}
>>>>>>> develop
        </form>
      </div>
    );
  }
}

export default BadgeForm;
