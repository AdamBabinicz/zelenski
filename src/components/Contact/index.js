import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import img from '../../assets/images/7.png'
import img1 from '../../assets/images/3.png'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('gmail', 'template_YeJhZkgb', form.current, 'your-token')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h2>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[
                'Ż',
                'y',
                'c',
                'i',
                'e',
                '',
                'p',
                'r',
                'y',
                'w',
                'a',
                't',
                'n',
                'e',
              ]}
              idx={15}
            />
          </h2>
          <p>
            Przed wyborami prezydenckimi w 2019 niektóre media zaczęły szerzej
            interesować się pochodzeniem jego rodziców. Wołodymyr Zełenski
            odmawiał komentowania tych kwestii, twierdząc, że jest to jego
            sprawa prywatna. W trakcie prezydentury w przeciwieństwie do
            poprzedników nie uczestniczył w uroczystościach o charakterze
            religijnym, również w swoich przemówieniach nie przywoływał
            odniesień religijnych.
          </p>
          <p>
            Natomiast po rozpoczęciu przez Rosję w 2022 inwazji na Ukrainę
            zaczął publicznie przywoływać swoje żydowskie pochodzenie, śmierć
            kilku krewnych podczas Holokaustu oraz postacie swoich krewnych
            walczących z Niemcami w trakcie II wojny światowej (w tym dziadka,
            weterana Armii Czerwonej, odznaczonego dwukrotnie Orderem Czerwonej
            Gwiazdy). Stało się to argumentem przeciwko rosyjskiej propagandzie
            o „nazizmie” i „banderyzmie” ukraińskiego prezydenta i jego rządu.
            Odwołania te pojawiały się także celem nakłonienia liderów środowisk
            żydowskich do poparcia Ukrainy.
          </p>
          <div className="contact-form">
            {/* <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form> */}
          </div>
        </div>
        <div className="info-map">
          <p>
            6 września 2003 zawarł związek małżeński z&nbsp;Ołeną z&nbsp;domu
            Kijaszko. Para uczęszczała do równoległych klas tej samej szkoły,
            znajomość nawiązali jednak dopiero na studiach, gdy Ołena Kijaszko
            zajmowała się pisaniem tekstów do grupy kabaretowej „95-j kwartał”.
          </p>
          <p>
            Mają dwoje dzieci: córkę Ołeksandrę (ur. 2004) i&nbsp;syna Kiryłła
            (ur. 2013). Wołodymyr Zełenski pochodzi z&nbsp;rodziny ukraińskich
            Żydów. Posługiwał się językiem rosyjskim, języka ukraińskiego zaczął
            się uczyć w&nbsp;2017. Pierwszą ukraińskojęzyczną produkcję filmową
            z&nbsp;jego udziałem zaczęto kręcić w&nbsp;tym samym roku.
          </p>
          <img src={img1} alt="..." />
        </div>
        <div className="map-wrap">
          {/* <MapContainer center={[44.96366, 19.61045]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[44.96366, 19.61045]}>
              <Popup>Sloba lives here, come over for a cup of coffee </Popup>
            </Marker>
          </MapContainer> */}
        </div>
      </div>
      <img src={img} alt="..." className="ukr" />
      <Loader type="pacman" />
    </>
  )
}

export default Contact
