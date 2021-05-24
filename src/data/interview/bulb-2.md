## Question

To help us bill our members, we sometimes use estimated readings. By estimating readings for the end of each month, we can estimate the usage for that month. We base these estimated readings on their actual readings, which can be given at any point in the month.For every month between the first and second last in the list, calculate an estimated reading for the last day of that month, interpolating from the readings before and after that date. Be sure to include any months that don’t have readings and so aren’t in the list.

You don’t need to calculate an estimate for the last month in the list.For example, if you are provided with readings for 15/02/2020, 18/03/2020 and 03/05/2020, then you should provide estimated readings for 29/02/2020, 31/03/2020 and 30/04/2020 (note, even though an April read was not provided, you’re still expected to provide an estimated end-of-month reading for April).This should return an array of objects, containing the estimated reading (estimatedRead) and the date of that reading (date, as either an ISO formatted string or Date object). Your estimatedRead should round down (floor) to the nearest whole number.[{ cumulative, readingDate }, …] => [{ estimatedRead, date }, …]

## Solution

```js
const daysDiff = (end, start) => {
  return Math.floor(moment(end).utc().diff(moment(start).utc(), "days", true));
};

const monthDiff = (end, start) => {
  return Math.floor(
    moment(end).utc().diff(moment(start).utc(), "months", true)
  );
};

const lastDateInMonth = (date) => {
  return moment(date).utc().endOf("month").startOf("day");
};

const plusMonths = (date, count) => {
  return moment(date).utc().add(count, "month");
};

const isDateGreater = (date1, date2) => {
  return moment(date1).utc().diff(moment(date2).utc(), "milliseconds") > 0;
};

const estimate = (
  startDate,
  endDate,
  startVal,
  endVal,
  onDate
) => {
  const rate = (endVal - startVal) / daysDiff(endDate, startDate);
  const days = daysDiff(onDate, startDate);
  return Math.floor(startVal + rate * days);
};

const questionTwo = (readings) => {
  const firstMonth = readings[0].readingDate;
  const lastMonth = readings[readings.length - 1].readingDate;
  const numOfMonths = monthDiff(lastMonth, firstMonth);
  const result = [];

  for (let i = 0; i < numOfMonths; i++) {
      result.push({
          date: lastDateInMonth(plusMonths(firstMonth, i)).toISOString(),
          estimatedRead: estimate(
              readings[i].readingDate,
              readings[i + 1].readingDate,
              readings[i].cumulative,
              readings[i + 1].cumulative,
              lastDateInMonth(plusMonths(firstMonth, i))
          )
      });
  }

  return result;
};
```
