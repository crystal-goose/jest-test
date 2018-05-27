import { get } from 'lodash-es'
// import { message } from 'antd'

const square = (obj) => {
    const v = get(obj, 'v')
    console.log(obj)
    console.log(v)
    // message.info('Hello')
    return v * v
}

export default square