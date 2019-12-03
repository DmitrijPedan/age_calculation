console.log('age_calculation')

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

let currentDate = new Date ();

let date = {
    Year: currentDate.getFullYear(),
    Month: currentDate.getMonth(),
    Day: currentDate.getDate(),
};

alert(date);

let user = {
    Name: prompt('Ваше имя:', ""),
    Year: prompt('Год Вашего рождения:', ""), 
    Month: months[prompt('Месяц Вашего рождения(по английски):', "")],
    Date: prompt('День Вашего рождения:', ""),
};

let ages;

if (currentDate.getMonth() > user.Month) {
    ages = currentDate.getFullYear() - user.Year;
    alert(user.Name + ', вам ' + ages);
} else if (currentDate.getMonth() < user.Month) {
    ages = currentDate.getFullYear() - user.Year - 1;
    alert(user.Name + ', вам ' + ages);
} else {
    if (currentDate.getDate() > user.Day) {
        ages = currentDate.getFullYear() - user.Year;
        alert(user.Name + ', вам ' + ages);
    } else if (currentDate.getDate() < user.Day) {
        ages = currentDate.getFullYear() - user.Year - 1;
        alert(user.Name + ', вам ' + ages);
    } else {
        ages = currentDate.getFullYear() - user.Year;
        alert(user.Name + ' c днем рождения! Вам сегодня ' + ages);
    }
}

console.log(user.Name, typeof(user.Name));
console.log(user.Year, typeof(user.Year));
console.log(user.Month, typeof(user.Month));
console.log(user.Date, typeof(user.Date));
console.log(currentDate.getFullYear(), typeof(currentDate.getFullYear()));
console.log(currentDate.getMonth(), typeof(currentDate.getMonth()));
console.log(currentDate.getDate(), typeof(currentDate.getDate()));
console.log(ages, typeof(ages));

