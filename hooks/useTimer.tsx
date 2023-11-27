import * as React from 'react';
import {Meal} from '../data/types';
import {intervalToDuration} from 'date-fns';

export const useTimer = (meal?: Meal): Duration => {
  const [tTime, setTTime] = React.useState<Duration>(
    intervalToDuration({
      start: new Date(),
      end: meal?.serviceTime ?? new Date(),
    }),
  );

  React.useEffect(() => {
    const timerTimeout = setTimeout(() => {
      setTTime(
        intervalToDuration({
          start: new Date(),
          end: meal?.serviceTime ?? new Date(),
        }),
      );

      return () => clearTimeout(timerTimeout);
    }, 60000);
  });

  return tTime;
};
