import React from "react";

class BadgeForm extends React.Component {
  //metodos que manejan los eventos del formulario

  //defiiendo como un objeto vacio
  state = {};

  // handleChange = (e) => {
  // console.log({
  //   name: e.target.name,
  //   value: e.target.value,
  // });
  //   this.setState({
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // handleClick = (e) => {
  //   console.log("El boton fue presionado");
  // };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("El boton fue presionado con submit");
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h1>New Attendant</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              // onChange={this.handleChange}
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="firstName"
              //value={this.state.firstName}
              values={this.props.formValues.firstName}
            />

            <label>Last Name</label>
            <input
              // onChange={this.handleChange}
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="lastName"
              //value={this.state.lastName}
              values={this.props.formValues.lastName}
            />

            <label>Email</label>
            <input
              // onChange={this.handleChange}
              onChange={this.props.onChange}
              className="form-control"
              type="email"
              name="email"
              //value={this.state.email}
              values={this.props.formValues.email}
            />

            <label>Job Title</label>
            <input
              // onChange={this.handleChange}
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="jobTitle"
              //value={this.state.jobTitle}
              values={this.props.formValues.jobTitle}
            />

            <label>Twitter</label>
            <input
              // onChange={this.handleChange}
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="twitter"
              //value={this.state.twitter}
              values={this.props.formValues.twitter}
            />
          </div>
          <button
            // type="button"
            // onClick={this.handleClick}
            className="btn btn-primary"
          >
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
