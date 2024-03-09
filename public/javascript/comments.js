const getComments = async () => {
    const res = await fetch("http://localhost:4000/productos").then((data) => {
        console.log('data: ' + data);
        console.log(data.json());
    }).catch((err) => {
        console.log('error: ' + err);
    });
}

console.log("getComments here");