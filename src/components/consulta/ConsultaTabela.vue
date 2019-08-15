<template>
  <v-card>
    <v-card-title>
        Nutrition
        <v-spacer></v-spacer>
        <v-text-field
            v-model="filters.name"
            append-icon="mdi-magnify"
            label="Name"
            single-line
            hide-details>
        </v-text-field>
        <v-spacer></v-spacer>
        <v-text-field
            v-model="filters.calories"
            append-icon="mdi-magnify"
            label="Calories"
            single-line
            hide-details>
        </v-text-field>
    </v-card-title>

    <v-data-table
      :headers="headers"
      :items="filterName">
    </v-data-table>
  </v-card>
</template>

<script>
import Placeholder from "./get.json"
export default {
    name: 'ConsultaTabela',
    data() {
        return {
            filters: { name: '', calories: '' },
            search: 'tesete',
            headers: [
                { text: 'Dessert (100g serving)', align: 'left', sortable: false, value: 'name' },
                { text: 'Calories', value: 'calories' },
                { text: 'Fat (g)', value: 'fat' },
                { text: 'Carbs (g)', value: 'carbs' },
                { text: 'Protein (g)', value: 'protein' },
                { text: 'Iron (%)', value: 'iron' },
            ],
            desserts: [],
        }
    },
    created () {
        this.desserts = Placeholder;
    },
    computed: {
        // https://front.id/en/articles/vuetify-achieve-multiple-filtering-data-table-component
        // https://www.youtube.com/watch?v=KSHmxn2fgv0
        filterName: function(){
            return this.desserts.filter((dessert) => {
                return dessert.name.match(this.filters.name)
            });
        },
    },
}
</script>

<style>

</style>