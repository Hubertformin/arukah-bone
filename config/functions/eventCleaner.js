const axios = require('axios');

module.exports = async () => {
    /**
     * This functions would check for passed events and move them to the 
     * collection of passed events and marked as passed
     * 
     */
    const isoDate = new Date().toISOString();
    const event_req = await axios.get(`/events?EndDate_lt=${isoDate}&_sort=StartDate:ASC`);
     // loop throught events and set ended to true
    const events = event_req.data.map(event => {
        return {...event, ended: true};
    });
    // update events
    await axios.put(`/events`, events);

}