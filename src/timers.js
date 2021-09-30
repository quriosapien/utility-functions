const debounceReference = {}

function clearDebounce (id) {
  if (!id) {
    throw new Error('DebounceId cannot be null')
  }
  
  if (debounceReference[id]) {
    clearTimeout(debounceReference[id])
    delete debounceReference[id]
  }
}

function debounce ({ id, callback, delay = 400}) {
  if (!id) {
    throw new Error('DebounceId cannot be null')
  }

  if (debounceReference[id]) {
    clearTimeout(debounceReference[id])
  }

  debounceReference[id] = setTimeout(() => {
    callback()
  }, delay)

  return () => {
    clearTimeout(debounceReference[id])
  }
}

export default {
  debounce,
  clearDebounce
}