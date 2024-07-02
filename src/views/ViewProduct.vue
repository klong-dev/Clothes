<template>
  <div class="container-custom">
    <div class="content row">
      <div class="col-3 d-none d-sm-flex flex-column">
        <h5>DANH MỤC</h5>
        <ul>
          <li>SẢN PHẨM KHUYẾN MÃI</li>
          <li>SẢN PHẨM NỔI BẬT</li>
          <li>TẤT CẢ SẢN PHẨM</li>
        </ul>
      </div>
      <div class="col-9">
        <div class="row p-header">
          <div class="col-4 p-header-image">
            <img :src="product.image" :alt="product.name">
            <ul class="row">
              <li class="col-3" v-for="img in imgs" :key="img">
                <img :src="img" :alt="product.name">
                {{ console.log(img) }}
              </li>
            </ul>
          </div>
          <div class="col-5">
            <h4 class="p-header-name">{{ product.name }}</h4>
            <h3 class="p-header-price">
              {{ price }}₫
              <span class="p-header-sale" v-if="product.sale > 0">
                {{ sale }}₫
              </span>
            </h3>
            <ul class="p-header-size list-box">
              <li v-for="size in sizes" :key="size" :class="{ 'checked': selectedSize == size }"
                @click="selectSize(size)">
                <span class="p-header-size">{{ size.name }}</span>
              </li>
            </ul>
            <ul class="p-header-color list-box">
              <li v-for="color in colors" :key="color" :class="{ 'checked': selectedColor == color }"
                @click="selectColor(color)">
                <span class="p-header-color">{{ color.name }}</span>
              </li>
            </ul>
            <button class="btn">Thêm vào giỏ hàng</button>
          </div>
        </div>
        <div class="row p-view-body">

        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectedSize: null,
      selectedColor: null,
      product: {
        id: this.$route.params.id,
        name: this.$route.params.name,
        price: this.$route.params.price,
        sale: this.$route.params.sale,
        image: this.$route.params.imgPath,
        description: this.$route.params.description
      },
      imgs: [
        this.$route.params.imgPath,
        this.$route.params.imgPath,
        this.$route.params.imgPath,
        this.$route.params.imgPath
      ],
      sizes: [
        { id: 1, productID: this.id, name: "S", quantity: 10 },
        { id: 2, productID: this.id, name: "M", quantity: 10 },
        { id: 3, productID: this.id, name: "L", quantity: 10 },
        { id: 4, productID: this.id, name: "XL", quantity: 10 }
      ],
      colors: [
        { id: 1, productID: this.id, name: "Họa tiết Đen", color: "black" },
        { id: 2, productID: this.id, name: "Họa tiết Trắng", color: "white" }
      ],
    }
  },
  methods: {
    selectSize(size) {
      this.selectedSize = size;
    },
    selectColor(color) {
      this.selectedColor = color;
    }
  },
  computed: {
    price() {
      return new Intl.NumberFormat('vi-VN').format(this.product.sale > 0 ? (this.product.price - this.product.price / 100 * this.product.sale) : this.product.price);
    },
    sale() {
      return new Intl.NumberFormat('vi-VN').format(this.product.price);
    }
  }
}
</script>
<style lang="scss">
ul {
  padding-inline-start: 0px !important;
  list-style-type: none;
}

.checked {
  border-color: #ee4d2d !important;
  color: #ee4d2d !important;
}

.list-box {
  display: flex;
  text-align: center;

  &>* {
    margin-right: 10px;
    border: 1px solid rgba(0, 0, 0, 0.199);
    border-radius: 7px;
    padding: 7px 20px;
    cursor: pointer;
  }
}

.p-header {
  &-image {
    img {
      width: 100%;
      height: auto;
    }
  }

  &-price {
    color: #ee4d2d;
    padding-bottom: 18px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.199);
  }

  &-sale {
    margin-left: 7px;
    color: rgba(0, 0, 0, 0.479);
    font-size: 22px;
    text-decoration: line-through;
  }

  &-image {
    ul {
      margin-top: 10px;

      li {
        img {
          border: 1px solid rgba(0, 0, 0, 0.199);
          padding: 5px;
          width: 100%;
          aspect-ratio: 1 / 1;
          object-fit: cover;
        }
      }
    }
  }

  &-size {
    &>* {
      min-width: 85px;
    }
  }

  &-color {
    padding-bottom: 18px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.199);
  }

}
</style>