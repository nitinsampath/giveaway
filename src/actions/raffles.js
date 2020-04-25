import {v4 as uuid} from 'uuid';

export const addRaffle = (
    {
        raffleName = '',
        raffleDescription = '',
        startDate = new Date(),
        endDate = new Date()
    } = {}) => ({
    type: 'ADD_RAFFLE',
    raffle: {
        id: uuid(),
        raffleName,
        raffleDescription,
        startDate,
        endDate
    }
});

