// centers game view on the window
function centerGameview() {
    let canvas = document.getElementById("wrapper");
    canvas.width = window.innerWidth * 0.8;
    canvas.height = window.innerHeight * 0.8;
}

function init() {
	game = new Phaser.Game(800, 600, Phaser.AUTO, "game", {
		preload: preload,
		create: create,
		update: update,
		render: render
	});

	// TODO init game manager
	// TODO make 'em cooperate
	// TODO create the game

	// centering canvas
	window.onresize = centerGameview;
	centerGameview();
}

function preload() {
	// loading texture
	game.load.image('jeep', '../img/jeep.png');
}

function create() {
	// add new player
	player_list.push(new Car({x:100, y:100}, game, 'jeep'));
}

function update() {
}

function render() {
}
