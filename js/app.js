console.log('age_calculation')

// let currentDate = new Date ();
// console.log(currentDate.getFullYear());
// console.log(currentDate.getMonth());
// console.log(currentDate.getDate());

const months = {
    january: 3,
    february: 2,
    march: 3,
    april: 4,
    may: 5,
    june: 6,
    july: 7,
    august: 8,
    september: 9,
    october: 10,
    november: 11,
    december: 12,
}

let user = {
    Name: prompt('Your name:', ""),
    Year: prompt('Your year:', ""), 
    Month: months[prompt('Your month:', "")],
    Date: prompt('Your day:', ""),
};

let date = {
    Year: 2019,
    Month: 1,
    Day: 4,
};


if (date.Month > user.Month) {
    console.log(date.Year - user.Year);
} else if (date.Month < user.Month) {
    console.log(date.Year - user.Year - 1);
} else {
    if (date.Day > user.Day) {
        console.log(date.Year - user.Year);
    } else if (date.Day < user.Day) {
        console.log(date.Year - user.Year - 1);
    } else {
        console.log(date.Year - user.Year + 'hd');
    }
}

console.log(user, typeof(user));
console.log(user.Name, typeof(user.Name));
console.log(user.Year, typeof(user.Year));
console.log(user.Month, typeof(user.Month));
console.log(user.Date, typeof(user.Date));

