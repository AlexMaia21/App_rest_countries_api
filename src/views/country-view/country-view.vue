<template>
  <section class="page-info">
    <div class="page-info__container">
      <button class="page-info__btn-back--to-back" @click="toBack">
        <i class="fas fa-long-arrow-alt-left" style="margin-right: 3px"></i>
        <span>Back</span>
      </button>
      <div class="page-info__info-country">
        <div class="info-country__flag">
          <img :src="countryInfoDetails.flags.svg" alt="image-country" />
        </div>
        <div class="info-country__info-description">
          <h3 class="info-country__name-country">
            {{ countryInfoDetails.translations.br }}
          </h3>
          <div class="info-country__div-info">
            <div class="info-country__div-left">
              <p>
                <strong>Nome nativo: </strong>
                {{ countryInfoDetails.nativeName }}
              </p>
              <p>
                <strong>População: </strong>
                {{ countryInfoDetails.population.toLocaleString("pt-br") }}
              </p>
              <p><strong>Região: </strong> {{ countryInfoDetails.region }}</p>
              <p>
                <strong>Sub região: </strong> {{ countryInfoDetails.subregion }}
              </p>
              <p><strong>Capital: </strong> {{ countryInfoDetails.capital }}</p>
            </div>
            <div class="info-country__div-right">
              <p>
                <strong>Domínio: </strong>
                {{ countryInfoDetails.topLevelDomain[0] }}
              </p>
              <p>
                <strong>Moeda: </strong>
                {{ countryInfoDetails.currencies[0].name }}
              </p>
              <p class="info-country__div-right">
                <strong>Linguagens: </strong>
                <span
                  v-for="language in countryInfoDetails.languages"
                  :key="language.name"
                >
                  {{ language.name }}
                </span>
              </p>
            </div>
          </div>
          <div class="page-info__borders-country">
            <strong>Faz fronteira com: </strong>
            <div class="page-info__div-borders" v-if="borderCountry.length">
              <span v-for="border in borderCountry" :key="border.name">
                {{ border.translations.br }}
              </span>
            </div>
            <span v-else>Não faz fronteira com nenhum país</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import state from "../../store.js";
export default {
  name: "country-view",
  props: ["path", "countryInfoDetails"],
  data() {
    return {
      dataBordersCountry: null,
    };
  },
  methods: {
    toBack() {
      window.history.go(-1);
    },
  },
  computed: {
    borderCountry() {
      // Filter for the names of bordering countries
      let index = 0;
      if (this.countryInfoDetails.borders) {
        return this.dataBordersCountry.filter((obj) => {
          if (obj.alpha3Code === this.countryInfoDetails.borders[index]) {
            index++;
            return obj.name;
          }
        });
      } else {
        return [];
      }
    },
  },
  created() {
    // Object all countries from store.js
    this.dataBordersCountry = state.objAllCountries;
  },
};
</script>

<style lang="scss">
@import "./_country-view.scss";
</style>