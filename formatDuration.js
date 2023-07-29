// Given the number of seconds, Give the duration in this format:
// 1 year, 1 day, 1 hour, 1 minute and 1 second
// 10 days, 1 hour, 46 minutes and 40 seconds
// 2 hours, 1 minute and 5 seconds
// 1 hour and 59 minutes
// 1 minute and 59 seconds
// 1 second
const formatDuration = (seconds) => {
  if (seconds === 0) return "now";
  const time = {
    year: 31536000,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1,
  };
  let res = [];
  Object.keys(time).forEach((key) => {
    if (seconds >= time[key]) {
      const val = Math.floor(seconds / time[key]);
      seconds = seconds % time[key];
      res.push(val + " " + (val > 1 ? key + "s" : key));
    }
  });

  if (res.length === 1) return res[0];

  if (res.length === 2) {
    return res.join(" and ");
  }
  if (res.length === 3) {
    return `${res[0]}, ${res[1]} and ${res[2]}`;
  }
  if (res.length === 4) {
    return `${res[0]}, ${res[1]}, ${res[2]} and ${res[3]}`;
  }

  return "";
};

const {assert} = require("chai");
assert.strictEqual(formatDuration(1), "1 second");
assert.strictEqual(formatDuration(62), "1 minute and 2 seconds");
assert.strictEqual(formatDuration(120), "2 minutes");
assert.strictEqual(formatDuration(3600), "1 hour");
assert.strictEqual(formatDuration(3662), "1 hour, 1 minute and 2 seconds");
