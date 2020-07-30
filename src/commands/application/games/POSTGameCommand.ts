import { Games } from "../../../entity/Games";
import * as DomainGameCommands from '../../domain/games';


export class POSTCommand<ICommand> {
    private game:Games;

    constructor(game:Games) {
        this.game = game
    }

    public execute = () => {
        const crudCommandFactory = new DomainGameCommands.CRUDCommandFactory()
        const commandName = DomainGameCommands.CreateGame.name

        const config = {
            commandName,
            args: this.game
        }
        const command = crudCommandFactory.makeCommand(config)

        const results = command.execute()

        return results.status ?
            { status: true } : 
            { status: false }
    }
}