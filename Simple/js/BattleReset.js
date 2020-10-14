// 「リセット」ボタンを押した場合
function ResetAction(){
    document.getElementById("num").value = 0;
    document.getElementById("total_num").value = 0;
    document.getElementById("win_num").value = 0;
    document.getElementById("win_per").value = 0;
    
    document.getElementById("before_rate").value = "";
    document.getElementById("rate").value = "";
    document.getElementById("start_rate").innerHTML = "";
    document.getElementById("diff_rate").innerHTML = "";
    document.getElementById("current_rate").innerHTML = "";

    // クッキーに入力項目保存
    SaveAndSubmit();
}
