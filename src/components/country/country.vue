<template>
  <div class="countries__country-info">
    <div class="countries__country-flag">
      <router-link :to="{ name: 'data-country', params: { path: countryInfo.alpha3Code, countryInfoDetails: countryInfo } }">
          <img :src="countryInfo.flags.svg" alt="imagem-pais" />
      </router-link>
    </div>
    <div class="countries__country-description">
      <h3 class="countries__country-name">
        {{ countryInfo.translations.br }}
      </h3>
      <p class="countries__country-population">
        <strong>População:</strong>
        {{ countryInfo.population.toLocaleString("pt-br") }}
      </p>
      <p class="countries__country-region">
        <strong>Região:</strong>
        {{ countryInfo.region }}
      </p>
      <p class="countries__country-capital">
        <strong>Capital:</strong>
        {{ countryInfo.capital }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "country-component",
  props: ["countryInfo"],
};
</script>

<style lang="scss">
@import "./_country.scss";
</style>