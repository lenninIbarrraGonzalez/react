<<<<<<< HEAD
import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/badge-header.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

class BadgeNew extends React.Component {
  state = {
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '',
    },
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
=======
import React from "react";
// import NavBar from "../components/NavBar";
import header from "../images/platziconf-logo.svg";
import Badge from "../components/Badge";
import "./styles/BadgeNew.css";
import BadgeForm from "../components/BadgeForm";
import api from "../api";
import md5 from "md5";
import PageLoading from "../components/PageLoading";

class BadgeNew extends React.Component {
  state = {
    loading: false,
    error: null,
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: "",
    },
  };

  handleChange = (e) => {
    this.setState({
      form: {
        //dejamos caer los valores que teniamos en el form
        ...this.state.form,
        //agregamos los nuevos valores
        [e.target.name]: e.target.value,
        avatarUrl: `https://www.gravatar.com/avatar/${md5(
          this.state.form.email
        )}`,
>>>>>>> develop
      },
    });
  };

<<<<<<< HEAD
  render() {
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>

=======
  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ loading: true, error: null });

    try {
      await api.badges.create(this.state.form);
      this.setState({ loading: false });

      this.props.history.push("/badges");
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }
    return (
      <React.Fragment>
        {/* <NavBar /> */}
        <div className="BadgeNew__hero">
          <img
            className="BadgeNew__hero-imgage img-fluid"
            src={header}
            alt=""
          />
        </div>
>>>>>>> develop
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
<<<<<<< HEAD
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                twitter={this.state.form.twitter}
                jobTitle={this.state.form.jobTitle}
                email={this.state.form.email}
                avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
              />
            </div>

            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
=======
                firstName={this.state.form.firstName || "FIRST NAME"}
                lastName={this.state.form.lastName || "LAST NAME"}
                twitter={this.state.form.twitter || "TWITTER"}
                jobTitle={this.state.form.jobTitle || "JOB TITLE"}
                avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
              />
            </div>
            <div className="col-6">
              <h1>New Attendant</h1>
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
>>>>>>> develop
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
