import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Sticky } from 'semantic-ui-react'
import TopNav from './components/TopNav'
import BottomNav from './components/BottomNav'
import Home from './components/Home'
import Areas from './components/Areas'
import Services from './components/Services'
import Pricing from './components/Pricing'
import BookNow from './components/BookNow'
import Footer from './components/Footer'
import PrivacyPolicy from './components/PrivacyPolicy'

export default function App() {
  return (
    <>
      <TopNav />
      <Sticky>
        <BottomNav />
      </Sticky>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='services' element={<Services />} />
        <Route path='areas' element={<Areas />} />
        <Route path='pricing' element={<Pricing />} />
        <Route path='booknow' element={<BookNow />} />
        <Route path='privacypolicy' element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </>
  );
}