import Vue from 'vue';
const state = Vue.observable({
    objAllCountries: []
});
export const atrObj = (obj) => {
    state.objAllCountries = obj;
}
export default state;