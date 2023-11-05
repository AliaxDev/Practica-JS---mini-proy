const fotos = [
    {
        "titulo": "Foto 1",
        "foto": "./img/1.jpg",
        "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut obcaecati est, tempore eum distinctio deleniti iusto culpa "
    },
    {
        "titulo": "Foto 2",
        "foto": "./img/2.jpg",
        "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut obcaecati est, tempore eum distinctio deleniti iusto culpa"
    },
    {
        "titulo": "Foto 3",
        "foto": "./img/3.jpg",
        "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut obcaecati est, tempore eum distinctio deleniti iusto culpa "
    },
    {
        "titulo": "Foto 4",
        "foto": "./img/4.jpg",
        "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut obcaecati est, tempore eum distinctio deleniti iusto culpa "
    },
    {
        "titulo": "Foto 5",
        "foto": "./img/5.jpg",
        "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut obcaecati est, tempore eum distinctio deleniti iusto culpa "
    },
    {
        "titulo": "Foto 6",
        "foto": "./img/6.jpg",
        "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut obcaecati est, tempore eum distinctio deleniti iusto culpa "
    }
]

const container = document.querySelector('.container')

fotos.forEach(f => {

    const url = f.foto
    const title = f.titulo
    const descripcion = f.descripcion

    let html = `<section class="section">
                    <header class="header">
                        <div class="img-container" style="background-image: url('${url}');"></div>
                        <h2 class="title">${title}</h2>
                    </header>

                    <aside class="text-container">
                        <p><span>Autor: </span>Lorem ipsum dolor sit </p>
                        <p><span>Descripcion: </span>${descripcion}</p>    
                    </aside>
              </section>`;
    container.innerHTML += html;
});





