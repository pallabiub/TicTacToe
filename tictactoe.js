//JS code goes here
var turn;
function cellClicked(event){
event.target.innerHTML=turn?"O":"X";
turn=!turn;


}