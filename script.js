let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let dates = date.getDate();
let hours = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();
let dayExams = document.getElementById('dateId');
let firstButton = document.getElementById('buttons1Id');
let secondButton = document.getElementById('buttons2Id');
let firstA = document.getElementById('firstA');
let secondA = document.getElementById('secondA');
let title = document.getElementById('title');
let hoursChange = document.getElementById('hoursId');

function setUp(){
    dayExams = document.getElementById('dateId');
    firstButton = document.getElementById('buttons1Id');
    firstA = document.getElementById('firstA');
    secondA = document.getElementById('secondA');
    secondButton = document.getElementById('buttons2Id');
    title = document.getElementById('title');
    hoursChange = document.getElementById('hoursId');
}

function setDate(){
    date = new Date();
    year = date.getFullYear();
    month = date.getMonth();
    dates = date.getDate();
    hours = date.getHours();
    minute = date.getMinutes();
    second = date.getSeconds();
    setQuestions();
}

function setQuestions(){
    secondButton.style.visibility = 'visible';
    firstButton.style.visibility = 'visible';
    if(year == 2024 && month == 2 && dates <= 4){              //Senin
        if(hours >= 12 && dates == 4){
            day2();
        }
        else{
            day1();
        }
    }
    else if (year == 2024 && month == 2 && dates == 5){
        if(hours >= 12){
            day3();
        }
        else{
            day2();
        }
    }
    else if (year == 2024 && month == 2 && dates == 6){
        if(hours >= 12){
            day4();
        }
        else{
            day3();
        }
    }
    else if (year == 2024 && month == 2 && dates == 7){
        if(hours >= 12){
            day5();
        }
        else{
            day4();
        }
    }
    else if (year == 2024 && month == 2 && dates == 8){
        if(hours >= 12){
            day6();
        }
        else{
            day5();
        }
    }
    else if (year == 2024 && month == 2 && dates > 8 && dates <= 13){
        if(hours >= 12 && dates == 13){
            lockAllExams();
        }
        else{
            day6();
        }
    }
    else{
        lockAllExams();
    }
}

function day1(){
    firstButton.textContent = 'IPS';
    secondButton.textContent = 'Kemarsudirinian';
    dayExams.textContent = 'Senin, 04 Maret 2024';
    firstA.href = 'https://forms.gle/6YKAEfLP3vdse7yu7';    //IPS
    secondA.href = 'https://forms.gle/2ZRjXWbdq1vNSYpCA'    //Kemarsud
}

function day2(){
    firstButton.textContent = 'Bahasa Inggris';
    secondButton.textContent = 'PJOK';
    dayExams.textContent = 'Selasa, 05 Maret 2024';
    firstA.href = 'https://forms.gle/y1USQKbcctjjZpFX6';    //Bahasa Inggris
    secondA.href = 'https://forms.gle/YCxMxKUsGoAAjYMd9'    //PJOK
}

function day3(){
    firstButton.textContent = 'Matematika';
    secondButton.textContent = 'Prakarya';
    dayExams.textContent = 'Rabu, 06 Maret 2024';
    firstA.href = 'https://forms.gle/XQtVXGHM25o2Dnnm7';    //Matematika
    secondA.href = 'https://forms.gle/cymDxHJUTDfahyjM8'    //Prakarya
}
function day4(){
    firstButton.textContent = 'Bahasa Indonesia';
    secondButton.textContent = 'Agama Katolik';
    dayExams.textContent = 'Kamis, 07 Maret 2024';
    firstA.href = 'https://forms.gle/1ocqJgFWSY77rLTy9';    //Bahasa Indonesia
    secondA.href = 'https://forms.gle/13gVVUrHqEQAFkeW8'    //Agama
}
function day5(){
    firstButton.textContent = 'IPA';
    secondButton.style.visibility = 'hidden';
    dayExams.textContent = 'Jumat, 08 Maret 2024';
    firstA.href = 'https://forms.gle/cfJt6QcsRX158KV37';    //IPA
}
function day6(){
    firstButton.textContent = 'Informatika';
    secondButton.textContent = 'PPKN';
    dayExams.textContent = 'Rabu, 13 Maret 2024';
    firstA.href = 'https://forms.gle/te2Nkw6KH6oVukPY8';    //Informatika
    secondA.href = 'https://forms.gle/B9Vz6mkx2JgoSiiM9'    //PPKN
}
function lockAllExams(){
    title.textContent = 'Ulangan Sudah Selesai, Beritahu Jika Ada Kesalahan';
    secondButton.style.visibility = 'hidden';
    firstButton.style.visibility = 'hidden';
    dayExams.textContent = "-";
    hoursChange.textContent = '';
}

setInterval(setDate, 1000);
setTimeout(setUp, 550);