function toReadable(number) {
    const obj = {
        0: '',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine'
    };
    let numberStr = number.toString();
    let number_1;
    let number_2;
    let number_3;
    let number_4;
    // for (const key in obj) {
    //     if (parseInt(number/100)) {

    //     }
    // }

for (const key in obj) {
    if (numberStr[numberStr.length-1] == key) {
        number_1 = obj[key];
    }    
};

for (const key in obj) {   
    if (numberStr[numberStr.length-3] == key) {
        number_3 = `${obj[key]} hundred`;
        break;
    } else {
        number_3 = "";
    };
};

for (const key in obj) {   
    if (numberStr[numberStr.length-4] == key) {
        number_4 = `${obj[key]} thousand`;
        break;
    } else {
        number_4 = "";
    };
};

for (const key in obj) {
    if (numberStr[numberStr.length-2] == key) {
        if (numberStr[numberStr.length-2] == 3) {
            number_2 = 'thirty';
        } else if (numberStr[numberStr.length-2] == 2) {
            number_2 = 'twenty';
        } else if (numberStr[numberStr.length-2] == 8) {
            number_2 = 'eighty';
        } else if (numberStr[numberStr.length-2] == 5) {
            number_2 = 'fifty';
        } else if (numberStr[numberStr.length-2] == 1) {
            if (number_1 == '') {
                number_2 = 'ten';
            } else if (number_1 == "one") {
                number_2 = 'eleven';
                number_1 = ''
            } else if (number_1 == "two") {
                number_2 = 'twelve';
                number_1 = ''
            } else if (number_1 == "three") {
                number_2 = 'thirteen';
                number_1 = ''
            } else if (number_1 == "five") {
                number_2 = 'fifteen';
                number_1 = ''  
            } else if (number_1 == "eight") {
                number_2 = 'eighteen';
                number_1 = ''
            } else {
                number_2 = `${number_1}teen`;
                number_1 = ''
            }
        } else {
            number_2 = `${obj[key]}ty`;
        }
    } 
};
    return `${number_4} ${number_3} ${number_2} ${number_1}`;
};


toReadable(224);
toReadable(112);
toReadable(11);
toReadable(987);
