import getPokemonOptions, { getPokemons, getPokemonNames } from '@/helpers/getPokemonOptions';

describe('getPokemonOptions helpers', () => {
    it('should return numbers array (650)', () => {
        const pokemons = getPokemons();
        expect(pokemons.length).toBe(650);
        expect(pokemons[0]).toBe(1);
        expect(pokemons[649]).toBe(650);
    })

    it('should return four elements array with pokemon names', async () => {
        const pokemons = await getPokemonNames([1, 2, 3, 4]);
        const fourPokemons = [
            { name: 'bulbasaur', id: 1 },
            { name: 'ivysaur', id: 2 },
            { name: 'venusaur', id: 3 },
            { name: 'charmander', id: 4 }
        ]
        expect(pokemons).toStrictEqual(fourPokemons);
    })

    it('getPokemonOptions should return pokemon array', async () => {
        const pokemons = await getPokemonOptions();
        expect(pokemons.length).toBe(4);
        expect(pokemons).toEqual([
            { name: expect.any(String), id: expect.any(Number) },
            { name: expect.any(String), id: expect.any(Number) },
            { name: expect.any(String), id: expect.any(Number) },
            { name: expect.any(String), id: expect.any(Number) }
        ])
    })
})