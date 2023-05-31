$(function(){
    $("[type='checkbox']").on("change",updateProgress);
   
});
function updateProgress(){
    let hasChecked=0;
    for(let x=0;x<$("[type='checkbox']").length;x++){
        if($("[type='checkbox']")[x].checked){
            // ("[type='checkbox']")[x].span='line-through';
            hasChecked+=1;
        }
    }
    // $("meter").attr("min",0);
    $("meter").attr("max", $("[type='checkbox']").length);
    $("meter").attr("value", hasChecked);
    $("progress").attr("max", $("[type='checkbox']").length);
    $("progress").attr("value", hasChecked);
}

