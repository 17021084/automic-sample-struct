import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import dayOfYear from 'dayjs/plugin/dayOfYear'
import isBetween from 'dayjs/plugin/isBetween'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
import isToday from 'dayjs/plugin/isToday'
import isTomorrow from 'dayjs/plugin/isTomorrow'
import isYesterday from 'dayjs/plugin/isYesterday'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import minMax from 'dayjs/plugin/minMax'
import utc from 'dayjs/plugin/utc'
import React from 'react'
import moment from 'moment'

dayjs.extend(utc)
dayjs.extend(advancedFormat)
dayjs.extend(customParseFormat)
dayjs.extend(dayOfYear)
dayjs.extend(isBetween)
dayjs.extend(isSameOrAfter)
dayjs.extend(isToday)
dayjs.extend(isTomorrow)
dayjs.extend(isYesterday)
dayjs.extend(minMax)
dayjs.extend(localizedFormat)

const useSmartPrototype = () => {
  const implement = React.useCallback(() => {
    String.prototype.capitalize = function () {
      return this.charAt(0).toUpperCase() + this.slice(1)
    }

    String.prototype.toLocalDate = function (
      format = 'YYYY-MM-DD HH:mm:ss',
      tz = 'UTC'
    ) {
      const _format = format ?? 'YYYY-MM-DD HH:mm:ss'
      const _tz = tz

      try {
        return dayjs(this, `${_format} ${_tz}`).format(format)
      } catch (e) {
        return null
      }
    }

    String.prototype.toDate = function () {
      try {
        return dayjs(this, 'YYYY-MM-DD HH:mm:ss UTC').format('DD/MM/YYYY')
      } catch (e) {
        return null
      }
    }

    String.prototype.timeAgo = function (lang = 'vi') {
      try {
        return moment(this.utcToLocalDate()).locale(lang).fromNow()
      } catch (e) {
        return ''
      }
    }

    String.prototype.toDateTime = function () {
      try {
        return dayjs()
          .utc(this || new Date(), 'YYYY-MM-DD HH:mm:ss UTC')
          .local()
          .format('hh:mm DD/MM/YYYY')
      } catch (e) {
        return null
      }
    }

    String.prototype.isDate = function () {
      return !isNaN(Date.parse(this.toString().replaceAll(' UTC', '').trim()))
    }

    String.prototype.isAfter = function (another, format = 'DD/MM/YYYY') {
      try {
        const _another =
          another instanceof String
            ? another.toDateTime(format)
            : another instanceof Date
            ? another
            : new Date()

        const _self = this.toDateTime(format)
        const _max = dayjs.max(_self, _another)

        return _self === _max
      } catch (e) {
        return false
      }
    }
  }, [])

  React.useEffect(implement, [])
}

export default useSmartPrototype
