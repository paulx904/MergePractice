var topic=[
    "Vancouver, BC - Fortune Nightclub (EARLY ALL AGES SHOW)",
    "Vancouver, BC - Fortune Nightclub (LATE 19+ SHOW)",
    "Seattle, WA - The Crocodile",
    "San Francisco - The Warfield",
    "Los Angeles, CA - Shrine Expo Hall",
    "Houston, TX - House of Blues (Bronze Peacock)",
    "Dallas, TX - House of Blues (Cambridge Room)",
    "Atlanta, GA - The Loft",
    "Washington DC - U Street Music Hall",
    "New York, NY - Terminal 5",
    "Boston, MA - Brighton Music Hall",
    "Chicago, IL - Subterranean",
    "Toronto, ON - Velvet Underground"
];

var startDate = new Date();

function setmonthAndDay(startMonth, startDay)
{
    //一次設定好月份與日期
    startDate.setMonth(startMonth-1,startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

setmonthAndDay(12,2);