import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, About, Recipes, Contect , SearchMyFood , Content , Likes, Error } from './Components/index.js'
import meals from './MealApi/MealApi.js'
import useRandomData from './hooks/useRandomData.js'
import store from './store/store.js'
import { Provider } from 'react-redux'
import ErrorImg from '../images/Error.png'


createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/recipes' element={<Recipes useHook={useRandomData} numberOfMeals={24}/>} />
          <Route path='/contact' element={<Contect />} />
          <Route path='/api/search/:id' element={<SearchMyFood />} />
          <Route path='/recipes/content/:id' element={<Content />} />
          <Route path='/recipes/likes/' element={<Likes />} />
        </Route>
        <Route path='*' element={<Error errorImage={ErrorImg} error={"NOT FOUND"} />} />
      </Routes>
    </BrowserRouter>
  </Provider>
  // {/* </StrictMode> */}
)
