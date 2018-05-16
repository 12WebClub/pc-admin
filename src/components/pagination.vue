<template>
    <div class="pagination-wrapper">
      <el-pagination
        background
        layout="prev, pager, next"
        @current-change="pageChange"
        :current-page="page"
        :page-size="20"
        :total="total">
      </el-pagination>
    </div>
</template>

<script>
export default {
  props: {
    total: null,
    page: null,
  },
  methods: {
    pageChange(val) {
      this.$emit('changePage', val);
    },
  },
};
</script>

<style scoped>
  .pagination-wrapper {
    text-align: center;
    padding: 20px 0;
  }
</style>
