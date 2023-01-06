
import { Main } from './styles/Main'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { Tecnologias } from './pages/Tecnologias'
import { Projetos } from './pages/Projetos'
import { Contato } from './pages/Contato'
import { Footer } from './components/Footer'

import GlobalStyle from './styles/GlobalStyle'

function App() {
  

  return (
    <div className="App">
      <GlobalStyle/>
        <Main> 
          <Header/>
          <Home></Home>
          <Tecnologias></Tecnologias>
          <Projetos></Projetos>
          <Contato></Contato>
          <Footer></Footer>
        </Main>
    </div>
  )
}

export default App
