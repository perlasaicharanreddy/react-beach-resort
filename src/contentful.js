import {createClient} from 'contentful'

export default createClient({
    // space:"cyjty0xuy4yp",
    // accessToken:"0hiwU5IR5cZU7tlzTAW6SMJnB1hw3nAN1guK3c3u180"
   space:process.env.REACT_APP_API_SPACE,
    accessToken:process.env.REACT_APP_ACCESS_TOKEN

})