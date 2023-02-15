import React, { useState } from "react";
import { Link } from "react-router-dom";
import { force } from "../composants/ForceMdp";

export default function Root() {

    const [nom, SetNom] = useState(0);
    const [prenom, SetPrenom] = useState(0);
    const [mail, setMail] = useState(0);
    const [mdp1, setMdp1] = useState(0);
    const [mdp2, setMdp2] = useState(0);
    const [naissance, setNaissance] = useState(0);
    const [sexe, setSexe] = useState(0);
    const [pasIdentique, setPasIdentique] = useState(false);
    const [naissanceImpossible, SetNaissanceImpossible] = useState(false);

    return (
        <>

            <label for="nom">Nom</label>
            <input type="text" id="nom" name="nom" placeholder="Entrez votre Nom..." onChange={({ target: { value } }) => SetNom(value)} />

            <br />

            <label for="prenom">prenom</label>
            <input type="text" id="prenom" name="prenom" placeholder="Entrez votre prenom..." onChange={({ target: { value } }) => SetPrenom(value)} />

            <br />

            <label for="mail">E-mail</label>
            <input type="email" id="e-mail" name="e-mail" placeholder="Entrez votre Mail..." />

            <br />

            <label for="mdp">Mot de passe</label>
            <input type="password" id="mdp" name="mdp" placeholder="Entrez votre mot de passe..." onChange={({ target: { value } }) => { setMdp1(value); force(value) }}
                onBlur={() => setPasIdentique(mdp1 != mdp2)} />
            {pasIdentique && <p> Vos mot de passes ne sont pas similaires</p>}

            <br />
            <progress id="file" max="100" value={force(mdp1)} > </progress>
            <br />

            <label for="mdp2">Vérification du mot de passe</label>
            <input type="password" id="mdp2" name="mdp2" placeholder="Confirmez votre mot de passe..." onChange={({ target: { value } }) => setMdp2(value)} onBlur={() => setPasIdentique(mdp1 != mdp2)} />
            {pasIdentique && <p> Vos mot de passes ne sont pas similaires</p>}
            <br />

            <label for="ddn">date de naissance</label>
            <input type="date" id="dn" name="dn"
                onChange={({ target: { value } }) => { setNaissance(value); SetNaissanceImpossible(new Date(naissance).getTime() <= Date.now()); }} />
            {naissanceImpossible && <p> C'est un pardoxe temporel, veuillez y remider</p>}

            <br />

            <label for="sexe">Sexe</label>
            <select name="sex">
                <option value="G">Homme ou Femme ?</option>
                <option value="H">Homme</option>
                <option value="F">Femme</option>
            </select>

            <br /><br />

            <button>Valider</button>

            <br /><br />

        </>
    );
}


