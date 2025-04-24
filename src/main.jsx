import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import router from './router'
import store from './store/store'

// Bootstrap CSS 가져오기
import 'bootstrap/dist/css/bootstrap.min.css'
// Bootstrap Icons 가져오기
import 'bootstrap-icons/font/bootstrap-icons.css'
// Bootstrap JavaScript 가져오기
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import 'bootstrap/dist/css/bootstrap-utilities.min.css'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider
        router={router}
        fallbackElement={<div>로딩 중...</div>}
        hydrateFallbackElement={<div>로딩중...</div>}
      />
    </Provider>
  </StrictMode>
)
