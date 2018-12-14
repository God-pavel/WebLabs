'use strict';


function task1(){

  let elem = document.getElementById('task1');
  let x1 = parseInt(elem.getElementsByClassName('x1')[0].value,10);
  let x2 = parseInt(elem.getElementsByClassName('x2')[0].value,10);
  let x3 = parseInt(elem.getElementsByClassName('x3')[0].value,10);
  let y1 = parseInt(elem.getElementsByClassName('y1')[0].value,10);
  let y2 = parseInt(elem.getElementsByClassName('y2')[0].value,10);
  let y3 = parseInt(elem.getElementsByClassName('y3')[0].value,10);

  let side1 = Math.sqrt(Math.pow(Math.abs(x2-x1),2)+Math.pow(Math.abs(y2-y1),2)).toFixed(2);
  let side2 = Math.sqrt(Math.pow(Math.abs(x3-x1),2)+Math.pow(Math.abs(y3-y1),2)).toFixed(2);
  let side3 = Math.sqrt(Math.pow(Math.abs(x3-x2),2)+Math.pow(Math.abs(y3-y2),2)).toFixed(2);
  let p = side1/2 + side2/2 + side3/2;
  let area = Math.sqrt((p-side1)*(p-side2)*(p-side3)*p).toFixed(5);
  elem.getElementsByClassName('answer')[0].value = area;
}


function task2(){
  let elem = document.getElementById('task2');
  let cur = elem.getElementsByClassName('swap')[0].value;
  elem.getElementsByClassName('swap')[0].value = elem.getElementsByClassName('swap')[1].value;
  elem.getElementsByClassName('swap')[1].value = cur;
}

function task3(){
  let elem = document.getElementById('task3');
  let arr = elem.getElementsByClassName('arr')[0].value.split(' ');
  let max = parseInt(arr[0],10);
  let counter = 0;
  for(let i = 1; i < arr.length; i++){
    arr[i] = parseInt(arr[i],10);
    if(arr[i] > max){
      max = arr[i];
    }
  }
  for(let i = 0; i < arr.length; i++){
    if (arr[i] == max){
      counter++;
    }
  }
  elem.getElementsByClassName('result')[0].value = max + " встречается " + counter + " раз";
}

function task4(){
  let elem = document.getElementById('task4');
  let side1 = parseInt(elem.getElementsByClassName('side1')[0].value,10);
  let side2 = parseInt(elem.getElementsByClassName('side2')[0].value,10);
  let side3 = parseInt(elem.getElementsByClassName('side3')[0].value,10);
  let max = side1;
  let sum = side1 + side2 + side3;
  if(side2 > max){
    max = side2;
  }
  if(side3 > max){
    max = side3;
  }
  console.log(max)
  if(sum - max > sum/2){
    elem.getElementsByClassName('result')[0].value = "Можно посторить треугольник";
  }
  else{
    elem.getElementsByClassName('result')[0].value = "Нельзя посторить треугольник";
  }
}

function task5(id, action){
  let elem = document.getElementById(id);
  if(action === 'over') elem.style.height = '250px';
  if(action === 'out') elem.style.height = '200px';
}

function task6(option){
  let elem = document.getElementById('line');
  let width = parseInt(elem.style.width, 10);
  if(option == "smaller"){
    width -= 50;
    elem.style.width = width;
  }
  if(option == "bigger"){
    width +=50;
    elem.style.width = width;
  }
  if(option == "left"){
    elem.align = "left";
  }
  if(option == "right"){
    elem.align = "right";
  }
}

function task7(){
  let elem = document.getElementById('task7');
  let forms = elem.getElementsByClassName('form');
  let course = forms[0].value;
  let duration = forms[1].value;
  let language = forms[2].value;
  let form = forms[3].value;
  let total = 0;

  switch (course) {
    case 'JS': total = 4999; break;
    case 'PHP': total = 3499; break;
    case 'HTML': total = 2999; break;
    case 'JQuery': total = 3999; break;
  }

  total *= parseInt(duration, 10);

  switch (language) {
    case 'eng': total *= 1.5; break;
    case 'ukr': total *= 1; break;
    case 'rus': total *= 1; break;
    case 'ger': total *= 2; break;
  }

  switch (form) {
    case "online": total *= 1; break;
    case "ftf" : total *= 2; break;
  }

  forms[4].value = total;
}

function task8(elem, option){
  if (option == 'colour'){
    let colours = ['rgb(255, 0, 0)', 'rgb(0, 255, 0)', 'rgb(255, 255, 0)'];
    let curr_col = elem.style.background;
    let new_col = curr_col;
    while(new_col == curr_col){
      new_col = colours[Math.floor(Math.random() * 3)];
    }
    elem.style.background = new_col;
  }
  if (option == 'background'){
    document.getElementById('table').style.backgroundImage = 'url(./img/' + elem.value + '.jpg' + ')';
  }
}

