
import { Main } from './styles/Main'
import { Home } from './pages/Home'

import GlobalStyle from './styles/GlobalStyle'

function App() {
  

  return (
    <div className="App">
      <GlobalStyle/>
        <Main> 
          <Home></Home>

        </Main>
    </div>
  )
}

export default App
