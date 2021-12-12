import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
// import { createApolloProvider } from '@vue/apollo-option'
// import { setContext } from 'apollo-link-context'


createApp(App).use(router).mount('#app')
