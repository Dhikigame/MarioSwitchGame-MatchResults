function battle_before_rate(){

    input_rate = document.getElementById("before_rate").value;
    document.getElementById("start_rate").innerHTML = input_rate;
}

function battle_rate(){

    for(var i = 0; i <= 999; i++){

        // 選択したバトル結果を取得
        // j = i * 3 + 2;
        // result = document.battle.elements[j].options[document.battle.elements[j].selectedIndex].value;
        // console.log(result[i]);

        //　入力したバトル後のレートを取得
        j = i * 7 + 3;
        input_rate = document.battle.elements[j].value;
        console.log(input_rate);

        // if(input_rate > 0 &&
        //     (result == "win" || result == "lose" || result == "lose_goal"|| result == "time"|| result == "giveup" || result == "disconnect")){
        //     document.getElementById("current_rate").innerHTML = input_rate;
        // }

        // 数値が0以上のものだけ取得
        if(input_rate > 0){
            document.getElementById("current_rate").innerHTML = input_rate;
            current_rate = document.getElementById("current_rate").innerHTML;
            start_rate = document.getElementById("start_rate").innerHTML;
            document.getElementById("diff_rate").innerHTML = current_rate - start_rate;

            // レート差がプラスの時とマイナスの時で色とテキストを変更する
            if(document.getElementById("diff_rate").innerHTML > 0){
                document.getElementById('diff_rate').innerHTML = '+' + document.getElementById('diff_rate').innerHTML;
                var div = document.getElementById('diff_rate');
                div.style.color = '#00f';
            }else{
                var div = document.getElementById('diff_rate');
                div.style.color = '#f00';
            }
        }
    }
}