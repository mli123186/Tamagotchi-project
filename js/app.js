class Tamagotchi {
	constructor(name) {
		this.name = name;
		this.hungerLevel = 1;
		this.sleeplinessLevel = 1;
		this.boredomLevel = 1;
		this.age = 0;
	}
	
}

//let redPanda = new Tamagotchi;

//setup name
let redPanda;
function inputName(event){
	//console.log("submitName is running");
	event.preventDefault();
	const userInput = $('#set-name').val();
	name = userInput;
	redPanda = new Tamagotchi(userInput);
	$('#set-name').val("");
	renderName();
	$('#setName').hide();
}	
$('#setName').on("submit", inputName);

function renderName(){
	console.log(redPanda.name);
        $('#name').append(`${redPanda.name}`);
 };

//start game.
let timer;
let seconds = 0;
$('#start').click(function(){
	$('#start').hide();
	timer = setInterval(function(){
		seconds++;
		if(seconds % 7 === 0){
		$('#redPanda').animate({ "left": "+=40px" }, 1000);
		}
		if(seconds % 10 === 0){
		$('#redPanda').animate({ "right": "+=50px" }, 1000);
		}
		if(seconds % 5 === 0) {
			redPanda.hungerLevel += 1;
			$('#hunger').text(`Hunger: ${redPanda.hungerLevel}`);
		}  
		if(seconds % 6 === 0) {
			redPanda.sleeplinessLevel+=1;
			$('#sleepliness').text(`Sleepliness: ${redPanda.sleeplinessLevel}`);
		}
		if (seconds % 7 === 0){
			redPanda.boredomLevel+=1;
			$('#boredom').text(`Boredom: ${redPanda.boredomLevel}`);
		} 
		if (seconds % 10 === 0) {
			redPanda.age+=1;
			$('#age').text(`Age: ${redPanda.age}`)
		} 
		if (redPanda.hungerLevel >= 10 || redPanda.sleeplinessLevel >= 10 || redPanda.boredomLevel >= 10){
			clearInterval(timer);
			$('#redPanda').attr('src', 'images/deadPanda.png');
			alert("The Red Panda died!");
		}	
	}, 1000)
	})

//actions
$('#feed').click(function(){
	if(redPanda.hungerLevel > 1) {
	redPanda.hungerLevel-=1;
	$('#hunger').text(`Hunger: ${redPanda.hungerLevel}`);
}	else{
	return 1;
}
})
$('#energize').click(function(){
	if(redPanda.sleeplinessLevel > 1) {
	redPanda.sleeplinessLevel-=1;
	$('#sleepliness').text(`Sleepiness: ${redPanda.sleeplinessLevel}`);
} else {
	return 1;
}
})
$('#play').click(function(){
	if(redPanda.boredomLevel > 1) {
	redPanda.boredomLevel-=1;
	$('#boredom').text(`Boredom: ${redPanda.boredomLevel}`);
} else {
	return 1;
}

})
//an



	
	

