<template>
  <div>
    <h1>{{ product.name }}</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
      product: {
        id: this.$route.params.id,
        name: this.$route.params.name,
        price: this.$route.params.price,
        sale: this.$route.params.sale,
        image: this.$route.params.image,
        description: this.$route.params.description
      }
    }
  },
}
</script>
<style lang="scss"></style>