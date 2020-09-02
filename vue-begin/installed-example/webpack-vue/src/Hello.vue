<template>
  <div class="hello">
    {{ text }}
    test
    {{ hello }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: 'Hello dari vue-loader!',
      hello: 'Hello, World!',
    };
  },
};
</script>
