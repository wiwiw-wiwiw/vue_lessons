const App = {
  data() {
    return {
      placeholderString: 'Введите название заметки',
      title: 'Список заметок',
    }
  }
  
}

const app = Vue.createApp(App).mount('#app')

