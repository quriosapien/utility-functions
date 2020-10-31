const disableScrollLock = function () {
  document.body.style.overflow = ''
}

const enableScrollLock = function () {
  document.body.style.overflow = 'hidden'
}

export default {
  disableScrollLock,
  enableScrollLock
}
