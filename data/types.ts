export type MenuItem = {
  /** UUID */
  id: string;
  /** Name of the dish of prep item */
  name: string;
  /** Prep time in hours */
  prepTime: number;
};

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
  generateMeal: (serviceDate: Date, serviceTime: Date) => Meal;
}
