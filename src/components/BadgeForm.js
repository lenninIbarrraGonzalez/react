import React from "react";

class BadgeForm extends React.Component {
  state = {};
  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("El boton fue presionado con submit");
  //   console.log(this.state);
  // };

  render() {
    return (
      <div>
        <h1>New Attendant</h1>
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="firstName"
              values={this.props.formValues.firstName}
            />

            <label>Last Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="lastName"
              values={this.props.formValues.lastName}
            />

            <label>Email</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="email"
              name="email"
              values={this.props.formValues.email}
            />

            <label>Job Title</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="jobTitle"
              values={this.props.formValues.jobTitle}
            />

            <label>Twitter</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="twitter"
              values={this.props.formValues.twitter}
            />
          </div>
          <button className="btn btn-primary">Save</button>
          {this.props.error && (
            <p className="text-danger">{this.props.error.message}</p>
          )}
        </form>
      </div>
    );
  }
}

export default BadgeForm;
