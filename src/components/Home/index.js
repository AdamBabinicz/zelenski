import React, { useState, useEffect } from 'react'
import LogoTitle from '../../assets/images/8.png'
import { Link } from 'react-router-dom'
import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import Modal from '../Portal/Modal'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['W', 'o', 'ł', 'o', 'd', 'y', 'm', 'y', 'r']
  const jobArray = ['Z', 'e', 'ł', 'e ', 'ń', 's', 'k', 'i']

  const [modal, setModal] = useState(false)
  const Toggle = () => setModal(!modal)

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h2>
            <span className={letterClass}>B</span>
            <span className={`${letterClass} _12`}>o</span>
            <span className={`${letterClass} _13`}>h</span>
            <span className={`${letterClass} _14`}>a</span>
            <span className={`${letterClass} _15`}>t</span>
            <span className={`${letterClass} _16`}>e</span>
            <span className={`${letterClass} _17`}>r</span>
            <span className={`${letterClass} _18`}>s</span>
            <span className={`${letterClass} _19`}>k</span>
            <span className={`${letterClass} _21`}>i</span>
            {/* <br /> */}&nbsp;
            <span className={`${letterClass} _22`}>p</span>
            <span className={`${letterClass} _23`}>r</span>
            <span className={`${letterClass} _24`}>e</span>
            <span className={`${letterClass} _25`}>z</span>
            <span className={`${letterClass} _26`}>y</span>
            <span className={`${letterClass} _27`}>d</span>
            <span className={`${letterClass} _28`}>e</span>
            <span className={`${letterClass} _29`}>n</span>
            <span className={`${letterClass} _30`}>t</span>
            <br />
            <img src={LogoTitle} alt="..." />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            {/* <br /> */}&nbsp;
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h2>
          <h3>Wygramy, powstaną nowe domy, miasta, marzenia ...</h3>
          <Link to="" className="flat-button" onClick={() => Toggle()}>
            Więcej
          </Link>
          <Modal
            show={modal}
            close={Toggle}
            title="Zełenski: Nie mówcie nam, że nasza armia nie spełnia standardów NATO"
          >
            <p>
              - Miesiąc heroicznego oporu. Miesiąc najciemniejszego cierpienia.
              Miesiąc bezkarnego niszczenia pokojowego kraju, a razem z nim -
              całej architektury globalnego bezpieczeństwa. To wszystko jest
              przed światem - powiedział prezydent. Wołodymyr Zełenski
              powtórzył, że w swoim oporze wobec Rosji Ukraina potrzebuje
              nieograniczonej pomocy wojskowej, w sytuacji, gdy Moskwa
              wykorzystuje cały posiadanego przez nią arsenał, którym atakuje
              wszystko - od domów po kościoły, od magazynów żywności po
              uniwersytety, od mostów po szpitale.
            </p>
            <br />
            <p>
              <em>
                www.rp.pl/konflikty-zbrojne/art35933521-zelenski-nie-mowcie-nam-ze-nasza-armia-nie-spelnia-standardow-nato
              </em>
            </p>
          </Modal>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
