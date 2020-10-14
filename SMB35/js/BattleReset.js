// 「リセット」ボタンを押した場合
function ResetAction(){
    document.getElementById("num").value = 0;
    document.getElementById("total_num").value = 0;
    document.getElementById("win_num").value = 0;
    document.getElementById("win_per").value = 0;
    document.getElementById("rank").value = 0;
    document.getElementById("rank_avg").value = 0;
    
    document.getElementById("one_rank_before").innerHTML = "";
    document.getElementById("two_rank_before").innerHTML = "";
    document.getElementById("three_rank_before").innerHTML = "";
    document.getElementById("four_rank_before").innerHTML = "";
    document.getElementById("five_rank_before").innerHTML = "";
    document.getElementById("six_rank_before").innerHTML = "";
    document.getElementById("seven_rank_before").innerHTML = "";
    document.getElementById("eight_rank_before").innerHTML = "";
    document.getElementById("nine_rank_before").innerHTML = "";
    document.getElementById("ten_rank_before").innerHTML = "";

    // クッキーに入力項目保存
    SaveAndSubmit();
}
