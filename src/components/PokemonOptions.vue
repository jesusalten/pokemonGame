<template>
    <div class="options-container">
        <ul>
            <li 
                v-for="pokemon in pokemons" 
                :key="pokemon.id"
                @click="$emit('selectionPokemon', pokemon.id)"
            >
                {{ capitalized(pokemon.name) }}
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    props: {
        pokemons: {
            type: Array,
            required: true
        }
    },
    methods: {
        capitalized(name) {
            const capitalizedFirst = name[0].toUpperCase();
            const rest = name.slice(1);
            return capitalizedFirst + rest;
        }
    }
}
</script>

<style scoped>
    ul {
        list-style-type: none;
        margin: 20px 0 0 0;
        padding: 0;
    }
    li {
        background-color: white;
        border-radius: 5px;
        border: 1px solid rgba(0, 0, 0, 0.2);
        cursor: pointer;
        margin-bottom: 10px;
        width: 250px;
    }

    li:hover {
        background-color: rgb(168, 168, 168);
    }

    .options-container {
        display: flex;
        justify-content: center;
    }
</style>