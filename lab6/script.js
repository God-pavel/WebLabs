$(document).ready(function(){


    $("table#table1 td").html("<p>текст у клітинці</p>");
    $("table#table1 td[colspan]").css("color", "red");
    let fs = parseInt($("table#table1 td").css("font-size"));
    $("table#table1 td[rowspan]").css("font-size", fs * 2 + "px");

    $("table#table3 td").html("<div>текст у клітинці</div>");
    $("table#table3").css("background-color", "blue");
    $("table#table3 tr:nth-child(3n)").css("font-style", "italic");
    $("table#table3 tr:gt(3)").css("text-transform", "uppercase");

    $("table#table4 tr:first td").html("<pre>текст у клітинці</pre>");
    $("table#table4 tr:first td:odd").css("color", "green");
    $("table#table4 tr:first td:eq(2)").append("<hr>");
    $("table#table4 tr:last td:first").html("<ul>" + "<li>1 рядок</li>" + "<li>2 рядок</li>" + "<li>3 рядок</li>" + "<li>4 рядок</li>" + "</ul>");
    $("table#table4 tr:last td:eq(0) ul li").each(function () {
        alert($(this).text());
    });
});
