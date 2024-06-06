import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import '../Styles/custom.css';

const LivroPage = () => {
    const { id } = useParams();
    const [livros, setLivro] = useState('');

    useEffect(() => {
        async function buscarLivro() {
            const livros = axios.get(`http://143.198.156.185/api/livros/porid/${id}`).then(function (value) {
                setLivro(value.data);
            }).catch(function (value) {
                console.log(value);
            });

        }
        buscarLivro();

    });
    return (
        <div className="container mt-5">
            <div class="card mb-3 border border-0">
                <div className="card-body bg-black text-danger text-center">
                    <h2 class=" card-title fw-bold fs-1 text ">{livros.titulo} </h2>
                </div>
                {
                    livros.imagens && livros.imagens[1] && (
                        <img src={livros.imagens[0].url} class="card-img" alt="..." />)
                }

                <div class="card-body bg-black   text-danger">
                    <label class="card-text fw-bold mt-3">Gênero:</label>
                    <p class="card-text">{livros.categoria}.    </p>
                    <label class="card-text fw-bold mt-2">Sinopse:</label>
                    <p class="card-text ">{livros.sinopse}</p>
                    <label class="card-text fw-bold mt-2">Trailer:</label>
                    <p class="card-text"><a class="btn btn-outline-danger mt-2" href={livros.url_video}>Clique aqui e confira!</a></p>
                    <p class="card-text mt-4"><small class="text-body-dark">Favoritos: {livros.qtd_favoritos}.</small></p>

                </div>
            </div>
        </div>
    )
}
export default LivroPage;