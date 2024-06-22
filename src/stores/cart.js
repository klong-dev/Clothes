import { defineStore } from 'pinia';
import VueCookies from 'vue-cookies';

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart_list: []
  }),
  actions: {
    add(item) {
      const existingItem = this.cart_list.find(cartItem => cartItem.item.id === item.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.cart_list.push({ item, quantity: 1 });
      }
      this.saveCartToCookies();
    },
    remove(id) {
      this.cart_list = this.cart_list.filter(item => item.item.id !== id);
      this.saveCartToCookies();
    },
    increaseItemQuantity(id) {
      const item = this.cart_list.find(cartItem => cartItem.item.id === id);
      if (item) {
        item.quantity++;
        this.saveCartToCookies();
      }
    },
    decreaseItemQuantity(id) {
      const index = this.cart_list.findIndex(cartItem => cartItem.item.id === id);
      if (index !== -1) {
        this.cart_list[index].quantity--;
        if (this.cart_list[index].quantity === 0) {
          this.cart_list.splice(index, 1);
        }
        this.saveCartToCookies();
      }
    },
    saveCartToCookies() {
      VueCookies.set('cart', JSON.stringify(this.cart_list), '7d');
    }
  }
});