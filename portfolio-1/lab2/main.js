$(function(){
    
    
    var btn = document.querySelector('.btnclass');
    var btn2 = document.querySelector('.btnclass2');
    
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");

        let topicCount= topic.length;
        var dateinput = $("#input").val();
        var y=dateinput.split("-")[0];
        var m=dateinput.split("-")[1]-1;
        var d=dateinput.split("-")[2];
        var timebuffer=new Date(y,m,d)
        var time=(timebuffer).toLocaleDateString()
        // $("h1").text((time));
        // let millisecsPerDay = 24*60*60*1000;
        for(var x=0;x<topicCount;x++){
            // var a=(new Date(time+7*x*millisecsPerDay)).toLocaleDateString()
            if(x!=0)
                timebuffer.setDate(timebuffer.getDate()+7);
            var time2=(timebuffer).toLocaleDateString()
            

            $("#courseTable").append(
                "<tr>"+
                `<td>${x+1}</td>`+
                `<td>${(time2).substr(5)}</td>`+`
                <td>${topic[x]}</td>`+
                "</tr>");
            if(topic[x]=='國定假日'||topic[x]=='停課')
                {var changecolor=document.getElementById("courseTable");
                changecolor.rows[x+1].style.color = "gray";}
                
        }
    
btn.onclick=function(){
    var btn = document.querySelector('.btnclass');
        $("#courseTable tr").remove();
        $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");

        let topicCount= topic.length;
        var dateinput = $("#input").val();
        var y=dateinput.split("-")[0];
        var m=dateinput.split("-")[1]-1;
        var d=dateinput.split("-")[2];
        var timebuffer=new Date(y,m,d)
        var time=(timebuffer).toLocaleDateString()
        // $("h1").text((time));
        // let millisecsPerDay = 24*60*60*1000;
        for(var x=0;x<topicCount;x++){
            // var a=(new Date(time+7*x*millisecsPerDay)).toLocaleDateString()
            if(x!=0)
                timebuffer.setDate(timebuffer.getDate()+7);
            var time2=(timebuffer).toLocaleDateString()
            $("#courseTable").append(
                "<tr>"+
                `<td>${x+1}</td>`+
                `<td>${(time2).substr(5)}</td>`+`
                <td>${topic[x]}</td>`+
                "</tr>");
            if(topic[x]=='國定假日'||topic[x]=='停課')
                {var changecolor=document.getElementById("courseTable");
                changecolor.rows[x+1].style.color = "gray";}
            }
    
};  

btn2.onclick=function(){
    var activity=document.getElementById("txt").value.toString();
    topic.push((activity))
    // $("h1").text((String(activity)));
    var btn = document.querySelector('.btnclass');
        $("#courseTable tr").remove();
        $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");

        let topicCount= topic.length;
        var dateinput = $("#input").val();
        var y=dateinput.split("-")[0];
        var m=dateinput.split("-")[1]-1;
        var d=dateinput.split("-")[2];
        var timebuffer=new Date(y,m,d)
        var time=(timebuffer).toLocaleDateString()
        // $("h1").text((time));
        // let millisecsPerDay = 24*60*60*1000;
        for(var x=0;x<topicCount;x++){
            // var a=(new Date(time+7*x*millisecsPerDay)).toLocaleDateString()
            if(x!=0)
                timebuffer.setDate(timebuffer.getDate()+7);
            var time2=(timebuffer).toLocaleDateString()
            $("#courseTable").append(
                "<tr>"+
                `<td>${x+1}</td>`+
                `<td>${(time2).substr(5)}</td>`+`
                <td>${topic[x]}</td>`+
                "</tr>");
            if(topic[x]=='國定假日'||topic[x]=='停課')
                {var changecolor=document.getElementById("courseTable");
                changecolor.rows[x+1].style.color = "gray";}
        }
    
};  



});




