<<<<<<< HEAD
import React from 'react';

import './styles/BadgesList.css';

class BadgesListItem extends React.Component {
  render() {
    return (
      <div className="BadgesListItem">
        <img
          className="BadgesListItem__avatar"
          src={this.props.badge.avatarUrl}
          alt={`${this.props.badge.firstName} ${this.props.badge.lastName}`}
        />

        <div>
          <strong>
            {this.props.badge.firstName} {this.props.badge.lastName}
          </strong>
          <br />@{this.props.badge.twitter}
          <br />
          {this.props.badge.jobTitle}
        </div>
      </div>
    );
  }
}

class BadgesList extends React.Component {
  render() {
    return (
      <div className="BadgesList">
        <ul className="list-unstyled">
          {this.props.badges.map(badge => {
            return (
              <li key={badge.id}>
                <BadgesListItem badge={badge} />
              </li>
            );
          })}
        </ul>
      </div>
=======
import React from "react";
import imgtwitter from "../images/twitter.png";
import { Link } from "react-router-dom";
import "./styles/BadgeList.css";
class BadgesList extends React.Component {
  render() {
    if (this.props.badges.length === 0) {
      return (
        <div>
          <h3>No badges were found</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Create new badge
          </Link>
        </div>
      );
    }

    return (
      <ul className="list-unstyled">
        {this.props.badges.map((badge) => {
          return (
            <li key={badge.id}>
              <Link
                className="text-reset text-decoration-none Badges__container-card"
                to={`/badges/${badge.id}`}
              >
                <div className="Badges__container-avatar">
                  <img src={badge.avatarUrl} alt="" />
                </div>
                <div className='Badges__container-info'>
                  <h5>
                    {badge.firstName} {badge.lastName}
                  </h5>
                  <p className="Badges__container-twitter">
                    <img src={imgtwitter} alt="logo twitter" />@{badge.twitter}
                  </p>
                  <strong>{badge.jobTitle}</strong>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
>>>>>>> develop
    );
  }
}

export default BadgesList;
