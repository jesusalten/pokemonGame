import PokemonOptions from '@/components/PokemonOptions';
import { shallowMount } from '@vue/test-utils';
import { mockPokemons } from '../mocks/pokemons.mock';

describe('PokemonOptions component', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(PokemonOptions, {
            props: {
                pokemons: mockPokemons
            }
        })
    })

    it('should match with snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    })

    it('should show four options correctly', () => {
        const liTags = wrapper.findAll('li');
        expect(liTags.length).toBe(4);
        expect(liTags[0].text()).toBe('Pikachu');
        expect(liTags[1].text()).toBe('Charmander');
        expect(liTags[2].text()).toBe('Venusaur');
        expect(liTags[3].text()).toBe('Mew');

    })

    it('should emit "selection" with parameters', () => {
        const [ li1, li2, li3, li4 ] = wrapper.findAll('li');
        li1.trigger('click');
        li2.trigger('click');
        li3.trigger('click');
        li4.trigger('click');
        expect(wrapper.emitted('selectionPokemon').length).toBe(4);
        expect(wrapper.emitted('selectionPokemon')[0]).toEqual([5]);
        expect(wrapper.emitted('selectionPokemon')[1]).toEqual([10]);
        expect(wrapper.emitted('selectionPokemon')[2]).toEqual([20]);
        expect(wrapper.emitted('selectionPokemon')[3]).toEqual([15]);
    })
})