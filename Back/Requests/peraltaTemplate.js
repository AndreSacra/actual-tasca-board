const http = require('http');
const request = require('request');
const port = process.env.PORT || 3000



const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
	var containerTasca = []


  function getStuff(playerInfo) { 
  	containerTasca.push(JSON.parse(playerInfo));
	} 

	function acabarStuff(){
			res.write('<script>function sortscoretable(col){var table, rows, switching, i, x, y, shouldSwitch;table = document.getElementById("tablescores");switching = true;while (switching) {switching = false;rows = table.rows;for (i = 1; i < (rows.length - 1); i++) {shouldSwitch = false;x = rows[i].getElementsByTagName("TD")[col];y = rows[i + 1].getElementsByTagName("TD")[col];if(col != 0){if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {shouldSwitch = true;break;}}else if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {shouldSwitch = true;break;}}if (shouldSwitch) {rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);switching = true;}}}</script>');
			res.write('<style> table {font-family: arial, sans-serif;border-collapse: collapse;width: 100%;}td, th {border: 1px solid #dddddd;text-align: center;padding: 8px;}tr:nth-child(even) {background-color: #dddddd;}</style>')
			res.write('<table id="tablescores">')
			res.write("<tr><th onclick='sortscoretable(0);'>Username</th><th onclick='sortscoretable(1);'>Rank</th><th>LP</th><th>Wins</th><th>Losses</th><th>Hot Streak</th><th>Winrate</th></tr>")
			for(var i = 0; i<containerTasca.length;i++){
			
				for(var j = 0; j < containerTasca[i].length;j++){
					res.write("<tr>")
					if(containerTasca[i][j].queueType== "RANKED_SOLO_5x5"){

						res.write("<td>"+containerTasca[i][j].summonerName+"<a href='https://euw.op.gg/summoner/userName="+containerTasca[i][j].summonerName+"' target='_blank'>"+"   OP.GG"+"</a></td>")
						res.write("<td>"+containerTasca[i][j].tier+" "+containerTasca[i][j].rank+"</td>")
						res.write("<td>"+containerTasca[i][j].leaguePoints+"</td>")
						res.write("<td>"+containerTasca[i][j].wins+"</td>")
						res.write("<td>"+containerTasca[i][j].losses+"</td>")

						if(containerTasca[i][j].hotStreak){
							res.write("<td>"+"<a href='https://www.youtube.com/watch?v=DO5ujJ4Ic20' target='_blank'>"+"<img src='https://i.imgur.com/3ekKE8X.gif' height='80' width='80'>"+"</a>"+"</td>")
						}
						else{
							res.write("<td>"+"<a href='https://www.youtube.com/watch?v=2NmUcdptXsE' target='_blank'>"+"<img src='https://images.summitmedia-digital.com/preview/images/2018/05/25/MICHAELJACKSONnm.gif' height='80' width='80'>"+"</a>"+"</td>")
							//res.write("<td>"+containerTasca[i][j].hotStreak+"</td>")
						}
						
						total = parseFloat(containerTasca[i][j].wins+containerTasca[i][j].losses)
						winrateaux = parseFloat(containerTasca[i][j].wins/total)
						winrate = winrateaux * 100
						if(winrate > parseFloat(50)){
							res.write("<td><font color='green'>"+winrate.toFixed(2)+"%</font> </td>")
						}else{
							res.write("<td><font color='red'>"+winrate.toFixed(2)+"%</font> </td>")
						}
						
						
								}
					res.write("</tr>")
				
				}
				
			}
			
			res.write('</table>')
			res.write("<h1>=== ACHIEVEMENTS ===</h1>")
			res.write("<p>PLATINUM CHAMPION - F4wN got it with 38 Wins 24 Losses and 61.29% Winrate in the day 16 January 2020.")
		  	res.end("<h1>acabou</h1>");
	}


	var COUNT = 0


	var Henrique = {"id":"mk7PuHP9U4Qgr0LdTzgDH6uveRoJlI0aNOQROMs7uZmiBRk","name":"ShadowPsych0"};
	var Xon = {"id":"jZpsyJfdkP97T0So8Sy-xO_vrwdker8y4lXaiFTibWjY1AM","name":"Phos is Best"};
	var JP = {"id":"sz_e-rRCWW8k8EIIJLzVp6j3Oy4HSNxq6ZtX96wqHwn4ihw","name":"JPtheKiller"};
	var Peralta = {"id":"n3q6f0PLSmdrdsJsut1MqzNcoVnn3nihL75Oio-PudwB-oY","name":"DreamFast7"};
	var Fawn = {"id":"t_S-GgFc4Bdm0U_s4Y6GMA3wOiGEvnHVfhVsks3ga0OfFec","name":"F4wN"};
	var Fawn_Smurf = {"id":"4gMCMDUTOOKnNrSffTxFbX2LPJmrldYLkaNGJAvIIugPga3i","name":"1vs9 coinflip L9"};
	var JP_Smurf = {"id":"sPNKQMypiKJ0-Mo_UMwkz8uNlyzjKmdSwRA9VtqVw99YqWY","name":"JPteQuilla"};
	var Careca = {"id":"wKucKWkZguEC-8HEmRbArb6x_4PtNf7ImZSvVPkqeA2UtOM","name":"Carics"};
	var Ne = {"id":"fBQFxJWi4PQj4bU5J6hJFDp3T3c0SOidAhaD0Djrhrh7UAI","name":"Hi Im Xonigg3r"};

	var TASCA = [];

	TASCA.push(Henrique);
	TASCA.push(Xon);
	TASCA.push(JP);
	TASCA.push(Peralta);
	TASCA.push(Fawn);
	TASCA.push(Fawn_Smurf);
	TASCA.push(JP_Smurf);
	TASCA.push(Careca);
	TASCA.push(Ne);

	var TASQUEIROS = TASCA.length;

	var URL_INICIAL = "https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/"

	var URL_INICIAL2 = "?api_key=RGAPI-48bd2a2f-99e9-4655-8857-15e8817c7543"
	
	var rank_participants = []

	for(var i = 0; i < TASQUEIROS;i++){

			request('https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/'+TASCA[i].id+'?api_key=RGAPI-48bd2a2f-99e9-4655-8857-15e8817c7543', { json: true }, (err, res, body) => {
		 		 if (err) { return console.log(err); }
		 		 
				getStuff(JSON.stringify(body));
			
				COUNT++;
				if(COUNT == TASQUEIROS){
					console.log("ACABEI")
					acabarStuff();
				}
				});
		
	}

	//res.write("<h1>this is a title</h1>");

});

server.listen(port,() => {
  console.log(`Server running at port `+port);
});
