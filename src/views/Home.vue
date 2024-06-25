<script setup>
import Product from "@/components/Product.vue";
</script>
<template>
  <div class="container-content">
    <div v-for="(category, index) in category_store.category_list" :key="index">
      <h4 class="category">
        DANH MỤC:
        <router-link class="category-link" :to="'/category?id=' + category.id">
          {{ category.name.toUpperCase() }}
        </router-link>
      </h4>
      <div class="product-list row">
        <Product v-for="product in products[index]" :key="product.name" :product="product"
          class="col-12 col-sm-11 col-md-5 col-lg-3 col-xl-3" />
      </div>
    </div>
  </div>
</template>
<script>
// import axios from 'axios';
import { useStore } from '../stores/category'
import axios from "axios";
export default {
  components: {
    Product
  },
  data() {
    return {
      category_store: useStore(),
      products: []
    }
  },
  methods: {
    async loadProduct() {
      for (let category in this.category_store.category_list) {
        let c = this.category_store.category_list[category];
        let res = await axios.get(`http://localhost:3000/product/category/${c.id}`);
        this.products.push(res.data.items);
        console.log(res.data)
      }

    },
  },
  // create watch for this.category_store.category_list
  watch: {
    'category_store.category_list': {
      handler: function () {
        this.loadProduct();
      },
      deep: true
    }
  },
  mounted() {
    this.loadProduct();
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