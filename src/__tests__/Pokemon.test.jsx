import { render, screen, within, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Lister from '../routes/List';
import userEvent from '@testing-library/user-event'
import ReactTestUtils, { act } from 'react-dom/test-utils';

test("apparition de bulbisard", async () => {
    render(<MemoryRouter><Lister /></MemoryRouter>);
    const $premierPokemon = await screen.findByText(/bulbasaur/);
    expect($premierPokemon).toBeInTheDocument();
})

test("clique sur boutton et changement de page", async () => {
    render(<MemoryRouter><Lister /></MemoryRouter>);
    const user = userEvent.setup()
    const numero = (screen.getByTestId('numero'));

    await waitFor(async () => {
        await user.type(numero, "10");
        user.click(screen.getByTestId('Suivant'));
        const $10Pokemon = await screen.findAllByRole('cell');
        expect($10Pokemon[0].textContent).toBe("metapod");
    })
})
