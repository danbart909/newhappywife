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
// import PrivacyPolicy from './components/PrivacyPolicy'
// import ScrollToTop from './modules/ScrollToTop'
// import FooterTabs from './modules/FooterTabs'
// import Acworth from '../../newhappywife/src/pages/areas/Acworth'
// import Austell from '../../newhappywife/src/pages/areas/Austell'
// import Kennesaw from '../../newhappywife/src/pages/areas/Kennesaw'
// import Mableton from '../../newhappywife/src/pages/areas/Mableton'
// import Marietta from '../../newhappywife/src/pages/areas/Marietta'
// import PowderSprings from '../../newhappywife/src/pages/areas/PowderSprings'
// import Roswell from '../../newhappywife/src/pages/areas/Roswell'
// import Smyrna from '../../newhappywife/src/pages/areas/Smyrna'
// import Vinings from '../../newhappywife/src/pages/areas/Vinings'
// import Woodstock from '../../newhappywife/src/pages/areas/Woodstock'
// import ResidentialJunkRemoval from '../../newhappywife/src/pages/services/ResidentialJunkRemoval'
// import ApplianceRemoval from '../../newhappywife/src/pages/services/ApplianceRemoval'
// import AtticJunkRemoval from '../../newhappywife/src/pages/services/AtticJunkRemoval'
// import BasementCleanOut from '../../newhappywife/src/pages/services/BasementCleanOut'
// import BulkTrashPickUp from '../../newhappywife/src/pages/services/BulkTrashPickUp'
// import FreezerRemoval from '../../newhappywife/src/pages/services/FreezerRemoval'
// import GarageCleanOut from '../../newhappywife/src/pages/services/GarageCleanOut'
// import GrillRemoval from '../../newhappywife/src/pages/services/GrillRemoval'
// import HouseholdJunkRemoval from '../../newhappywife/src/pages/services/HouseholdJunkRemoval'
// import MattressRemoval from '../../newhappywife/src/pages/services/MattressRemoval'
// import MovingJunk from '../../newhappywife/src/pages/services/MovingJunk'
// import OvenRemoval from '../../newhappywife/src/pages/services/OvenRemoval'
// import RefrigeratorRemoval from '../../newhappywife/src/pages/services/RefrigeratorRemoval'
// import StoveRemoval from '../../newhappywife/src/pages/services/StoveRemoval'
// import WasherAndDryerRemoval from '../../newhappywife/src/pages/services/WasherAndDryerRemoval'
// import YardDebrisRemoval from '../../newhappywife/src/pages/services/YardDebrisRemoval'
// import CommercialJunkRemoval from '../../newhappywife/src/pages/services/CommercialJunkRemoval'
// import ApartmentCleanOut from '../../newhappywife/src/pages/services/ApartmentCleanOut'
// import CarpetRemoval from '../../newhappywife/src/pages/services/CarpetRemoval'
// import ForeclosureJunkRemoval from '../../newhappywife/src/pages/services/ForeclosureJunkRemoval'
// import OfficeJunkRemoval from '../../newhappywife/src/pages/services/OfficeJunkRemoval'
// import StorageUnitCleanOut from '../../newhappywife/src/pages/services/StorageUnitCleanOut'
// import WarehouseCleanOut from '../../newhappywife/src/pages/services/WarehouseCleanOut'
// import FurnitureJunkRemoval from '../../newhappywife/src/pages/services/FurnitureJunkRemoval'
// import CouchRemoval from '../../newhappywife/src/pages/services/CouchRemoval'
// import DresserRemoval from '../../newhappywife/src/pages/services/DresserRemoval'
// import EWasteRemoval from '../../newhappywife/src/pages/services/EWasteRemoval'
// import EntertainmentCenterRemoval from '../../newhappywife/src/pages/services/EntertainmentCenterRemoval'
// import LoveSeatRemoval from '../../newhappywife/src/pages/services/LoveSeatRemoval'
// import ReclinerRemoval from '../../newhappywife/src/pages/services/ReclinerRemoval'
// import TableAndChairsRemoval from '../../newhappywife/src/pages/services/TableAndChairsRemoval'
// import TVRemoval from '../../newhappywife/src/pages/services/TVRemoval'

export default function App() {
  return (
    <>
      <TopNav />
      <Sticky>
        <BottomNav />
      </Sticky>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='services' element={<Services />}>
        </Route>
        <Route path='areas' element={<Areas />} />
        <Route path='pricing' element={<Pricing />} />
        <Route path='booknow' element={<BookNow />} />
      </Routes>
      <Footer />
    </>
  );
}