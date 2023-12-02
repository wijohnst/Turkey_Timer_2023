import {describe, it, expect, jest, beforeEach} from '@jest/globals';

import {IPrepItem, IPrepList, PrepListMap, PrepStatus} from '../types';
import {PrepList, getDurationAsMinutes} from './PrepList';
import {prepItemsStub} from './PrepList.stubs';
import {add, intervalToDuration} from 'date-fns';

jest.mock('uuid', () => {
  const base = 'uuid-';
  let current = 1;

  return {
    v4: () => {
      const uuid = base + current.toString();
      current++;

      return uuid;
    },
  };
});

const defaultPrepListMap: PrepListMap = new Map<PrepStatus, IPrepItem[]>();

describe('PrepList', () => {
  let sut: IPrepList;

  const getSut = (
    prepItems: IPrepItem[],
    completedPrepItemIds: string[],
  ): IPrepList => {
    return new PrepList(prepItems, completedPrepItemIds);
  };

  beforeEach(() => {
    defaultPrepListMap.set('to_do', []);
    defaultPrepListMap.set('do_now', []);
    defaultPrepListMap.set('done', []);
  });

  it('✅ should be defined', () => {
    sut = getSut([], []);

    expect(sut).toBeDefined();
  });

  it('✅ should return a map with 3 keys', () => {
    sut = getSut([], []);

    const result = sut.getPrepListMap(new Date());

    expect(result.size).toBe(3);
  });

  it('✅ should return the correct PrepListMap', () => {
    const targetResult = defaultPrepListMap.set('done', [prepItemsStub[0]]);

    sut = getSut(prepItemsStub, ['uuid-1']);

    const result = sut.getPrepListMap(new Date());

    expect(result.get('done')).toEqual(targetResult.get('done'));
  });

  it('✅ should return the correct PrepListMap', () => {
    const targetResult = defaultPrepListMap.set('to_do', [...prepItemsStub]);

    sut = getSut(prepItemsStub, []);

    // `now` is 1 full day before the meal, and no items are `done`, so all items should be `to_do`
    const result = sut.getPrepListMap(new Date('2023-12-24T00:00:00.000Z'));

    expect(result).toEqual(targetResult);
  });

  it('✅ should return the correct PrepListMap', () => {
    const targetResult = defaultPrepListMap.set('do_now', [...prepItemsStub]);

    sut = getSut(prepItemsStub, []);

    // `now` is 1 full day after the meal, and no items are `done`, so all items should be `do_now`
    const result = sut.getPrepListMap(new Date('2023-12-26T00:00:00.000Z'));

    expect(result).toEqual(targetResult);
  });

  describe('getDurationAsMinutes', () => {
    let startTime = new Date('2023-12-02T00:00:00.000Z');

    const getDuration = (endTime: Date): Duration =>
      intervalToDuration({
        start: startTime,
        end: endTime,
      });

    it('✅ should return 0 when the duration is 0', () => {
      const result = getDurationAsMinutes(getDuration(startTime));

      expect(result).toBe(0);
    });

    it('✅ should return 1 when the duration is 1 minute', () => {
      const endTime = add(startTime, {minutes: 1});

      const result = getDurationAsMinutes(getDuration(endTime));

      expect(result).toBe(1);
    });
  });
});
