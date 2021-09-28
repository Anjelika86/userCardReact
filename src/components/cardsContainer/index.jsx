import { Component } from "react";
import UserCard from "../UserCard";

class CardsContainer extends Component {
  render() {
    const { users } = this.props;
    return (
      <ul className="cardsContainer">
        {users.map((user) => (
          <li className="cardWrapper ">
            <UserCard key={user.id} user={user} />
          </li>
        ))}
      </ul>
    );
  }
}

export default CardsContainer;
