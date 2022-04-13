import moment from 'moment';

export const randomOfferTime = () => {
  const min = Math.ceil(Math.random() * 150 + 30);
  const finishTime = moment(new Date()).add(min, 'seconds');

  return finishTime.toDate();
};

export const showTime = (time: Date) => {
  const now = moment(new Date());
  const finishTime = moment(time);

  const diff = finishTime.diff(now, 'minutes');

  if (diff < 0) {
    return 'Товар продан';
  }

  return `До конца акции осталось ${diff} минут`;
};

export const calcRemainingtime = (time: Date) => {
  const now = moment(new Date());
  const finishTime = moment(time);

  const remainingTime = moment.duration(moment(finishTime).diff(now));

  const hours = Math.floor(remainingTime.asHours()) % 24;
  const minutes = Math.floor(remainingTime.asMinutes()) % 60;
  const seconds = Math.floor(remainingTime.asSeconds()) % 60;

  const remain = `${hours > 10 ? hours : `0${hours}`}:${
    minutes > 10 ? minutes : `0${minutes}`
  }:${seconds < 10 ? `0${seconds}` : seconds}`;

  return {
    hours,
    minutes,
    seconds,
    remain,
  };
};
