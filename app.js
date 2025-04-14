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
    
    
    addNewNote() {
      if (this.inputValue !== '') {
        this.notes.push(this.inputValue)
        console.log('After push:', this.notes)
        this.inputValue = ''
      }
    },

 

    removeNote(idx) {
      this.notes.splice(idx, 1)
    },

    toUpperCase(inem) {
      return inem.toUpperCase()
    },
    
    
  },
  computed: {
    doubleCountComputed() {
      console.log('doubleCountComputed')
      return this.notes.length * 2
    },
  },
  watch: {
    inputValue(value) {
      if (value.length > 10) {
        this.inputValue = ''
      }

    },
  },
}

Vue.createApp(App).mount('#app')