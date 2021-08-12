// @ts-nocheck
import * as fns from 'date-fns'
// import { Translate } from '../services'

/**
 * wrap date-fns methods that use locales
 *
 * rule to define locales when options.locale is undefined:
 *   i18n.locale
 *   i18n.defaultLocale
 *   'en'
 *
 *
 * others methods can be included here
 */
// const locales: any = {
//   // ar: require('date-fns/locale/ar'),
//   // bg: require('date-fns/locale/bg'),
//   // ca: require('date-fns/locale/ca'),
//   // cs: require('date-fns/locale/cs'),
//   // da: require('date-fns/locale/da'),
//   // de: require('date-fns/locale/de'),
//   // el: require('date-fns/locale/el'),
//   en: require('date-fns/locale/en'),
//   // eo: require('date-fns/locale/eo'),
//   // es: require('date-fns/locale/es'),
//   // fi: require('date-fns/locale/fi'),
//   // fil: require('date-fns/locale/fil'),
//   // fr: require('date-fns/locale/fr'),
//   // hr: require('date-fns/locale/hr'),
//   // hu: require('date-fns/locale/hu'),
//   // id: require('date-fns/locale/id'),
//   // is: require('date-fns/locale/is'),
//   // it: require('date-fns/locale/it'),
//   // ja: require('date-fns/locale/ja'),
//   // ko: require('date-fns/locale/ko'),
//   // mk: require('date-fns/locale/mk'),
//   // nb: require('date-fns/locale/nb'),
//   // nl: require('date-fns/locale/nl'),
//   // pl: require('date-fns/locale/pl'),
//   // pt: require('date-fns/locale/pt'),
//   // ro: require('date-fns/locale/ro'),
//   // ru: require('date-fns/locale/ru'),
//   // sk: require('date-fns/locale/sk'),
//   // sl: require('date-fns/locale/sl'),
//   // sv: require('date-fns/locale/sv'),
//   // th: require('date-fns/locale/th'),
//   // tr: require('date-fns/locale/tr'),
//   // zh_cn: require('date-fns/locale/zh_cn'),
//   // zh_tw: require('date-fns/locale/zh_tw'),
// }

//keys availables
// const available_languages = Object.keys(locales)

function findBestLanguageFromOptions(options: any = {}) {
  //got locale on params
  // if (options['locale']) {
  //   let keyFound = Translate.compareLanguages(
  //     options['locale'],
  //     available_languages
  //   )
  //   if (locales[keyFound])
  //     //is a valid key
  //     return locales[keyFound]
  // }

  // //check if i18n locale is available
  // let keyFound = Translate.compareLanguages(
  //   Translate.getLocale(),
  //   available_languages
  // )

  // //is not a valid key nor in the params
  // return locales[keyFound] || locales[Translate.getDefaultLocale() || 'en']
  return 'en'
}

export function format(
  date: Date | number,
  format: string,
  options?: {
    locale?: string
  }
): string {
  let locale = findBestLanguageFromOptions(options)
  return fns.format(date, format, { locale })
}

export function distanceInWordsToNow(
  date: Date | string | number,
  options?: {
    includeSeconds?: boolean
    addSuffix?: boolean
    locale?: string
  }
): string {
  let locale = findBestLanguageFromOptions(options)
  return fns.distanceInWordsToNow(date, { ...options, locale })
}

export function distanceInWordsStrict(
  dateToCompare: Date | string | number,
  date: Date | string | number,
  options?: {
    addSuffix?: boolean
    unit?: 's' | 'm' | 'h' | 'd' | 'M' | 'Y'
    partialMethod?: 'floor' | 'ceil' | 'round'
    locale?: Object
  }
): string {
  let locale = findBestLanguageFromOptions(options)
  return fns.distanceInWordsStrict(dateToCompare, date, { ...options, locale })
}

export function distanceInWords(
  dateToCompare: Date | string | number,
  date: Date | string | number,
  options?: {
    includeSeconds?: boolean
    addSuffix?: boolean
    locale?: Object
  }
): string {
  let locale = findBestLanguageFromOptions(options)
  return fns.distanceInWords(dateToCompare, date, { ...options, locale })
}

/**
 * always use/import from here
 */
