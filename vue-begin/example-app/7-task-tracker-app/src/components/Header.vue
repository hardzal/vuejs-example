<template>
  <header>
    <h1>{{ title }}</h1>
    <Button text="Add Task" color="green" />
  </header>
</template>
<script>
import Button from './Button';
export default {
  name: 'Header',
  //   props: ['title'],
  props: {
    // title: {
    //   type: String,
    //   default: 'Hello World',
    // },
    title: String,
  },
  components: {
    Button,
  },
};
</script>
<!-- scoped means for only this component -->
<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>
