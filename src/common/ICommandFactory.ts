import ICommand from './ICommand'
import ICommandConfig from './ICommandConfig'

export default interface ICommandFactory {
    makeCommand: (config:ICommandConfig) => ICommand
}