import get from 'lodash-es'

const square = (obj) => {
    const v = get(obj, 'v')
    return v * v
}

export default square