import {Duration} from 'date-fns';
import {IPrepList, IPrepItem, PrepListMap, PrepStatus} from '../types';

export class PrepList implements IPrepList {
  prepItems: IPrepItem[];

  private completedPrepItemIds: string[];

  constructor(prepItems: IPrepItem[], completedPrepItemIds: string[]) {
    this.prepItems = prepItems;
    this.completedPrepItemIds = completedPrepItemIds;
  }

  getPrepListMap = (now: Date): PrepListMap => {
    const PrepListMap = new Map<PrepStatus, IPrepItem[]>();

    // TODO: Refactor to set values using an enum
    PrepListMap.set('to_do', []);
    PrepListMap.set('do_now', []);
    PrepListMap.set('done', []);

    this.prepItems.forEach(prepItem => {
      // If the prepItem was marked completed, add it to the done list
      if (this.completedPrepItemIds.includes(prepItem.id)) {
        PrepListMap.get('done')?.push(prepItem);
        return;
      }

      // If the PrepItem is not completed but it is not time to start, add it to the `to_do` list
      if (!this.isTimeToStart(prepItem.timeTillStart, now)) {
        PrepListMap.set('to_do', [...PrepListMap.get('to_do')!, prepItem]);
        return;
      }

      // If the PrepItem is not completed and it is as least the time to start, add it to the `do_now` list
      if (this.isTimeToStart(prepItem.timeTillStart, now)) {
        PrepListMap.set('do_now', [...PrepListMap.get('do_now')!, prepItem]);
      }
    });

    return PrepListMap;
  };

  private isTimeToStart = (timeTillStart: Duration, now: Date): boolean => {
    const durationAsMinutes = getDurationAsMinutes(timeTillStart);

    if (durationAsMinutes <= 0) {
      return true;
    }

    return false;
  };
}

/*
  Accepts a duration and returns the duration expressed as minutes
*/
export const getDurationAsMinutes = (duration: Duration): number => {
  const durationEntries = Object.entries(duration);

  const durationValueToMinutesMap: Record<
    string,
    (durationValue: number) => number
  > = {
    years: (durationValue: number) => durationValue * 365 * 24 * 60,
    months: (durationValue: number) => durationValue * 30 * 24 * 60,
    weeks: (durationValue: number) => durationValue * 7 * 24 * 60,
    days: (durationValue: number) => durationValue * 24 * 60,
    hours: (durationValue: number) => durationValue * 60,
    minutes: (durationValue: number) => durationValue,
    seconds: (durationValue: number) => durationValue / 60,
  };

  return durationEntries.reduce((acc, [durationUnit, durationValue]) => {
    return acc + durationValueToMinutesMap[durationUnit](durationValue);
  }, 0);
};
