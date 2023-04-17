
const arrayDiff = (array, remove) => {
  return array.filter(item => {
    if (remove.includes(item)){
      return false
    } else {
      return true
    }
  })
}

const arrayDif = (array, remove) => array.filter(item => remove.includes(item) ? false : true)
