<template> 
    <div class="db__tooltip">
        <span :class="position">{{title}}</span>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'DbTooltip',
    props: {
        title: {type: String, default: null},
        position: {type: String, default: 'top'},
    }
}
</script>

<style lang="scss" scoped>
.db__tooltip {
    position: relative;
    width: max-content;
    
    span {
        position: absolute;
        background-color: rgba(0,0,0,0.7);
        color: #fff;
        font-weight: 500;
        pointer-events: none;
        font-size: 11px;
        padding: 3px 8px;
        width: max-content;
        max-width: 150px;
        border-radius: 5px;
        opacity: 0;
        transition: opacity 0.3s linear;
        z-index: 999;

        &.top {
            bottom: calc(100% + 2px);
            left: 50%;
            transform: translateX(-50%);
            &-start {
                bottom: calc(100% + 2px);
                left: 0;
            }
            &-end {
                bottom: calc(100% + 2px);
                right: 0;
            }
        }

        &.left {
            right: calc(100% + 2px);
            top: 50%;
            transform: translateY(-50%);
            &-start {
                right: calc(100% + 2px);
                bottom: 100%;
            }
            &-end {
                right: calc(100% + 2px);
                bottom: 100%;
            }
        }

        &.right {
            left: calc(100% + 2px);
            top: 50%;
            transform: translateY(-50%);
            &-start {
                left: calc(100% + 2px);
                bottom: 100%;
            }
            &-end {
                left: calc(100% + 2px);
                bottom: 100%;
            }
        }

        &.bottom {
            top: calc(100% + 2px);
            left: 50%;
            transform: translateX(-50%);
            &-start {
                top: calc(100% + 2px);
                left: 0;
            }
            &-end {
                top: calc(100% + 2px);
                right: 0;
            }
        }
    }

    &:hover {
        span {
            opacity: 1;
        }
    }
}
</style>