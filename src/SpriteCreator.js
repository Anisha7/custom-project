// create game class which displays left options, character, and right options
let gameOptions = {
    width: window.width,
    height: window.height - 50,
}

let game = new Kiwi.Game('content', 'SpriteCreator', null, gameOptions);

class SpriteCreator extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return <div id = "content">{{game}}</div>
    }
}

export default SpriteCreator;
/**
* The core spriteCreator file.
* 
* This file is only used to initalise (start-up) the main spriteCreator ,
* add all of the relevant states to that Game,
* and then choose which one to load first.
*/


//Create some gameoptions
// let gameOptions = {
// 	width: window.width,
// 	height: window.height - 50;
// }

//Initialise the Kiwi Game. 

/*
* 'content' is the id of the element the game is going to be place inside of.
* 'SpriteCreator' is the name of the game.
*/
// var game = new Kiwi.Game('content', 'SpriteCreator', null, gameoptions);


//Add all the States we are going to use.
// examples:
    // game.states.addState(MainLoader);
    // game.states.addState(MainMenu);
    // game.states.addState(Play);


//Switch to/use the Preloader state. 
// example: 
    // game.states.switchState("MainLoader");
