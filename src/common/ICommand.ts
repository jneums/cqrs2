import { ICommandResponse } from './ICommandResponse'

export default interface ICommand {
    execute: () => ICommandResponse
}