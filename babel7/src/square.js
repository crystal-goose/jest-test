import { get } from 'lodash-es'

const square = (obj) => {
    const v = get(obj, 'v')
    console.log(obj)
    console.log(v)
    return v * v
}

export default square