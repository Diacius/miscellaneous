var currentLoaves = 0;
var currentCash = 0;
var bakerySpeedElement = document.getElementById("bakerySpeed");
var shelfElement = document.getElementById("shelf");
var loavesElement = document.getElementById("loaves");
var cashElement = document.getElementById("cash");
var magicMultiplierElement = document.getElementById("magicMultiplier");
var bakerySpeed = 500;
var shelfCapacity = 100;
var magicMultiplier = 1;

function makeBread() {


	if (currentLoaves < shelfCapacity) {
		currentLoaves++;
	}

}

function sellLoaves() {
	currentCash = currentCash + currentLoaves;
	currentLoaves = 0;

}

function startBakery() {
	baking = setInterval(makeBread, bakerySpeed);
}

function stopBakery() {
	clearInterval(baking);
}

function magic() {
	if (currentLoaves < shelfCapacity) {
		currentLoaves = currentLoaves + magicMultiplier;
	}

}
function upgradeBakerySpeed() {
	if (bakerySpeed > 0) {
		if (currentCash >= 100) {
			currentCash = currentCash - 100;
			bakerySpeed = bakerySpeed - 50;
			clearInterval(baking);
			baking = setInterval(makeBread, bakerySpeed);
		}

	}


}

function upgradeMagic() {
	if (currentCash >= 50) {
		currentCash = currentCash - 50
		magicMultiplier ++;
	}
}

function update() {
	cashElement.innerText = currentCash;
	loavesElement.innerText = currentLoaves;
	shelfElement.innerText = '🍞'.repeat(currentLoaves);
	bakerySpeedElement.innerText = bakerySpeed;
	magicMultiplierElement.innerText = magicMultiplier
}
setInterval(update, 10);
