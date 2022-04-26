// Total amount of points

// Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.
// For example: ["3:1", "2:2", "0:1", ...]
// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:
// if x > y: 3 points
// if x < y: 0 point
// if x = y: 1 point
// Notes:
// there are 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4



// Solution:


function points(games) {
    let result = [];
    let score = 0;
    games.forEach(x => {
      result = x.split(":");
      if(parseInt(result[0])>parseInt(result[1]))
        score += 3;
      else if(result[0]==result[1])
        score += 1;
      else
        score += 0;
    })
    return score;
  }
  
  
  const points=games=>games.reduce((output,current)=>{
      return output += current[0]>current[2] ? 3 : current[0]===current[2] ? 1 : 0;
    },0)

    
    