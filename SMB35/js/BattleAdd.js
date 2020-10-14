function BattleAdd(){

    // form要素を取得
    var battle_result_element = document.getElementById("battle");
    // form要素内のセレクトボックスを取得
    var battle_result_list = battle_result_element.rank;
    var battle_result_num = battle_result_list.selectedIndex;
    // 選択状態の値(value)を取得
    var battle_result = battle_result_list.options[battle_result_num].value;

    if ( battle_result === "" ) {
        // 未選択状態
        return 0;
    }
    // battle_resultには選択状態の値が代入されている場合 
    else {
        // バトル数カウント
        BattleCount();

        // 勝率計算
        BattleWinningPercentage(battle_result);

        // 前のバトル結果
        BattleBeforeRank(battle_result);

        // クッキーに入力項目保存
        SaveAndSubmit();
    }
}

function BattleCount(){

    document.getElementById("num").value++;
}

function BattleWinningPercentage(battle_result){

     // ボタンをクリックして勝ち・負けの判定があれば、バトル数増やす
     document.getElementById("total_num").value++;

     if(battle_result == "1"){
         // 「勝ち」の判定ならば、勝利数を増やす
         document.getElementById("win_num").value++;
     }
 
     // 勝率計算
     document.getElementById("win_per").value = document.getElementById("win_num").value / document.getElementById("total_num").value * 100;
     // 勝率を小数点以下2桁にする
     var win_per = Number(document.getElementById("win_per").value);
     document.getElementById("win_per").value = win_per.toFixed(2);

     //　平均順位計算
     var count = 1;
     var sum_rank = Number(battle_result);

     if(document.getElementById("nine_rank_before").innerHTML != "") {
        sum_rank += Number(document.getElementById("nine_rank_before").innerHTML);
        count += 1; 
     }
     if(document.getElementById("eight_rank_before").innerHTML != "") {
        sum_rank += Number(document.getElementById("eight_rank_before").innerHTML);
        count += 1; 
     }
     if(document.getElementById("seven_rank_before").innerHTML != "") {
        sum_rank += Number(document.getElementById("seven_rank_before").innerHTML);
        count += 1; 
     }
     if(document.getElementById("six_rank_before").innerHTML != "") {
        sum_rank += Number(document.getElementById("six_rank_before").innerHTML);
        count += 1; 
     }
     if(document.getElementById("five_rank_before").innerHTML != "") {
        sum_rank += Number(document.getElementById("five_rank_before").innerHTML);
        count += 1; 
     }
     if(document.getElementById("four_rank_before").innerHTML != "") {
        sum_rank += Number(document.getElementById("four_rank_before").innerHTML);
        count += 1; 
     }
     if(document.getElementById("three_rank_before").innerHTML != "") {
        sum_rank += Number(document.getElementById("three_rank_before").innerHTML);
        count += 1; 
     }
     if(document.getElementById("two_rank_before").innerHTML != "") {
        sum_rank += Number(document.getElementById("two_rank_before").innerHTML);
        count += 1; 
     }
     if(document.getElementById("one_rank_before").innerHTML != "") {
        sum_rank += Number(document.getElementById("one_rank_before").innerHTML);
        count += 1; 
     }

     document.getElementById("rank_avg").value = Number(sum_rank / count).toFixed(2);;
 
}

//　過去の順位を記録する
function BattleBeforeRank(battle_result){
    
    //　過去の順位を1つ過去にずらす
    // document.getElementById("eleven_rank_before").innerHTML  = document.getElementById("ten_rank_before").innerHTML;
    document.getElementById("ten_rank_before").innerHTML  = document.getElementById("nine_rank_before").innerHTML;
    document.getElementById("nine_rank_before").innerHTML  = document.getElementById("eight_rank_before").innerHTML;
    document.getElementById("eight_rank_before").innerHTML  = document.getElementById("seven_rank_before").innerHTML;
    document.getElementById("seven_rank_before").innerHTML  = document.getElementById("six_rank_before").innerHTML;
    document.getElementById("six_rank_before").innerHTML  = document.getElementById("five_rank_before").innerHTML;
    document.getElementById("five_rank_before").innerHTML  = document.getElementById("four_rank_before").innerHTML;
    document.getElementById("four_rank_before").innerHTML  = document.getElementById("three_rank_before").innerHTML;
    document.getElementById("three_rank_before").innerHTML  = document.getElementById("two_rank_before").innerHTML;
    document.getElementById("two_rank_before").innerHTML  = document.getElementById("one_rank_before").innerHTML;
    
    if(battle_result != "" && battle_result >= 0){
        document.getElementById("one_rank_before").innerHTML  = battle_result;
    }
    // 前のバトル結果で高順位の色を変える
    ColorRank();
}

