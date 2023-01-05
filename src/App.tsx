
import { Main } from './styles/Main'
import { Home } from './pages/Home'
import { Header } from './components/Header'


import GlobalStyle from './styles/GlobalStyle'

function App() {
  

  return (
    <div className="App">
      <GlobalStyle/>
        <Main> 
          <Header/>
          <Home></Home>
          <Home></Home>
        </Main>
    </div>
  )
}

export default App
