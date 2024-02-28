import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

const cards = [
    {
        Name: "Milotic",
        Image: "",
    },
    {
        Name: "Charizard",
        Image: "",
    },
    {
        Name: "Ninetails",
        Image: "",
    },
];

function characters() {
    cards.forEach((card) => {
      DOMSelectors.display.insertAdjacentHTML(
        "afterbegin",
        `<div class="card" id="card">
          <h2 class="Poke">${card.Name}</h2>
          <img
            class="image"
            src="${card.Image}"
          />`
      );
    });
  }
  characters(cards);
