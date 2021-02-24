// Реализуйте класс Student(Студент), который будет наследовать от класса User.Этот класс должен иметь следующие свойства: name(имя, наследуется от User), surname(фамилия, наследуется от User), year(год поступления в вуз).Класс должен иметь метод getFullName()(наследуется от User), с помощью которого можно вывести одновременно имя и фамилию студента.Также класс должен иметь метод, который будет изменять имя и фамилию студента.

class User{
    constructor(name, surname){
        this.surname = surname
        this.name = name;
    }
    getFullName(){console.log(`name: ${this.name}, \n surname: ${this.surname}`);}
}

class Student extends User{
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }
    changerValues(){console.log(`After: ${this.name.replaceAll('O', 'A')}, ${this.surname.replaceAll('a', 'o')}`);}
}

let Oleh = new Student('Oleh', 'Babiak', 2014)


Oleh.changerValues()
