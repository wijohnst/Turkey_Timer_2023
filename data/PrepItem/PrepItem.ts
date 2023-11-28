import {Duration, intervalToDuration, subHours, addHours} from 'date-fns';
import {IPrepItem, Meal, MenuItem, PrepStatus} from '../types';

export class PrepItem implements IPrepItem {
  id: string;
  name: string;
  prepTime: number;
  timeTillStart: Duration;

  constructor({id, name, prepTime}: MenuItem, {serviceTime}: Meal, now: Date) {
    this.id = id;
    this.name = name;
    this.prepTime = prepTime;
    this.timeTillStart = this.getTimeTillStart(serviceTime, now);
  }

  getTimeTillStart = (serviceTime: Date, now: Date): Duration => {
    const tMinusDate = subHours(now, this.prepTime);

    return intervalToDuration({
      start: serviceTime,
      end: tMinusDate,
    });
  };
}
