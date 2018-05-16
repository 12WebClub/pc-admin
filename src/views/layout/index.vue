<template>
  <div class="layout">
    <leftbar></leftbar>
    <div class="rightbar">
      <topbar></topbar>
      <div class="p-content">
        <div class="p-main">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import leftbar from './leftbar';
import topbar from './topbar';

export default {
  components: {
    leftbar,
    topbar,
  },
};
</script>

<style scoped lang="scss">
  .layout {
    width: 100%;
    height: 100%;
    padding-left: 200px;
    overflow-y: auto;
    .rightbar {
      overflow: hidden;
      position: relative;
      padding-top: 60px;
      .p-content {
        padding: 10px;
        .p-main {
          background: #fff;
          border-radius: 4px;
          padding: 20px;
          box-shadow: 0 1px 1px 0 rgba(0,0,0,.1);
        }
      }
    }
  }

</style>
