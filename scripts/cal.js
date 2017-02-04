/**
 * Created by ezz on 01/28/2017.
 */

    // page is now ready, initialize the calendar...
$(document).ready(function() {
    $("#calendar").eventCalendar({
        eventsjson: 'styles/file.json',
        jsonDateFormat: 'human'
    });
});

