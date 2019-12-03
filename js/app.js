console.log('age_calculation')

let currentDate = new Date ();
console.log(currentDate.getFullYear(), typeof(currentDate.getFullYear()));
console.log(currentDate.getMonth(), typeof(currentDate.getMonth()));
console.log(currentDate.getDate(), typeof(currentDate.getDate()));

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

let date = {
    Year: 2019,
    Month: 12,
    Day: 22,
};

alert(date);

let user = {
    Name: prompt('Ваше имя:', ""),
    Year: prompt('Год Вашего рождения:', ""), 
    Month: months[prompt('Месяц Вашего рождения(по английски):', "")],
    Date: prompt('День Вашего рождения:', ""),
};

let ages;

if (date.Month > user.Month) {
    ages = date.Year - user.Year;
    alert(user.Name + ', вам ' + ages);
} else if (date.Month < user.Month) {
    ages = date.Year - user.Year - 1;
    alert(user.Name + ', вам ' + ages);
} else {
    if (date.Day > user.Day) {
        ages = date.Year - user.Year;
        alert(user.Name + ', вам ' + ages);
    } else if (date.Day < user.Day) {
        ages = date.Year - user.Year - 1;
        alert(user.Name + ', вам ' + ages);
    } else {
        ages = date.Year - user.Year;
        alert(user.Name + ' c днем рождения! Вам сегодня ' + ages);
    }
}

console.log(user.Name, typeof(user.Name));
console.log(user.Year, typeof(user.Year));
console.log(user.Month, typeof(user.Month));
console.log(user.Date, typeof(user.Date));
console.log(ages, typeof(ages));

