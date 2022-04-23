<template>
    <div class="db_select">
        <div class="db_input" :class="{'focus': inputValue, 'active': optionShow, ...classes}">
            <input type="text" :readonly="!search" id="input" autocomplete="off" class="input" v-model="inputValue" @click="optionShow = !optionShow" :disabled="disabled"  :style="!checkLabel && inputValue ? 'outline: 2px solid rgb(255 120 120)' : null">
            <label class="label" id="for" v-if="placeholder">{{placeholder}}</label>
            
            <span class="icon">
                <svg v-if="search && inputValue.length" @click="clearInput" class="cursor" width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" fill="none" stroke="#ccc" stroke-width="3" stroke-linejoin="bevel"/><path d="M29.6569 18.3431L18.3432 29.6568" stroke="#ccc" stroke-width="3" stroke-linecap="butt" stroke-linejoin="bevel"/><path d="M18.3432 18.3431L29.6569 29.6568" stroke="#ccc" stroke-width="3" stroke-linecap="butt" stroke-linejoin="bevel"/></svg>
                <svg width="30" height="30" class="icon__rotate" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M13 30L25 18L37 30" stroke="#ccc" stroke-width="3" stroke-linecap="butt" stroke-linejoin="bevel"/></svg>
            </span>

            <div class="db_options" v-if="options">
                <ul v-if="!checkObject">
                    <slot name="list" v-if="$slots.list"></slot>
                    <li v-for="(item, idx) in data" :key="idx" @click="setSelectOption(item)" v-else>
                        {{item}}
                    </li>
                </ul>
                <ul v-else>
                    <slot name="list" v-if="$slots.list"></slot>
                    <li v-for="(item, idx) in data" :key="idx" @click="setSelectOption(item.label, item.value)" v-else>
                        {{item.label}}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue'
export default {
    name: 'DbSelect',
    data() {
        return {
            optionShow: false,
            inputValue: '',
            inputValueValid: '',
            data: this.options,
            checkObject: null, //проверяю длину объекта если ключ 1 то просто перебрать
        }
    },
    setup(props) { 
        const classes = computed(() => ({
            'dark': props.dark,
            'filler': props.placeholder,
        }))
        return { 
            classes,
        } 
    },
    mounted() {

        let arrType = this.data.map(i=>i.constructor.name) // собираю все типы
        let arr = arrType.filter((item, index) => arrType.indexOf(item) === index); //убираю дубликаты, если значение одно и оно Object
        this.checkObject = arr.length == 1 && arr[0] == 'Object';

        document.addEventListener('mousedown', e => {
            if(!e.target.closest(".db_select")) {
                this.optionShow = false;
            }
        })
    },
    props: {
        search: {type: Boolean, default: false},
        modelValue: String,
        icon: {type: String, default: null},
        placeholder: {type: String, default: null},
        options: {type: Array, default: null},
        dark: {type: Boolean, default: false},
        disabled: {type: Boolean, default: false},
    },
    computed: {
        checkLabel() {
            return this.inputValue == this.inputValueValid
        }
    },
    watch: {
        inputValue: function() {
            if(this.search) {
                if(this.checkObject) {
                    this.data = this.options.filter(i => i.label.toLowerCase().indexOf(this.inputValue.toLowerCase()) > -1);
                    if(!this.checkLabel) this.emitFunc('update:modelValue', null)
                } else {
                    this.data = this.options.filter(i => i.toLowerCase().indexOf(this.inputValue.toLowerCase()) > -1);
                    if(!this.checkLabel) this.emitFunc('update:modelValue', null)
                }
                return this.data.length ? this.data : this.data.push({label: 'Поиск не дал результатов'})
            }   
        }
    },
    methods: {
        setSelectOption(label, value) {
            if(label == 'Поиск не дал результатов') {
                return
            }

            this.inputValueValid = label;

            if(!value) {
                this.emitFunc('update:modelValue', label)
                // this.$emit('update:modelValue', label)
            } else {
                this.emitFunc('update:modelValue', value)

                // this.$emit('update:modelValue', value)
            }
            this.optionShow = false;
            this.inputValue = label;

            console.log(label, value);
        },
        clearInput() {                                                      
            this.inputValue = '';
        },
        emitFunc(upd, value) {
            return this.$emit(upd, value)
        }
    }
}
</script>

<style lang="scss" >
*, *::before, *::after {
    box-sizing: border-box;
}

.db_select {
    width: max-content;
}
.db_input {
    position: relative;
    width: 100%;
    margin: 7px 0;

    input {
        padding: 10px 60px 10px 15px;
        width: 100%;
        border: 1px solid #ccc;
        border-radius: 5px;
        outline: none;
        font-size: 15px;
        cursor: pointer;
    }
    .db_options {
        position: absolute;
        width: 100%;
        margin-top: 3px;
        z-index: 999;
        transform-origin: center bottom;
        transform: scale3d(0,0,1);
        transition: transform .36s cubic-bezier(.4,0,.2,1);
        ul {
            padding: 0;
            margin: 0;
            max-height: 250px;
            overflow-y: auto;
            border: 1px solid #ccc;
            li {
                display: flex;
                list-style: none!important;
                background-color: #fff;
                padding: 8px 15px;
                cursor: pointer;

                &:hover {
                    background-color: #fbf2f2;
                }

            }

            &::-webkit-scrollbar-track {
                -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
                background-color: #F5F5F5;
            }

            &::-webkit-scrollbar {
                width: 8px;
                background-color: #F5F5F5;
            }

            &::-webkit-scrollbar-thumb {
                background-color: #5aa9f3;
            }
        }
    }
    .icon {
        position: absolute;
        right: 5px;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        align-items: center;

        &__rotate {
            pointer-events: none;
            transform: scale(-1, -1);
            transition: all 0.3s linear;
        }

    }
    .label {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 16px;
        max-width: 90%;
        white-space: nowrap;
        overflow: hidden;
        pointer-events: none;
        color: #8e8e8e;
        transition: all .2s ease-out;
    }

    &.active {
        .label {
            position: absolute;
            color: blue;
            top: 9px;
            font-size: 12px;
            left: 15px;
            
        }
        .icon {
            .icon__rotate {
                transform: scale(1, 1);
            }         
        }
        .db_options {
            transform: scaleZ(1)
        }
    }

    &.focus {
        .label {
            position: absolute;
            color: blue;
            top: 9px;
            font-size: 12px;
            left: 15px;
        }
    }
    
    &.filler {
        input {
            padding: 15px 60px 5px 15px;
        }
    }

    &.dark {
        input {
            border: 1px solid #d5d3d3;
            background-color: #565656;
            color: #e9e2e2;

            &.focus, &:focus {
                + .label {
                    color: #adadad;
                }
            }
        }
        .label {
            color: #e9e2e2;
        }
    }  
}
.cursor {
    cursor: pointer;
}
</style>