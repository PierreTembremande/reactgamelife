import React, { useState } from "react";
import "./grille.css";

let nbVoisins = 0;
let x = 0;
let y = 0;
const GenererGrille = (length) => Array.from({ length }, () => Array.from({ length }, () => false));
const enDehors = ({ length }, { x, y }) => x < 0 || y < 0 || x >= length || y >= length;

function verif(grille, x, y) {
    if (!enDehors(grille, { x, y })) {
        if (grille[x][y]) {
            nbVoisins = nbVoisins + 1
        }
    }
}

export const Grille = ({ length }) => {

    const [grille, setGrille] = useState(GenererGrille(length))
    const [emoji, setEmoji] = useState({
        vivant: "😁"
        , mort: "👀"
    })

    const ComportementGrille = (grille) => {

        const newGrille = JSON.parse(JSON.stringify(grille));

        for (let i = 0; i < grille.length; i++) {
            for (let j = 0; j < grille.length; j++) {

                nbVoisins = 0

                verif(grille, i, j - 1);
                verif(grille, i, j + 1);
                verif(grille, i - 1, j);
                verif(grille, i + 1, j);
                verif(grille, i - 1, j - 1);
                verif(grille, i + 1, j - 1);
                verif(grille, i - 1, j + 1);
                verif(grille, i + 1, j + 1);

                if (grille[i][j]) {
                    if (nbVoisins == 2 || nbVoisins == 3) {
                        newGrille[i][j] = true;
                    } else {
                        newGrille[i][j] = false;
                    }
                } else {
                    if (nbVoisins == 3) {
                        newGrille[i][j] = true;
                    } else {
                        newGrille[i][j] = false;
                    }
                }

            }
        }
        setGrille(newGrille);
    };

    const [cycle, setcycle] = useState(0);

    const nbCycle = () => {
        setcycle((cycle) => (cycle += 1));
    }

    const clignotant = () => {
        const newGrille = JSON.parse(JSON.stringify(grille));
        newGrille[2][46] = true;
        newGrille[2][47] = true;
        newGrille[2][48] = true;
        setGrille(newGrille);
    }

    const planeur = () => {
        const newGrille = JSON.parse(JSON.stringify(grille));
        newGrille[46][1] = true;
        newGrille[47][2] = true;
        newGrille[47][3] = true;
        newGrille[46][3] = true;
        newGrille[45][3] = true;
        setGrille(newGrille);
    }

    const adapte = (newLength) => {
        setGrille(GenererGrille(newLength));
    }

    const vivant = (ajout) => {
        const newGrille = JSON.parse(JSON.stringify(grille));

    }

    return <div>
        {grille.map((line, i) => (
            <div key={i}>
                {line.map((cell, j) => (
                    <span key={j} className={`cell cell--${cell ? "alive" : "death"}`}
                        onClick={() =>
                            setGrille((ancienneGrille) => {
                                let nouvelleGrille = JSON.parse(JSON.stringify(ancienneGrille));
                                nouvelleGrille[i][j] = !nouvelleGrille[i][j];
                                x = i;
                                y = j;
                                return nouvelleGrille;
                            })
                        }></span>
                ))
                }
            </div >
        ))}
        <span>
            <button onClick={() => { ComportementGrille(grille); nbCycle() }} className="Etape">Voir l'étape suivante</button>
        </span>
        <span>
            <button onClick={() => clignotant(grille)} className="Etape">Ajout d'un clignotant</button>
        </span>
        <span>
            <button onClick={() => planeur(grille)} className="Etape">Ajout d'un planeur</button>
        </span>
        <h4>Nombre de cycle : {cycle}</h4>
        < div >
            <span>
                < input type="number" name="taille" onChange={({ target }) => adapte(target.valueAsNumber)} ></input >
            </span>
            <span>
                < input type="texte" name="vivant" value={emoji.vivant} onChange={({ target: { value } }) => setEmoji(value)} ></input >
            </span>
            <span>
                < input type="texte" name="mort" value={emoji.mort} onChange={({ target: { value } }) => setEmoji(value)} ></input >
            </span>
        </div >
    </div>
}
