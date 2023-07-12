I built a web scraper to find the BIGGEST deals to flip on Amazon $$$
##
https://www.youtube.com/watch?v=2hSC2HaPJDA 

https://raw.githubusercontent.com/RodrigoMvs123/I-built-a-web-scraper-to-find-the-BIGGEST-deals-to-flip-on-Amazon-/main/README.md

https://github.com/RodrigoMvs123/I-built-a-web-scraper-to-find-the-BIGGEST-deals-to-flip-on-Amazon-/blame/main/README.md

OxyLabs
https://oxylabs.io/ 

E-Commerce Scraper API
https://developers.oxylabs.io/scraper-apis/e-commerce-scraper-api 
Amazon 
https://developers.oxylabs.io/scraper-apis/e-commerce-scraper-api/amazon 

##
React App ( react-amazon-deal-finder )
Visual Studio Code
Terminal
npx create-react-app my-app
cd my-app
npm start
( localhost:3000 )

Visual Studio Code
Explorer
OPEN EDITORS 
server.js

server.js
try {
       const body {
              
       }
       await fetch(“”, {
              method: “POST”,
              body: JSON stringify(body),
              headers: {
                     “Content-Type”: “application/json”
                      “Authorization”: “Basic ” + 
              }
       }
} catch (err) {
       console.error(err)
}

OxyLabs UI

E-Commerce Scraper-API
Get started
Start free trial
Create your API user
Username
Password
Create API user
Close

Visual Studio Code
Explorer
OPEN EDITORS 
server.js

server.js
const PORT 8000
const express = require(‘express’)
const cors = require(‘express’)
const app = express()

app.use(cors())

const username = “ecomcodewithania”
const password = “2SmFGrUEYG4X”

app.get(‘/deals’, async(req, res) => {
try {
       const body {
              “source”: “amazon_search”,
               “domain”: “com”,
               “query” : “deals of the day”
               “parse”: true,
               “pages”: 1
       }
       
       const response = await fetch(“https://realtime.oxylabs.io/v1/queries”, {
              method: “POST”,
              body: JSON stringify(body),
              headers: {
                     “Content-Type”: “application/json”
                      “Authorization”: “Basic ” + Buffer.from(`${username}:${password}`)toString(“base64”)
              }
       })
       
       console.log(await response.json())      

} catch (err) {
       console.error(err)
}

})

appListen(PORT, () => console.log(`Listening on port ${PORT}! `))

https://www.amazon.com/ref=footer_us 
# “query” : “deals of the day”

Visual Studio Code
Terminal 
npm i express cors
package.json
{
   “dependencies”: {
      “cors”: “^2.8.5”,
      “express”: “^4.18.2”
   }
}


package.json
“scripts”
   “start:frontend”: “react-scripts start”,
   “start:backend”: “nodemon server.js”

Visual Studio Code
Terminal 
npm i nodemon 
npm run start:backend
localhost:8000/deals
{
       results: [
       { 
              content:[Object],
              created_at ‘2023-06-29 11:40:21’,
              updated_at ‘2023-06-29’ 11:40:23’,
              page: 1, 
              url: ‘https://www.amazon.com/s?k=deals%20of%20the%20day&page=1’,
              job_id: ‘7080147981877391361’,
              status_code: ‘200’,
              parser_type: ‘’
       }
   ]
}

Visual Studio Code
Explorer
OPEN EDITORS 
server.js

server.js
const PORT 8000
const express = require(‘express’)
const cors = require(‘express’)
const app = express()

app.use(cors())

const username = “ecomcodewithania”
const password = “2SmFGrUEYG4X”

app.get(‘/deals’, async(req, res) => {
try {
       const body {
              “source”: “amazon_search”,
               “domain”: “com”,
               “query” : “deals of the day”
               “parse”: true,
               “pages”: 1
       }
       
       const response = await fetch(“https://realtime.oxylabs.io/v1/queries”, {
              method: “POST”,
              body: JSON stringify(body),
              headers: {
                     “Content-Type”: “application/json”
                      “Authorization”: “Basic ” + Buffer.from(`${username}:${password}`)toString(“base64”)
              }
       })
       
       const data = await response.json()

       console.log()      

       res.send(data)
 
} catch (err) {
       console.error(err)
}

})

appListen(PORT, () => console.log(`Listening on port ${PORT}! `))

