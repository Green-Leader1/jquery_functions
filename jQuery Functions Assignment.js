$(document).ready(function(){
    $('.click').click(function(){
        alert("Emergency Alert!!!")
    })

    $('.hide').click(function(){
        $(".hide").hide()
    })

    $('.show').click(function(){
        $(".hide").show()
    })

    $('.toggle').click(function(){
        $(".hide").toggle()
    })

    $('.slideDown').click(function(){
        $(".hidden").slideDown()
    })

    $('.slideUp').click(function(){
        $("#slideUp").slideUp()
    })

    $('.slideToggle').click(function(){
        $("#slideToggle").slideToggle()
    })

    $('.fadeIn').click(function(){
        $("#fadeIn").fadeIn()
    })

    $('.fadeOut').click(function(){
        $("#fadeOut").fadeOut()
    })

    $('.addClass').click(function(){
        $("#addClass").addClass("green")
    })

    $('.before').click(function(){
        $("#before").before("<h1>New text pops here</h1>")
    })

    $('.after').click(function(){
        $("#after").after("<h1>New text pops here</h1>")
    })

    $('.append').click(function(){
        $("#append").append("<span>Span text here</span>")
    })

    $('.html').click(function(){
        $("#html").html("<h1>New H1 Element</h1>")
    })

    $('.attr').click(function(){
        var classVal = $("#attr").attr("class")
        $('#attr').append(classVal)
    })

    $('.attr2').click(function(){
        $("#attr").attr("class", "red")
    })

    $('.val').click(function(){
        console.log($("#val").val())
    })

    $('.val2').click(function(){
        $('#val').val("open")
    })

    $('.text').click(function(){
        $("#text").text("New Text")
    })

    var ele = $("#data")
    $.data(ele, "name", "Alex")
    $('.data').click(function(){
        var value = $.data(ele,"name")
        $("#data").after(value)
    })
})