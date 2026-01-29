import User from "./User";

function UserList() {
  let users = [
    { firstName: "Mari", lastName: "Doucet", loggedIn: true },
    { firstName: "Hugues", lastName: "Froger", loggedIn: false },
    { firstName: "Alain", lastName: "Terieur", loggedIn: true },
    { firstName: "Alex", lastName: "Terieur", loggedIn: false },
  ];

  return (
    <>
      <h1>Liste des utilisateurs</h1>
      <ul>
        {users.map((user, index) => (
          <User key={index} user={user} />
        ))}
      </ul>
    </>
  );
}

export default UserList;