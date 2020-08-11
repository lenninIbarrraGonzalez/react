import React, {useState, useMemo} from "react";
import imgtwitter from "../images/twitter.png";
import { Link } from "react-router-dom";
import "./styles/BadgeList.css";

function useSearchBadges(badges) {
  const [query, setQuery ] = useState('');
  const [ filteredBadges, setFilterBadges ] = useState(badges);

  useMemo(() => {
    const result = badges.filter((badge) => {
      return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
  });
   setFilterBadges(result);
  }, [badges, query]);

  return { query, setQuery, filteredBadges }
}


function BadgesList (props) {
    const badges = props.badges;
    const { query, setQuery, filteredBadges } = useSearchBadges(badges)
    
    

    if (filteredBadges.length === 0) {
      return (
        <div>
          <div className="form-group">
            <label>Filter Badge</label>
            <input
              type="text"
              className="form-control"
              value={query}
              onChange={(e) => {
                // console.log(e.target.value)
                setQuery(e.target.value);
              }}
            />
          </div>
          <h3>No badges were found</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Create new badge
          </Link>
        </div>
      );
    }

    return (
      <div className="BadgeList">
        <div className="form-group">
          <label>Filter Badge</label>
          <input
            type="text"
            className="form-control"
            value={query}
            onChange={(e) => {
              // console.log(e.target.value)
              setQuery(e.target.value);
            }}
          />
        </div>
        <ul className="list-unstyled">
          {filteredBadges.map((badge) => {
            return (
              <li key={badge.id}>
                <Link
                  className="text-reset text-decoration-none Badges__container-card"
                  to={`/badges/${badge.id}`}
                >
                  <div className="Badges__container-avatar">
                    <img src={badge.avatarUrl} alt="" />
                  </div>
                  <div className="Badges__container-info">
                    <h5>
                      {badge.firstName} {badge.lastName}
                    </h5>
                    <p className="Badges__container-twitter">
                      <img src={imgtwitter} alt="logo twitter" />@
                      {badge.twitter}
                    </p>
                    <strong>{badge.jobTitle}</strong>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
}

export default BadgesList;
