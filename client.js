var numRolls = 3
var numSides = 6
var query = /* GraphQL */`query getDieQ($numSides: Int, $numRolls: Int!) {
  getDie(numSides: $numSides) {
     rollOnce
     roll(numRolls: $numRolls)
    }
}`
 
fetch("http://localhost:4000/graphql", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify({
    query,
    variables: { numSides, numRolls },
  }),
})
  .then(r => r.json())
  .then(data => console.log("data returned:", JSON.stringify(data)))