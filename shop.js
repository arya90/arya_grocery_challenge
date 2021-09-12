//$(document).ready(function () {
//   $.getJSON("shop.json",function (data) {
//       var Shop_data = '';
//       $.each(data, function (key, value) {
//           Shop_data += '<tr>';
//           Shop_data += '<td>' + value.Serialno+ '</td>';

//            Shop_data += '<td>' +value.Name+ '</td>';

//            Shop_data += '<td>' +value.Quantity + '</td>';

//           Shop_data += '<td>' + value.Unit+ '</td>';
//           Shop_data += '<td>' + value.Department+ '</td>';
//          Shop_data += '<td>' + value.Notes+ '</td>';

//            Shop_data += '</tr>';
//       });
//INSERTING ROWS INTO TABLE 
//       $('#shop_table').append(Shop_data);
//    });
//});
const htmlBtn=document.getElementById("btn");


$(document).ready(function () {

    $(".btn").click(function () {
        $.getJSON("shop.json", function (data) {
            var Shop_data = '';
            $.each(data, function (key, value) {
                Shop_data += '<tr>';
                Shop_data += '<td>' + value.Serialno + '</td>';

                Shop_data += '<td>' + value.Name + '</td>';

                Shop_data += '<td>' + value.Quantity + '</td>';

                Shop_data += '<td>' + value.Unit + '</td>';
                Shop_data += '<td>' + value.Department + '</td>';
                Shop_data += '<td>' + value.Notes + '</td>';

                Shop_data += '</tr>';
                htmlBtn.disabled=true;

            });

            $('#shop_table').append(Shop_data);

        });



    });

});