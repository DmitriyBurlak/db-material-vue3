<template>
    <div class="db__modal" :class="[position, {'show': show}]" >
        <div class="content" v-if="position">
            <slot name="content" v-if="$slots.content"></slot>
            <div class="wrapper" v-else>
                <div class="main">
                    <div v-if="type" class="modal__type">
                        <svg v-if="type == 'success'" width="30" height="30" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z" fill="none" stroke="#618B37" stroke-width="4" stroke-linejoin="round"/><path d="M16 24L22 30L34 18" stroke="#618B37" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /></svg>
                        <svg v-if="type == 'error'" width="30" height="30" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path fill-rule="evenodd" clip-rule="evenodd" d="M6 11L11 6L24 19L37 6L42 11L29 24L42 37L37 42L24 29L11 42L6 37L19 24L6 11Z" fill="#ffffff" stroke="#f80f0f" stroke-width="3" stroke-linecap="butt" stroke-linejoin="bevel"/></svg>
                        <svg v-if="type == 'attention'" width="30" height="30" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z" fill="none" stroke="#333" stroke-width="4" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M24 37C25.3807 37 26.5 35.8807 26.5 34.5C26.5 33.1193 25.3807 32 24 32C22.6193 32 21.5 33.1193 21.5 34.5C21.5 35.8807 22.6193 37 24 37Z" fill="#333"/><path d="M24 12V28" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </div>
                    <div class="title">{{title}}</div>{{text}}
                </div>
                <db-button @click="closeModal">Закрыть</db-button>
            </div>
        </div>
        <div class="content" :class="size" v-else>
            <div class="modal__header">
                <span class="title">{{title}}</span>
                <svg class="close-modal" @click="closeModal" width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M8 8L40 40" stroke="#000000" stroke-width="3" stroke-linecap="butt" stroke-linejoin="bevel"/><path d="M8 40L40 8" stroke="#000000" stroke-width="3" stroke-linecap="butt" stroke-linejoin="bevel"/></svg>
            </div>
            <slot name="content" v-if="$slots.content"></slot>
            <div v-else>
                <div class="modal__main">
                    <slot name="main" v-if="$slots.main"></slot>
                    <div v-else>
                        <div v-if="type" class="modal__type">
                            <svg v-if="type == 'success'" width="60" height="60" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z" fill="none" stroke="#618B37" stroke-width="4" stroke-linejoin="round"/><path d="M16 24L22 30L34 18" stroke="#618B37" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /></svg>
                            <svg v-if="type == 'error'" width="60" height="60" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path fill-rule="evenodd" clip-rule="evenodd" d="M6 11L11 6L24 19L37 6L42 11L29 24L42 37L37 42L24 29L11 42L6 37L19 24L6 11Z" fill="#ffffff" stroke="#f80f0f" stroke-width="3" stroke-linecap="butt" stroke-linejoin="bevel"/></svg>
                            <svg v-if="type == 'attention'" width="60" height="60" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z" fill="none" stroke="#333" stroke-width="4" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M24 37C25.3807 37 26.5 35.8807 26.5 34.5C26.5 33.1193 25.3807 32 24 32C22.6193 32 21.5 33.1193 21.5 34.5C21.5 35.8807 22.6193 37 24 37Z" fill="#333"/><path d="M24 12V28" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        </div>
                        <div v-html="text"></div>
                    </div>
                </div>
                <div class="modal__footer">
                    <slot name="footer" v-if="$slots.footer"></slot>
                    <div style="text-align: end;" v-else>
                        <db-button @click="closeModal">Закрыть</db-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import DbButton from '../DbButton/DbButton.vue';

export default {
    name: 'DbModal',
    components: {DbButton},
    props: {
        show: {type: Boolean},
        title: {type: String, default: null},
        text: {type: String, default: null},
        position: {type: String, default: null},
        size: {type: String, default: null},
        type: {type: String, default: null}
    },
    mounted() {
        let modals = document.querySelectorAll('.db__modal');
        modals.forEach(modal => {
            modal.addEventListener('mousedown', e => {
                if(!e.target.closest(".content")) {
                    this.showModal = true
                    this.closeModal()
                }
            })
        })
    },
    
    methods: {
        closeModal() {
            this.$emit('closeModal')
        }
    }
}
</script> 

<style lang="scss">
.db__modal {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1500;
    visibility: hidden;
    padding: 0 10px;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    outline: 0;
    transition: all 0.2s linear;

    .content {
        background-color: #fff;
        width: 100%;
        max-width: 500px;
        border-radius: 15px;
        margin: 0 auto;
        transform: none;
        transition: transform 0.2s ease-in;

        &.large {
            width: 100%;
            max-width: 800px;
        }

        &.small {
            width: 100%;
            max-width: 300px;
        }

        .wrapper {
            width: 100%;
            max-width: 800px;
            margin: 0 auto;
            padding: 15px;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            align-items: center;

            .main {
                display: flex;
                flex-wrap: wrap;
                align-items: center;

                .modal__type {
                    margin-bottom: 0;
                    margin-right: 10px;
                }

                .title {
                    font-weight: 600;
                    margin-right: 8px;
                }
            }
        }

        .modal {
            color: #575757;
            &__header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 12px 20px;
                
                .title {
                    font-size: 30px;
                    font-weight: 500;
                }
                .close-modal {
                    cursor: pointer;
                }
            }

            &__main {
                padding: 12px 20px;
                font-size: 15px;
                border-bottom: 1px solid #ccc;
                border-top: 1px solid #ccc;
            }

            &__footer {
                padding: 12px 20px;
                font-size: 15px;
            }

            &__type {
                display: flex; justify-content: center; margin-bottom: 10px;
            }
        }
    }
    &.top, &.bottom {
        padding: 0;
        .content {
            width: 100%;
            max-width: none;
            border-radius: 5px;
        }
    }
    &.top {
        .content {
            transform: translateY(-60px);
        }
    }
    &.bottom {
        .content {
            position: fixed;
            bottom: 0;
            transform: translateY(60px);
        }
    }
    &.show {
        background: rgba(0,0,0,0.4);
        visibility: visible;
        .content {
            transform: translateY(50px);
        }
        &.top {
            .content {
                transform: translateY(0);
            }
        }
        &.bottom {
           
            .content {
                transform: translateY(0);
            }
        }
    }
}
@media (max-width: 600px) {
    .db__modal {
        .content {
            width: 100%;
        }
        &.show {
            .content {
                transform: translateY(10px);
            }
        }
    }
}
</style>