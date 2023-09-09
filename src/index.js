import './styles/index.scss';
import log from './modules/log'

const user = {
    name: 'alex',
    age: 12
}

const userDes = {
    loh: true,
    ...user
}
console.log(userDes);

log()