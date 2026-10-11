export const API_URL = 'https://recipeapi.io/api/v1/recipes'
export const API_URL_SEARCH = `${API_URL}?search=`

export const API_KEY = import.meta.env.VITE_API_KEY

export const PATHS = {
  home: '/',
  myRecepies: '/my-recepies',
  recepieDetail: '/recepie-detail/:slug'
}