export { addDays } from 'date-fns'
export { addHours } from 'date-fns'
export { addMilliseconds } from 'date-fns'
export { addMinutes } from 'date-fns'
export { addMonths } from 'date-fns'
export { addQuarters } from 'date-fns'
export { addSeconds } from 'date-fns'
export { addWeeks } from 'date-fns'
export { addYears } from 'date-fns'
export { closestIndexTo } from 'date-fns'
export { closestTo } from 'date-fns'
export { compareAsc } from 'date-fns'
export { compareDesc } from 'date-fns'
export { differenceInCalendarDays } from 'date-fns'
export { differenceInCalendarISOWeeks } from 'date-fns'
export { differenceInCalendarMonths } from 'date-fns'
export { differenceInCalendarQuarters } from 'date-fns'
export { differenceInCalendarWeeks } from 'date-fns'
export { differenceInCalendarYears } from 'date-fns'
export { differenceInDays } from 'date-fns'
export { differenceInHours } from 'date-fns'
export { differenceInMilliseconds } from 'date-fns'
export { differenceInMinutes } from 'date-fns'
export { differenceInMonths } from 'date-fns'
export { differenceInQuarters } from 'date-fns'
export { differenceInSeconds } from 'date-fns'
export { differenceInWeeks } from 'date-fns'
export { differenceInYears } from 'date-fns'
export { endOfDay } from 'date-fns'
export { endOfHour } from 'date-fns'
export { endOfISOWeek } from 'date-fns'
export { endOfMinute } from 'date-fns'
export { endOfMonth } from 'date-fns'
export { endOfQuarter } from 'date-fns'
export { endOfSecond } from 'date-fns'
export { endOfToday } from 'date-fns'
export { endOfTomorrow } from 'date-fns'
export { endOfWeek } from 'date-fns'
export { endOfYear } from 'date-fns'
export { endOfYesterday } from 'date-fns'
export { getDate } from 'date-fns'
export { getDay } from 'date-fns'
export { getDayOfYear } from 'date-fns'
export { getDaysInMonth } from 'date-fns'
export { getDaysInYear } from 'date-fns'
export { getHours } from 'date-fns'
export { getISODay } from 'date-fns'
export { getISOWeek } from 'date-fns'
export { getISOWeeksInYear } from 'date-fns'
export { getMilliseconds } from 'date-fns'
export { getMinutes } from 'date-fns'
export { getMonth } from 'date-fns'
export { getQuarter } from 'date-fns'
export { getSeconds } from 'date-fns'
export { getTime } from 'date-fns'
export { getYear } from 'date-fns'
export { isAfter } from 'date-fns'
export { isBefore } from 'date-fns'
export { isDate } from 'date-fns'
export { isEqual } from 'date-fns'
export { isFirstDayOfMonth } from 'date-fns'
export { isFriday } from 'date-fns'
export { isFuture } from 'date-fns'
export { isLastDayOfMonth } from 'date-fns'
export { isLeapYear } from 'date-fns'
export { isMonday } from 'date-fns'
export { isPast } from 'date-fns'
export { isSameDay } from 'date-fns'
export { isSameHour } from 'date-fns'
export { isSameISOWeek } from 'date-fns'
export { isSameMinute } from 'date-fns'
export { isSameMonth } from 'date-fns'
export { isSameQuarter } from 'date-fns'
export { isSameSecond } from 'date-fns'
export { isSameWeek } from 'date-fns'
export { isSameYear } from 'date-fns'
export { isSaturday } from 'date-fns'
export { isSunday } from 'date-fns'
export { isThisHour } from 'date-fns'
export { isThisISOWeek } from 'date-fns'
export { isThisMinute } from 'date-fns'
export { isThisMonth } from 'date-fns'
export { isThisQuarter } from 'date-fns'
export { isThisSecond } from 'date-fns'
export { isThisWeek } from 'date-fns'
export { isThisYear } from 'date-fns'
export { isThursday } from 'date-fns'
export { isToday } from 'date-fns'
export { isTomorrow } from 'date-fns'
export { isTuesday } from 'date-fns'
export { isValid } from 'date-fns'
export { isWednesday } from 'date-fns'
export { isWeekend } from 'date-fns'
export { isYesterday } from 'date-fns'
export { lastDayOfISOWeek } from 'date-fns'
export { lastDayOfMonth } from 'date-fns'
export { lastDayOfQuarter } from 'date-fns'
export { lastDayOfWeek } from 'date-fns'
export { lastDayOfYear } from 'date-fns'
export { max } from 'date-fns'
export { min } from 'date-fns'
export { parse } from 'date-fns'
export { setDate } from 'date-fns'
export { setDay } from 'date-fns'
export { setDayOfYear } from 'date-fns'
export { setHours } from 'date-fns'
export { setISODay } from 'date-fns'
export { setISOWeek } from 'date-fns'
export { setMilliseconds } from 'date-fns'
export { setMinutes } from 'date-fns'
export { setMonth } from 'date-fns'
export { setQuarter } from 'date-fns'
export { setSeconds } from 'date-fns'
export { setYear } from 'date-fns'
export { startOfDay } from 'date-fns'
export { startOfHour } from 'date-fns'
export { startOfISOWeek } from 'date-fns'
export { startOfMinute } from 'date-fns'
export { startOfMonth } from 'date-fns'
export { startOfQuarter } from 'date-fns'
export { startOfSecond } from 'date-fns'
export { startOfToday } from 'date-fns'
export { startOfTomorrow } from 'date-fns'
export { startOfWeek } from 'date-fns'
export { startOfYear } from 'date-fns'
export { startOfYesterday } from 'date-fns'
export { subDays } from 'date-fns'
export { subHours } from 'date-fns'
export { subMilliseconds } from 'date-fns'
export { subMinutes } from 'date-fns'
export { subMonths } from 'date-fns'
export { subQuarters } from 'date-fns'
export { subSeconds } from 'date-fns'
export { subWeeks } from 'date-fns'
export { subYears } from 'date-fns'
