import { POSTCommand } from './POSTGameCommand'
import ICommandConfig from '../../../common/ICommandConfig'

export class GameCommandFactory<ICommandFactory> {
    makeCommand = (config:ICommandConfig) => {
        if (config.commandName == POSTCommand.name) {
            return new POSTCommand(config.args)
        } else {
            throw new Error('Command not found!')
        }
    }
}