const GameState = Object.freeze({
    WELCOMING:   Symbol("welcoming"),
    FLAT:  Symbol("flat"),
    WAIT: Symbol("wait"),
    MANSION: Symbol("mansion"),
    BUTLER: Symbol("butler"),
    Meet:Symbol("meet"),
    Story:Symbol("story"),
    Listen:Symbol("listen"),
    Question:Symbol("question"),
    Like:Symbol("like"),
    Haunted:Symbol("haunted"),
    Ghost:Symbol("ghost"),
    Fear:Symbol("fear"),


    TOAST: Symbol("toast")
});

export default class Game{
    constructor(){
        this.stateCur = GameState.WELCOMING;
    }
    
    makeAMove(sInput)
    {
        let sReply = "";
        switch(this.stateCur){
            case GameState.WELCOMING:
                sReply = "It is a haunted house.You have a structure of ghost. The house looks very old and strange. Do you  still WAIT  for looking the house and want to house from inside or GO to the another house";
                this.stateCur = GameState.FLAT;
                break;
            case GameState.FLAT:
                if(sInput.toLowerCase().match("wait")){
                    sReply = "The house is deserted. After 1 hour  you are still same place and there is no one for help. Do you keep Waiting for haunted house or do you go to the  another house?";
                }else{
                    sReply ="The front door looks very old and some of the bones are hanging on the door. Do you knock the door or run back to your house?";
                    this.stateCur = GameState.MANSION;
                }
                break;
            case GameState.MANSION:
                if(sInput.toLowerCase().match("knock")){
                    sReply = "The door opens and one of the lady came from inside the house.This lady looks like ghost.And she asks you to come in. Do you go in or run back to the your house?"
                    this.stateCur = GameState.BUTLER;
                }else{
                    sReply = "The haunted house looks scary. After 1 hour there is still no one for help. Do you keep Waiting or do you go to the house?";
                    this.stateCur = GameState.FLAT;

                }
                break;
            case GameState.BUTLER:
                if(sInput.toLowerCase().match("run")){
                    sReply = "The haunted house looks. After 1 hour there is still no help. Do you keep Waiting or do you go to the house?";
                    this.stateCur = GameState.FLAT;

                }else{
                    sReply = "Then in the nearby place, the haunted party is going on. Here is the someone take you in the party and give you some food. Do you take the food or ask to call a tow truck?";
                    this.stateCur = GameState.Meet;
    
                }
                break;
                case GameState.Meet:
                    if(sInput.toLowerCase().match("listen")){
                        sReply="He meet with one friend.And his friend are intrested to read haunted stories.Do you want to listen stories for hauted house or no?";
                                        this.stateCur=GameState.FLAT;
                    }
                    else{
                   sReply="The haunted house looks scary. After 1 hour there is still no one for help. Do you keep Waiting or do you go to the house?";
                               this.stateCur=GameState.Story;
                    }
                    break;
                    case GameState.Story:
                        if(sInput.toLowerCase().match("His friend wants to start story.Do you want to listen or no?")){
                                           this.stateCur=GameState.Story;
                        }
                        else{
sReply="The person looks like ghost in the party.Do you still want to live here or go the house?";
                                     this.stateCur=GameState.FLAT;
                        }
                        break;
                        case GameState.Listen:
                            if(sInput.toLowerCase().match("You want to listen the stories of haunted house.Do you still there or go the house?")){
                                            this.stateCur=GameState.FLAT;

                            }
                            else{
            sReply="His friend start story?Do you want to put the questions or no?";
            this.stateCur=GameState.Question;

                            }
                        break;
                        case GameState.Question:
                            if(sInput.toLowerCase().match("The story is intrested.Do you want to listen more or no?")){
                                this.stateCur=GameState.Listen;
                            }
                            else{
    sReply="You are still there.Do you want to ask more question or stop it here?  ";
    this.stateCur=GameState.Question;

                            }
                            case GameState.Haunted:
                                if(sInput.toLowerCase().match("All person looks like ghost and the house is just like hauted place.You are live here and want to go the house")){
                                                this.stateCur=GameState.Haunted;
                                }
                                else{
              sReply="The haunted house looks scary.All person wore clothes like ghost.Do you want to wear clothes like ghost or no?";
                                    this.stateCur=GameState.Ghost;

                                }
                                break;
            case GameState.TOAST:
                if(sInput.toLowerCase().match("toast")){
                    sReply = "you enter a new world of adventure ... game over";
                    this.stateCur = GameState.WELCOMING;
                }else{
                    sReply = "the phone lines are down ... Would you like some toast perhaps?";
                }
        }
        return([sReply]);
    }
}