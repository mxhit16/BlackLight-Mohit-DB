https://github.com/mxhit16/BlackLight-Mohit-DB

Live link (base url)- https://blacklight-mohit-db2.onrender.com/


I have hosted the server on render.com under free service that’s why on first hit on the server it takes around 30-40 sec to respond.


End points - 

Here “/currentWeekLeaderboard” gives me the current weak leaderboard of top 200 Scores.

Get request

returns leaderboard of current week.


/lastWeekLeaderboard - 

Post request

for fetching top 200 scores Leaderboard based on country code.

Body : {
"CountryCode" : ""
}


/rank - 

Post request

for fetching rank given the UID

Body: {

“UID” : 

}


