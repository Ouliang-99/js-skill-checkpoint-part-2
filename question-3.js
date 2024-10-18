// เริ่มเขียนโค้ดตรงนี้

const getUsers = () => fetch("https://jsonplaceholder.typicode.com/users");

const onSuccess = (data) => {
    const name = data.map((user) => user.name)
    console.log(name);}

const handleResponse = (Response) => Response.json();

getUsers().then(handleResponse).then(onSuccess)


