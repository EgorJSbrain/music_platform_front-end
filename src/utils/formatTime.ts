import dayjs from 'dayjs'

export const formatSecondsToTime = (seconds: number): string =>
  dayjs(new Date(seconds * 1000)).format('mm:ss')
