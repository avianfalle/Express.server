const model = require(`../models/friends.model`);

function postFriend (req, res) {
    if (!req.body.name) {
        return res.status(400).json(
            {error: 'Missing name'}
        );
    } 
    const newFriend = {
        id: model.length +1,
        name: req.body.name,
    };
    model.push(newFriend);
    res.status(201).json(newFriend);
    console.log('Executed a POST request')
};

function getFriends (req, res) {
    res.json(model);
    console.log('Received a GET request')
}

function getFriend(req, res) {
    const friendId = Number(req.params.friendId);
    const friend = model[friendId];
    if (friend) {
      res.status(200).json(friend);
      console.log('Received a good GET request')
    } else {
      res.status(404).json({
        error: 'Friend does not exist'
      });
      console.log('Received an invalid GET request (error: Friend does not exist)')
    }
  }

module.exports = {
    postFriend, 
    getFriends, 
    getFriend,
};