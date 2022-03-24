import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import ScrollToTop from './components/ScrollToTop'
import CookieConsent from 'react-cookie-consent'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/bohater" element={<About />} />
          <Route path="/prywatnie" element={<Contact />} />
        </Route>
      </Routes>
      <CookieConsent
        debug={true}
        location="bottom"
        style={{
          background: '#333',
          textAlign: 'left',
          paddingBottom: '1rem',
          fontSize: '16px',
          fontFamily: 'Gideon Roman',
        }}
        buttonStyle={{
          color: '#333',
          background: '#fff',
          fontSize: '18px',
          fontFamily: 'Gideon Roman',
          marginRight: '1rem',
        }}
        buttonText="OK, rozumiem"
        expires={365}
      >
        "W ramach naszej witryny stosujemy pliki cookies w celu świadczenia
        Państwu usług na najwyższym poziomie, w tym w sposób dostosowany do
        indywidualnych potrzeb. Korzystanie z witryny bez zmiany ustawień
        dotyczących cookies oznacza, że będą one zamieszczane w Państwa
        urządzeniu końcowym. Możecie Państwo dokonać w każdym czasie zmiany
        ustawień dotyczących cookies."
      </CookieConsent>
    </>
  )
}

export default App
