import React, { useState, useEffect } from 'react'
import LogoTitle from '../../assets/images/1.webp'
import { Link } from 'react-router-dom'
import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['W', 'o', 'ł', 'o', 'd', 'y', 'm', 'y', 'r']
  const jobArray = ['Z', 'e', 'ł', 'e ', 'ń', 's', 'k', 'i']
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
          <Link to="/contact" className="flat-button">
            Więcej
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
