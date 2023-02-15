export const force = (mdp1) => {

    let point = 0;
    let verifMaj = false;
    let verifMin = false;
    let verifInt = false;
    let verifCaracterSpe = false;
    let verifLongueur = false;
    var regex = /[áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ._s., --]/;

    for (var i = 0; i < mdp1.length; i++) {

        if (mdp1[i] === mdp1[i].toUpperCase()) {
            if (!verifMaj) {
                point = point + 20;
                verifMaj = true;
            }
        }

        if (mdp1[i] === mdp1[i].toLowerCase()) {
            if (!verifMin) {
                point = point + 20;
                verifMin = true;
            }
        }

        if (Number(mdp1[i])) {
            if (!verifInt) {
                point = point + 20;
                verifInt = true;
            }
        }

        if (mdp1[i].match(regex))
            if (!verifCaracterSpe) {
                point = point + 20;
                verifCaracterSpe = true;
            }

    };

    if (mdp1.length >= 8) {
        if (!verifLongueur) {
            point = point + 20;;
            verifLongueur = true;
        }

    }
    console.log(point)
    return point;
}