<template>
  <div class="page">
    page12
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  created() {
    this.SELECTED_NAV_INDEX('1-2');
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
