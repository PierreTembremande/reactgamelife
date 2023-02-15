import React, { useEffect, useState } from "react";

export default function lister() {

    const [pokes, SetPokes] = useState([]);
    const [debut, SetDebut] = useState(0);
    const [fin, SetFin] = useState(20);
    const [motRecherche, SetMotRecherche] = useState("");
    const [newListe, SetNewList] = useState([]);
    const update = (value) => {
        console.log(value)
        SetNewList([])
        for (let i = 0; i < pokes.length; i++) {
            if (pokes[i].name.includes(value)) {
                SetNewList(prev => [...prev, pokes[i]]);
            }
        }
    };

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1279').then(res => {
            if (res.ok) {
                res.json().then(data => SetPokes(data.results));
            }
        }).catch(e => {
            console.log(e);
        })
    }
    );

    return (
        <>
            <div>
                <input type="text" onChange={({ target: { value } }) => { SetMotRecherche(value); update(value) }}></input>
            </div>

            {
                <div>
                    {motRecherche == "" && (
                        <table>
                            <th>Nom des pokemons</th>
                            {pokes.map((poke) => (
                                <tr>
                                    <td>{poke.name}</td>
                                </tr>
                            ))}
                        </table>
                    )}

                    {motRecherche != "" && (
                        <table>
                            <th>Nom des pokemons</th>
                            {newListe.map((element) => (
                                <tr>
                                    <td>{element.name}</td>
                                </tr>
                            ))}
                        </table>
                    )}

                </div>
            }

            {/* <div>
                <table>
                    <th>Nom des pokemons</th>
                    {pokes.slice(0, 20).map((poke) => (
                        <tr>
                            <td>{poke.name}</td>
                        </tr>
                    ))}
                </table>
            </div> */}

        </>
    )
}

