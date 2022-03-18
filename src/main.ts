import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {fluentButton, fluentCard, fluentTextField, provideFluentDesignSystem} from "@fluentui/web-components";

provideFluentDesignSystem().register(
    fluentButton(),
    fluentCard(),
    fluentTextField(),
);
createApp(App).use(store).use(router).mount('#app')
