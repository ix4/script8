const getScreenType = location => {
  const { pathname } = location
  return pathname.replace(/\//g, '').toUpperCase()
}

export { getScreenType }
