<<<<<<< HEAD
import React from 'react';

import './styles/Badge.css';
import confLogo from '../images/badge-header.svg';
=======
import React from "react";
import "./styles/Badge.css";
import confLogo from "../images/badge-header.svg";
import Gravatar from "./Gravatar";
>>>>>>> develop

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>
<<<<<<< HEAD

        <div className="Badge__section-name">
          <img
            className="Badge__avatar"
            src={this.props.avatarUrl}
            alt="Avatar"
          />
=======
        <div className="Badge__section-name">
          <Gravatar className="Badge__avatar" email={this.props.email} />
>>>>>>> develop
          <h1>
            {this.props.firstName} <br /> {this.props.lastName}
          </h1>
        </div>
<<<<<<< HEAD

=======
>>>>>>> develop
        <div className="Badge__section-info">
          <h3>{this.props.jobTitle}</h3>
          <div>@{this.props.twitter}</div>
        </div>
<<<<<<< HEAD

        <div className="Badge__footer">#platziconf</div>
=======
        <div className="Badge__footer">#PlaziConf</div>
>>>>>>> develop
      </div>
    );
  }
}

export default Badge;
