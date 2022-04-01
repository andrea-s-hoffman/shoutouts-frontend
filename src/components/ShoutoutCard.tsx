import { Link } from "react-router-dom";
import Shoutout from "../models/Shoutout";
import "./ShoutoutCard.css";

interface Props {
  shoutout: Shoutout;
  onDeleteShoutout: (id: string) => void;
}

const ShoutoutCard = ({ shoutout, onDeleteShoutout }: Props) => {
  return (
    <li className="ShoutoutCard">
      <Link to={`/user/${shoutout.to}`}>
        <p>To: {shoutout.to}</p>
      </Link>
      <p>
        - from <img src={shoutout.avatar} alt="avatar" />
        {shoutout.from}
      </p>
      <p>Text: {shoutout.text}</p>
      <img src={shoutout.image} alt="shoutout" />
      <button onClick={() => onDeleteShoutout(shoutout._id!)}>X</button>
    </li>
  );
};

export default ShoutoutCard;
