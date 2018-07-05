//Exercise-6 Berlatih Perulangan di Javascript

//Soal.1. Melakukan Looping Menggunakan While

//Hasil Output yang diinginkan soal 1.
// LOOPING PERTAMA
// 2 - I love coding
// 4 - I love coding
// 6 - I love coding
// 8 - I love coding
// 10 - I love coding
// 12 - I love coding
// 14 - I love coding
// 16 - I love coding
// 18 - I love coding
// 20 - I love coding
// LOOPING KEDUA
// 20 - I will become fullstack developer
// 18 - I will become fullstack developer                                                                              
// 16 - I will become fullstack developer
// 14 - I will become fullstack developer
// 12 - I will become fullstack developer
// 10 - I will become fullstack developer
// 8 - I will become fullstack developer
// 6 - I will become fullstack developer
// 4 - I will become fullstack developer
// 2 - I will become fullstack developer

// code for soal 1

console.log('LOOPING PERTAMA');
  var i = 0;
  var j = 2;
    while (i < 10) {
      i++;
      console.log(i*j + ' - I love coding');
    }
console.log('LOOPING KEDUA');
  var i = 11;
  var j = 2;
    while (i > 1) {
      i--;
      console.log(i*j + ' - I will become fullstack developer');
    }

//End of Soal 1--------------------------------------------

//Soal.2. Melakukan Looping Menggunakan For

//Hasil Output yang diinginkan soal 2.
// LOOPING PERTAMA
// 1 - I love coding
// 2 - I love coding
// 3 - I love coding
// 4 - I love coding
// 5 - I love coding 
// 6 - I love coding
// 7 - I love coding
// 8 - I love coding
// 9 - I love coding
// 10 - I love coding
// 11 - I love coding
// 12 - I love coding 
// 13 - I love coding
// 14 - I love coding
// 15 - I love coding
// 16 - I love coding
// 17 - I love coding
// 18 - I love coding
// 19 - I love coding
// 20 - I love coding
// LOOPING KEDUA
// 20 - I will become fullstack developer
// 19 - I will become fullstack developer
// 18 - I will become fullstack developer
// 17 - I will become fullstack developer
// 16 - I will become fullstack developer
// 15 - I will become fullstack developer
// 14 - I will become fullstack developer
// 13 - I will become fullstack developer
// 12 - I will become fullstack developer
// 11 - I will become fullstack developer
// 10 - I will become fullstack developer
// 9 - I will become fullstack developer
// 8 - I will become fullstack developer
// 7 - I will become fullstack developer
// 6 - I will become fullstack developer
// 5 - I will become fullstack developer
// 4 - I will become fullstack developer
// 3 - I will become fullstack developer
// 2 - I will become fullstack developer
// 1 - I will become fullstack developer

//Code for Soal 2

console.log('LOOPING PERTAMA');
  for (i = 1; i<21; i++) {
    console.log(i +' - I love coding');
  }

console.log('LOOPING KEDUA');
  for (i = 20; i>0; i--) {
    console.log(i +' - I will become fullstack developer');
  }

//End of Soal 2  

//Soal.3. Angka Ganjil dan Genap

  //Ganjil-Genap
  for (i=1 ; i <=100; i++){
    if (i % 2 == 0) {
      console.log (i + ' GENAP');
    }   
        else{
          console.log (i + ' GANJIL');
        }
    
  }

  //Pertambahan Counter 2

  for( i = 1; i <= 100; i+=2){
    if((i%3)===0){
      console.log(i + ' KELIPATAN 3');
    }
      else {
        console.log(' ');
      }
  }

  //Pertambahan Counter 5

  for( i = 1; i <= 100; i+=5){
    if((i%6)===0){
      console.log(i + ' KELIPATAN 6');
    }
      else {
        console.log(' ');
      }
  }

  //Pertambahan Counter 9

  for( i = 1; i <= 100; i+=9){
    if((i%10)===0){
      console.log(i + ' KELIPATAN 10');
    }
      else {
        console.log(' ');
      }
  }

//End of Soal 3  