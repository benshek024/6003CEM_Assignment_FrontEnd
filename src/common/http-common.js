import axios from 'axios'

export default axios.create({ baseURL: 'https://6003CEMAssignmentBackEnd.benshek024.repl.co/api/v1',
  headers: {
    'Content-type': 'application/json'
  }
})