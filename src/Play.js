
class Play extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    
    // We are going to use the preload method on this state to load all the assets that we need in this particular state.
    preload() {
        //Load in all of the body parts. Make sure that you set the 'storeAsGlobal' flag to 'false'
        // this.addSpriteSheet('head', 'assets/img/character/head.png', 150, 117, false);
        // this.addSpriteSheet('chest', 'assets/img/character/chest.png', 150, 117, false);
        // this.addSpriteSheet('arms', 'assets/img/character/arms.png', 150, 117, false);
        // this.addSpriteSheet('legs', 'assets/img/character/legs.png', 150, 117, false);
    }

    //Executed once all the game assets have been loaded. 
    //In charge of setting up the game 
    create() {
        //Create the dressup elements
        this.createDressup();

        //Create the buttons to deal with game options
        this.createCustomButtons();
        this.createSaveButtons();
    }

    //Handles the creation of the dressup items
    createDressup() {

    }

    //Holds the code for generating buttons which deal with the customisation of the character.
    createCustomButtons() {

    }

    //Holds the code for generating buttons which deal with the saving/printing of the dressup game
    //These buttons are invisible by default
    createSaveButtons() {

    }

    showCreateButtons() {

    }

    showSaveButtons() {

    }

    // Randomize character based on the amount of frames each dress up element has.
    randomizeCharacter() {

    }

    //Set all dress up element animations to their first frame (which is the default).
    resetCharacter() {

    }

    //Holds the print functionality
    print() {

    }

    //Holds the save functionality
    save() {

    }

    //The callbacks used to see if the print or save buttons were pressed.
    checkInputs() {

    }

    //Is called when this state is about to be switch off of and so destroyed.
    shutDown() {

    }
}