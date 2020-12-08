const chooseStations = function (stations) {
  let goodStations = [];
  for (let i = 0; i < stations.length;i++){
    const capacity = stations[i][1];
    const type = stations[i][2];
    if(capacity >= 20 && (type === "school" || type === "community centre")){
      goodStations.push(stations[i][0]);
    }
  } return goodStations;
};