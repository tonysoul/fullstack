import { Nav } from './components'
import { Hero, PopularProducts } from './sections'

const App = ()=>(
  <main className='relative'>
    
    <Nav />
    
    {/* hero */}
    <Hero />

    {/* Popular Products */}
    <PopularProducts />

  </main>
)

export default App
