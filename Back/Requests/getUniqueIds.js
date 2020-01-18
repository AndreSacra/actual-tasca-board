const Tasq = require('../BaseInfo/Tasqueiro');
const API = require('../BaseInfo/APIStuff.js');
const request = require('request');

exports.getUniqueIdsForTasqueiros = function () {
    var tasca = Array.from(Tasq.getAllTasqueiros());
    tasca.forEach(element => {
        request(API.InitialURLByName + element.name + "?api_key=" + API.API_KEY, { json: true }, (err, res, body) => {
            if (err) {
                return console.log(err);
            }
            element.id = (body.id);
            console.log("Eu, " + element.name + ", tenho o id " + element.id);
        });
    });
}