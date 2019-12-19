const canvas = document.getElementById('app');
const context = canvas.getContext('2d');

const drawPlayer = ({name, color, position}) => {
	context.fillStyle = 'black';
	context.textAlign = 'center';
	context.fillText(name, position.x, position.y - 15); 

	context.beginPath();
	context.arc(position.x, position.y, 10, 0, 2 * Math.PI);
	context.fillStyle = color;
	context.fill();
}

const players = [{
	id: '1',
	name: 'Albastru',
	color: '#3dc1d3',
	position: {
		x: 100,
		y: 150
	}
}, {
	id: '2',
	name: 'Maro',
	color: '#574b90',
	position: {
		x: 60,
		y: 60
	}
}, {
	id: '3',
	name: 'Verde',
	color: '#e66767',
	position: {
		x: 150,
		y: 210
	}
}]


const KEYS = {
	LEFT: false,
	RIGHT: false,
	TOP: false,
	BOTTOM: false
};

function move(player) {
	const {LEFT, RIGHT, TOP, BOTTOM} = KEYS;

	if(LEFT)	player.position.x -= 1;//player.speed;
	if(RIGHT)	player.position.x += 1;//player.speed;
	if(TOP)		player.position.y -= 1;//player.speed;
	if(BOTTOM)	player.position.y += 1;//player.speed;

	// dispatch
}

const clearScreen = () => context.clearRect(0, 0, canvas.width, canvas.height);

function run() {
	clearScreen();

	players.forEach(drawPlayer);

	move(players[0]);

	requestAnimationFrame(run);
}

run();

document.addEventListener('keydown', ({keyCode}) => {
	if(keyCode == 37) KEYS.LEFT = true;
	if(keyCode == 39) KEYS.RIGHT = true;
	if(keyCode == 38) KEYS.TOP = true;
	if(keyCode == 40) KEYS.BOTTOM = true;
});

document.addEventListener('keyup', ({keyCode}) => {
	if(keyCode == 37) KEYS.LEFT = false;
	if(keyCode == 39) KEYS.RIGHT = false;
	if(keyCode == 38) KEYS.TOP = false;
	if(keyCode == 40) KEYS.BOTTOM = false;
});
