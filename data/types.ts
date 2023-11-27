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
