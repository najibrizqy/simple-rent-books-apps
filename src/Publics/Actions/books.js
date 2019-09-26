import Axios from 'axios';

import{HOST} from '../../Config'

export const getBooks = (page) => {
  return {
    type: 'GET_BOOKS',
    payload: Axios.get(`${HOST}/books?page=${page}`),
  }
}

export const getBookDetail = (id, token) => {
  return {
    type:'GET_BOOK_DETAIL',
    payload: Axios.get(`${HOST}/books/${id}`,{
        headers:{
          Authorization : token
        }
      }
    )
  }
}

export const addBook = (data, token) => {
  return {
    type:'ADD_BOOKS',
    payload: Axios.post(`${HOST}/books`, data, {
        headers:{
          Authorization : token
        }
      }
    )
  }
}
