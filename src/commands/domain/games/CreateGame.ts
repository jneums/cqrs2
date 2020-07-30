import { Games } from "../../../entity/Games";
import { getManager } from "typeorm";


export class CreateGame<ICommand> {
    private game:Games;

    constructor(game:Games) {
        this.game = game
    }

    public execute = () => {

        let game = new Games()

        for (let key of Object.keys(this.game)) {
            game[key] = this.game[key]
        }


        const status = getManager().getRepository('Games')
            .save(game)
            .then(game => {
                console.log(`game added success: ${game.id}`)
                return true
            })
            .catch(err => {
                console.log(`error adding game: ${err}`)
                return false
            })

        return { status }
    }
}