function task9(){
  let elems = document.getElementsByClassName('order');
  let new_order;
  let new_total = parseInt(elems[1].value, 10) * parseInt(elems[2].value, 10);;
  if(elems[3].value != ''){

    new_order = elems[3].value.split('\n');
    let curr_total = parseInt(new_order.pop().split(' ')[1])
    new_order = new_order.join('\n');
    new_order += '\n' + elems[0].value + ' ' + elems[1].value + 'X' + elems[2].value + ' = ' +
    parseInt(elems[1].value, 10) * parseInt(elems[2].value, 10) + 'грн\n' +
    'Сумма: ' + (curr_total + new_total) + 'грн';

  } else {

    new_order = 'Перечень товаров:' + '\n' +
    elems[0].value + ' ' + elems[1].value + 'X' + elems[2].value + ' = ' +
    parseInt(elems[1].value, 10) * parseInt(elems[2].value, 10) + 'грн\n' +
    'Сумма: ' + new_total + 'грн';

  }
  elems[3].rows = new_order.split('\n').length;
  elems[3].value = new_order;
}

function task10(){
  let elem = document.getElementById('task10');
  let rev = elem.getElementsByClassName("num")[0].value.split('').reverse().join('');
  elem.getElementsByClassName("reverse")[0].value = rev;
}

function task11(){
  let elem = document.getElementById('task11');
  let num = parseInt(elem.getElementsByClassName("num")[0].value, 10);
  let dividers = [];
  for (let i = 1; i <= num; i++){
    if(num % i == 0) dividers.push(i);
  }
  elem.getElementsByClassName('dividers')[0].value = dividers.join(', ');
}

function task12(){

  function add_zeros(num){
    while(num.length < 6){
      num.unshift('0');
    }
    return num;
  }

  function is_lucky(num){
    let sum_1 = 0, sum_2 = 0;
    for(let i = 0; i < 3; i++){
      sum_1 += parseInt(num[i], 10);
      sum_2 += parseInt(num[i + 3], 10);
    }
    if(sum_1==sum_2){return true}
    else{return false}
  }

  let counter = 0;
  let curr_num = [];
  for(let i = 0; i < 1000000; i++){
    curr_num = add_zeros(i.toString().split(''));
    counter += is_lucky(curr_num);
  }
  document.getElementById('ticket').value = counter;
}

function task13(){
  let elem = document.getElementById('task13');
  let elems = elem.getElementsByClassName('week');
  let date = elems[0].value;
  date = date.split('.');
  for(let i = 0; i < 3; i++){
    date[i] = parseInt(date[i],10)
  }
  console.log(date);
  let week;
  if (date[1] > 2){
    console.log("1")
    if (date[2] % 4 == 0){
      console.log("2")
      let days = 31 + 29 + date[0];
      for(let i = 3; i < date[1]; i++){
        console.log('3')
        if(i%2 == 0){
          days+=31
        }
        else{days+=30}
      console.log(days);
      week = Math.ceil(days/7)
      }
    }
    else {
      let days = 31 + 29 + date[0];
      for(let i = 3; i < date[1]; i++){
        if(i%2 == 0){
          days+=31
        }
        else{days+=30}
      console.log(days);
      week = Math.ceil(days/7)
      }
    }
    }
  else if (date[1] == 2) {
    console.log('7')
    week = Math.ceil((31 + date[0])/7)
  }
  else if (date[1] == 1){
    console.log('9')
    week = Math.ceil(date[0]/7)
  }
  elem.getElementsByClassName('week')[1].value = week;

}

function task14(){
  let elem = document.getElementById('task14');
  let text = elem.getElementsByClassName("field")[0].value.split(' ');
  let counter = 0;
  for (let i of text){
    if (i !== '') counter++;
  }
  elem.getElementsByClassName('result')[0].value = counter;
}

function task15(){
  let context = document.getElementById('canvas').getContext('2d');
  let width = 700, height = 300;
  let image = document.getElementById("image");

  drawImage("./img/1.jpg",2,0)

  let i = 0, g = 0;
  setInterval(function(){
    console.log(i,g)
    drawImage("./img/1.jpg",i,g)
    if(i==2 && g==0){
      g = 1;
      i = -1;
    }
    if(i==2 && g ==1){
      g = 0;
      i = -1;
    }
    i++;
  },150);



  function drawImage(img,x,y){
    image.onload = function() {
      width = image.width;
      height = image.height;
      console.log(width)
      if (x==0&&y==0){
        context.drawImage(image, 161*x, 249*y+15, 161, 249, 0, 0, 161, 249);
      }
      else if (x==1&&y==0){
        context.drawImage(image, 161*x, 249*y, 161, 249, 0, 0, 161, 249);
      }
      else if (x==2&&y==0) {
        context.drawImage(image, 161*x+15, 249*y+7, 161, 249, 0, 0, 161, 249);
      }
      else if (x==0&&y==1){
        context.drawImage(image, 161*x, 249*y+4, 161, 249, 0, 0, 161, 249);
      }
      else if (x==1&&y==1){
        context.drawImage(image, 161*x, 249*y+4, 161, 249, 0, 0, 161, 249);
      }
      else if (x==2&&y==1){
        context.drawImage(image, 161*x+15, 249*y+10, 161, 249, 0, 0, 161, 249);
      }
      console.log(height)
      image.style.display = 'none';
    }
    image.src = img;
  }
}

function task16(){
  let elem = document.getElementById('task16');
  let result;
  let text = elem.getElementsByClassName("email")[0].value;
  console.log(text)
  let reg = /^[a-zA-Z0-9.-_]+/
  if(reg.test(text)){
    result = "valid";
  }
  else{
    result = "not valid";
  }
  elem.getElementsByClassName('result')[0].value = result;
}
