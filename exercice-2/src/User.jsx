import { useState } from "react";

function User() {
  const [status, setStatus] = useState(false);

  function toggleStatus() {
    if (status === true) {
      setStatus(false);
    } else {
      setStatus(true);
    }
  }
  let statusText;
  if (status === true) {
    statusText = "En Ligne";
  } else {
    statusText = "Hors Ligne";
  }
  return (
    <article>
      <h2>Mari Doucet</h2>
      <p>{statusText}</p>
      <button onClick={toggleStatus}>Connecter</button>
    </article>
  );
}
export default User;