function ColorRank(){
    
    if(document.getElementById("one_rank_before").innerHTML == "1"){
        var div = document.getElementById('one_rank_before');
        div.style.color = '#f00';
    }
    if(document.getElementById("two_rank_before").innerHTML == "1"){
        var div = document.getElementById('two_rank_before');
        div.style.color = '#f00';
    }
    if(document.getElementById("three_rank_before").innerHTML == "1"){
        var div = document.getElementById('three_rank_before');
        div.style.color = '#f00';
    }
    if(document.getElementById("four_rank_before").innerHTML == "1"){
        var div = document.getElementById('four_rank_before');
        div.style.color = '#f00';
    }
    if(document.getElementById("five_rank_before").innerHTML == "1"){
        var div = document.getElementById('five_rank_before');
        div.style.color = '#f00';
    }
    if(document.getElementById("six_rank_before").innerHTML == "1"){
        var div = document.getElementById('six_rank_before');
        div.style.color = '#f00';
    }
    if(document.getElementById("seven_rank_before").innerHTML == "1"){
        var div = document.getElementById('seven_rank_before');
        div.style.color = '#f00';
    }
    if(document.getElementById("eight_rank_before").innerHTML == "1"){
        var div = document.getElementById('eight_rank_before');
        div.style.color = '#f00';
    }
    if(document.getElementById("nine_rank_before").innerHTML == "1"){
        var div = document.getElementById('nine_rank_before');
        div.style.color = '#f00';
    }
    if(document.getElementById("ten_rank_before").innerHTML == "1"){
        var div = document.getElementById('ten_rank_before');
        div.style.color = '#f00';
    }


    if(document.getElementById("one_rank_before").innerHTML == "2"){
        var div = document.getElementById('one_rank_before');
        div.style.color = '#008000';
    }
    if(document.getElementById("two_rank_before").innerHTML == "2"){
        var div = document.getElementById('two_rank_before');
        div.style.color = '#008000';
    }
    if(document.getElementById("three_rank_before").innerHTML == "2"){
        var div = document.getElementById('three_rank_before');
        div.style.color = '#008000';
    }
    if(document.getElementById("four_rank_before").innerHTML == "2"){
        var div = document.getElementById('four_rank_before');
        div.style.color = '#008000';
    }
    if(document.getElementById("five_rank_before").innerHTML == "2"){
        var div = document.getElementById('five_rank_before');
        div.style.color = '#008000';
    }
    if(document.getElementById("six_rank_before").innerHTML == "2"){
        var div = document.getElementById('six_rank_before');
        div.style.color = '#008000';
    }
    if(document.getElementById("seven_rank_before").innerHTML == "2"){
        var div = document.getElementById('seven_rank_before');
        div.style.color = '#008000';
    }
    if(document.getElementById("eight_rank_before").innerHTML == "2"){
        var div = document.getElementById('eight_rank_before');
        div.style.color = '#008000';
    }
    if(document.getElementById("nine_rank_before").innerHTML == "2"){
        var div = document.getElementById('nine_rank_before');
        div.style.color = '#008000';
    }
    if(document.getElementById("ten_rank_before").innerHTML == "2"){
        var div = document.getElementById('ten_rank_before');
        div.style.color = '#008000';
    }


    if(document.getElementById("one_rank_before").innerHTML == "3"){
        var div = document.getElementById('one_rank_before');
        div.style.color = '#8000ff';
    }
    if(document.getElementById("two_rank_before").innerHTML == "3"){
        var div = document.getElementById('two_rank_before');
        div.style.color = '#8000ff';
    }
    if(document.getElementById("three_rank_before").innerHTML == "3"){
        var div = document.getElementById('three_rank_before');
        div.style.color = '#8000ff';
    }
    if(document.getElementById("four_rank_before").innerHTML == "3"){
        var div = document.getElementById('four_rank_before');
        div.style.color = '#8000ff';
    }
    if(document.getElementById("five_rank_before").innerHTML == "3"){
        var div = document.getElementById('five_rank_before');
        div.style.color = '#8000ff';
    }
    if(document.getElementById("six_rank_before").innerHTML == "3"){
        var div = document.getElementById('six_rank_before');
        div.style.color = '#8000ff';
    }
    if(document.getElementById("seven_rank_before").innerHTML == "3"){
        var div = document.getElementById('seven_rank_before');
        div.style.color = '#8000ff';
    }
    if(document.getElementById("eight_rank_before").innerHTML == "3"){
        var div = document.getElementById('eight_rank_before');
        div.style.color = '#8000ff';
    }
    if(document.getElementById("nine_rank_before").innerHTML == "3"){
        var div = document.getElementById('nine_rank_before');
        div.style.color = '#8000ff';
    }
    if(document.getElementById("ten_rank_before").innerHTML == "3"){
        var div = document.getElementById('ten_rank_before');
        div.style.color = '#8000ff';
    }

}