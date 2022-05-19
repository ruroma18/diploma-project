const getUsers = () => fetch("/data.json")
  .then((res) => res.json())
  .catch((error) => console.log(error));

export default getUsers