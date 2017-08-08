window.onload = function(){
    $("#menuu").hide();
    $("#but1").click(function(){
        document.location.href = "/index1.html";
    });
    $("#flexbox1").click(function(){
        document.location.href = "/index3.html";
    });
    $("#flexbox2").click(function(){
        document.location.href = "/index3.html";
    });
    $("#but3").click(function(){
        document.location.href = "/index3.html";
    });
    $("#but2").click(function(){
        document.location.href = "/index2.html";
    });
    $("#note").click(function(){
        document.location.href = "/index3.html";
    });
    $("#send").click(function(){
        document.location.href = "/index4.html";
    });

    $("#menu").click(function(){
        if ($("#menuu").is(":visible"))
        $("#menuu").hide();
        else $("#menuu").show();
    });
}