import { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Default from './layout/Default'
import NotFound from './pages/NotFound'
// import MainPage from './pages/MainPage'
// import AboutPage from './pages/AboutPage'
// import ShopPage from './pages/ShopPage'
// import BlogPage from './pages/BlogPage'
// import CartPage from './pages/CartPage'

const AboutPage = lazy(() => import('./pages/AboutPage'))
const BlogPage = lazy(() => import('./pages/BlogPage'))
const CartPage = lazy(() => import('./pages/CartPage'))
const ShopPage = lazy(() => import('./pages/ShopPage'))
const MainPage = lazy(() => import('./pages/MainPage'))
const DetailPage = lazy(() => import('./pages/DetailPage'))

import Loading from './components/Loading'
// import { getProductById } from './api/productsApi'
// import DetailPage from './pages/DetailPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Default />,
    errorElement: <NotFound />,
    children: [
      { path: '', element: <MainPage /> },
      { path: '/shop', element: <ShopPage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/blog', element: <BlogPage /> },
      { path: '/cart', element: <CartPage /> },
      {
        path: '/detail/:productId',
        element: <DetailPage />,
        // loader: async ({ params }) => {
        //   try {
        //     const product = await getProductById(params.productId)
        //     return product
        //   } catch (error) {
        //     console.log(error)
        //   }
        // },
      },
    ],
  },
  {
    path: '*',
    element: (
      <Suspense fallback={<Loading />}>
        <NotFound />
      </Suspense>
    ),
  },
])
export default router
