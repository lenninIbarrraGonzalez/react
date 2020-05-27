import React from "react";
import imgtwitter from "../images/twitter.png";

class BadgesList extends React.Component {
  render() {
    return (
      <ul className="list-unstyled">
        {this.props.badges.map((badge) => {
          return (
            <li key={badge.id} className="Badges__container-card">
              <div className="Badges__container-avatar">
                <img src={badge.avatarUrl} alt="" />
              </div>
              <div>
                <h5>
                  {badge.firstName} {badge.lastName}
                </h5>
                <p className="Badges__container-twitter">
                  <img src={imgtwitter} alt="logo twitter" />@{badge.twitter}
                </p>
                <strong>{badge.jobTitle}</strong>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
