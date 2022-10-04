const getUsers = () => fetch("/users.json")
  .then((res) => res.json())
  .catch((error) => console.log(error));

export default getUsers