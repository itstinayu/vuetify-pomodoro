import { FlipClock } from '@mvpleung/flipclock'

export default {
  getters: {
    selectedAlarmFile () {
      const el = document.querySelector('.clock')
      const clock = new FlipClock(el, new Date(), {
        face: 'HourCounter'
      })
      return el + ':' + clock
    }
  }
}
