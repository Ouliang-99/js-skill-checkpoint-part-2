// เริ่มเขียนโค้ดตรงนี้

const getUsers = () => fetch("https://jsonplaceholder.typicode.com/users");

const onSuccess = async(data) => {
    const response = await data.json();
    const name = response.map((user) => user.name);
    console.log(name);
}

getUsers().then(onSuccess)


