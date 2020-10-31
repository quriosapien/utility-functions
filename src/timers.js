const waitList = {}

function clearDebounce (id) {
  if (waitList[id]) {
    clearTimeout(waitList[id])
    delete waitList[id]
  }
}

function debounce ({ id, callback, delay = 400}) {
  if (waitList[id]) {
    clearTimeout(waitList[id])
  }
  waitList[id] = setTimeout(() => {
    callback()
  }, delay)
}

export default {
  debounce,
  clearDebounce
}