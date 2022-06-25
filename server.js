const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')
const cors = require('cors')

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }else if (page == '/api') {
    if('student' in params){
      if(params['student']== 'saints' ||params['student']== 'saint' || params['student']== 'new orleans'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "New Orleans Saints ⚜️",
          status: "1967",
          currentOccupation: "Ceasars Superdome"
        }
        res.end(JSON.stringify(objToJson));
      }else if(params['student']== 'panthers' || params['student']== 'carolina'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "Carolina Panthers",
          status: "1993",
          currentOccupation: "Bank of America Stadium"
        }
        res.end(JSON.stringify(objToJson));
      }else if(params['student']== 'buccaneers' || params['student']== 'bucs' || params['student']== 'tampa'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "Tampa Bay Buccaneers",
          status: "1976",
          currentOccupation: "Raymond Jones Stadium"
        }
        res.end(JSON.stringify(objToJson));
      }else if(params['student']== 'falcons' || params['student']== 'failcan\'ts' || params['student']== 'dirty birds'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "Atlanta Falcons",
          status: "1965",
          currentOccupation: "Mercedes-Benz Stadium"
        }
        res.end(JSON.stringify(objToJson));
      }else if(params['student']== 'bears' || params['student']== 'chicago'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "Chicago Bears",
          status: "1920",
          currentOccupation: "Soldier Field"
        }
        res.end(JSON.stringify(objToJson));
      } else if(params['student']== 'lions' || params['student']== 'detroit'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "Detroit Lions",
          status: "1929",
          currentOccupation: "Ford Field"
        }
        res.end(JSON.stringify(objToJson));
      }else if(params['student']== 'packers' || params['student']== 'green bay' || params['student']== 'cheese heads'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "Green Bay Packers",
          status: "1919",
          currentOccupation: "Lambeau Field"
        }
        res.end(JSON.stringify(objToJson));
      }else if(params['student']== 'vikings' || params['student']== 'minnesota'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "Minnesota Vikings",
          status: "1960",
          currentOccupation: "U.S. Bank Stadium"
        }
        res.end(JSON.stringify(objToJson));
      }else if(params['student']== 'cowboys' || params['student']== 'dallas'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "Dallas Cowboys",
          status: "1960",
          currentOccupation: "AT&T Stadium"
        }
        res.end(JSON.stringify(objToJson));
      } else if(params['student']== 'giants'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "New York Giants",
          status: "1925",
          currentOccupation: "MetLife Stadium"
        }
        res.end(JSON.stringify(objToJson));
      }else if(params['student']== 'eagles' || params['student']== 'philadelphia' || params['student']== 'philly'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "Philadelphia Eagles",
          status: "1933",
          currentOccupation: "Lincoln Financial Field"
        }
        res.end(JSON.stringify(objToJson));
      }else if(params['student']== 'commanders' || params['student']== 'washington' || params['student']== 'football team'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "Washington Commanders",
          status: "1932",
          currentOccupation: "FedEx Field"
        }
        res.end(JSON.stringify(objToJson));
      }else if(params['student']== 'cardinals' || params['student']== 'arizona'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "Arizona Cardinals",
          status: "1898",
          currentOccupation: "State Farm Stadium"
        }
        res.end(JSON.stringify(objToJson));
      } else if(params['student']== 'rams' || params['student']== 'st. louis'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "Los Angeles Rams",
          status: "1936",
          currentOccupation: "SoFi Stadium"
        }
        res.end(JSON.stringify(objToJson));
      }else if(params['student']== '49ers' || params['student']== 'niners' || params['student']== 'san francisco'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "San Francisco 49ers",
          status: "1946",
          currentOccupation: "Levi's Stadium"
        }
        res.end(JSON.stringify(objToJson));
      }else if(params['student']== 'seahawks' || params['student']== 'seattle'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "Seattle Seahawks",
          status: "1974",
          currentOccupation: "Lumen Field"
        }
        res.end(JSON.stringify(objToJson));
      }else if(params['student']== 'texans' || params['student']== 'houston'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "Houston Texans",
          status: "1999",
          currentOccupation: "NRG Stadium"
        }
        res.end(JSON.stringify(objToJson));
      } else if(params['student']== 'colts' || params['student']== 'indianapolis'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "Indianapolis Colts",
          status: "1953",
          currentOccupation: "Lucas Oil Stadium"
        }
        res.end(JSON.stringify(objToJson));
      }else if(params['student']== 'jaguars' || params['student']== 'jags' || params['student']== 'jacksonville'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "Jacksonville Jaguars",
          status: "1993",
          currentOccupation: "TIAA Bank Field"
        }
        res.end(JSON.stringify(objToJson));
      }else if(params['student']== 'titans'|| params['student']== 'tennessee'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "Tennessee Titans",
          status: "1959",
          currentOccupation: "Nissan Stadium"
        }
        res.end(JSON.stringify(objToJson));
      }else if(params['student']== 'ravens' || params['student']== 'baltimore'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "Baltimore Ravens",
          status: "1996",
          currentOccupation: "M&T Bank Stadium"
        }
        res.end(JSON.stringify(objToJson));
      } else if(params['student']== 'bengals' || params['student']== 'cincinnati'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "Cincinnati Bengals",
          status: "1967",
          currentOccupation: "Paul Brown Stadium"
        }
        res.end(JSON.stringify(objToJson));
      }else if(params['student']== 'browns' || params['student']== 'cleveland'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "Cleveland Browns",
          status: "1946",
          currentOccupation: "First Energy Stadium"
        }
        res.end(JSON.stringify(objToJson));
      }else if(params['student']== 'steelers' || params['student']== 'pittsburgh'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "Pittsburgh Steelers",
          status: "1933",
          currentOccupation: "Heinz Field"
        }
        res.end(JSON.stringify(objToJson));
      }else if(params['student']== 'bills' || params['student']== 'buffalo'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "Buffalo Bills",
          status: "1960",
          currentOccupation: "Highmark Stadium"
        }
        res.end(JSON.stringify(objToJson));
      } else if(params['student']== 'dolphins' || params['student']== 'miami'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "Miami Dolphins",
          status: "1966",
          currentOccupation: "Hard Rock Stadium"
        }
        res.end(JSON.stringify(objToJson));
      }else if(params['student']== 'patriots' || params['student']== 'pats' || params['student']== 'new england'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "New England Patriots",
          status: "1960",
          currentOccupation: "Gillette Stadium"
        }
        res.end(JSON.stringify(objToJson));
      }else if(params['student']== 'jets'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "New York Jets",
          status: "1960",
          currentOccupation: "MetLife Stadium"
        }
        res.end(JSON.stringify(objToJson));
      }else if(params['student']== 'broncos' || params['student']== 'denver'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "Denver Broncos",
          status: "1960",
          currentOccupation: "Empower Field at Mile High"
        }
        res.end(JSON.stringify(objToJson));
      } else if(params['student']== 'chiefs' || params['student']== 'kc' || params['student']== 'kansas city'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "Kansas City Chiefs",
          status: "1960",
          currentOccupation: "Arrowhead Stadium"
        }
        res.end(JSON.stringify(objToJson));
      }else if(params['student']== 'raiders' || params['student']== 'oakland raiders'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "Las Vegas Raiders",
          status: "1960",
          currentOccupation: "Allegiant Stadium"
        }
        res.end(JSON.stringify(objToJson));
      }else if(params['student']== 'chargers'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "Los Angeles Chargers",
          status: "1959",
          currentOccupation: "SoFi Stadium"
        }
        res.end(JSON.stringify(objToJson));
      }else if(params['student']== 'whodat' || params['student']== 'who dat' ){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "⚜️⚜️⚜️⚜️⚜️⚜️⚜️⚜️⚜️⚜️",
          status: "⚜️⚜️⚜️⚜️⚜️⚜️⚜️⚜️⚜️",
          currentOccupation: "⚜️⚜️⚜️⚜️⚜️⚜️⚜️⚜️⚜️⚜️"
        }
        res.end(JSON.stringify(objToJson));
      }else if(params['student']== '28-3' || params['student']== 'never forget' || params['student']== '283'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "Never Forget",
          status: "Falcons blew a 28-3 lead in the Superbowl",
          currentOccupation: "NRG Stadium"
        }
        res.end(JSON.stringify(objToJson));
      }else{
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "unknown",
          status: "unknown",
          currentOccupation: "unknown"
        }
        res.end(JSON.stringify(objToJson));
      }//student != leon
    }//student if
  }//else if
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else{
    figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000);
