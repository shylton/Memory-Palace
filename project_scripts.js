// function add_b4() {
//     let x = document.getElementById("loci_name").value
//     req = $.ajax({
//         url: 'https://reqbin.com/echo/post/json',
//         data: {'test':x},
//         type: 'POST',
//     });
// }

// $("#add_b4").click(function(){
//     let x = document.getElementById("loci_name").value;
//     req = $.ajax({
//         url: 'https://reqbin.com/echo/post/json',
//         data: {'test':x},
//         type: 'POST',
//     });
// });



$(document).ready(function(){
    $("#add_b4").on('click', function(){
        let x = document.getElementById("loci_name").value;
        req = $.ajax({
            data: {'test':x},
            type: 'POST',
        });
        req.done(function(data) {
            alert('!')
        })
    });
});
