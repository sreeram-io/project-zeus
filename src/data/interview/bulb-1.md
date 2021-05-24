## Background
Meter readings are a major part of Bulb’s business. We use them to measure how much energy a member has used, so we can bill them correctly.

The difference between two readings tells us the energy used between those two periods.

## Inputs
For each function we ask you to write below, you should expect an array of meter reading objects. A meter reading object contains two keys:
 - cumulative - the reading as an integer, and,
 - readingDate - an ISO 8601 formatted date string, in UTC.

You can refer to this sample dataset to see what this looks like, and use it as example data for your unit tests. We’ll also test your functions with other sets of data (but the data structure will always be the same).

For any inputs, you can assume the following:
 - Meter readings (cumulative) never go down or reset
 - There is at most one meter reading per month
 - The reading date will always have the time set to 00:00:00.000
 - Meter readings are only ever whole numbers
 - The input array/list will always be sorted from oldest to newest

## Question
We would like you to create two functions for us to process a set of meter readings. Both functions should expect an array of meter readings as their only parameter.

We want to be able to identify particularly large increases in our members’ energy usage.To help us do this, write a function that returns the reading that caused the biggest increase in energy usage from the reading before. The function should return a single meter reading object - the one that caused the jump in usage. Or if there’s nothing to choose from, it should return null. If there are two sets of readings with the same increase, return the reading that caused the earlier of the two increases. For example, if you’re given three meter readings in chronological order, 1000, 1500, 1750, then your function will return the object containing the 1500 meter reading (since it increases the reading by 500).

[{ cumulative, readingDate }, …] => { cumulative, readingDate }

## Solution

```js
const sortBasedOnTime = (readings) => {
  if (!readings) return readings;

    return readings.sort((reading1, reading2) => {
      if (isDateGreater(reading1.readingDate, reading2.readingDate)) return 1;
      return -1;
    });
};

const isValidType = reading => {
  return ('cumulative' in reading) &&
    (typeof reading.cumulative === 'number') &&
    ('readingDate' in reading)
    && (typeof reading.readingDate === 'string');
};

const questionOneSorted = (readings) => {
  let diff = 0;
  let result = null;

  try {
      if (readings.length === 1) {
          if (!isValidType(readings[0])) throw new Error();
          return readings[0];
      }

      for (let i = 1; i < readings.length; i++) {
          if (!isValidType(readings[i])) throw new Error();

          const difference = readings[i].cumulative - readings[i - 1].cumulative;
          if (difference > diff) {
              diff = difference;
              result = readings[i];
          }
      }
  }
  catch (error) {
      throw new Error();
  }

  return result;
};

const questionOne = (readings) => questionOneSorted(sortBasedOnTime(readings));
```
