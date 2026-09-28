import Header from "./components/Header"
import Footer from "./components/Footer"
import Content from "./components/Content"
function App() {
  let val="Robert"
  return (
    < div className="app">
    <Header val={val}/>
    <Footer val="ROBERT"/>
    <Content/>
    </div>
  )
}

export default App
