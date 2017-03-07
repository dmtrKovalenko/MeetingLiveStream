import * as playerStatus from './PlayerStatuses.js'

export const notConnected = 'Отстутсвует подключение к интернету'

export const notAccesible = 'Трансляция не доступна'

export const Active = 'Трансляция активна'

export const Loading = 'Подключение'

export default MapPlayerStateToMessage = (status) => {
    switch (status) {
        case playerStatus.BUFFERING : 
            return Loading;
            break;
        case playerStatus.ERROR: 
            return Loading;
            break;
        case playerStatus.CONNECTIONOFF:
            return notConnected;
            break;
        case playerStatus.STOPPED: 
            return notAccesible;
            break;
        default: 
            return Active
    }
}