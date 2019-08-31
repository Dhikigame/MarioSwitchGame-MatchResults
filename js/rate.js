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

        // バトル後レートに
        if(input_rate > 0){
            document.getElementById("current_rate").innerHTML = input_rate;
        }
    }
}