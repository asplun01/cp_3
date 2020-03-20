let i = 1;
let results = []
while (i < 151)
{
const url = "https://pokeapi.co/api/v2/pokemon/" + i;
fetch(url)
.then(function(response) {
      return response.json();
    }).then(function(json) {
      //console.log(json);
      results.push(json);
    });
    i++;
  }

export default results;
