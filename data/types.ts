import {Duration} from 'date-fns';
export interface MenuItem {
  /** UUID */
  id: string;
  /** Name of the dish of prep item */
  name: string;
  /** Prep time in hours */
  prepTime: number;
}

export type PrepUnit = 'hours' | 'minutes';
export interface IMenuItemFactory {
  generateMenuItem: (
    name: string,
    prepValue: string,
    prepUnit: PrepUnit,
  ) => MenuItem;
}

export type Meal = {
  /** Stored as ISO 8601 in UTC (zulu) time - any consumers will need to convert to the user's local time zone */
  serviceTime: Date;
};

export interface IMealFactory {
  generateMeal: (serviceTime: Date) => Meal;
}

export type PrepStatus = 'to_do' | 'do_now' | 'done';

export interface IPrepItem {
  id: string;
  name: string;
  prepTime: number;
  timeTillStart: Duration;
}

export interface IPrepItemFactory {
  generatePrepItem: (menuItem: MenuItem, meal: Meal) => IPrepItem;
}

export type PrepListMap = Map<PrepStatus, IPrepItem[]>;
export interface IPrepList {
  prepItems: IPrepItem[];
  getPrepListMap: (now: Date) => PrepListMap;
}
