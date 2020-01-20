const Tasqueiro = require('../BaseInfo/Tasqueiro');
const RankedInfo = require('../BaseInfo/RankedInfo');
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

                //criar instancias de ranked info e dar push para o vetor tasqInfo da informacao criada

            });
        });
    }
}