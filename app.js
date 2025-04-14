const App = {
  data() {
    return {
      placeholderString: 'Введите название заметки',
      title: 'Список заметок',
      inputValue: '',
      notes: ['Заметка 1', 'Заметка 2', 'Заметка 3'],
    }
  },
  methods: {
    
    inputChangeHandler(event) {
      this.inputValue = event.target.value
    },
    
    addNewNote() {
      if (this.inputValue !== '') {
        this.notes.push(this.inputValue)
        this.inputValue = ''
      }
    },

    removeNote(idx) {
      this.notes.splice(idx, 1)
    },

    toUpperCase(inem) {
      return inem.toUpperCase()
    },
    
    
  }
}
Vue.createApp(App).mount('#app')