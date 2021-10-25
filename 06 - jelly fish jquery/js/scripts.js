$(document).ready(function(){

    console.log("DOM is loaded.");

    $('#hide').click(function(){
        $('#info').hide(1000);
    });

    $('#show').click(function(){
        $('#info').show(1000);
    });

    $('#toggle').click(function(){
        $('#info').toggle(1000);
    });

});