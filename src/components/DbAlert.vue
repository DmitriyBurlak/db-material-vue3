<template>
    <div class="db-alerts" v-if="alerts">
        {{alerts}}
        <ul class="db-alerts__list">
            <!-- {{colectionAlert}} -->
            <li v-for="alert in alerts" :key="alert" :class="alert.type">
                <div class="icons">
                    <svg v-if="alert.type == 'success'" width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z" fill="none" stroke="#fff" stroke-width="4" stroke-linejoin="round"/><path d="M16 24L22 30L34 18" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    <svg v-if="alert.type == 'danger'" width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path fill-rule="evenodd" clip-rule="evenodd" d="M6 11L11 6L24 19L37 6L42 11L29 24L42 37L37 42L24 29L11 42L6 37L19 24L6 11Z" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    <svg v-if="alert.type == 'warning'" width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z" fill="none" stroke="#333" stroke-width="4" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M24 37C25.3807 37 26.5 35.8807 26.5 34.5C26.5 33.1193 25.3807 32 24 32C22.6193 32 21.5 33.1193 21.5 34.5C21.5 35.8807 22.6193 37 24 37Z" fill="#333"/><path d="M24 12V28" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </div>
                {{alert.message}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        data: {type: Object, default: null}
    },
    data() {
        return {
            alerts: []
        }
    },
    mounted() {
        // this.alerts = JSON.parse(JSON.stringify(this.data))
        // this.startWork()
        // console.log('mount');
    },
    computed: {
        // colectionAlert() {
        //     if(this.data) {
        //         return this.alerts = this.data
        //     }
        // }
    },
    // watch: {
    //     alerts: function(alerts, newal) {
    //         console.log(alerts, newal);
    //         console.log('sds');
    //         return this.alerts.push(this.data)
    //         // return this.data ? this.alerts.push(this.data) : null
    //     }
    // },
    methods: {
        startWork() {
            let timer = ''
            if(this.alerts.length) {
                timer = setInterval(this.alertDelete(), 2000)
            } else if (!this.alerts.length) {
                clearInterval(timer)
            }
        },
        alertDelete() {
            console.log(this.alerts, this.data);
            return this.$emit('alert', this.alerts.shift()) 
        }
    }

}
</script>

<style lang="scss" scoped>
    .db-alerts {
        position: absolute;
        top: 15px;
        right: 10px;

        &__list {
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            align-items: flex-end;

            li {
                // border: 1px solid #ccc;
                display: flex;
                align-items: center;
                width: max-content;
                font-weight: 500;
                border-radius: 5px;
                padding: 10px 15px 5px;
                box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.1) 0px 2px 2px 0px, rgba(0, 0, 0, 0.1) 0px 1px 5px 0px;
                margin-bottom: 10px;

                .icons {
                    margin-right: 10px;
                }

                &.danger {
                    background-color: #ff6262;
                    color: #fff;
                }                
                &.success {
                    background-color: #54f56a;
                    color: #fff;
                }                
                &.warning {
                    background-color: #f7ff83;
                    color: #333;
                }

                &:last-child {
                    margin-bottom: 0;
                }
            }
        }
    }
</style>