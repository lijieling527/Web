let imageURL_Array=[
    "https://photo.518.com.tw/selfmedia/articles/1822/166184376108829.jpeg",
    "https://lordcat.tw/wp-content/uploads/2021/09/1631538408-378fce845ce05de4c29be3e870b50e13.jpg",
    "https://tokyo-kitchen.icook.network/uploads/recipe/cover/355834/b8ce15624e2ddb11.jpg"
    
];


var randomChildNumber,buffer
$(function(){
    $("input").on("click",function(){
        //alert("Hi");
        //$("h1").text("Hello");
        //$("h1").text($("li:first").text());
        var numberOfListItem=$("li").length;
        randomChildNumber=Math.floor(Math.random()*numberOfListItem);
        while(randomChildNumber==buffer)
            randomChildNumber=Math.floor(Math.random()*numberOfListItem);
        buffer=randomChildNumber
        $("h1").text($("li").eq(randomChildNumber).text());

        $("img").attr("src",imageURL_Array[randomChildNumber]);
    });
});
