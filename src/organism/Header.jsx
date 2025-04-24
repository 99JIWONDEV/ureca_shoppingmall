import React, { useCallback, useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import css from './Header.module.css'
import Logo from '../components/Logo'
import { debounce } from 'lodash'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '@/store/themeSlice'

const Header = () => {
  const [isOn, setIsOn] = useState(false)
  const location = useLocation()
  const dispatch = useDispatch()

  const addClassOn = () => {
    setIsOn(!isOn)
  }

  useEffect(() => {
    setIsOn(false)
  }, [location.pathname])

  // 디바운싱된 리사이즈 핸들러
  const handleResize = useCallback(() => {
    const debouncedResize = debounce(() => {
      if (window.innerWidth > 1100) {
        setIsOn(false)
      }
    }, 150)
    debouncedResize()
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    if (isOn) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      window.removeEventListener('resize', handleResize)
      document.body.style.overflow = ''
    }
  }, [handleResize, isOn])

  // // dark mode
  // const [isDarkMode, setIsDarkMode] = useState(false)
  // useEffect(() => {
  //   const savedTheme = localStorage.getItem('theme')
  //   if (savedTheme !== null) {
  //     const parsedTheme = JSON.parse(savedTheme)
  //     setIsDarkMode(parsedTheme)
  //     document.body.classList.toggle('dark-mode', parsedTheme)
  //   }
  // }, [])
  // const handleThemeToggle = () => {
  //   const newTheme = !isDarkMode
  //   setIsDarkMode(newTheme)
  //   localStorage.setItem('theme', JSON.stringify(newTheme))
  //   document.body.classList.toggle('dark-mode', newTheme)
  // }

  const { isDarkMode } = useSelector(state => state.theme)

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(isDarkMode))

    if (isDarkMode) {
      document.body.classList.add('dark-mode')
    } else {
      document.body.classList.remove('dark-mode')
    }
  }, [isDarkMode])
  const handleThemeToggle = () => {
    dispatch(toggleTheme())
  }

  return (
    <header className={css.hd}>
      <div className={css.con}>
        <h1 className={css.logo}>
          <Link to={'/'}>
            <Logo />
          </Link>
        </h1>
        <div className={isOn ? `${css.gnb} ${css.on}` : css.gnb}>
          <nav>
            <CustomNavLink to="/shop" label="shop" />
            <CustomNavLink to="/blog" label="blog" />
            <CustomNavLink to="/about" label="about" />
            <CustomNavLink to="/todos" label="todo" />
          </nav>
          <div className={css.icon}>
            <CustomIconLink to="/cart" icon="bi-cart" />
            <CustomIconLink to="/search" icon="bi-search" />
            <CustomIconLink to="/mypage" icon="bi-person" />
            <i
              className={`p-2 bi bi-${isDarkMode ? 'moon' : 'sun'}`}
              style={{ cursor: 'pointer' }}
              onClick={handleThemeToggle}
            ></i>
          </div>
        </div>
        <i className={`${css.ham} bi bi-list`} title="전체 메뉴 보기 버튼" onClick={addClassOn}></i>
      </div>
    </header>
  )
}

const CustomNavLink = React.memo(({ to, label }) => (
  <NavLink className={({ isActive }) => (isActive ? `${css.active}` : '')} to={to}>
    {label}
  </NavLink>
))

const CustomIconLink = React.memo(({ to, icon }) => (
  <NavLink className={({ isActive }) => (isActive ? `${css.active}` : '')} to={to}>
    <i className={`bi ${icon}`}></i>
  </NavLink>
))

export default React.memo(Header)
