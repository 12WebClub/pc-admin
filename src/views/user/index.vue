<template>
  <div class="page">
    page1
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  created() {
    this.SELECTED_NAV_INDEX('1-1');
  },
  methods: {
    ...mapMutations([
      'SELECTED_NAV_INDEX',
    ]),
  },
};
</script>

<style scoped>

</style>
