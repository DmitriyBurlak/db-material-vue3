import DbButton from "./components/DbButton/DbButton.vue";
import DbModal from "./components/DbModal/DbModal.vue";
import DbTooltip from "./components/DbTooltip/DbTooltip.vue";
import DbSelect from "./components/DbSelect.vue";

const DbMaterial = {
 install(Vue) {
  Vue.component("db-button", DbButton);
  Vue.component("db-modal", DbModal);
  Vue.component("db-tooltip", DbTooltip);
  Vue.component("db-select", DbSelect);
 }
};

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(DbMaterial);
}

export default DbMaterial;