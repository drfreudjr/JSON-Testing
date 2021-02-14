/* Javascript Shell */
// 'use strict';
let cl = console.log;

document.write("Javascript Active: " + Date());

$(document).ready(function(){
    $('div').html('jQuery online')

}); 

 x =      function read_json() {
            $.getJSON("/test.json", function(data) {
                alert("My data: " + data["mydata"]);
                $.each(data["prime"], function(idx,prime) {
                    alert("Prime number: " + prime);
                });
            });
        }

cl(x.employee,name)
