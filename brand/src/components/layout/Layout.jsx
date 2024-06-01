import NavBar from '../common/NavBar'
import Footer from '../common/Footer'

function Layout({children}) {
  return (
    <div className='layout'>
        <NavBar />
        <main>{children}</main>
        <Footer />
    </div>
  )
}

export default Layout