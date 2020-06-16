import React from 'react'
import Hero from "../components/Hero"
import {Link} from 'react-router-dom'
import Banner from '../components/Banner'
import RoomsContainer from '../components/RoomsContainer'

export default function Rooms() {
    return <>
    <Hero hero="roomsHero">
    <Banner title='our Rooms'>
        <Link to="/" className="btn-primary">
          return home
        </Link>
    </Banner>
    </Hero>
    <RoomsContainer/>
    </>
}
