//let submit=document.querySelector('.submit');
let inputValue = document.querySelector('.inputValue');
let name = document.querySelector('.name');
let desc = document.querySelector('.desc'); //ясность
let temp = document.querySelector('.temp'); //температура
let day6 = document.querySelector('.day6'); //координаты
let day4 = document.querySelector('.day4'); //ветер
let day3 = document.querySelector('.day3'); //давление
let day1 = document.querySelector('.day1');
let day2 = document.querySelector('.day2');
let day5 = document.querySelector('.day5');
let day7 = document.querySelector('.day7');
let day8 = document.querySelector('.day8');
let day9 = document.querySelector('.day9');
let day10 = document.querySelector('.day10');
let day11 = document.querySelector('.day11');
let day12 = document.querySelector('.day12');
async function buttons() {
    try {
        let pogoda = await fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + inputValue.value + '&lang=ru&appid=0b701ec5b82f76076bfbe263abf7ab1d');
        let data = await pogoda.json();
        console.log('Data', data);
        //сведения о погоде 
        let nameValue = data['name'];
        let tempValue = data['list']['0']['main']['temp'];
        let descValue = data['list']['0']['weather'][0]['description'];
        let windValue = data['list']['0']['wind']['speed'];
        let pressureValue = data['list']['0']['main']['pressure'];
        let maxValue = data['list']['0']['main']['temp_max'];
        let minValue = data['list']['0']['main']['temp_min'];
        let feelsValue = data['list']['0']['main']['feels_like'];
        let dttxtValue = data['list']['0']['dt_txt']; //дата
        let humValue = data['list']['0']['main']['humidity'];
        //Перевод в грдусы
        let tmp = tempValue - 273.15;
        let mitmp = minValue - 273.15;
        let matmp = maxValue - 273.15;
        let fee = feelsValue - 273.15;
        //демонстрация на экране 
        //name.innerHTML = nameValue;
        desc.innerHTML = "<ul><li id='time'>" + dttxtValue + "</li><li id='fy'>" + descValue + "</li><li id='raz'><img src='temp.png'  width= '30' height= '30'> " + Math.ceil(tmp) + "</li><li id='raz'> Чувствуется как " + Math.ceil(fee) + "</li><li id='raz'> Min <img src='temp.png'  width= '30' height= '30'> " + Math.ceil(mitmp) + "</li><li id='raz'> Max <img src='temp.png'  width= '30' height= '30'> " + Math.ceil(matmp) + "</li><li id='raz'> <img src='pressure_4667.png'  width= '30' height= '30'> " + pressureValue + "</li><li id='raz'><img src='speed.png'  width= '30' height= '30'> " + windValue + "</li><li id='raz'><img src='hum.png'  width= '30' height= '30'>  " + humValue;
        let tempValue1 = data['list']['1']['main']['temp'];
        let descValue1 = data['list']['1']['weather'][0]['description'];
        let windValue1 = data['list']['1']['wind']['speed'];
        let pressureValue1 = data['list']['1']['main']['pressure'];
        let feelsValue1 = data['list']['1']['main']['feels_like'];
        let dttxtValue1 = data['list']['1']['dt_txt']; //дата
        let humValue1 = data['list']['1']['main']['humidity'];
        //Перевод в грдусы
        let tmp1 = tempValue1 - 273.15;
        let fee1 = feelsValue1 - 273.15;
        //демонстрация на экране 
        day1.innerHTML = "<ul><li id='time'>" + dttxtValue1 + "</li><li id='fy'>" + descValue1 + "</li><li id='raz'><img src='temp.png'  width= '30' height= '30'>" + Math.ceil(tmp1) + "</li><li id='raz'> Чувствуется как " + Math.ceil(fee1) + "</li><li id='raz'> <img src='pressure_4667.png'  width= '30' height= '30'> " + pressureValue1 + "</li><li id='raz'><img src='speed.png'  width= '30' height= '30'> " + windValue1 + "</li><li id='raz'><img src='hum.png'  width= '30' height= '30'> " + humValue1;
        let tempValue2 = data['list']['2']['main']['temp'];
        let descValue2 = data['list']['2']['weather'][0]['description'];
        let windValue2 = data['list']['2']['wind']['speed'];
        let pressureValue2 = data['list']['2']['main']['pressure'];
        let feelsValue2 = data['list']['2']['main']['feels_like'];
        let dttxtValue2 = data['list']['2']['dt_txt']; //дата
        let humValue2 = data['list']['2']['main']['humidity'];
        //Перевод в грдусы
        let tmp2 = tempValue2 - 273.15;
        let fee2 = feelsValue2 - 273.15;
        //демонстрация на экране 
        day2.innerHTML = "<ul><li id='time'>" + dttxtValue2 + "</li><li id='fy'>" + descValue2 + "</li><li id='raz'><img src='temp.png'  width= '30' height= '30'>" + Math.ceil(tmp2) + "</li><li id='raz'> Чувствуется как " + Math.ceil(fee2) + "</li><li id='raz'> <img src='pressure_4667.png'  width= '30' height= '30'> " + pressureValue2 + "</li><li id='raz'><img src='speed.png'  width= '30' height= '30'> " + windValue2 + "</li><li id='raz'><img src='hum.png'  width= '30' height= '30'> " + humValue2;
        let tempValue3 = data['list']['3']['main']['temp'];
        let descValue3 = data['list']['3']['weather'][0]['description'];
        let windValue3 = data['list']['3']['wind']['speed'];
        let pressureValue3 = data['list']['3']['main']['pressure'];
        let feelsValue3 = data['list']['3']['main']['feels_like'];
        let dttxtValue3 = data['list']['3']['dt_txt']; //дата
        let humValue3 = data['list']['3']['main']['humidity'];
        //Перевод в грдусы
        let tmp3 = tempValue3 - 273.15;
        let fee3 = feelsValue3 - 273.15;
        //демонстрация на экране 
        day3.innerHTML = "<ul><li id='time'>" + dttxtValue3 + "</li><li id='fy'>" + descValue3 + "</li><li id='raz'><img src='temp.png'  width= '30' height= '30'>" + Math.ceil(tmp3) + "</li><li id='raz'> Чувствуется как " + Math.ceil(fee3) + "</li><li id='raz'> <img src='pressure_4667.png'  width= '30' height= '30'> " + pressureValue3 + "</li><li id='raz'><img src='speed.png'  width= '30' height= '30'> " + windValue3 + "</li><li id='raz'><img src='hum.png'  width= '30' height= '30'> " + humValue3;
        let tempValue4 = data['list']['4']['main']['temp'];
        let descValue4 = data['list']['4']['weather'][0]['description'];
        let windValue4 = data['list']['4']['wind']['speed'];
        let pressureValue4 = data['list']['4']['main']['pressure'];
        let feelsValue4 = data['list']['4']['main']['feels_like'];
        let dttxtValue4 = data['list']['4']['dt_txt']; //дата
        let humValue4 = data['list']['4']['main']['humidity'];
        //Перевод в грдусы
        let tmp4 = tempValue4 - 273.15;
        let fee4 = feelsValue4 - 273.15;
        //демонстрация на экране 
        day4.innerHTML = "<ul><li id='time'>" + dttxtValue4 + "</li><li id='fy'>" + descValue4 + "</li><li id='raz'><img src='temp.png'  width= '30' height= '30'>" + Math.ceil(tmp4) + "</li><li id='raz'> Чувствуется как " + Math.ceil(fee4) + "</li><li id='raz'> <img src='pressure_4667.png'  width= '30' height= '30'> " + pressureValue4 + "</li><li id='raz'><img src='speed.png'  width= '30' height= '30'> " + windValue4 + "</li><li id='raz'><img src='hum.png'  width= '30' height= '30'> " + humValue4;
        let tempValue5 = data['list']['5']['main']['temp'];
        let descValue5 = data['list']['5']['weather'][0]['description'];
        let windValue5 = data['list']['5']['wind']['speed'];
        let pressureValue5 = data['list']['5']['main']['pressure'];
        let feelsValue5 = data['list']['5']['main']['feels_like'];
        let dttxtValue5 = data['list']['5']['dt_txt']; //дата
        let humValue5 = data['list']['5']['main']['humidity'];
        //Перевод в грдусы
        let tmp5 = tempValue5 - 273.15;
        let fee5 = feelsValue5 - 273.15;
        //демонстрация на экране 
        day5.innerHTML = "<ul><li id='time'>" + dttxtValue5 + "</li><li id='fy'>" + descValue5 + "</li><li id='raz'><img src='temp.png'  width= '30' height= '30'>" + Math.ceil(tmp5) + "</li><li id='raz'> Чувствуется как " + Math.ceil(fee5) + "</li><li id='raz'> <img src='pressure_4667.png'  width= '30' height= '30'> " + pressureValue5 + "</li><li id='raz'><img src='speed.png'  width= '30' height= '30'> " + windValue5 + "</li><li id='raz'><img src='hum.png'  width= '30' height= '30'> " + humValue5;
        let tempValue6 = data['list']['6']['main']['temp'];
        let descValue6 = data['list']['6']['weather'][0]['description'];
        let windValue6 = data['list']['6']['wind']['speed'];
        let pressureValue6 = data['list']['6']['main']['pressure'];
        let feelsValue6 = data['list']['6']['main']['feels_like'];
        let dttxtValue6 = data['list']['6']['dt_txt']; //дата
        let humValue6 = data['list']['6']['main']['humidity'];
        //Перевод в грдусы
        let tmp6 = tempValue6 - 273.15;
        let fee6 = feelsValue6 - 273.15;
        //демонстрация на экране 
        day6.innerHTML = "<ul><li id='time'>" + dttxtValue6 + "</li><li id='fy'>" + descValue6 + "</li><li id='raz'><img src='temp.png'  width= '30' height= '30'>" + Math.ceil(tmp6) + "</li><li id='raz'> Чувствуется как " + Math.ceil(fee6) + "</li><li id='raz'> <img src='pressure_4667.png'  width= '30' height= '30'> " + pressureValue6 + "</li><li id='raz'><img src='speed.png'  width= '30' height= '30'> " + windValue6 + "</li><li id='raz'><img src='hum.png'  width= '30' height= '30'> " + humValue6;
        let tempValue7 = data['list']['7']['main']['temp'];
        let descValue7 = data['list']['7']['weather'][0]['description'];
        let windValue7 = data['list']['7']['wind']['speed'];
        let pressureValue7 = data['list']['7']['main']['pressure'];
        let feelsValue7 = data['list']['7']['main']['feels_like'];
        let dttxtValue7 = data['list']['7']['dt_txt']; //дата
        let humValue7 = data['list']['7']['main']['humidity'];
        //Перевод в грдусы
        let tmp7 = tempValue7 - 273.15;
        let fee7 = feelsValue7 - 273.15;
        //демонстрация на экране 
        day7.innerHTML = "<ul><li id='time'>" + dttxtValue7 + "</li><li id='fy'>" + descValue7 + "</li><li id='raz'><img src='temp.png'  width= '30' height= '30'>" + Math.ceil(tmp7) + "</li><li id='raz'> Чувствуется как " + Math.ceil(fee7) + "</li><li id='raz'> <img src='pressure_4667.png'  width= '30' height= '30'> " + pressureValue7 + "</li><li id='raz'><img src='speed.png'  width= '30' height= '30'> " + windValue7 + "</li><li id='raz'><img src='hum.png'  width= '30' height= '30'> " + humValue7;
        //Погода на 1 день 
        tempValue4 = data['list']['4']['main']['temp'];
        let maxValue4 = data['list']['4']['main']['temp_max'];
        let minValue4 = data['list']['4']['main']['temp_min'];
        descValue4 = data['list']['4']['weather'][0]['description'];
        windValue4 = data['list']['4']['wind']['speed'];
        pressureValue4 = data['list']['4']['main']['pressure'];
        feelsValue4 = data['list']['4']['main']['feels_like'];
        dttxtValue4 = data['list']['4']['dt_txt']; //дата
        let iconValue4 = data['list']['4']['weather'][0]['icon'];
        humValue4 = data['list']['4']['main']['humidity'];
        //Перевод в грдусы
        tmp4 = tempValue4 - 273.15;
        fee4 = feelsValue4 - 273.15;
        let mitmp4 = minValue4 - 273.15;
        let matmp4 = maxValue4 - 273.15;
        //демонстрация на экране 
        day8.innerHTML = "<ul><li id='time'>" + dttxtValue4 + "</li><li id='fi'> <p ><img src='http://openweathermap.org/img/w/" + iconValue4 + ".png' width= '150' height= '150' align='left'>" + descValue4 + "</p></li><li><p id='ty'> <img src='temp.png'  width= '30' height= '30'> " + Math.ceil(tmp4) + "&deg;C &nbsp;&nbsp;Чувствуется как " + Math.ceil(fee4) + "&deg;C &nbsp;&nbsp; Max <img src='temp.png'  width= '30' height= '30'> " + Math.ceil(mitmp4) + "&deg;C &nbsp;&nbsp; Min <img src='temp.png'  width= '30' height= '30'> " + Math.ceil(matmp4) + "&deg;C &nbsp;&nbsp;</p></li><li><p id='ty'> <img src='pressure_4667.png'  width= '30' height= '30'>  " + pressureValue4 + "&nbsp;&nbsp;&nbsp;&nbsp;<img src='speed.png'  width= '30' height= '30'> " + windValue4 + " м/с &nbsp;&nbsp;&nbsp;&nbsp;<img src='hum.png'  width= '30' height= '30'>" + humValue4 + " %  </p></li></ul>";
        let tempValue12 = data['list']['12']['main']['temp'];
        let maxValue12 = data['list']['12']['main']['temp_max'];
        let minValue12 = data['list']['12']['main']['temp_min'];
        let descValue12 = data['list']['12']['weather'][0]['description'];
        let windValue12 = data['list']['12']['wind']['speed'];
        let pressureValue12 = data['list']['12']['main']['pressure'];
        let feelsValue12 = data['list']['12']['main']['feels_like'];
        let dttxtValue12 = data['list']['12']['dt_txt']; //дата
        let iconValue12 = data['list']['12']['weather'][0]['icon'];
        let humValue12 = data['list']['12']['main']['humidity'];
        //Перевод в грдусы
        let tmp12 = tempValue12 - 273.15;
        let fee12 = feelsValue12 - 273.15;
        let mitmp12 = minValue12 - 273.15;
        let matmp12 = maxValue12 - 273.15;
        //демонстрация на экране 
        day9.innerHTML = "<ul><li id='time'>" + dttxtValue12 + "</li><li id='fi'> <p><img src='http://openweathermap.org/img/w/" + iconValue12 + ".png' width= '150' height= '150' align='left'>" + descValue12 + "</p></li><li><p id='ty'> <img src='temp.png'  width= '30' height= '30'> " + Math.ceil(tmp12) + "&deg;C &nbsp;&nbsp;Чувствуется как " + Math.ceil(fee12) + "&deg;C &nbsp;&nbsp; Max <img src='temp.png'  width= '30' height= '30'> " + Math.ceil(mitmp12) + "&deg;C &nbsp;&nbsp; Min <img src='temp.png'  width= '30' height= '30'> " + Math.ceil(matmp12) + "&deg;C &nbsp;&nbsp;</p></li><li><p id='ty'> <img src='pressure_4667.png'  width= '30' height= '30'>  " + pressureValue12 + "&nbsp;&nbsp;&nbsp;&nbsp;<img src='speed.png'  width= '30' height= '30'> " + windValue12 + " м/с &nbsp;&nbsp;&nbsp;&nbsp;<img src='hum.png'  width= '30' height= '30'>" + humValue12 + " %  </p></li></ul>";
        let tempValue20 = data['list']['20']['main']['temp'];
        let maxValue20 = data['list']['20']['main']['temp_max'];
        let minValue20 = data['list']['20']['main']['temp_min'];
        let descValue20 = data['list']['20']['weather'][0]['description'];
        let windValue20 = data['list']['20']['wind']['speed'];
        let pressureValue20 = data['list']['20']['main']['pressure'];
        let feelsValue20 = data['list']['20']['main']['feels_like'];
        let dttxtValue20 = data['list']['20']['dt_txt']; //дата
        let iconValue20 = data['list']['20']['weather'][0]['icon'];
        let humValue20 = data['list']['20']['main']['humidity'];
        //Перевод в грдусы
        let tmp20 = tempValue20 - 273.15;
        let fee20 = feelsValue20 - 273.15;
        let mitmp20 = minValue20 - 273.15;
        let matmp20 = maxValue20 - 273.15;
        //демонстрация на экране 
        day10.innerHTML = "<ul><li id='time'>" + dttxtValue20 + "</li><li id='fi'> <p><img src='http://openweathermap.org/img/w/" + iconValue20 + ".png' width= '150' height= '150' align='left'>" + descValue20 + "</p></li><li><p id='ty'> <img src='temp.png'  width= '30' height= '30'> " + Math.ceil(tmp20) + "&deg;C &nbsp;&nbsp;Чувствуется как " + Math.ceil(fee20) + "&deg;C &nbsp;&nbsp; Max <img src='temp.png'  width= '30' height= '30'> " + Math.ceil(mitmp20) + "&deg;C &nbsp;&nbsp; Min <img src='temp.png'  width= '30' height= '30'> " + Math.ceil(matmp20) + "&deg;C &nbsp;&nbsp;</p></li><li><p id='ty'> <img src='pressure_4667.png'  width= '30' height= '30'>  " + pressureValue20 + "&nbsp;&nbsp;&nbsp;&nbsp;<img src='speed.png'  width= '30' height= '30'> " + windValue20 + " м/с &nbsp;&nbsp;&nbsp;&nbsp;<img src='hum.png'  width= '30' height= '30'>" + humValue20 + " %  </p></li></ul>";
        let tempValue28 = data['list']['28']['main']['temp'];
        let maxValue28 = data['list']['28']['main']['temp_max'];
        let minValue28 = data['list']['28']['main']['temp_min'];
        let descValue28 = data['list']['28']['weather'][0]['description'];
        let windValue28 = data['list']['28']['wind']['speed'];
        let pressureValue28 = data['list']['28']['main']['pressure'];
        let feelsValue28 = data['list']['28']['main']['feels_like'];
        let dttxtValue28 = data['list']['28']['dt_txt']; //дата
        let iconValue28 = data['list']['28']['weather'][0]['icon'];
        let humValue28 = data['list']['28']['main']['humidity'];
        //Перевод в грдусы
        let tmp28 = tempValue28 - 273.15;
        let fee28 = feelsValue28 - 273.15;
        let mitmp28 = minValue28 - 273.15;
        let matmp28 = maxValue28 - 273.15;
        //демонстрация на экране 
        day11.innerHTML = "<ul><li id='time'>" + dttxtValue28 + "</li><li id='fi'> <p><img src='http://openweathermap.org/img/w/" + iconValue28 + ".png' width= '150' height= '150' align='left'>" + descValue28 + "</p></li><li><p id='ty'> <img src='temp.png'  width= '30' height= '30'> " + Math.ceil(tmp28) + "&deg;C &nbsp;&nbsp;Чувствуется как " + Math.ceil(fee28) + "&deg;C &nbsp;&nbsp; Max <img src='temp.png'  width= '30' height= '30'> " + Math.ceil(mitmp28) + "&deg;C &nbsp;&nbsp; Min <img src='temp.png'  width= '30' height= '30'> " + Math.ceil(matmp28) + "&deg;C &nbsp;&nbsp;</p></li><li><p id='ty'> <img src='pressure_4667.png'  width= '30' height= '30'>  " + pressureValue28 + "&nbsp;&nbsp;&nbsp;&nbsp;<img src='speed.png'  width= '30' height= '30'> " + windValue28 + " м/с &nbsp;&nbsp;&nbsp;&nbsp;<img src='hum.png'  width= '30' height= '30'>" + humValue28 + " %  </p></li></ul>";
        let tempValue36 = data['list']['36']['main']['temp'];
        let maxValue36 = data['list']['36']['main']['temp_max'];
        let minValue36 = data['list']['36']['main']['temp_min'];
        let descValue36 = data['list']['36']['weather'][0]['description'];
        let windValue36 = data['list']['36']['wind']['speed'];
        let pressureValue36 = data['list']['36']['main']['pressure'];
        let feelsValue36 = data['list']['36']['main']['feels_like'];
        let dttxtValue36 = data['list']['36']['dt_txt']; //дата
        let iconValue36 = data['list']['36']['weather'][0]['icon'];
        let humValue36 = data['list']['36']['main']['humidity'];
        //Перевод в грдусы
        let tmp36 = tempValue36 - 273.15;
        let fee36 = feelsValue36 - 273.15;
        let mitmp36 = minValue36 - 273.15;
        let matmp36 = maxValue36 - 273.15;
        //демонстрация на экране 
        day12.innerHTML = "<ul><li id='time'>" + dttxtValue36 + "</li><li id='fi'> <p><img src='http://openweathermap.org/img/w/" + iconValue36 + ".png' width= '150' height= '150' align='left'>" + descValue36 + "</p></li><li><p id='ty'> <img src='temp.png'  width= '30' height= '30'> " + Math.ceil(tmp36) + "&deg;C &nbsp;&nbsp;Чувствуется как " + Math.ceil(fee36) + "&deg;C &nbsp;&nbsp; Max <img src='temp.png'  width= '30' height= '30'> " + Math.ceil(mitmp36) + "&deg;C &nbsp;&nbsp; Min <img src='temp.png'  width= '30' height= '30'> " + Math.ceil(matmp36) + "&deg;C &nbsp;&nbsp;</p></li><li><p id='ty'> <img src='pressure_4667.png'  width= '30' height= '30'>  " + pressureValue36 + "&nbsp;&nbsp;&nbsp;&nbsp;<img src='speed.png'  width= '30' height= '30'> " + windValue36 + " м/с &nbsp;&nbsp;&nbsp;&nbsp;<img src='hum.png'  width= '30' height= '30'>" + humValue36 + " %  </p></li></ul>";
    } catch {
        alert("Введите другой город");
    }
}