import React, { lazy, Suspense } from 'react'

import LatestList from '../organism/LatestList'
const HeroSlider = lazy(() => import('@/organism/HeroSlider'))

const MainPage = () => {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <HeroSlider />
        <LatestList />
      </Suspense>
    </main>
  )
}

export default MainPage
