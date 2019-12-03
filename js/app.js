console.log('Age_calculation:')

const months = {
    january: 0,
    february: 1,
    march: 2,
    april: 3,
    may: 4,
    june: 5,
    july: 6,
    august: 7,
    september: 8,
    october: 9,
    november: 10,
    december: 11,
}

let currentDate = new Date ();

let date = {
    Year: currentDate.getFullYear(),
    Month: currentDate.getMonth(),
    Day: currentDate.getDate(),
};

alert('Текущая дата: ' + date.Day + ' число, ' + date.Month + ' месяц, ' + date.Year + ' год');

let user = {
    Name: prompt('Ваше имя:', ""),
    Year: prompt('Год Вашего рождения:', ""), 
    Month: months[prompt('Месяц Вашего рождения(на английском):', "")],
    Day: prompt('День Вашего рождения:', ""),
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

console.log('Пользователь имя: ', user.Name, typeof(user.Name));
console.log('Пользователь год: ',user.Year, typeof(user.Year));
console.log('Пользователь месяц: ',user.Month, typeof(user.Month));
console.log('Пользователь день: ',user.Day, typeof(user.Day));
console.log('Текущее год: ',currentDate.getFullYear(), typeof(currentDate.getFullYear()));
console.log('Текущее месяц: ',currentDate.getMonth(), typeof(currentDate.getMonth()));
console.log('Текущее мксяц: ',currentDate.getDate(), typeof(currentDate.getDate()));
console.log('Результат возраст: ',ages, typeof(ages));

