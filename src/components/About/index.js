import React, { useEffect, useState } from 'react'
import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  GiBombingRun,
  GiCarpetBombing,
  GiTank,
  GiIncomingRocket,
  GiRocket,
  GiDeathSkull,
  GiFieldGun,
} from 'react-icons/gi'
import { AiFillStar } from 'react-icons/ai'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone about">
          <h2>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['M', 'ą', 'ż', '', 's', 't ', 'a', 'n', 'u']}
              idx={15}
            />
          </h2>
          <p>
            – ukraiński polityk, satyryk, aktor, scenarzysta, prezenter
            telewizyjny, producent filmowy i przedsiębiorca, z wykształcenia
            prawnik. Od 2019 prezydent Ukrainy.
          </p>
          <p>
            W trakcie jego prezydentury wiosną 2021 Rosja zaczęła znacząco
            zwiększać liczbę swoich żołnierzy oraz sprzętu wojskowego w pobliżu
            swojej granicy z Ukrainą. 24 lutego 2022 wojska rosyjskie na rozkaz
            prezydenta Władimira Putina rozpoczęły inwazję na Ukrainę. Ukraiński
            prezydent tego samego dnia ogłosił wprowadzenie stanu wojennego i
            powszechną mobilizację. Dwa dni później Wołodymyr Zełenski odmówił
            skorzystania z amerykańskiej propozycji ewakuowania się z Kijowa.
            Jego postawa i przywództwo w trakcie rosyjskiej inwazji przyniosły
            mu międzynarodową rozpoznawalność i uznanie, liczni zagraniczni
            komentatorzy określili go mianem męża stanu i narodowego bohatera.
          </p>
          <p>
            - Ukraina jest bramą dla rosyjskiego wojska, które chce wkroczyć do
            Europy, ale barbarzyństwo nie może wejść - oświadczył Zełenski.  
            Relacjonował swoją poranną rozmowę z papieżem Franciszkiem:
            "powiedziałem, że nasz naród stał się wojskiem". Prezydent mówił, że
            dotychczas zginęło na Ukrainie 117 dzieci.
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <GiBombingRun color="red" />
              {/* <AiFillStar color="red" /> */}
            </div>
            <div className="face2">
              <GiCarpetBombing color="navy" />
            </div>
            <div className="face3">
              <GiTank color="#333" />
            </div>
            <div className="face4">
              <GiFieldGun color="#110243" />
            </div>
            <div className="face5">
              <GiRocket color="#022c43" />
            </div>
            <div className="face6">
              <GiDeathSkull color="#fff" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
