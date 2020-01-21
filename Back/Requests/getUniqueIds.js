const Tasqueiro = require('../BaseInfo/Tasqueiro');
const API = require('../BaseInfo/APIStuff');
const request = require('request');

exports.getUniqueIdsForTasqueiros = function () {
    var apiInfo = new API;
    var tasca = [];
    var counter = 0;
    tasca = Array.from(Tasqueiro.getAllTasqueiros());

    let gettingTheIds = new Promise(function (resolve, reject) {
        tasca.forEach(element => {
            request(apiInfo.getStartingURLGetIds() + element.name + "?api_key=" + apiInfo.getApiKey(), { json: true }, (err, res, body) => {
                if (err) {
                    return console.log(err);
                }
                element.id = (body.id);
                counter++;
                if(counter == tasca.length){
                    resolve(tasca);
                }
            });
        });
        
    });

    gettingTheIds.then(
        result => {
            console.log('I have acquired all Tasca.');
        },
        error => {
            console.log('I fucked up');
        }
    )

}