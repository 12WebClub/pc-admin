<template>
    <el-menu
      :default-active="defaultIndex"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="hsla(0,0%,100%,.7)"
      active-text-color="#2d8cf0">
      <template v-for="(item, index) in navList" >
        <el-submenu :index="item.index" :key="index" v-if="item.haschild">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{ item.label }}</span>
          </template>
          <el-menu-item @click="toLink(row)" :index="row.index"
                        v-for="(row, index) in item.children" :key="index">
            {{ row.label }}
          </el-menu-item>
        </el-submenu>
        <el-menu-item :index="item.index" :key="index" v-else @click="toLink(item)">
          <i class="el-icon-menu"></i>
          <span slot="title">page2</span>
        </el-menu-item>
      </template>
    </el-menu>
</template>

<script>
export default {
  computed: {
    defaultIndex() {
      return this.$store.state.common.selectedNavIndex;
    },
  },
  data() {
    return {
      navList: [
        {
          label: 'page1Parent',
          haschild: true,
          index: '1',
          path: '',
          children: [
            {
              label: 'page1',
              haschild: false,
              index: '1-1',
              path: '/page1',
            },
            {
              label: 'page2',
              haschild: false,
              index: '1-2',
              path: '/page12',
            },
          ],
        },
        {
          label: 'page1Parent',
          haschild: false,
          index: '2',
          path: '/page2',
        },
      ],
    };
  },
  methods: {
    toLink(item) {
      console.log(item);
      this.$router.push({ path: item.path });
    },
  },
};
</script>

<style scoped lang="scss">

</style>
