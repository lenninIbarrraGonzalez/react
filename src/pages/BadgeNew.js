import React from "react";
import NavBar from "../components/NavBar";
import header from "../images/badge-header.svg";
import Badge from "../components/Badge";
import "./styles/BadgeNew.css";
import BadgeForm from "../components/BadgeForm";

class BadgeNew extends React.Component {
  state = {
    form: {
      // firstName: "",
      // lastName: "",
      // email: "",
      // jobTitle: "",
      // twitter: "",
    },
  };

  //primera forma para solucionar que los datos se mantengan en la pagina
  // handleChange = (e) => {
  //   const nextForm = this.state.form;
  //   nextForm[e.target.name] = e.target.value;

  //   this.setState({
  //     form: nextForm,
  //   });
  // };

  handleChange = (e) => {
    this.setState({
      form: {
        //dejamos caer los valores que teniamos en el form
        ...this.state.form,
        //agregamos los nuevos valores
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <div>
        <NavBar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                twitter={this.state.form.twitter}
                jobTitle={this.state.form.jobTitle}
                avatarUrl="https://scontent.fbog15-1.fna.fbcdn.net/v/t1.0-9/p960x960/98605375_1949342245196706_246653688272125952_o.jpg?_nc_cat=107&_nc_sid=85a577&_nc_ohc=fcw4umBTQVwAX-KTGgV&_nc_ht=scontent.fbog15-1.fna&_nc_tp=6&oh=b3bed8100dbb94b4dff034803684d173&oe=5EF1B0D0"
              />
            </div>
            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
