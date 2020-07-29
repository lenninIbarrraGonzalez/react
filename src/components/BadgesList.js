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
    );
  }
}

export default BadgesList;
