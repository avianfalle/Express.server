const path = require('path');

function getMessages(req, res) {
    res.render(`messages` ,{
        friend: `Jane`
    });
    //res.sendFile(path.join(__dirname, '..', 'public', 'Images', 'skimountain.jpg'));//
} 

function postMessage(req, res) {
    console.log('Received a POST request');
} //use for handling form data or sending data to the server

module.exports = {
    getMessages, 
    postMessage
};
