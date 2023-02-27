$(document).ready(function() {
  
  // Fungsi untuk menampilkan harga produk
  $('#product').on('change', function() {
    var product = $(this).val();
    var price;
    switch (product) {
      case 'sapi_standard':
        price = 'Rp. 5.000.000';
        break;
      case 'sapi_medium':
        price = 'Rp. 7.500.000';
        break;
      case 'sapi_super':
        price = 'Rp. 10.000.000';
        break;
      case 'kambing_standard':
        price = 'Rp. 2.000.000';
        break;
      case 'kambing_medium':
        price = 'Rp. 3.000.000';
        break;
      case 'kambing_super':
        price = 'Rp. 4.000.000';
        break;
      case 'aqiqah_sederhana':
        price = 'Rp. 2.500.000';
        break;
      case 'aqiqah_lumayan':
        price = 'Rp. 4.000.000';
        break;
      case 'aqiqah_lumayan_hemat':
        price = 'Rp. 3.000.000';
        break;
      case 'aqiqah_standar':
        price = 'Rp. 5.000.000';
        break;
      case 'aqiqah_super':
        price = 'Rp. 7.500.000';
        break;
      default:
        price = 'Rp. 0';
    }
    $('#price').val(price);
  });
  
  // Fungsi untuk menampilkan form sesuai dengan metode pembayaran yang dipilih
  $('#payment_method').on('change', function() {
    var payment_method = $(this).val();
    if (payment_method == 'qris') {
      $('#qris_form').show();
      $('#transfer_form').hide();
    } else if (payment_method == 'transfer_bank') {
      $('#qris_form').hide();
      $('#transfer_form').show();
      $('#bank_name').text('Bank ABC');
      $('#account_name').text('John Doe');
      $('#account_number').text('12020121223');
    } else {
      $('#qris_form').hide();
      $('#transfer_form').hide();
    }
  });
  
  // Fungsi untuk mengirim pesan via WhatsApp
  $('.send').on('click', function() {
    var name = $('#name').val();
    var email = $('#email').val();
    var phone = $('#phone').val();
    var product = $('#product').val();
    var price = $('#price').val();
    var payment_method = $('#payment_method').val();
    var qris_code = $('#qris_code').val();
    var bank = $('#bank').val();
    var account_number = $('#account_number').val();
    var description = $('#description').val();
    
    var message = 'Halo, saya ingin memesan ' + product + ' dengan harga ' + price + ' menggunakan ' + payment_method + '.';
    if (payment_method == 'qris') {
      message += ' Silakan scan QRIS ini untuk melakukan pembayaran: ' + qris_code;
    } else if (payment_method == 'transfer_bank') {
      message += ' Silakan transfer ke rekening ' + bank + ' dengan nomor ' + account_number + '.';
    }
    message += ' Catatan: ' + description;
    
    var whatsapp_url = 'https://api.whatsapp.com/send?phone=6282298779125&text' + phone + '&text=' + encodeURIComponent(message);
    window.open(whatsapp_url);
  });
  
});
