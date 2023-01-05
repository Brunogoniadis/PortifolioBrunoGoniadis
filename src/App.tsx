
import { Main } from './styles/Main'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { Tecnologias } from './pages/Tecnologias'


import GlobalStyle from './styles/GlobalStyle'

function App() {
  

  return (
    <div className="App">
      <GlobalStyle/>
        <Main> 
          <Header/>
          <Home></Home>
          <Tecnologias></Tecnologias>
        </Main>
    </div>
  )
}

export default App
