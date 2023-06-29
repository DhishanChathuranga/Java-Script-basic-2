// --------------------------------
// ---------winning Team-----------
// --------------------------------

/* 
    Sri Lanaka and England both played 3 match one day cricket series. In the last 3 games Sri lanaka scored 250, 270, 300 runs, while England scored 185, 244, 360 runs.
    
    01. Calculate the average score for each them
    02. Decide witch team win in average (highest average score), and display the winner   with tha average score.
    03. The change scores to show different winners. Don't forget to take into account there might be a drow (Same average score)
*/

var score1, score2, score3, averageSri, averageEng;

// Sri Lanaka Average
score1 = parseInt(prompt("First match score of team Sri Lanka : "));
score2 = parseInt(prompt("Secondt match score of team Sri Lanka : "));
score3 = parseInt(prompt("Third match score of team Sri Lanka : "));
averageSri = (score1 + score2 + score3) / 3;
console.log("Avarage of Sri lankan team : " + averageSri); 

// England Average
score1 = parseInt(prompt("First match score of team England : "));
score2 = parseInt(prompt("Secondt match score of team Englanda : "));
score3 = parseInt(prompt("Third match score of team England : "));
averageEng = (score1 + score2 + score3) / 3;
console.log("Avarage of England team : " + averageEng); 

// Find the winner
if(averageSri > averageEng){
    alert("Winner is team Sri Lanka | Avarage Score : "+ averageSri + ".");
    console.log("Winner is team Sri Lanka | Avarage Score : "+ averageSri + ".");
}
else if(averageSri < averageEng){
    alert("Winner is team England | Avarage Score : "+ averageEng + ".");
    console.log("Winner is team England | Avarage Score : "+ averageEng + ".");
}
else{
    alert("Match drawn | Avarage Scores are equal.");
    console.log("Match drawn | Avarage Scores are equal.");
}