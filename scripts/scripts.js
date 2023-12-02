$('document').ready(function(){
    $(".complete-actions").hide();
    $("input[name$='job-type']").click(function(){
        var jobtype = $(this).val();
        if (jobtype == "complete-install") 
            $('.complete-actions').show();
        else
            $('.complete-actions').hide();
    });

    // Submit Button, just prints info for debug reasons.
    $('.submit').click(function(){
        printInfo();
    });
});