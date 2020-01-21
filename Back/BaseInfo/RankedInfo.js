//class that stores the ranked information of the Tasqueiro

var tasqInfo = [];

exports.getRankedInfo = function(queueType, summonerName, hotStreak, miniSeries, wins, veteran, losses, rank, leagueId, inactive, freshBlood, tier, summonerId, leaguePoints){
    this.queueType = queueType;         //string
    this.summonerName = summonerName;	//string
    this.hotStreak = hotStreak;	        //boolean
    this.miniSeries	= miniSeries;       //MiniSeriesDTO
    this.wins = wins;               	//int
    this.veteran = veteran;         	//boolean
    this.losses = losses;               //int
    this.rank = rank;                   //string
    this.leagueId = leagueId;           //string
    this.inactive = inactive;           //boolean
    this.freshBlood	= freshBlood;       //boolean
    this.tier = tier;                   //string
    this.summonerId = summonerId;   	//string (Player's encrypted summonerId)
    this.leaguePoints = leaguePoints;   //int
}

exports.getInfoArray = function(){
    return this.tasqInfo;
}

exports.addToArray = function(something){
    tasqInfo.push(something);
    console.log('Adicionei o ' + something.summonerName);
}