import { useState } from "react";
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
        <button onClick={() => ComportementGrille(grille)} className="Etape">Voir l'étape suivante</button>
    </div>
}
