import React, { useEffect, useState } from "react";

export default function Lister() {

    const [pokes, SetPokes] = useState([]);
    const [offSet, SetOffSet] = useState(0);
    const [limite, SetLimite] = useState(0);
    const [motRecherche, SetMotRecherche] = useState("");
    const [newListe, SetNewList] = useState([]);

    const update = (value) => {
        SetNewList([])
        for (let i = 0; i < pokes.length; i++) {
            if (pokes[i].name.includes(value)) {
                SetNewList(prev => [...prev, pokes[i]]);
            }
        }
    };

    const pageSuivante = () => {
        SetOffSet(Number(offSet) + Number(limite));
    }

    const pagePrecedente = () => {
        if (offSet - limite >= 0) {
            SetOffSet(offSet - limite);
        }
    }

    console.log(offSet)

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1279').then(res => {
            if (res.ok) {
                res.json().then(data => SetPokes(data.results));
            }
        }).catch(e => {
            console.log(e);
        })
    }, []
    );

    return (
        <>
            <div>
                <label>Barre de recherche</label>
                <input type="text" onChange={({ target: { value } }) => { SetMotRecherche(value); update(value) }}></input>
                <br /><br />
                <label>Nombre de pokémons à afficher</label>
                <input type="number" value={limite} onChange={({ target: { value } }) => { SetLimite(value) }}></input>
            </div>

            {
                <div>
                    {motRecherche === "" && limite === 0 && (
                        <table>
                            <thead>
                                <tr>
                                    <th>Nom des pokemons</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pokes.slice(0, pokes.length).map((poke) => (
                                    <tr key={poke.name}>
                                        <td>{poke.name}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}

                    {limite != 0 && (
                        <table>
                            <thead>
                                <tr>
                                    <th>Nom des pokemons</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pokes.slice(offSet, Number(offSet) + Number(limite)).map((poke) => (
                                    <tr key={poke.name}>
                                        <td>{poke.name}</td>
                                    </tr>

                                ))}
                            </tbody>
                        </table>
                    )}

                    {motRecherche != "" && (
                        <table>
                            <thead>
                                <tr>
                                    <th>Nom des pokemons</th>
                                </tr>
                            </thead>
                            <tbody>
                                {newListe.map((element) => (
                                    <tr key={poke.name}>
                                        <td>{element.name}</td>
                                    </tr>

                                ))}
                            </tbody>
                        </table>
                    )}

                </div>
            }

            <div>
                <button onClick={pagePrecedente}>Précédent</button>
                <button onClick={pageSuivante}>Suivant</button>
            </div>


        </>
    )
}

