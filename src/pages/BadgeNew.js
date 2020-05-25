import React from "react";
import NavBar from "../components/NavBar";
import header from "../images/badge-header.svg";
import Badge from "../components/Badges";
import "./styles/BadgeNew.css";

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName="Lennin"
                lastName="Ibarra"
                twitter="sata666"
                jobTitle="Ingeniero de sistemas"
                avatarUrl="https://scontent.fbog15-1.fna.fbcdn.net/v/t1.0-9/p960x960/98605375_1949342245196706_246653688272125952_o.jpg?_nc_cat=107&_nc_sid=85a577&_nc_ohc=fcw4umBTQVwAX-KTGgV&_nc_ht=scontent.fbog15-1.fna&_nc_tp=6&oh=b3bed8100dbb94b4dff034803684d173&oe=5EF1B0D0"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
