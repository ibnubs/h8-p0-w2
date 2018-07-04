//Exercise-3 (Mengenal penggunaan Conditional if-else dalam Javascript)
//Proxytia Game

//Greathing
console.log('"Welcome Proxytia Game"');

//Input
var nama = '';
var peran = '';
var pesan = '"Selamat datang di Dunia Proxytia, ';


//Output
  if (nama == ''){
  console.log ('"Silahkan Input Nama dan Pilih Peran untuk memulai permainan"')
  console.log ('(Peran : "Ksatria"; "Tabib" ;"Penyihir") ')
  }
    else if (peran == 'Ksatria'){
    console.log (pesan +''+nama+'"')
    console.log ('"Halo ' + peran +' '+ nama +','+ ' kamu dapat menyerang dengan senjatamu!"' );
    } 
      else if (peran == 'Tabib') {
      console.log (pesan +''+nama+'"')
      console.log ('"Halo ' + peran +' '+ nama +','+ ' kamu akan membantu temanmu yang terluka."' );
      } 
        else if (peran == 'Penyihir') {
        console.log (pesan +''+nama+'"')
        console.log ('"Halo ' + peran +' '+ nama +','+ ' ciptakan keajaiban yang membantu kemenanganmu!"' )
        } 
          else {
            console.log('"Halo ' + nama + ', Pilih peranmu untuk memulai game!"')
            console.log ('Peran : "Ksatria"; "Tabib" ;"Penyihir" ')
          }