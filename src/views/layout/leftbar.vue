<template>
    <div class="p-leftbar">
      <div class="p-logo">PC模板</div>
      <div class="p-menu">
        <imenu></imenu>
      </div>
    </div>
</template>

<script>
import imenu from './../../components/menu';

export default {
  components: {
    imenu,
  },
};
</script>

<style scoped lang="scss">
  .p-leftbar {
    position: absolute;
    top: 0;
    left: 0;
    width: 200px;
    height: 100%;
    z-index: 999;
    background: rgb(73, 80, 96);
    .p-logo {
      width: 100%;
      height: 60px;
      text-align: center;
      color: #fff;
      line-height: 60px;
      font-size: 20px;
      border-bottom: 1px solid rgba(255,255,255,.2);
    }
  }
</style>
