import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Lister from '../routes/List';

test("apparition de bulbisard", async () => {
    render(<MemoryRouter><Lister /></MemoryRouter>);
    const $premierPokemon = await screen.findByText(/bulbasaur/);
    expect($premierPokemon).toBeInTheDocument();
})
