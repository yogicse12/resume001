<template>
    <div class="progress-bar" :style="[{height: strokeWidth+'px'}]" :data-title="title">
      <div class="full-bar">
        <div class="full-bar-percentage" :style="[{width: percentage+'%'}]">
            <div class="progress-number">{{ progressNumber }}</div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: "ProgressBar",
    props: {
        title: {
            type: String
        },
        percentage: {
            type: Number,
            default: 0,
            validator: val => {
                return val <= 100;
            }
        },
        showPercentage: {
            type: Boolean,
            default: true
        },
        strokeWidth: {
            type: Number,
            default: 5
        }
    },
    computed: {
        progressNumber() {
            return this.showPercentage ? parseInt(this.percentage) + '%' : '';
        }
    },
}
</script>

<style lang="scss" scoped>
.progress-bar {
    height: 16px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    margin-top: 40px;
    .full-bar {
      height: 100%;
      width: 100%;
      background-color: #FFF;
      position: relative;
      .full-bar-percentage {
        background-color: $color-1;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        .progress-number {
            position: absolute;
            font-size: 18px;
            font-weight: 500;
            color: #FFF;
            top: -40px;
            right: 0;
        }
      }
    }
    &:before {
        content: attr(data-title);
        position: absolute;
        top: -40px;
        font-size: 18px;
        font-weight: 500;
        color: #ffffff;
    }
  }
</style>