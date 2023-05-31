const sd = document.getElementById('dataTable');
$(function(){
    $("button").on("click",loadServerData);
});
function loadServerData(){
    sd.replaceChildren();
    let rss2json ="https://api.rss2json.com/v1/api.json?rss_url=";
    $.getJSON(rss2json+"https://www.reddit.com/.rss")
    .done(function(data) {
        // debugger;
        for(let x=0;x<data.items.length;x++){
            if(data.items[x].thumbnail)
            {
                $("#dataTable").append(
                    `<tr><td><a target='_blank'
                     href='${data.items[x].link}'>${data.items[x].title}</a></td>
                     <td><img src='${data.items[x].thumbnail}' width="35%"/></td>
                     <td>${data.items[x].pubDate.split(" ")[0]}</td></tr>`
                        );
            }
            else
            {
                $("#dataTable").append(
                    `<tr><td><a target='_blank'
                        href='${data.items[x].link}'>${data.items[x].title}</a></td>
                        <td><img src='no-image-png-2.png' width="35%"/></td>
                        <td>${data.items[x].pubDate.split(" ")[0]}</td></tr>`
                        );
            }
           
                }
                console.log("Success");
            })
            .fail(function(){ console.log("Error");})
            .always(function(){console.log("Always");});
        }