$(function(){
    let currentQuiz = null;
    let num=null;
    let score=new Array(30);
    for(let c=0;c<30;c++){score[c]=0}
    
    $("#StartButton").on("click",function(){
        if(num==null){//還沒開始
            num=0;
            // $("h1").text((num));
            $("#options").empty();
            $("#question").text(questions[0].question);
            questions[0].answers.forEach(function(element,index){
                $("#options").append(
                    `<input name='options' type='radio' value='${index}'><label>${element[0]}</label><br><br>`);
            });
            //將按鈕上的文字換成Next
            $("#StartButton").attr("value","Next");
            // num=num+1;
        }else{//已經開始
            // $("h1").text((num));
            $.each($(":radio"),function(i,val){
                
                // console.log(num);
                if(val.checked){
                    if(num==29){//顯示最終結果
                        var tiger=score[4]+score[9]+score[13]+score[17]+score[23]+score[29];//
                        var peacock=score[2]+score[5]+score[12]+score[19]+score[21]+score[28];
                        var koala=score[1]+score[7]+score[14]+score[16]+score[24]+score[27];
                        var owl=score[0]+score[6]+score[10]+score[15]+score[20]+score[25];
                        var chameleon=score[3]+score[8]+score[11]+score[18]+score[22]+score[26];
                        // let finalResult = questions[num].answers[i][1];
                        $("#question").text("最終結果");
                        $("#options").empty();
                        var allscore={
                            "老虎":0,
                            "孔雀":0,
                            "無尾熊":0,
                            "貓頭鷹":0,
                            "變色龍":0
                    };
                        // $("#options").append(`${finalAnswers[finalResult][1]}<br><br>`);
                        allscore["老虎"]=tiger
                        allscore["孔雀"]=peacock
                        allscore["無尾熊"]=koala
                        allscore["貓頭鷹"]=owl
                        allscore["變色龍"]=chameleon
                        $("#options").append(
                            `${"老虎-(支配型Dominance):"+tiger}<br><br>`+`${"孔雀- (表達型Extroversion):"+peacock}<br><br>`+
                            `${"無尾熊-(耐心型Patience):"+koala}<br><br>`+`${"貓頭鷹-(精確型Conformity):"+owl}<br><br>`+
                            `${"變色龍-(整合型1/2 Sigma):"+chameleon}<br><br>`);
                        
                            
                        // allscore.forEach(function(element,index){
                        //     $("#options").append(
                        //         "<tr>"+
                        //         `<td>${element[0]}</td>`+
                        //         `<td>${element[1]}</td>`+
                        //         "</tr>");
                        // });

                        num=null;
                        $("#StartButton").attr("value","重新開始");
                    }else{//顯示下一題
                        
                        // currentQuiz=questions[currentQuiz].answers[i][1];
                        // $("h1").text((num));
                        score[num]=(questions[num].answers[i][1]);
                        // $("h1").text((score[num]));
                        num=num+1;
                        // $("h1").text((num));
                        $("#question").text(questions[num].question);
                        $("#options").empty();
                        questions[num].answers.forEach(function(element,index){
                            $("#options").append(
                                `<input name='options' type='radio' value='${index}'><label>${element[0]}</label><br><br>`);
                        });
                        
                    }
                    return false;
                }
            });
        }
    });
});
