const disableScrollLock = function disableScrollLock() {
  document.body.style.overflow = ''
}

const enableScrollLock = function enableScrollLock() {
  document.body.style.overflow = 'hidden'
}

export default {
  disableScrollLock,
  enableScrollLock
}
