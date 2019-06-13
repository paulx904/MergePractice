var picture =[
    "RandomSelector/img/ramen.jpg","RandomSelector/img/rice.jpg","RandomSelector/img/dumpling.jpg",
    "RandomSelector/img/sushi.jpg","RandomSelector/img/steak.jpg"
]

$(document).ready(function(){
    $("input").click(function()
    {
        var numberOfListItem = $("#choices li").length;
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        
        $("H1").text($("#choices li").eq(randomChildNumber).text());
        //$("h1").text($("li").eq(randomChildNumber).text());
        $("img").attr("src",picture[randomChildNumber]);
        $("img").attr("width",500);
        $("img").attr("height",500);
        
    });
});