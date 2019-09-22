function battle_before_rate(){

    start_rate = document.getElementById("before_rate").value;
    var start_rate_rank = rank_rate(start_rate);
    document.getElementById("start_rate").innerHTML = start_rate_rank;
}

function battle_rate(){

    for(var i = 0; i <= 199; i++){

        //　入力した最新バトル後のレートを取得
        j = i * 7 + 3;
        input_rate = document.battle.elements[j].value;

        // 数値が0以上のものだけ取得
        if(input_rate > 0){

            //　最新バトル後のレート
            document.getElementById("current_rate").innerHTML = input_rate;
            var input_rate_rank = rank_rate(input_rate);
            document.getElementById("current_rate").innerHTML = input_rate_rank;

            // レート差
            document.getElementById("diff_rate").innerHTML = input_rate - start_rate;

            // レート差がプラスの時とマイナスの時で色とテキストを変更する
            if(document.getElementById("diff_rate").innerHTML > 0){
                document.getElementById('diff_rate').innerHTML = '+' + document.getElementById('diff_rate').innerHTML;
                var div = document.getElementById('diff_rate');
                div.style.color = '#f00';
            }else{
                var div = document.getElementById('diff_rate');
                div.style.color = '#00f';
            }
        }
    }
}

rank_rate = function(rate){
    
    if(rate >= 5000){
        return rate + " S+";
    }
    else if(rate >= 4000 && rate < 5000){
        return rate + " S";
    }
    else if(rate >= 3000 && rate < 4000){
        return rate + " A";
    }
    else if(rate >= 2000 && rate < 3000){
        return rate + " B";
    }
    else if(rate >= 1000 && rate < 2000){
        return rate + " C";
    }
    else{
        return rate + " D";
    }

}
