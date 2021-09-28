import { Component } from "react";
import Image from "../Image";
import "./style.css";

class UserCard extends Component {
  render() {
    const {
      user: { firstName, lastName, profilePicture },
    } = this.props;
    const fullName = `${firstName} ${lastName}`.trim();

    return (
      <article className="userCard">
        <Image src={profilePicture} alt={fullName} title={fullName} />
        <h2 className="cardName">
          {firstName || lastName ? fullName : "Unknown"}
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
          repellendus qui culpa soluta quia quam nihil exercitationem unde
          quasi. Commodi nostrum corporis dolor maxime ut nemo nulla distinctio
          numquam. Consequuntur?
        </p>
      </article>
    );
  }
}
export default UserCard;
