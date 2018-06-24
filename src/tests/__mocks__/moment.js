// import moment from 'moment';
// can't do above, need to todo below (circular reference)
const moment = require.requireActual('moment');

export default (timestamp = 0) => {
    return moment(timestamp);
};