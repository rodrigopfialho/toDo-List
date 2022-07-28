

import { Post } from './components/Post'
import { Header } from './components/Header'

import './global.css'

function App() {

  return (
    <div>
      <Header/>

        <main>
          <div>
           <Post />
          </div>
        </main>
    </div>
  )
}

export default App
