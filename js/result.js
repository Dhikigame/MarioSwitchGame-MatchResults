// スキンのプルダウンから選択済みか判定
var skin_flag = new Array();
for(i = 0; i <= 999; i++){
  skin_flag[i] = 0;
}

// バトル結果のプルダウンから選択済みか判定
var result_flag = new Array();
for(i = 0; i <= 999; i++){
  result_flag[i] = 0;
}


// 選択されたスキン
var skin = new Array();

// 選択されたバトル結果
var result = new Array();

function battle_result(){
  

  for(var i = 0; i <= 999; i++){

    j = i * 7 + 1;
    // 選択したスキンを取得
    skin[i] = document.battle.elements[j].options[document.battle.elements[j].selectedIndex].value;

    j = i * 7 + 2;
    // 選択したバトル結果を取得
    result[i] = document.battle.elements[j].options[document.battle.elements[j].selectedIndex].value;


    /* スキン選択 */
    // スキンが「選択してください」の場合
    if(skin[i] == "noskin" && skin_flag[i] != 0){

      console.log(skin_flag[i]);
      if(skin_flag[i] == 1){
        console.log("noskin");
        document.battle.smb_total.value--;
        document.battle.smb_win_per.value = document.battle.smb_win.value / document.battle.smb_total.value * 100;
        // if(result[i] == "win"){
        //   console.log("win1");
        //   document.battle.win_total.value--;
        //   document.battle.smb_win.value++;
        //   document.battle.win_total_per.value = document.battle.win_total.value / document.battle.battle_total.value * 100;
        //   document.battle.smb_win_per.value = document.battle.smb_win.value / document.battle.smb_total.value * 100;
        // }
      }
      if(skin_flag[i] == 2){
        console.log("noskin");
        document.battle.smb3_total.value--;
        document.battle.smb3_win_per.value = document.battle.smb3_win.value / document.battle.smb3_total.value * 100;
        // if(result[i] == "win"){
        //   console.log("win2");
        //   document.battle.win_total.value--;
        //   document.battle.smb3_win.value++;
        //   document.battle.win_total_per.value = document.battle.win_total.value / document.battle.battle_total.value * 100;
        //   document.battle.smb3_win_per.value = document.battle.smb3_win.value / document.battle.smb3_total.value * 100;
        // }
      }
      if(skin_flag[i] == 3){
        console.log("noskin");
        document.battle.smw_total.value--;
        document.battle.smw_win_per.value = document.battle.smw_win.value / document.battle.smw_total.value * 100;
        // if(result[i] == "win"){
        //   console.log("win3");
        //   document.battle.win_total.value--;
        //   document.battle.smw3_win.value++;
        //   document.battle.win_total_per.value = document.battle.win_total.value / document.battle.battle_total.value * 100;
        //   document.battle.smw_win_per.value = document.battle.smw_win.value / document.battle.smw_total.value * 100;
        // }
      }
      if(skin_flag[i] == 4){
        console.log("noskin");
        document.battle.nsmb_total.value--;
        document.battle.nsmb_win_per.value = document.battle.nsmb_win.value / document.battle.nsmb_total.value * 100;
        // if(result[i] == "win"){
        //   console.log("win4");
        //   document.battle.win_total.value--;
        //   document.battle.nsmb_win.value++;
        //   document.battle.win_total_per.value = document.battle.win_total.value / document.battle.battle_total.value * 100;
        //   document.battle.nsmb_win_per.value = document.battle.nsmb_win.value / document.battle.nsmb_total.value * 100;
        // }
      }
      if(skin_flag[i] == 5){
        console.log("noskin");
        document.battle.sm3d_total.value--;
        document.battle.sm3d_win_per.value = document.battle.sm3d_win.value / document.battle.sm3d_total.value * 100;
        // if(result[i] == "win"){
        //   console.log("win5");
        //   document.battle.win_total.value--;
        //   document.battle.sm3d_win.value++;
        //   document.battle.win_total_per.value = document.battle.win_total.value / document.battle.battle_total.value * 100;
        //   document.battle.sm3d_win_per.value = document.battle.sm3d_win.value / document.battle.sm3d_total.value * 100;
        // }
      }

      document.battle.battle_total.value--;
      document.battle.win_total_per.value = document.battle.win_total.value / document.battle.battle_total.value * 100;

      skin_flag[i] = 0;
    }
    // スーパーマリオブラザーズに合計を表示
    if(skin[i] == "SMB" && skin_flag[i] != 1){
      document.battle.smb_total.value++;
      document.battle.battle_total.value++;
      document.battle.smb_win_per.value = document.battle.smb_win.value / document.battle.smb_total.value * 100;
      document.battle.win_total_per.value = document.battle.win_total.value / document.battle.battle_total.value * 100;

      if(skin_flag[i] == 2){
        console.log("SMB");
        document.battle.smb3_total.value--;
        document.battle.battle_total.value--;
        document.battle.smb3_win_per.value = document.battle.smb3_win.value / document.battle.smb3_total.value * 100;
        document.battle.win_total_per.value = document.battle.win_total.value / document.battle.battle_total.value * 100;
      }
      if(skin_flag[i] == 3){
        console.log("SMB");
        document.battle.smw_total.value--;
        document.battle.battle_total.value--;
        document.battle.smw_win_per.value = document.battle.smw_win.value / document.battle.smw_total.value * 100;
        document.battle.win_total_per.value = document.battle.win_total.value / document.battle.battle_total.value * 100;
      }
      if(skin_flag[i] == 4){
        console.log("SMB");
        document.battle.nsmb_total.value--;
        document.battle.battle_total.value--;
        document.battle.nsmb_win_per.value = document.battle.nsmb_win.value / document.battle.nsmb_total.value * 100;
        document.battle.win_total_per.value = document.battle.win_total.value / document.battle.battle_total.value * 100;
      }
      if(skin_flag[i] == 5){
        console.log("SMB");
        document.battle.sm3d_total.value--;
        document.battle.battle_total.value--;
        document.battle.sm3d_win_per.value = document.battle.sm3d_win.value / document.battle.sm3d_total.value * 100;
        document.battle.win_total_per.value = document.battle.win_total.value / document.battle.battle_total.value * 100;
      }

      skin_flag[i] = 1;
    }
    // スーパーマリオブラザーズ3に合計を表示
    if(skin[i] == "SMB3" && skin_flag[i] != 2){
      document.battle.battle_total.value++;
      document.battle.smb3_total.value++;
      document.battle.smb3_win_per.value = document.battle.smb3_win.value / document.battle.smb3_total.value * 100;
      document.battle.win_total_per.value = document.battle.win_total.value / document.battle.battle_total.value * 100;
      
      if(skin_flag[i] == 1){
        console.log("SMB3");
        document.battle.smb_total.value--;
        document.battle.battle_total.value--;
        document.battle.smb_win_per.value = document.battle.smb_win.value / document.battle.smb_total.value * 100;
        document.battle.win_total_per.value = document.battle.win_total.value / document.battle.battle_total.value * 100;
      }
      if(skin_flag[i] == 3){
        console.log("SMB3");
        document.battle.smw_total.value--;
        document.battle.battle_total.value--;
        document.battle.smw_win_per.value = document.battle.smw_win.value / document.battle.smw_total.value * 100;
        document.battle.win_total_per.value = document.battle.win_total.value / document.battle.battle_total.value * 100;
      }
      if(skin_flag[i] == 4){
        console.log("SMB3");
        document.battle.nsmb_total.value--;
        document.battle.battle_total.value--;
        document.battle.nsmb_win_per.value = document.battle.nsmb_win.value / document.battle.nsmb_total.value * 100;
        document.battle.win_total_per.value = document.battle.win_total.value / document.battle.battle_total.value * 100;
      }
      if(skin_flag[i] == 5){
        console.log("SMB3");
        document.battle.sm3d_total.value--;
        document.battle.battle_total.value--;
        document.battle.sm3d_win_per.value = document.battle.sm3d_win.value / document.battle.sm3d_total.value * 100;
        document.battle.win_total_per.value = document.battle.win_total.value / document.battle.battle_total.value * 100;
      }
      
      skin_flag[i] = 2;
    }
    // スーパーマリオワールドに合計を表示
    if(skin[i] == "SMW" && skin_flag[i] != 3){
      document.battle.smw_total.value++;
      document.battle.battle_total.value++;
      document.battle.smw_win_per.value = document.battle.smw_win.value / document.battle.smw_total.value * 100;
      document.battle.win_total_per.value = document.battle.win_total.value / document.battle.battle_total.value * 100;

      if(skin_flag[i] == 1){
        console.log("SMW");
        document.battle.smb_total.value--;
        document.battle.battle_total.value--;
        document.battle.smb_win_per.value = document.battle.smb_win.value / document.battle.smb_total.value * 100;
        document.battle.win_total_per.value = document.battle.win_total.value / document.battle.battle_total.value * 100;
      }
      if(skin_flag[i] == 2){
        console.log("SMW");
        document.battle.smb3_total.value--;
        document.battle.battle_total.value--;
        document.battle.smb3_win_per.value = document.battle.smb3_win.value / document.battle.smb3_total.value * 100;
        document.battle.win_total_per.value = document.battle.win_total.value / document.battle.battle_total.value * 100;
      }
      if(skin_flag[i] == 4){
        console.log("SMW");
        document.battle.nsmb_total.value--;
        document.battle.battle_total.value--;
        document.battle.nsmb_win_per.value = document.battle.nsmb_win.value / document.battle.nsmb_total.value * 100;
        document.battle.win_total_per.value = document.battle.win_total.value / document.battle.battle_total.value * 100;
      }
      if(skin_flag[i] == 5){
        console.log("SMW");
        document.battle.sm3d_total.value--;
        document.battle.battle_total.value--;
        document.battle.sm3d_win_per.value = document.battle.sm3d_win.value / document.battle.sm3d_total.value * 100;
        document.battle.win_total_per.value = document.battle.win_total.value / document.battle.battle_total.value * 100;
      }

      skin_flag[i] = 3;
    }
    // Newスーパーマリオブラザーズに合計を表示
    if(skin[i] == "NSMB" && skin_flag[i] != 4){
      document.battle.nsmb_total.value++;
      document.battle.battle_total.value++;
      document.battle.nsmb_win_per.value = document.battle.nsmb_win.value / document.battle.nsmb_total.value * 100;
      document.battle.win_total_per.value = document.battle.win_total.value / document.battle.battle_total.value * 100;

      if(skin_flag[i] == 1){
        console.log("NSMB");
        document.battle.smb_total.value--;
        document.battle.battle_total.value--;
        document.battle.smb_win_per.value = document.battle.smb_win.value / document.battle.smb_total.value * 100;
        document.battle.win_total_per.value = document.battle.win_total.value / document.battle.battle_total.value * 100;
      }
      if(skin_flag[i] == 2){
        console.log("NSMB");
        document.battle.smb3_total.value--;
        document.battle.battle_total.value--;
        document.battle.smb3_win_per.value = document.battle.smb3_win.value / document.battle.smb3_total.value * 100;
        document.battle.win_total_per.value = document.battle.win_total.value / document.battle.battle_total.value * 100;
      }
      if(skin_flag[i] == 3){
        console.log("NSMB");
        document.battle.smw_total.value--;
        document.battle.battle_total.value--;
        document.battle.smw_win_per.value = document.battle.smw_win.value / document.battle.smw_total.value * 100;
        document.battle.win_total_per.value = document.battle.win_total.value / document.battle.battle_total.value * 100;
      }
      if(skin_flag[i] == 5){
        console.log("NSMB");
        document.battle.sm3d_total.value--;
        document.battle.battle_total.value--;
        document.battle.sm3d_win_per.value = document.battle.sm3d_win.value / document.battle.sm3d_total.value * 100;
        document.battle.win_total_per.value = document.battle.win_total.value / document.battle.battle_total.value * 100;
      }

      skin_flag[i] = 4;
    }
    // スーパーマリオ3Dワールドに合計を表示
    if(skin[i] == "SM3D" && skin_flag[i] != 5){
      document.battle.sm3d_total.value++;
      document.battle.battle_total.value++;
      document.battle.sm3d_win_per.value = document.battle.sm3d_win.value / document.battle.sm3d_total.value * 100;
      document.battle.win_total_per.value = document.battle.win_total.value / document.battle.battle_total.value * 100;

      if(skin_flag[i] == 1){
        console.log("SM3D");
        document.battle.smb_total.value--;
        document.battle.battle_total.value--;
        document.battle.smb_win_per.value = document.battle.smb_win.value / document.battle.smb_total.value * 100;
        document.battle.win_total_per.value = document.battle.win_total.value / document.battle.battle_total.value * 100;
      }
      if(skin_flag[i] == 2){
        console.log("SM3D");
        document.battle.smb3_total.value--;
        document.battle.battle_total.value--;
        document.battle.smb3_win_per.value = document.battle.smb3_win.value / document.battle.smb3_total.value * 100;
        document.battle.win_total_per.value = document.battle.win_total.value / document.battle.battle_total.value * 100;
      }
      if(skin_flag[i] == 3){
        console.log("SM3D");
        document.battle.smw_total.value--;
        document.battle.battle_total.value--;
        document.battle.smw_win_per.value = document.battle.smw_win.value / document.battle.smw_total.value * 100;
        document.battle.win_total_per.value = document.battle.win_total.value / document.battle.battle_total.value * 100;
      }
      if(skin_flag[i] == 4){
        console.log("SM3D");
        document.battle.nsmb_total.value--;
        document.battle.battle_total.value--;
        document.battle.nsmb_win_per.value = document.battle.nsmb_win.value / document.battle.nsmb_total.value * 100;
        document.battle.win_total_per.value = document.battle.win_total.value / document.battle.battle_total.value * 100;
      }

      skin_flag[i] = 5;
    }


    /* バトル結果選択 */
    // バトル結果 「選択してください」の場合
    if(result[i] == "noresult" && result_flag[i] != 0){

      console.log(result_flag[i]);
      if(result_flag[i] == 1){
        console.log("noresult");
        document.battle.win_total.value--;
        document.battle.win_total_per.value = document.battle.win_total.value / document.battle.battle_total.value * 100;

        if(skin[i] == "SMB"){
          document.battle.smb_win.value--;
          document.battle.smb_win_per.value = document.battle.smb_win.value / document.battle.smb_total.value * 100;
        }
        if(skin[i] == "SMB3"){
          document.battle.smb3_win.value--;
          document.battle.smb3_win_per.value = document.battle.smb3_win.value / document.battle.smb3_total.value * 100;
        }
        if(skin[i] == "SMW"){
          document.battle.smw_win.value--;
          document.battle.smw_win_per.value = document.battle.smw_win.value / document.battle.smw_total.value * 100;
        }
        if(skin[i] == "NSMB"){
          document.battle.nsmb_win.value--;
          document.battle.nsmb_win_per.value = document.battle.nsmb_win.value / document.battle.nsmb_total.value * 100;
        }
        if(skin[i] == "SM3D"){
          document.battle.sm3d_win.value--;
          document.battle.sm3d_win_per.value = document.battle.sm3d_win.value / document.battle.sm3d_total.value * 100;
        }
      }
      if(result_flag[i] == 2){
        console.log("noresult");
        document.battle.lose_total.value--;
      }
      if(result_flag[i] == 3){
        console.log("noresult");
        document.battle.lose_goal_total.value--;
      }
      if(result_flag[i] == 4){
        console.log("noresult");
        document.battle.time_total.value--;
      }
      if(result_flag[i] == 5){
        console.log("noresult");
        document.battle.giveup_total.value--;
      }
      if(result_flag[i] == 6){
        console.log("noresult");
        document.battle.disconnect_total.value--;
      }

      result_flag[i] = 0;
    }
    // バトル結果　勝ちの場合の合計
    if(result[i] == "win" && result_flag[i] != 1){
      document.battle.win_total.value++;
      document.battle.win_total_per.value = document.battle.win_total.value / document.battle.battle_total.value * 100;

      if(skin[i] == "SMB"){
        document.battle.smb_win.value++;
        document.battle.smb_win_per.value = document.battle.smb_win.value / document.battle.smb_total.value * 100;
      }
      if(skin[i] == "SMB3"){
        document.battle.smb3_win.value++;
        document.battle.smb3_win_per.value = document.battle.smb3_win.value / document.battle.smb3_total.value * 100;
      }
      if(skin[i] == "SMW"){
        document.battle.smw_win.value++;
        document.battle.smw_win_per.value = document.battle.smw_win.value / document.battle.smw_total.value * 100;
      }
      if(skin[i] == "NSMB"){
        document.battle.nsmb_win.value++;
        document.battle.nsmb_win_per.value = document.battle.nsmb_win.value / document.battle.nsmb_total.value * 100;
      }
      if(skin[i] == "SM3D"){
        document.battle.sm3d_win.value++;
        document.battle.sm3d_win_per.value = document.battle.sm3d_win.value / document.battle.sm3d_total.value * 100;
      }



      if(result_flag[i] == 2){
        console.log("win");
        document.battle.lose_total.value--;
      }
      if(result_flag[i] == 3){
        console.log("win");
        document.battle.lose_goal_total.value--;
      }
      if(result_flag[i] == 4){
        console.log("win");
        document.battle.time_total.value--;
      }
      if(result_flag[i] == 5){
        console.log("win");
        document.battle.giveup_total.value--;
      }
      if(result_flag[i] == 6){
        console.log("win");
        document.battle.disconnect_total.value--;
      }

      result_flag[i] = 1;
    }
    // バトル結果　負けの場合の合計
    if(result[i] == "lose" && result_flag[i] != 2){
      document.battle.lose_total.value++;

      if(result_flag[i] == 1){
        console.log("lose");
        document.battle.win_total.value--;
        document.battle.win_total_per.value = document.battle.win_total.value / document.battle.battle_total.value * 100;

        if(skin[i] == "SMB"){
          document.battle.smb_win.value--;
          document.battle.smb_win_per.value = document.battle.smb_win.value / document.battle.smb_total.value * 100;
        }
        if(skin[i] == "SMB3"){
          document.battle.smb3_win.value--;
          document.battle.smb3_win_per.value = document.battle.smb3_win.value / document.battle.smb3_total.value * 100;
        }
        if(skin[i] == "SMW"){
          document.battle.smw_win.value--;
          document.battle.smw_win_per.value = document.battle.smw_win.value / document.battle.smw_total.value * 100;
        }
        if(skin[i] == "NSMB"){
          document.battle.nsmb_win.value--;
          document.battle.nsmb_win_per.value = document.battle.nsmb_win.value / document.battle.nsmb_total.value * 100;
        }
        if(skin[i] == "SM3D"){
          document.battle.sm3d_win.value--;
          document.battle.sm3d_win_per.value = document.battle.sm3d_win.value / document.battle.sm3d_total.value * 100;
        }
      }
      if(result_flag[i] == 3){
        console.log("lose");
        document.battle.lose_goal_total.value--;
      }
      if(result_flag[i] == 4){
        console.log("lose");
        document.battle.time_total.value--;
      }
      if(result_flag[i] == 5){
        console.log("lose");
        document.battle.giveup_total.value--;
      }
      if(result_flag[i] == 6){
        console.log("lose");
        document.battle.disconnect_total.value--;
      }

      result_flag[i] = 2;
    }
    // バトル結果　負けゴールの場合の合計
    if(result[i] == "lose_goal" && result_flag[i] != 3){
      document.battle.lose_goal_total.value++;

      if(result_flag[i] == 1){
        console.log("lose_goal");
        document.battle.win_total.value--;
        document.battle.win_total_per.value = document.battle.win_total.value / document.battle.battle_total.value * 100;

        if(skin[i] == "SMB"){
          document.battle.smb_win.value--;
          document.battle.smb_win_per.value = document.battle.smb_win.value / document.battle.smb_total.value * 100;
        }
        if(skin[i] == "SMB3"){
          document.battle.smb3_win.value--;
          document.battle.smb3_win_per.value = document.battle.smb3_win.value / document.battle.smb3_total.value * 100;
        }
        if(skin[i] == "SMW"){
          document.battle.smw_win.value--;
          document.battle.smw_win_per.value = document.battle.smw_win.value / document.battle.smw_total.value * 100;
        }
        if(skin[i] == "NSMB"){
          document.battle.nsmb_win.value--;
          document.battle.nsmb_win_per.value = document.battle.nsmb_win.value / document.battle.nsmb_total.value * 100;
        }
        if(skin[i] == "SM3D"){
          document.battle.sm3d_win.value--;
          document.battle.sm3d_win_per.value = document.battle.sm3d_win.value / document.battle.sm3d_total.value * 100;
        }
      }
      if(result_flag[i] == 2){
        console.log("lose_goal");
        document.battle.lose_total.value--;
      }
      if(result_flag[i] == 4){
        console.log("lose_goal");
        document.battle.time_total.value--;
      }
      if(result_flag[i] == 5){
        console.log("lose_goal");
        document.battle.giveup_total.value--;
      }
      if(result_flag[i] == 6){
        console.log("lose_goal");
        document.battle.disconnect_total.value--;
      }

      result_flag[i] = 3;
    }
    // バトル結果　タイムアップの場合の合計
    if(result[i] == "time" && result_flag[i] != 4){
      document.battle.time_total.value++;

      if(result_flag[i] == 1){
        console.log("time");
        document.battle.win_total.value--;
        document.battle.win_total_per.value = document.battle.win_total.value / document.battle.battle_total.value * 100;

        if(skin[i] == "SMB"){
          document.battle.smb_win.value--;
          document.battle.smb_win_per.value = document.battle.smb_win.value / document.battle.smb_total.value * 100;
        }
        if(skin[i] == "SMB3"){
          document.battle.smb3_win.value--;
          document.battle.smb3_win_per.value = document.battle.smb3_win.value / document.battle.smb3_total.value * 100;
        }
        if(skin[i] == "SMW"){
          document.battle.smw_win.value--;
          document.battle.smw_win_per.value = document.battle.smw_win.value / document.battle.smw_total.value * 100;
        }
        if(skin[i] == "NSMB"){
          document.battle.nsmb_win.value--;
          document.battle.nsmb_win_per.value = document.battle.nsmb_win.value / document.battle.nsmb_total.value * 100;
        }
        if(skin[i] == "SM3D"){
          document.battle.sm3d_win.value--;
          document.battle.sm3d_win_per.value = document.battle.sm3d_win.value / document.battle.sm3d_total.value * 100;
        }
      }
      if(result_flag[i] == 2){
        console.log("time");
        document.battle.lose_total.value--;
      }
      if(result_flag[i] == 3){
        console.log("time");
        document.battle.lose_goal_total.value--;
      }
      if(result_flag[i] == 5){
        console.log("time");
        document.battle.giveup_total.value--;
      }
      if(result_flag[i] == 6){
        console.log("time");
        document.battle.disconnect_total.value--;
      }

      result_flag[i] = 4;
    }
    // バトル結果　ギブアップの場合の合計
    if(result[i] == "giveup" && result_flag[i] != 5){
      document.battle.giveup_total.value++;

      if(result_flag[i] == 1){
        console.log("giveup");
        document.battle.win_total.value--;
        document.battle.win_total_per.value = document.battle.win_total.value / document.battle.battle_total.value * 100;

        if(skin[i] == "SMB"){
          document.battle.smb_win.value--;
          document.battle.smb_win_per.value = document.battle.smb_win.value / document.battle.smb_total.value * 100;
        }
        if(skin[i] == "SMB3"){
          document.battle.smb3_win.value--;
          document.battle.smb3_win_per.value = document.battle.smb3_win.value / document.battle.smb3_total.value * 100;
        }
        if(skin[i] == "SMW"){
          document.battle.smw_win.value--;
          document.battle.smw_win_per.value = document.battle.smw_win.value / document.battle.smw_total.value * 100;
        }
        if(skin[i] == "NSMB"){
          document.battle.nsmb_win.value--;
          document.battle.nsmb_win_per.value = document.battle.nsmb_win.value / document.battle.nsmb_total.value * 100;
        }
        if(skin[i] == "SM3D"){
          document.battle.sm3d_win.value--;
          document.battle.sm3d_win_per.value = document.battle.sm3d_win.value / document.battle.sm3d_total.value * 100;
        }
      }
      if(result_flag[i] == 2){
        console.log("giveup");
        document.battle.lose_total.value--;
      }
      if(result_flag[i] == 3){
        console.log("giveup");
        document.battle.lose_goal_total.value--;
      }
      if(result_flag[i] == 4){
        console.log("giveup");
        document.battle.time_total.value--;
      }
      if(result_flag[i] == 6){
        console.log("giveup");
        document.battle.disconnect_total.value--;
      }

      result_flag[i] = 5;
    }
    // バトル結果　回線切れの場合の合計
    if(result[i] == "disconnect" && result_flag[i] != 6){
      document.battle.disconnect_total.value++;

      if(result_flag[i] == 1){
        console.log("disconnect");
        document.battle.win_total.value--;
        document.battle.win_total_per.value = document.battle.win_total.value / document.battle.battle_total.value * 100;

        if(skin[i] == "SMB"){
          document.battle.smb_win.value--;
          document.battle.smb_win_per.value = document.battle.smb_win.value / document.battle.smb_total.valu * 100;
        }
        if(skin[i] == "SMB3"){
          document.battle.smb3_win.value--;
          document.battle.smb3_win_per.value = document.battle.smb3_win.value / document.battle.smb3_total.value * 100;
        }
        if(skin[i] == "SMW"){
          document.battle.smw_win.value--;
          document.battle.smw_win_per.value = document.battle.smw_win.value / document.battle.smw_total.value * 100;
        }
        if(skin[i] == "NSMB"){
          document.battle.nsmb_win.value--;
          document.battle.nsmb_win_per.value = document.battle.nsmb_win.value / document.battle.nsmb_total.value * 100;
        }
        if(skin[i] == "SM3D"){
          document.battle.sm3d_win.value--;
          document.battle.sm3d_win_per.value = document.battle.sm3d_win.value / document.battle.sm3d_total.value * 100;
        }
      }
      if(result_flag[i] == 2){
        console.log("disconnect");
        document.battle.lose_total.value--;
      }
      if(result_flag[i] == 3){
        console.log("disconnect");
        document.battle.lose_goal_total.value--;
      }
      if(result_flag[i] == 4){
        console.log("disconnect");
        document.battle.time_total.value--;
      }
      if(result_flag[i] == 5){
        console.log("disconnect");
        document.battle.giveup_total.value--;
      }

      result_flag[i] = 6;
    }

  }
  
}