async function getComments(){
    const res = await fetch("http://localhost:4000/productos", {
        mode: 'no-cors'
    }).then((data) => {
        console.log(data);
    }).catch(err => {
        console.log(err);
    });
    const resJson = await res.json();
}

console.log("getComments here");