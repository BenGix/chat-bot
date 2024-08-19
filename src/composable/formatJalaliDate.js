import moment from "moment-jalaali";

moment.loadPersian({ dialect: "persian-modern" });

const formatJalaliDate = (timestamp) => {
  const now = moment();
  const time = moment(timestamp);
  const diffMinutes = now.diff(time, "minutes");
  const diffHours = now.diff(time, "hours");
  const diffDays = now.diff(time, "days");

  if (diffMinutes < 60) {
    return `${diffMinutes} دقیقه پیش`;
  } else if (diffHours < 24) {
    return ` ${time.format("HH:mm")}`;
  } else if (diffDays < 7) {
    return `${time.format("dddd")} - ${time.format("HH:mm")}`;
  } else {
    return time.format("jYYYY/jMM/jDD - HH:mm");
  }
};

export default formatJalaliDate; 
  