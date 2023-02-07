let firstName: string;
let age:'18' | '19' | '20';
let height: number;
let alive: boolean;
let colour: 'red' | 'green'| 'blue' | undefined;
let anyColour: string;
//enum

enum Gender {
    'female' = 'f',
    'male' = 'm'
}
let gender: Gender;

firstName = 'Rina';
age = '18';
height = 1.72;
alive = true;
colour = undefined;
anyColour = 'lilac';
gender = Gender.female;


console.log(firstName);