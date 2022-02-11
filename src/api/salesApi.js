import faker from "@faker-js/faker";
import { getTimeScope } from "../utils/time";
const moment = window.moment;

export const getSalesAmountEpitomeDataOfToday = async () => {
  return {
    amount: faker.random.number({ min: 1000, max: 5000 }),
    profit: faker.random.number({ min: 100, max: 500 }),
  };
};

export const getSalesOrderChartData = async ({ endTime, startTime, unit }) => {
  const scope = getTimeScope({ endTime, startTime });
  if (scope === "month") {
    return Array.from({ length: moment().endOf("month").date() }).map(
      (d, index) => {
        return {
          x: moment()
            .date(index + 1)
            .startOf("date")
            .toDate(),
          y: faker.random.number({ min: 100, max: 5000 }),
        };
      }
    );
  }
  if (scope === "year") {
    return Array.from({ length: 12 }).map((d, index) => {
      return {
        x: moment().month(index).startOf("month").toDate(),
        y: faker.random.number({ min: 1000, max: 50000 }),
      };
    });
  }
};
