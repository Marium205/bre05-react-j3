import { useState } from "react";

function User() {
  const [user, setUser] = useState({
    firstName: "Mari",
    lastName: "Doucet",
    loggedIn: false,
  });

  function toggleLogin() {
    let newLoggedIn;

    if (user.loggedIn === true) {
      newLoggedIn = false;
    } else {
      newLoggedIn = true;
    }

    // ✅ syntaxe demandée par le prof
    let newUser = Object.assign({}, user, {
      loggedIn: newLoggedIn,
    });

    setUser(newUser);
  }

  let statusText;

  if (user.loggedIn === true) {
    statusText = "En Ligne";
  } else {
    statusText = "Hors Ligne";
  }

  return (
    <article>
      <h2>
        {user.firstName} {user.lastName}
      </h2>
      <p>{statusText}</p>
      <button onClick={toggleLogin}>Connexion / Déconnexion</button>
    </article>
  );
}

export default User;