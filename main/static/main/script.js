$(document).ready(function(){
    $('#AddButton').click( function() {
        var counter = $('#TextBox').val();
        counter++ ;
        $('#TextBox').val(counter);
    });
});