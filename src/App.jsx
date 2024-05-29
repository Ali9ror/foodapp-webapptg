import React, { useEffect } from "react"
import { Fragment } from "react"
import { useState } from "react"
import { serv } from "./data"
import FoodPageWrapper from "./components/FoodPage/FoodPageWrapper"
import HomePage from "./components/HomePage"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Kitchen from "./components/Kitchen/Kitchen"
import ShoppingBag from "./components/ShoppingBag/ShoppindBag"
import PageNotFound from "./components/ErrorPage/ErrorPage";
// const tg = window.Telegram.WebApp;
 
export default function App() {
  // const [ tab, setTab ] = useState('Бургеры 🍔')
  const [data, setData] = useState([])
  const [category, setCategory] = useState([])
  const [dataSet, setDataSet] = useState()
  
  async function fetchData() {
    const response = await fetch(serv+'menu/0/positions')
    const data = await response.json()
    setData(data)
  }
  async function fetchCategory() {
    const res = await fetch(serv+'menu/categories')
    const category = await res.json()
    setCategory(category)
  }

  async function fetchDataPost() {
    const response = await fetch(serv+'menu/0/update_cart', {
        method: 'POST', 
        body: JSON.stringify(dataSet)
    })
    const data = await response.json()
    setData(data)
  }
  useEffect(() => {
    fetchData(),
    fetchCategory()
  }, [])


  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" 
                  element={<HomePage category={category} 
                  // tab={tab} 
                  // setTab={(current) => setTab(current)} 
                  data={data} 
                  setDataSet={setDataSet}/>} 
          />
          
          <Route path="/food/:id" 
                  element={<FoodPageWrapper 
                  />}  
          />

          <Route path="/kitchen" 
                  element={<Kitchen />} 
          />

          <Route path="/shopping_bag" 
                  element={<ShoppingBag />} 
          />
          
          <Route path="*"
                  element={<PageNotFound />}
          />
        </Routes>
      </Router>
    </Fragment>
  )
}


