const getCommentsBack = async () => {
    const res = await fetch("http://localhost:4000/productos")
    const data = await res.json();
    const commentContainer = document.getElementById('commentsSection');

    data.forEach(element => {
        const div = document.createElement('div');

        div.innerHTML = `
            <div class="tarjeta-comentario" value="${element.id}">
                <h3>${element.nombre}</h3>
                <p>${element.comentario}</p>
            </div>
        `;

        commentContainer.appendChild(div);
    });

}

const getCommentsFront = () => {
    // Obtener los comentarios de la gente

    const nombreComent = document.getElementById('nombreUserNew').value;
    const comentContent = document.getElementById('floatingTextarea').value;
    const enviarBtn = document.getElementById('sendButton');

}

console.log("getComments here");
getCommentsBack();