localhost:8000/deals
{
       results: {
            -{ 
               -content: {
                        url: “https://www.amazon.com/s?k-dealsoftheday&page=1”,
                        page: 1,
                        pages: 1,
                        query: “deals of the day”,
                      - results: {
                            paid: [ ],
                          -organic: [
                                 -{
                                         pos: 1,
                                         url:
                                         asin:
                                         price: 18.97
                                         title:
                                         rating:
                                         currency: 
                                         url_image:
                                         best_seller:
                                         price_upper:
                                         is_sponsered: 
                                         manufacturer: 
                                         pricing_count:
                                         reviews_count:
                                         is_amazons_choise:
                                         price_strikethrough: 26.99
                                   }
…

Visual Studio Code
Explorer
OPEN EDITORS 
server.js

server.js
const PORT 8000
const express = require(‘express’)
const cors = require(‘express’)
const app = express()

app.use(cors())

const username = “ecomcodewithania”
const password = “2SmFGrUEYG4X”

app.get(‘/deals’, async(req, res) => {
try {
       const body {
              “source”: “amazon_search”,
               “domain”: “com”,
               “query” : “deals of the day”
               “parse”: true,
               “pages”: 1
       }
       
       const response = await fetch(“https://realtime.oxylabs.io/v1/queries”, {
              method: “POST”,
              body: JSON stringify(body),
              headers: {
                     “Content-Type”: “application/json”
                      “Authorization”: “Basic ” + Buffer.from(`${username}:${password}`)toString(“base64”)
              }
       })
       
       const data = await response.json()
       const results = data.results[0].content.results.organic
       const filteredDeals =  results.filter(deal => deal.price_strikethrough)
       const sortedByBestDeal = filteredDeals.sort((b, a) =>                                  
              ((a.price_strikethrough - a.price) /a.price_strikethrough * 100) -
              ((b.price_strikethrough - b.price) /b.price_strikethrough * 100)
              )
       
       res.send(data)

} catch (err) {
       console.error(err)
}
})

appListen(PORT, () => console.log(`Listening on port ${PORT}! `))

Visual Studio Code
Explorer 
OPEN EDITORS
index.js
App.js

index.js
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

App.js
const App = () => {
  return (
    <div className="app">
      
    </div>
  );
}

export default App;

Visual Studio Code
Terminal 
npm run start:frontend
localhost:3000

Visual Studio Code
App.js

App.js
import { useState, useEffect } from “react”

const App = () => {
       const [deals, setDeals] = useState (null)
       const getDeals = async () => {
              try {
                     const response = await fetch(“http://localhost:8000/deals”, {method: “GET”})
                     const data = await response.json()
                     setDeals(data) 
              } catch err {
                     console.error(err)
              }
       }

       useEffect (() => {
              getDeals()
       }, [])

       console.log(deals)

  return (
    <div className="app">
      
    </div>
  );
}

export default App;

localhost:3000

Visual Studio Code
Explorer 
OPEN EDITORS
components 
Header.js
Card.js 

Header.js
const header () => {
    return (
        <div>
            <h1>Header</h1>
        </div>
    )
}

export default Header

Visual Studio Code
Card.js

Card.js
const Card () => {
    return (
        <div>
            <h1>Card</h1>
        </div>
    )
}

export default Card 

Visual Studio Code
App.js

App.js
import { useState, useEffect } from “react”
import Card from "./components/Card"
import Header from "./components/Header"

const App = () => {
       const [deals, setDeals] = useState (null)
       const getDeals = async () => {
              try {
                     const response = await fetch(“http://localhost:8000/deals”, {method: “GET”})
                     const data = await response.json()
                     setDeals(data) 
              } catch err {
                     console.error(err)
              }
       }

       useEffect (() => {
              getDeals()
       }, [])

  return (
    <div className="app">
      <Header />
      <nav>
        <button className="primary">Amazon</button>
        <button className="primary"disabled>Alieexpress</button>
        <button className="primary"disabled>eBay</button>
        <button className="primary"disabled>Etsy</button>
      </nav>
      <div>
        <h2>Best deal!</h2>
        <div className="feed">
          {deals?.map(deal) => <Card key={deal.pos} item={deal}/>)}
        </div>
      </div>
    </div>
  );
}

export default App;

Visual Studio Code
Card.js

Card.js
const Card ({ item }) => {

    const titleFormatted = item.title.slice(0,20)
    const percentageDrop = ((item.price_strikethrough - item.price) / item.price_strikethrough * 100).toFixed(0)

    return (
        <div className="card">
            <div className="img-container">
                <img src={item.url_image} alt={item.title}/>
            </div>
            <div className="text-container">
                <h5>{titleFormatted}...</h5>
                <p>Price drop from{item.price_strikethrough} to {item.price}</p>
                <p>Rating: {item.rating}</p>
            </div>
            <div className="info-container">
                <div className="circle">{percentageDrop}%</div>
                <a href={`https://www.amazon.com/${item.url}`}>GO!</a>
            </div>

        </div>
    )
}

export default Card

Visual Studio Code
Explorer
OPEN EDITORS
Header.js

Header.js
import logo from "../images/hand-shake-illustration-free-vector.jpg" 

const header () => {

    const today = new Date().toString().slice(0, 10)
    return (
        <header> 
            <div className="text-container">
               <h1>DealFinder</h1>
               <p>today</p>
            </div>
            <div className="logo=container">
               <img src={logo} alt="logo"/>
            </div>
        </header> 
    )
}

export default Header 

https://www.google.com/search?sxsrf=AB5stBh9AGtYC6Xbk2N3h0EVP4s5ZlQAfg:1689169814351&q=shake+hands&tbm=isch&sa=X&ved=2ahUKEwimnv_1p4mAAxVGlJUCHRWaDikQ0pQJegQIDRAB&biw=1366&bih=657&dpr=1#imgrc=nXSeKsgeozZpdM 

Visual Studio Code
Explorer 
OPEN EDITORS
images 

images
hand-shake-illustration-free-vector.jpg

Visual Studio Code
Explorer
OPEN EDITORS 
index.css

index.css
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700;800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200&display=swap');

body {
    margin: 0;
    padding: 0;
    background-color: rgb(235, 235, 235);
    display: flex;
    justify-content: center;
    height: 100vh;
    align-items: center;
    font-family: 'Poppins', sans-serif;
    color: rgb(50, 42, 51);
}

.app {
    width: 330px;
    height: 680px;
    border-radius: 50px;
    background: radial-gradient(circle,
        rgb(236, 236, 236) 0%,
        rgb(255, 255, 255) 80%);
    padding: 60px;
    box-shadow: rgba(0,0,0,0.1) 0 4px 12px;
}

header {
    display: flex;
    justify-content: space-between;
    position: relative;
}

header p {
    color: rgb(133, 133, 133);
}

.logo-container {
    height: 50px;
    position: relative;
    top: 20px;
    right: 20px;
}

h2 {
    font-weight: 400;
    margin-bottom: 0;
}

.logo-container img {
    height: 100%;
}

nav::-webkit-scrollbar {
    display: none;
}

nav {
    display: flex;
    width: 330px;
    overflow-x: scroll;
    -ms-overflow-style: none;
    scrollbar-with: none;
}

button.primary {
    border: none;
    background-color: rgb(3, 140, 140);
    padding: 8px;
    color: rgb(255, 255, 255);
    font-size: 20px;
    border-radius: 15px;
    margin-right: 5px;
    cursor: pointer;
}

button.primary:disabled {
    background-color: rgb(255, 255, 255);
    color: rgb(172, 172, 172);
}

.card {
    height: 100px;
    width: 100%;
    padding: 5px;
    margin: 10px 0;
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
    box-sizing: border-box;
    display: flex;
}

.card h5,
.card p {
    margin: 0;
}

.card h5 {
   font-size: 12px;     
}

.card p {
    font-size: 13px;
    color: rgb(133, 133, 133);
}

.card .img-container {
    height:100%;
    width: 100px;
    border-radius: 10px;
    overflow: hidden;
}

.card .img-container img {
    width: 150%;
}

.card .text-container {
    width: 180px;
    padding: 0 5px;
}

.circle {
    background-color: rgb(1, 140, 140);
    height: 30px;
    width: 30px;
    border-radius: 30px;
    color: rgb(255, 255, 255);
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.feed {
    height: 400px;
    overflow-y: scroll;
}

.card .info-container {
    position: relative;
}

.card .info-container a {
    position: absolute;
    top: 65px;
    right: 5px;
    text-decoration: none;
    color: rgb(50, 41, 51);
}

https://fonts.google.com/
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700;800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200&display=swap'); 

Visual Studio Code
Explorer
OPEN EDITORS
src
.env

.env
USERNAME=ecomcodewithania
PASSWORD=2SmFGrUEYG4X

Visual Studio Code
Explorer
OPEN EDITORS 
server.js

server.js
const PORT 8000
const express = require(‘express’)
const cors = require(‘express’)
const app = express()
require(‘dotenv’).config()

app.use(cors())

const username = process.env.USERNAME
const password = process.env.PASSWORD
app.get(‘/deals’, async(req, res) => {
try {
       const body {
              “source”: “amazon_search”,
               “domain”: “com”,
               “query” : “deals of the day”
               “parse”: true,
               “pages”: 1
       }
       
       const response = await fetch(“https://realtime.oxylabs.io/v1/queries”, {
              method: “POST”,
              body: JSON stringify(body),
              headers: {
                     “Content-Type”: “application/json”
                      “Authorization”: “Basic ” + Buffer.from(`${username}:${password}`)toString(“base64”)
              }
       })
       
       const data = await response.json()
       const results = data.results[0].content.results.organic
       const filteredDeals =  results.filter(deal => deal.price_strikethrough)
       const sortedByBestDeal = filteredDeals.sort((b, a) =>                                  
              ((a.price_strikethrough - a.price) /a.price_strikethrough * 100) -
              ((b.price_strikethrough - b.price) /b.price_strikethrough * 100)
              )
       
       res.send(data)

} catch (err) {
       console.error(err)
}
})

appListen(PORT, () => console.log(`Listening on port ${PORT}! `))

https://www.npmjs.com/package/dotenv 

Visual Studio Code
Terminal 
npm i dotenv

