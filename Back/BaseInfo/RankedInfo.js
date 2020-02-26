//class that stores the ranked information of the Tasqueiro

var tasqInfo = [];

function GetRankedInfo(queueType, summonerName, hotStreak, miniSeries, wins, veteran, losses, rank, leagueId, inactive, freshBlood, tier, summonerId, leaguePoints){
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

GetRankedInfo.prototype.getWins = function(){
    return this.wins;
}

GetRankedInfo.prototype.getInfoArray = function(){
    return this.tasqInfo;
}

GetRankedInfo.prototype.addToArray = function(something){
    tasqInfo.push(something);
    console.log('Adicionei o ' + something.summonerName + '.');
    console.log('Atualmente está em ' + something.tier + " " + something.rank + ', com ' + something.wins +' wins e ' + something.losses + ' losses.');
}

module.exports = GetRankedInfo;