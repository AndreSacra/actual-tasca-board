const Tasqueiro = require('../BaseInfo/Tasqueiro');
const API = require('../BaseInfo/APIStuff');
const request = require('request');

exports.getUniqueIdsForTasqueiros = function () {
    var apiInfo = new API;
    
    var tasca = [];
    tasca = Array.from(Tasqueiro.getAllTasqueiros());

    tasca.forEach(element => {
        request(apiInfo.getStartingURLGetIds() + element.name + "?api_key=" + apiInfo.getApiKey(), { json: true }, (err, res, body) => {
            if (err) {
                return console.log(err);
            }
            element.id = (body.id);
            console.log("Eu, " + element.name + ", tenho o id " + element.id);
        });
    });
}