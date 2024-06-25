<script setup>
import CartSideBar from './CartSideBar.vue';
</script>
<template>
  <nav class="">
    <div class="container-custom d-flex justify-content-between">
      <div class="nav-left">
        <router-link to="/">
          <img src="/images/logo.png" alt="logo" />
        </router-link>
      </div>
      <div class="nav-right">
        <ul>
          <li class="d-flex align-items-center">
            <i style='color: blue' class="bi bi-telephone"></i>
            <a style='color: blue; font-size: 16px;' href="tel:+8424 0123 4564"> 024.0123.454</a>
          </li>
          <li>
            <CartSideBar />
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <nav class="">
    <div class="container-custom d-flex justify-content-between">
      <div class="nav-left">
        <ul>
          <li>
            <router-link to="/">TRANG CHỦ</router-link>
          </li>
          <li>
            <router-link to="/contact">LIÊN HỆ</router-link>
          </li>
          <li class="category-list" v-click-outside="closeCategory">
            <a class="dropdown-control" href="#" @click="dropdown()">
              Danh mục sản phẩm +
            </a>

            <ul v-show="showDropdown" class="dropdown-list">
              <li v-for="category in category_store.category_list" :key="category.id">
                <router-link class="dropdown-item" :to="'/category?id=' + category.id">{{ category.name }}</router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="nav-right">
        <form action="/" method="post">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Nhập số điện thoại" name="search">
            <button type="submit" class="btn btn-danger">Kiểm tra đơn</button>
          </div>
        </form>
      </div>
    </div>
  </nav>
</template>
<script>
import { useStore } from '../stores/category'
import axios from 'axios'
export default {
  components: {
    CartSideBar
  },
  data() {
    return {
      category_store: useStore(),
      showDropdown: false
    }
  },
  methods: {
    dropdown() {
      this.showDropdown = !this.showDropdown;
    },
    closeCategory() {
      if (this.showDropdown) {
        this.showDropdown = false;
      }
    },
    loadCategory() {
      axios.get('http://localhost:3000/category/all')
        .then(response => {
          this.category_store.set(response.data.items);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {
    this.loadCategory();
  }
}
</script>
<style lang="scss">
$border-translucent: rgba(0, 0, 0, 0.1);

.category-list {
  position: relative;
}

.dropdown-list {
  display: flex;
  flex-direction: column;
  align-items: flex-start !important;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  border: 1px solid $border-translucent;
  border-radius: 5px;
  padding: 10px;
  z-index: 2;

  .dropdown-item {
    width: 100%;
    margin-bottom: 5px;
    border-bottom: 0.5px solid rgba(128, 128, 128, 0.315);

    &:focus {
      color: blue;
    }
  }
}

nav {
  width: 100vw;
  padding: 10px 0 20px 0;
  border-bottom: 1px solid $border-translucent;

  .nav-left,
  .nav-right {
    display: flex;
    align-items: center;

    ul {
      margin-bottom: 0 !important;
      display: flex;
      align-items: center;

      li {
        margin-right: 20px;
        list-style: none;

        a {
          text-decoration: none;
          color: rgb(253, 85, 56);
          font-size: 16px;

          &:hover {
            color: #f00;
          }
        }

        i {
          font-size: 20px;
        }
      }
    }
  }
}

.border-box {
  text-align: center;
  border: 1px solid $border-translucent;
  padding: 7px;
  border-radius: 7px;

  a {
    font-size: 14px !important;
    color: black !important;
  }
}
</style>