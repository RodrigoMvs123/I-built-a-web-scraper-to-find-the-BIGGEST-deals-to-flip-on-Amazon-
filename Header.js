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
