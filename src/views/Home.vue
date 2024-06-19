<script setup>
import Product from "@/components/Product.vue";
</script>
<template>
  <div class="container-content">
    <h4 class="category">DANH MỤC: ÁO</h4>
    <div class="product-list row">
      <Product v-for="product in products" :key="product.name" :product="product"
        class="col-12 col-sm-11 col-md-5 col-lg-3 col-xl-3" />
    </div>
    <h4 class="category">DANH MỤC: ÁO</h4>
    <div class="product-list row">
      <Product v-for="product in products" :key="product.name" :product="product"
        class="col-12 col-sm-11 col-md-5 col-lg-3 col-xl-3" />
    </div>
  </div>
</template>
<script>
export default {
  components: {
    Product
  },
  data() {
    return {
      products: [
        { image: '/images/products/p1.webp', name: 'Áo Tee - Number 11', sale: 23, price: 320000 },
        { image: '/images/products/p2.webp', name: 'Áo Tee - HEART', sale: 23, price: 320000 },
        { image: '/images/products/p3.webp', name: 'Áo Tee - 110', sale: 30, price: 320000 },
        { image: '/images/products/p1.webp', name: 'Áo Tee - Number 11', sale: 23, price: 320000 },
        { image: '/images/products/p2.webp', name: 'Áo Tee - HEART', sale: 23, price: 320000 },
        { image: '/images/products/p3.webp', name: 'Áo Tee - 110', sale: 30, price: 320000 },
        { image: '/images/products/p1.webp', name: 'Áo Tee - Number 11', sale: 23, price: 320000 },
        { image: '/images/products/p2.webp', name: 'Áo Tee - HEART', sale: 23, price: 320000 }
      ]
    }
  },
}
</script>
<style lang="scss">
.product-list {
  margin: 30px 0 50px 0;
}
.category {
  margin-top: 30px;
  text-align: center;
}
</style>