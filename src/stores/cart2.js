import { defineStore } from 'pinia';
import VueCookies from 'vue-cookies';

export const useStore = defineStore('main', {
  state: () => ({
    cart_list: []
  }),
  actions: {
    add(item) {
      for (let i = 0; i < this.cart_list.length; i++) {
        if (this.cart_list[i].item.id == item.id) {
          this.cart_list[i].quantity++;
          return;
        }
      }
      this.cart_list.push({ "item": item, "quantity": 1 });
    },
    inscreaseItemQuantity(id) {
      for (let i = 0; i < this.cart_list.length; i++) {
        if (this.cart_list[i].item.id == id) {
          this.cart_list[i].quantity++;
          return;
        }
      }
      //VueCookies.set('cart', JSON.stringify(this.cart_list), '7d');
    },
    descreaseItemQuantity(id) {
      for (let i = 0; i < this.cart_list.length; i++) {
        if (this.cart_list[i].item.id == id) {
          this.cart_list[i].quantity--;
          if (this.cart_list[i].quantity == 0) {
            this.cart_list.splice(i, 1);
          }
          break;
        }
      }
      VueCookies.set('cart', JSON.stringify(this.cart_list), '7d');
    }
  }
});