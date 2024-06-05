import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import '../Styles/custom.css';

const FilmePage = () => {
    const { id } = useParams();
    const [filme, setFilme] = useState('');

    useEffect(() => {
        async function buscarFilme() {
            const filmes = axios.get(`http://143.198.156.185/api/filmes/porid/${id}`).then(function (value) {
                setFilme(value.data);
            }).catch(function (value) {
                console.log(value);
            });

        }
        buscarFilme();

    });
    return (
        <div className="container mt-3">
            <div class="card mb-3 border border-0">
                <div className="card-body bg-black text-danger text-center">
                    <h2 class=" card-title fw-bold fs-1 text ">{filme.titulo} </h2>
                </div>
                {
                    filme.imagens && filme.imagens[1] && (
                        <img src={filme.imagens[0].url} class="card-img" alt="..." />)
                }

                <div class="card-body bg-black   text-danger">
                    <label class="card-text fw-bold mt-3">Gênero:</label>
                    <p class="card-text">{filme.categoria}.    </p>
                    <label class="card-text fw-bold mt-2">Sinopse:</label>
                    <p class="card-text ">{filme.sinopse}</p>
                    <label class="card-text fw-bold mt-2">Trailer:</label>
                    <p class="card-text"><a class="btn btn-outline-danger mt-2" href={filme.url_video}>Clique aqui e confira!</a></p>
                    <p class="card-text mt-4"><small class="text-body-dark">Favoritos: {filme.qtd_favoritos}.</small></p>

                </div>
            </div>
        </div>
    )
}
export default FilmePage;