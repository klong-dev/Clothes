<template>
  <div class="product">
    <div v-if="product.sale > 0" class="product-sale">
      <span>{{ sale }}</span>
    </div>
    <img class="product-image" :src="product.image" :alt="product.name">
    <h5>{{ product.name }}</h5>
    <p v-if="product.sale <= 0" class="price">{{ product.price }}đ</p>
    <p v-else>
      <span class="price">{{ salePrice }}đ</span>
      <span class="price sale">{{ price }}đ</span>
    </p>
  </div>
</template>
<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  computed: {
    sale() {
      return this.product.sale <= 0 ? '' : `${this.product.sale}%`;
    },
    price() {
      return new Intl.NumberFormat('vi-VN').format(this.product.price);
    },
    salePrice() {
      return new Intl.NumberFormat('vi-VN').format(this.product.price / 100 * (100 - this.product.sale));
    }
  }
}
</script>
<style lang="scss">
.product {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  .product-sale {
    position: absolute;
    top: 3px;
    left: 15px;
    background-color: red;
    color: white;
    padding: 5px;
    border-radius: 5px;
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 5px;
  }

  h5 {
    margin: 10px 0;
    font-size: 16px;
  }

  .price {
    color: red;
    font-size: 18px;
    margin-right: 10px;
  }

  .sale {
    font-size: 15px;
    color: rgba(0, 0, 0, 0.5);
    text-decoration: line-through;
  }
}
</style>
