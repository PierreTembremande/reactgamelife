export const GenererGrille = ({ length }) => {
    const grille = (length) => Array.from({ length }, () => Array.from({ length }, () => false));

    return grille(length).map((line, i) => (
        <div key={i}>
            {line.map((cell, j) => (
                <span key={j}>{cell ? "O" : "X"}</span>
            ))}
        </div>
    ));
};