//API related info
class APIStuff {
    
    //API key; changes daily (for now)
    getApiKey(){
        return "RGAPI-0f60a01e-cac4-43ec-b0c2-0410511d29c1";
    }

    //to get the unique summoner ID
    getStartingURLGetIds(){
        return "https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/";
    }

    //to get the ranked info
    getStartingURLGetRankedInfo(){
        return "https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/";
    }
}

module.exports = APIStuff;