import './home.css'
import Footer from '../../components/footer/Footer'
import Banner from './banner/Banner'
import StudioYoga from './studioyoga/StudioYoga'
function Home() {
  return (
    <div className='home'>
        <Banner/>
        <StudioYoga/> 
      <Footer/>
    </div>
  )
}

export default Home
