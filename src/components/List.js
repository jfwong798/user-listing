import React from 'react'

const ListItem = ({ item }) => {
  const {
    name,
    username,
    email,
    website,
    phone,
    address: { street, suite, city, zipcode },
  } = item
  return (
    <li className="list-item">
      <h4>{name}</h4>
      <div>
        <i className="fas fa-user" />
        {username}
      </div>
      <div className="info-item">
        <i className="fas fa-envelope" />
        {email}
      </div>
      <div>
        <i className="fas fa-map-marker-alt" />
        <div>
          {street}
          <br />
          {suite}
          <br />
          {city}
          <br />
          {zipcode}
        </div>
      </div>
      <div>
        <i className="fas fa-link" />
        <a href={`http://www.${website}`} target="_blank" rel="opener">
          {website}
        </a>
      </div>

      <div className="list-item-footer">
        <div className="action">
          <i className="fas fa-phone" />
          {phone}
        </div>
      </div>
    </li>
  )
}

export default ({ data }) => (
  <div className="list">
    <ul className="list-items">
      {data && data.map((user, index) => <ListItem key={index} item={user} />)}
    </ul>
  </div>
)
