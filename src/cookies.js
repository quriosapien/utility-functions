function parseCookie(rawCookie) {
  return rawCookie.split(';')
    .map((c) => c
      .trim()
      .split('=')
      .map(decodeURIComponent))
    .reduce((a, b) => {
      const newAccumulator = a
      const key = b[0]
      const value = b[1]
      try {
        newAccumulator[key] = JSON.parse(value)
      } catch (e) {
        newAccumulator[key] = value
      }
      return a
    }, {})
}

function getCookie(key) {
  const rawCookie = window.document.cookie

  const parsedCookieObject = parseCookie(rawCookie)
  return parsedCookieObject && parsedCookieObject[key]
}

function setCookies(cookies) {
  if (!Array.isArray(cookies)) {
    throw new Error({ name: 'setCookies error', message: 'argument "cookies" is not an array.' })
  }

  cookies.forEach((element) => {
    let expire

    if (!element.name || !element.value) {
      return
    }

    if (element.expire) {
      const d = new Date()
      d.setTime(d.getTime() + (element.expiry))
      expire = `expires=${d.toUTCString()};`
    } else {
      expire = ''
    }

    const cookie = `${element.name}=${element.value};${expire}path=/`

    window.document.cookie = cookie
  })
}

export default {
  getCookie,
  setCookies
}
