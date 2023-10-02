function superbowlWin(records){
    const winners = records.find((record) => record.result ==='W')
    if(winners){
        return winners.year
    }
}