<template>
    <div class="home" :style="{width: width + 'px'}"></div>
</template>

<script>
import utils from './../../utils/utils';

export default {
  mounted() {
    // 浏览器可见区域改变时，改变宽度
    window.onresize = () => {
      this.width = utils.setListLenght();
    };
  },
  data() {
    return {
      width: null,
      radio2: '',
      value: '',
      options: [{
        value: '选项1',
        label: '黄金糕',
      }],
    };
  },
};
</script>

<style scoped lang="scss">
  @import "./../../assets/css/base.scss";
  .home {
    width: 1200px;
    margin: 0 auto;
    .p-screen-wrapper {
      padding: 10px;
      .screen-list {
        border-bottom: 1px solid #eee;
        padding: 5px 0;
        .screen-item {
          display: flex;
          margin-bottom: 10px;
          height: 32px;
          line-height: 32px;
          .s-label {
            margin-right: 10px;
            vertical-align: middle;
            font-size: 14px;
          }
          .s-content {
            vertical-align: middle;
          }
        }
      }
    }
    .p-sort-wrapper {
      padding: 10px;
    }
  }
</style>
