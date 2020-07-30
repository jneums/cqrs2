import { CreateGame } from './'

import ICommandConfig from '../../../common/ICommandConfig'


export class CRUDCommandFactory<ICommandFactory> {
    makeCommand = (config:ICommandConfig) => {
        if (config.commandName == CreateGame.name) {
            return new CreateGame(config.args)
        } else {
            throw new Error('Command not found!')
        }
    }
}