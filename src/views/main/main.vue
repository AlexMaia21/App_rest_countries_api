<template>
  <main class="main">
    <div class="main__container">
      <div class="main__form form">
        <div class="form__search-country">
          <i class="fas fa-search form__icon-search-country"></i>
          <input
            type="text"
            class="form__input-search--search"
            placeholder="Pesquise por um país"
            v-model.trim="countryInputSearch"
          />
        </div>
        <select
          class="form__choose-continent--choose"
          v-model="continentFilter"
        >
          <option value="">Filtrar por continente</option>
          <option value="Africa">África</option>
          <option value="Americas">América</option>
          <option value="Asia">Ásia</option>
          <option value="Europe">Europa</option>
          <option value="Oceania">Ocenia</option>
        </select>
      </div>
      <div v-if="countryInputSearch !== '' && continentFilter === ''">
        <div class="main__countries countries" v-if="returnObjectState.length">
          <country-component
            v-for="dataCountry in searchArrayDataCountries"
            :countryInfo="dataCountry"
            :key="dataCountry.name"
          ></country-component>
        </div>
      </div>
      <div v-else-if="continentFilter !== ''">
        <div class="main__countries countries" v-if="returnObjectState.length">
          <country-component
            v-for="dataCountry in returnObjectFilterContinent"
            :countryInfo="dataCountry"
            :key="dataCountry.name"
          ></country-component>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import state from "../../store.js";
import CountryComponent from "@/components/country/country.vue";
export default {
  name: "main-component",
  components: {
    CountryComponent,
  },
  data() {
    return {
      countryInputSearch: "",
      continentFilter: "",
    };
  },
  computed: {
    searchArrayDataCountries() {
      return this.returnObjectState.filter((objCountry) => {
        if (this.countryInputSearch !== "") {
          return objCountry.translations.br.includes(this.countryInputSearch);
        }
      });
    },
    returnObjectFilterContinent() {
      return this.returnObjectState.filter((objCountry) => {
        return objCountry.region === this.continentFilter;
      });
    },
    // Array all countries from state.js
    returnObjectState() {
      return state.objAllCountries;
    },
  },
  watch: {
    countryInputSearch() {
      this.continentFilter = "";
      if (this.countryInputSearch !== "") {
        this.countryInputSearch =
          this.countryInputSearch[0].toUpperCase() +
          this.countryInputSearch.slice(1);
      }
    },
  },
};
</script>

<style lang="scss">
$light-mode-background: hsl(0, 0%, 98%);
@import "./_main.scss";
</style>