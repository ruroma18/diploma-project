const getCourse = () => fetch("/cibersecurity.json")
.then((res) => res.json())
.catch((err => console.log(err)))

export default getCourse;