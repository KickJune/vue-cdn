import { createApp, ref } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import { createVuetify } from 'vuetify';

createApp({
  setup() {
    const drawer = ref(null);
    return { drawer };
  },
})
  .use(
    createRouter({
      history: createWebHashHistory(),
      routes: [
        { path: '/', component: { template: '<h2>First</h2>' } },
        { path: '/second', component: { template: '<h2>Second</h2>' } },
        { path: '/third', component: { template: '<h2>Third</h2>' } },
      ],
    }),
  )
  .use(createVuetify())
  .mount('#app');
