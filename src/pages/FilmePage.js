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
        <div className="container mt-5">
            <div class="card mb-3 border-danger border-3">
                <div className="card-body text-danger text-center">
                    <h2 class=" card-title  ">{filme.titulo} </h2>
                </div>
                {
                    filme.imagens && filme.imagens[1] && (
                        <img src={filme.imagens[0].url} class="card-img" alt="..." />)
                }

                <div class="card-body   text-danger">
                    <h6 class="card-title mt-3">Gênero: {filme.categoria}.</h6>
                    <p class="card-text mt-3">{filme.sinopse}</p>
                    <p class="card-text mt-3">{filme.video}</p>
                    <p class="card-text mt-3"><small class="text-body-dark">Favoritos: {filme.qtd_favoritos}.</small></p>
                    <p class="card-text mt-3"><small class="text-body-dark">Preço: R${filme.qtd_valor},00.</small></p>
                </div>
            </div>
        </div>
    )
}
export default FilmePage;