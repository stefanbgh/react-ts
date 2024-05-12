import moment from 'moment';

export const timeAgo: Function = (timestamp: number) => {
    const getDate = new Date(timestamp);

    return moment(getDate).fromNow();
};  