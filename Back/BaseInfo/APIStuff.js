//API related info
class APIStuff {
    
    //API key; changes daily (for now)
    getApiKey(){
        return "RGAPI-6df31c7f-942f-4cbf-a2e5-7638ba46bddd";
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