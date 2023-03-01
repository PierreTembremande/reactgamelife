import { rest } from 'msw';
import getPokemonAll from './fixtures/getPokemonAll.json';
export const handlers = [
    rest.get('https://pokeapi.co/api/v2/pokemon/', (req, res, ctx) => {
        const limit = req.url.searchParams.get("limit");
        const offset = req.url.searchParams.get("offset");
        const modifyGetPokemonAll = structuredClone(getPokemonAll);
        modifyGetPokemonAll.results = modifyGetPokemonAll.results.slice(offset, limit === 0 ? getPokemonAll.length : Number(offset) + Number(limit));
        modifyGetPokemonAll.next = 'https://pokeapi.co/api/v2/pokemon/?offset=' + Number(offset) + Number(limit) + '&limit=' + Number(limit);
        modifyGetPokemonAll.previous = 'https://pokeapi.co/api/v2/pokemon/?offset=' + (offset - limit > -1 ? offset : offset - limit) + '&limit=' + Number(limit);
        return res(ctx.delay(), ctx.status(200), ctx.json(getPokemonAll))
    }),
];