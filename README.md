# Vue3 materials
This library is a collection of Vue components.

### Attention! Library in development

## Getting started

1. Install the package

```
npm i db-material-vue3

```

2. Import or require Vue and Vue Material in your code:

```
import { createApp } from 'vue'
import DbMaterial from 'db-material-vue3'

const app = createApp(App)
app.use(DbMaterial) 
app.mount('#app')

```

## Select

Required parameters

v-model="value" 
:options="data"

Other parameters

id="id"
name="name"
:disabled="true"
placeholder="Name" 
:search="true"

Examples of data transmission
```
    <DbSelect v-model="value" :options="data" placeholder="Name" :search="true" />

    1) data: [{label: 'Dmitriy', value: 1},{label: 'Oleg', value: 2},{label: 'Vladimir', value: 3},{label: 'Petr', value: 4}]
    2) data: [{label: 'Dmitriy'},{label: 'Oleg'},{label: 'Vladimir'},{label: 'Petr'}]
    3) data: ['Dmitriy','Oleg','Vladimir','Petr'],
```

## Modal

Required parameters

:show="modalShow" - Boolean
@closeModal="modalShow = false"

Other parameters

title - String
text - String
size - String, default value - width: 500px (large - width: 800px; small - width: 300px;)
position - String (top, bottom)
type - String (success, attention, error)

```
    <db-modal :show="modalShow" @closeModal="modalShow = false" title="Заголовок" text="Сообщение" type="success" size="large" />


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

    <template v-slot:main>   //- inside block modal__main
    <template v-slot:footer> //- inside block modal__footer
```

Modal position top - bottom

```
    <db-modal :show="showModal2" @closeModal="showModal2 = false" position="top">
      <template v-slot:content>
        <div class="wrapper">
          <div>Пример работы Modal top</div>
          <db-button @click="showModal2 = false">Close</db-button>
        </div>
      </template>
    </db-modal>
```

## Button

Parameters

color - String default value - primary; (success, danger, primary)
href - String
target - String, (link html target)
disabled - Boolean

```
<db-button color="danger">Open</db-button>
```

## Tooltip

Parameters

title - String
position - String default value: 'top' (top, top-start, top-end, bottom, bottom-start, bottom-end, left, left-start, left-end, right, right-start, right-end, )

```
<db-tooltip title="Жми на кнопку">
    <db-button>Open</db-button>
</db-tooltip>
```

## Developer
Dmitriy Burlak
- [Example](https://dmitriyburlak.github.io/db-material-vue3/dist/index.html)
- [Page GitHub](https://github.com/DmitriyBurlak/db-material-vue3)

## License
MIT

