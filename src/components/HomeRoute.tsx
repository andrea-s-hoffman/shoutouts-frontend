import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import { signInWithGoogle } from "../firebaseConfig";
import Shoutout from "../models/Shoutout";
import {
  addShoutout,
  deleteShoutout,
  getShoutouts,
} from "../services/ShoutoutService";
import AddShoutoutForm from "./AddShoutoutForm";
import "./HomeRoute.css";
import ShoutoutCard from "./ShoutoutCard";

const HomeRoute = () => {
  const { user } = useContext(AuthContext);
  const [shoutouts, setShoutouts] = useState<Shoutout[]>([]);

  const getAndSetShoutouts = () => {
    getShoutouts({}).then((response) => {
      setShoutouts(response);
    });
  };

  const addShoutoutHandler = (shoutout: Shoutout): void => {
    addShoutout(shoutout).then(() => {
      getAndSetShoutouts();
    });
  };

  const deleteShoutoutHandler = (id: string): void => {
    deleteShoutout(id).then(() => {
      getAndSetShoutouts();
    });
  };

  useEffect(() => {
    getAndSetShoutouts();
  }, []);

  return (
    <div className="HomeRoute">
      <h2>All Shoutouts</h2>
      {user ? (
        <AddShoutoutForm onAddShoutout={addShoutoutHandler} name="" />
      ) : (
        <div>
          <p>Sign In to leave a shoutout</p>
          <button onClick={signInWithGoogle}>Sign In</button>
        </div>
      )}

      <ul>
        {shoutouts.map((shoutout) => {
          return (
            <ShoutoutCard
              key={shoutout._id}
              shoutout={shoutout}
              onDeleteShoutout={deleteShoutoutHandler}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default HomeRoute;
