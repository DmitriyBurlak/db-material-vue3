<template>
  <div>
    Примеры:

    <div style="display: flex; align-items: center">
      <DbSelect v-model="value" :options="data" placeholder="Name" :search="true" />
      <span style="padding-left: 15px">{{value}}</span>
    </div>

    <div class="block-button">
      <db-tooltip title="Жми на кнопку" style="margin-right: 10px">
        <db-button @click="showModal = true">Open modal</db-button>
      </db-tooltip>
      <db-button :disabled="true" color="success" @click="showModal2 = true">Open modal top</db-button>
      <db-button color="danger" @click="showModal3 = true">Open modal bottom</db-button>
      <db-tooltip title="Кнопка disabled" position="bottom-end" style="margin-right: 10px">
        <db-button href="https://github.com/DmitriyBurlak" :disabled="true" target="_blank">Link my gitHub</db-button>
      </db-tooltip>
    </div>
<br>
    

    <db-modal :show="showModal" title="Title modal" @closeModal="showModal = false">
      <template v-slot:content>
        <div class="modal__main">
          Тестовый пример текста
        </div>
        <div class="modal__footer">
          <db-button @click="showModal = false">Закрыть</db-button>
        </div>
      </template>
    </db-modal>

    <db-modal :show="showModal2" @closeModal="showModal2 = false" position="top">
      <template v-slot:content>
        <div class="wrapper">
          <div>Пример работы Modal top</div>
          <db-button @click="showModal2 = false">Close</db-button>
        </div>
      </template>
    </db-modal>

    <db-modal :show="showModal3" title="Title modal" position="bottom" type="error" text="Text for modal" @closeModal="showModal3 = false" />

  <br>
  <hr>
    <!-- <db-button color="danger" @click="createAlert('test','warning')">Open modal bottom</db-button>
    <db-alert v-model:data="alert" v-if="alert.length"/> -->

  </div>
</template>

<script>
import DbSelect from './components/DbSelect.vue'
import DbButton from './components/DbButton/DbButton.vue'
import DbModal from './components/DbModal/DbModal.vue'
import DbTooltip from './components/DbTooltip/DbTooltip.vue'

// import DbAlert from './components/DbAlert.vue'

export default {
  name: 'App',
  components: {
    DbSelect,
    DbTooltip,
    DbButton, 
    DbModal,

//development
    // DbAlert,
  },
  data() {
    return {
      value: '',
      showModal: false,
      showModal2: false,
      showModal3: false,
      data: ['Dmitriy','Oleg','Vladimir','Petr'],
      // data: [{label: 'Dmitriy', value: 1},{label: 'Oleg', value: 2},{label: 'Vladimir', value: 3},{label: 'Petr', value: 4}],


      alert: [],
    }
  },
  methods: {
    // createAlert(message, type) {
    //   this.alert = {
    //       type: type,
    //       message: message
    //   }
    // }
  }
}
</script>

<style>
*, *::before, *::after {
    box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
.block-button {
  display: flex;
}
</style>
