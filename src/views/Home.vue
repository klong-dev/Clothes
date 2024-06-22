<script setup>
import Product from "@/components/Product.vue";
</script>
<template>
  <div class="container-content">
    <div v-for="category in category_store.category_list" :key="category.id">
      <h4 class="category">
        DANH MỤC:
        <router-link class="category-link" :to="'/category?id=' + category.id">
          {{ category.name.toUpperCase() }}
        </router-link>
      </h4>
      <div class="product-list row">
        <Product v-for="product in loadProduct(category.id)" :key="product.name" :product="product"
          class="col-12 col-sm-11 col-md-5 col-lg-3 col-xl-3" />
      </div>
    </div>
  </div>
</template>
<script>
// import axios from 'axios';
import { useStore } from '../stores/category'
export default {
  components: {
    Product
  },
  data() {
    return {
      category_store: useStore(),
      products: [
        { id: 1, description: 'About this product', categoryID: 2, image: '/images/products/p2.webp', name: 'Áo Tee - HEART', sale: 23, price: 320000 },
        { id: 9, description: 'About this product', categoryID: 2, image: '/images/products/p3.webp', name: 'Áo Tee - 110', sale: 30, price: 320000 },
        { id: 10, description: 'About this product', categoryID: 2, image: '/images/products/p2.webp', name: 'Áo Tee - HEART', sale: 23, price: 320000 },
        { id: 2, description: 'About this product', categoryID: 2, image: '/images/products/p3.webp', name: 'Áo Tee - 110', sale: 30, price: 320000 },
        { id: 3, description: 'About this product', categoryID: 3, image: '/images/products/p1.webp', name: 'Áo Tee - Number 11', sale: 23, price: 320000 },
        { id: 4, description: 'About this product', categoryID: 3, image: '/images/products/p1.webp', name: 'Áo Tee - Number 11', sale: 23, price: 320000 },
        { id: 5, description: 'About this product', categoryID: 4, image: '/images/products/p2.webp', name: 'Áo Tee - HEART', sale: 23, price: 320000 },
        { id: 6, description: 'About this product', categoryID: 4, image: '/images/products/p3.webp', name: 'Áo Tee - 110', sale: 30, price: 320000 },
        { id: 7, description: 'About this product', categoryID: 5, image: '/images/products/p1.webp', name: 'Áo Tee - Number 11', sale: 23, price: 320000 },
        { id: 8, description: 'About this product', categoryID: 5, image: '/images/products/p2.webp', name: 'Áo Tee - HEART', sale: 23, price: 320000 }
      ],
    }
  },
  methods: {
    loadProduct(id) {
      // axios.get('http://localhost:3000/product/load')
      //   .then(response => {
      //     this.products = response.data;
      //   })
      //   .catch(error => {
      //     console.log(error);
      //   });
      return this.products.filter(product => product.categoryID === id);
    },
    loadCategory() {
      // axios.get('http://localhost:3000/category/load')
      //   .then(response => {
      //     this.category = response.data;
      //   })
      //   .catch(error => {
      //     console.log(error);
      //   });
      this.category_store.set([
        { id: 2, name: 'Áo' },
        { id: 5, name: 'Quần' },
        { id: 3, name: 'Giày' },
        { id: 4, name: 'Phụ kiện' }
      ])
    }
  },
  mounted() {
    this.loadCategory();
  },
}
</script>
<style lang="scss">
.category-link {
  color: #4a9eff;
  border-bottom: 2px solid #4a9eff;
  text-decoration: none;
}

.product-list {
  margin: 30px 0 50px 0;
}

.category {
  margin-top: 30px;
  text-align: center;
}
</style>