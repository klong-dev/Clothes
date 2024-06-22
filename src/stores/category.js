import { defineStore } from 'pinia';

export const useStore = defineStore('main', {
  state: () => ({
    category_list: []
  }),
  actions: {
    set(category) {
      this.category_list = category;
    }
  }
});