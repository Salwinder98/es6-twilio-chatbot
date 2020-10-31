const GameState = Object.freeze({
    WELCOMING:   Symbol("welcoming"),
    FLAT:  Symbol("flat"),
    WAIT: Symbol("wait"),
    MANSION: Symbol("mansion"),
    BUTLER: Symbol("butler"),
    PARTY:Symbol("party"),
    LIVE:Symbol("live"),
    MEET:Symbol("meet"),
    INSIDE:Symbol("inside"),
    LISTEN:Symbol("listen"),

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
                sReply = "It is a dark and rainy night. Bang! You have a flat tire. Too bad you don't have a spare. Do you WAIT or GO to the spooky mansion for help?";
                this.stateCur = GameState.FLAT;
                break;
            case GameState.FLAT:
                if(sInput.toLowerCase().match("wait")){
                    sReply = "The road is deserted. After 1 hour there is still no help. Do you keep Waiting or do you go to the house?";
                }else{
                    sReply ="On the door is a large knocker. Do you KNOCK or run back to your car to wait?";
                    this.stateCur = GameState.MANSION;
                }
                break;
            case GameState.MANSION:
                if(sInput.toLowerCase().match("knock")){
                    sReply = "The door opens and you are greeted by a hunch-back butler. He asks you to come in. Do you GO in or run back to the car?"
                    this.stateCur = GameState.BUTLER;
                }else{
                    sReply = "The road is deserted. After 1 hour there is still no help. Do you keep Waiting or do you go to the house?";
                    this.stateCur = GameState.FLAT;

                }
                break;
            case GameState.BUTLER:
                if(sInput.toLowerCase().match("run")){
                    sReply = "The road is deserted. After 1 hour there is still no help. Do you keep Waiting or do you go to the house?";
                    this.stateCur = GameState.FLAT;

                }else{
                    sReply = "You seem to have walked in to a PARTY";
                    this.stateCur = GameState.PARTY;
    
                }
                break;
                case GameState.PARTY:
                    if(sInput.toLowerCase().match("party")){
                        sReply = "He goes to the party.Then he meet his friend.He want to LIVE with him or no.";
                        this.stateCur = GameState.LIVE;
    
                    }else{
                        sReply = "You seem to have walked in to a party. The host offers you some toast. Do you take the toast or ask to call a tow truck?";
                        this.stateCur = GameState.FLAT;
        
                    }
                    break;
                    case GameState.LIVE:
                    if(sInput.toLowerCase().match("live")){
                        sReply = "All person looks like ghost.In this party,he looks his friend.Do you want to MEET him or go the house?";
                        this.stateCur = GameState.MEET;
    
                    }else{
                        sReply = "You do not want to live in the party.What should you go  to the car?";
                        this.stateCur = GameState.FLAT;
        
                    }
                    break;
                    case GameState.MEET:
                    if(sInput.toLowerCase().match("meet")){
                        sReply = "He wanted to meet his friend.His friend has alot  of knowledge about haunted house.And he want go to inside the haunted house.Do you want to go INSIDE the house or no?";
                        this.stateCur = GameState.INSIDE;
    
                    }else{
                        sReply = "He do not want to go inside the house.Would you like to back into the car?";
                        this.stateCur = GameState.FLAT;
        
                    }
                    break;
                    case GameState.INSIDE:
                        if(sInput.toLowerCase().match("inside")){
                            sReply = "The haunted house is very scary from inside.His friend wanted to tell the story.Do you want to LISTEN the story or not?";
                            this.stateCur = GameState.LISTEN;
        
                        }else{
                            sReply = "He wants to listen the story.";
                            this.stateCur = GameState.FLAT;
            
                        }
                        break;
                        case GameState.LISTEN:
                            if(sInput.toLowerCase().match("listen")){
                                sReply = "He listen the story from his friend then one person offers him to the TOAST";
                                this.stateCur = GameState.LISTEN;
            
                            }else{
                                sReply = "He rejects the toast and wanna go to back to the car.";
                                this.stateCur = GameState.FLAT;
                
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