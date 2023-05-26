import { createApp, ref } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import { createVuetify } from 'vuetify';

// 読み込み完了したら読み込み中divを削除する
addEventListener('load', () => {
  const loading = document.getElementById('loading');
  loading.style.opacity = 0;
  loading.addEventListener('transitionend', () => {
    loading.remove();
  });
});

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
    })
  )
  .use(createVuetify())
  .mount('#app');
