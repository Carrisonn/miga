import { Home } from '../pages/Home.jsx'
import { MyRecepies } from '../pages/MyRecepies.jsx'
import { RecepieDetail } from '../pages/RecepieDetail.jsx'
import { CookTime } from '../icons/CookTime.jsx'
import { Cuisine } from '../icons/Cuisine.jsx'
import { Difficulty } from '../icons/Difficulty.jsx'
import { PrepTime } from '../icons/PrepTime.jsx'
import { Protein } from '../icons/Protein.jsx'
import { Servings } from '../icons/Servings.jsx'
import { Save } from '../icons/Save.jsx'
import { Saved } from '../icons/Saved.jsx'
import { Search } from '../icons/Search.jsx'

export const API_URL = 'https://recipeapi.io/api/v1/recipes'
export const API_URL_SEARCH = `${API_URL}?search=`

export const API_KEY = import.meta.env.VITE_API_KEY

export const STORAGE_KEY = 'user-recepies'

export const APP_ROUTES = {
  home: {
    path: '/',
    component: Home
  },
  myRecepies: {
    path: '/my-recepies',
    component: MyRecepies
  },
  recepieDetail: {
    path: '/recepie-detail/:slug',
    component: RecepieDetail
  }
}

export const APP_ICONS = {
  CookTimeIcon: CookTime,
  CuisineIcon: Cuisine,
  DifficultyIcon: Difficulty,
  PrepTimeIcon: PrepTime,
  ProteinIcon: Protein,
  ServingsIcon: Servings,
  SaveIcon: Save,
  SavedIcon: Saved,
  SearchIcon: Search
}
