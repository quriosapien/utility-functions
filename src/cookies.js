function getCookie (key) {
  let rawCookie = window.document.cookie

  let parsedCookieObject = parseCookie(rawCookie)
  return parsedCookieObject && parsedCookieObject[key]
}

function parseCookie (rawCookie) {
  let parsedCookieObject = rawCookie.split(';')
    .map(function(c) {
      return c
        .trim()
        .split('=')
        .map(decodeURIComponent);
    })
    .reduce(function(a, b) {
      try {
        a[b[0]] = JSON.parse(b[1]);
      } catch (e) {
        a[b[0]] = b[1];
      }
      return a;
    }, {});

  return parsedCookieObject
}

function setCookies (cookies) {
  if (!Array.isArray(cookies)) {
    return new Error({name: 'setCookies error', message: 'argument "cookies" is not an array.'});
  }

  cookies.forEach(element => {
    let expire;
    
    if (!element.name || !element.value) {
      return undefined;
    }

    if (element.expire) {
      let d = new Date();
      d.setTime(d.getTime() + (element.expiry));
      expire = `expires=${d.toUTCString()};`;
    } else {
      expire = '';
    }

    let cookie = `${element.name}=${element.value};${expire}path=/`;
    
    window.document.cookie = cookie;
  });
}

export default {
  getCookie,
  setCookies
}