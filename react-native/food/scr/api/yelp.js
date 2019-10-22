import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer vRUv0SAils7Ob25rJul5MX2sp_CBdKndSfXVGEdkwHUsfPuGWzdIGb-EuzJ0e2OzYCw1zoqd6dWAHmikxvZtD96ZQIbTkn4FwfShVc5cTi7G78V14t0-9lK4VwGtXXYx'
    }
});