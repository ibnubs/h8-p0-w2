//Exercise-7-Perulangan-Play with asterisks

//Soal no.1 - Menyusun Barisan Bintang

    //input
    row1 (5);

    //output
    function row1 (n){
        for (var i=1; i<=n; i++){
            console.log('*');
        }
    }

//End of soal no.1

//Soal no.2 - Menyusun Barisan Bintang Dengan Nested Looping

    //input
    row2(5)

    //output
    function row2(num) {
        for (var i=0; i<num; i++){
            var asterisks = ''

            for (var j=0; j<num; j++){
                asterisks +='*'
            }
            console.log (asterisks)
        }
    }

//End of soal no.2

//Soal no.3 - Menyusun Barisan Tangga Bintang Dengan Nested Looping

    var row3 = 5;
    var result = '*';
    while(result.length <=row3 ){
        console.log(result);
        result += '*';
    }


//End of soal no.3