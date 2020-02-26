const Tasqueiro = require('../BaseInfo/Tasqueiro');
const rInfo = require('../BaseInfo/RankedInfo.js');
const API = require('../BaseInfo/APIStuff');
const request = require('request');

class RankedInfoTreatment {

    getRankedInfo(){
        var apiInfo = new API;
        var tasca = [];
        tasca = Array.from(Tasqueiro.getAllTasqueiros());

        tasca.forEach(element => {
            request(apiInfo.getStartingURLGetRankedInfo() + element.id + "?api_key=" + apiInfo.getApiKey(), { json: true }, (err, res, body) => {
                if (err) {
                    return console.log(err);
                }
                var newChallenger = new rInfo(body[0].queueType, body[0].summonerName, body[0].hotStreak, body[0].miniSeries, body[0].wins, body[0].veteran, 
                    body[0].losses, body[0].rank, body[0].leagueId, body[0].inactive, body[0].freshBlood, body[0].tier, body[0].summonerId, body[0].leaguePoints);
                
                newChallenger.addToArray(newChallenger);
            });
        });
    }
    
}

module.exports = RankedInfoTreatment;