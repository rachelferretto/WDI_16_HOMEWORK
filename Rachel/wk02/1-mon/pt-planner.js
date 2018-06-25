console.log('The PT Planner');
//could store train lines as object
var alamein = ['Flinders street','Richmond','East Richmond','Burnley','Hawthorn','Glenferrie'];
var glenWaverley = ['Flagstaff','Melbourne Central','Parliament','Richmond','Kooyong','Tooronga'];
var sandringham = ['Southern Cross','Richmond','South Yarra','Prahran','Windsor'];
var network = [alamein, glenWaverley, sandringham]


var startStation = "Southern Cross"//start station
var endStation = 'Tooronga'//end station
// need to add in user input of start and end once working
var totalTrip = []
var userDirection = outbound; //user input

var journeyDetails = function() { //lists out start and end point
  console.log('origin: ' + startStation);
  console.log('destination: ' + endStation);
  }

//find start station (outbound only so far)
var outbound = function() {
  for (i = 0; i <= network[0,1,2].length; i++) {
    if (alamein[i] == startStation) {
          start = alamein.indexOf(startStation)
          totalTrip.push(alamein.slice(start, 2).join(' ---> '))
          } else if (glenWaverley[i] == startStation) {
              start = glenWaverley.indexOf(startStation);
              totalTrip.push(glenWaverley.slice(start, 4).join(' ---> '))
          } else if (sandringham[i] == startStation) {
              start = sandringham.indexOf(startStation);
              totalTrip.push(sandringham.slice(start, 2).join(' ---> '))
          };
        };
        console.log(journeyDetails());

//find end station
  for (j = 0; j <= network[0,1,2].length; j++) {
      if (alamein[j] == endStation) {
            end = alamein.indexOf(endStation);
            totalTrip.push(alamein.slice(2, end+1).join(' ---> '))
          } else if (glenWaverley[j] == endStation) {
            end = glenWaverley.indexOf(endStation);
            totalTrip.push(glenWaverley.slice(4,end+1).join(' ---> '))
          } else if (sandringham[j] == endStation) {
            end = sandringham.indexOf(endStation);
            totalTrip.push(sandringham.slice(2, end+1).join(' ---> '))
          };
        };
  };
  outbound();
  // for inbound/inbound plus outbound need to reverse the arrays
  //var inbound = function() {}

  // alert to change trains at richmond (not working) - does not factor in same line yet
  var richmondIntersect = function(endStation) {
      if (alamein.includes(endStation)) {
        console.log('change at Richmond for Alamein Line');
        } else if (glenWaverley.includes(endStation)) {
          console.log('change at Richmond for Glen Waverley Line')
        } else if (sandringham.includes(endStation)) {
          console.log('change at Richmond for sandringham Line')
        };
      };

//joins first and second half of journey, logs map and counts stops
var journeyMap = function(stops) {
  console.log(totalTrip.join(' ---> '));
  stops = totalTrip.join(" ---> ").split(" ---> ");
  console.log('no. of stops: ' + stops.length);
};

journeyMap()

richmondIntersect(endStation);


//search for start destination in array,

//slice and make a copy of array between start destination to richmond

//search for end station

//slice and make a copy of array to line2 between richmond to end station
//array.slice(0,0) //start arguement, and up to (not including) end arguement, otherwise 1st arguement
//slices to the end of array




//for (stops = 0; stops < alamein.length; stops++) {
  // if (alamein.indexOf("Burnley") >= alamein.indexOf("Flinders street")) {
  //   const diff = alamein.filter(endStation => startStation <= endStation).length;
  //       console.log('number of stops: ' + diff)
  //     }
  //   }


//  if (endStation > sstartStation) {
//    const diff = alamein.filter(endStation => startStation <= endStation).length;
    // console.log('number of stops: ' + diff);


//train intersection, if hits needs to alert if line change is required
//if Richmond, alert change lines to
