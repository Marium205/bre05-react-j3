import { useState } from "react";

function User(props) {
  const [user, setUser] = useState({
    firstName: props.user.firstName,
    lastName: props.user.lastName,
    loggedIn: props.user.loggedIn,
  });

  function toggleLogin() {
    let newLoggedIn;
    if (user.loggedIn === true) {
      newLoggedIn = false;
    } else {
      newLoggedIn = true;
    }
    // nouvel objet
    let newUser = Object.assign({}, user, { loggedIn: newLoggedIn });
    setUser(newUser);
  }
  let statusText;

  if (user.loggedIn === true) {
    statusText = "En Ligne";
  } else {
    statusText = "Hors Ligne";
  }
  return (
    <li>
      <article>
        <h2>
          {user.firstName} {user.lastName}
        </h2>
        <p>{statusText}</p>
        <button onClick={toggleLogin}>Connexion / Déconnexion</button>
      </article>
    </li>
  );
}

export default User;