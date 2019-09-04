<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>マリオメーカー2　みんなでバトル　戦績表</title>
  <link rel="stylesheet" href="css/styles.css">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

  <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="js/result.js"></script>
  <script src="js/rate.js"></script>
</head>
<body>
  <center><h2>マリオメーカー2　みんなでバトル　戦績表</h2></center>
  マリオメーカー2のみんなでバトル用の戦績表になります。<br>
  配信等で利用してくださると嬉しいです。<br>
　※最大1000戦まで記録できます。

  <center>
  <form name="battle">
    バトル開始前レート：<input type='number' class="battle_before_rate" id="before_rate" maxlength="4" onChange="battle_before_rate()"/> 
    <br>
    <table border="1" class="table table-sm battle_table">
    <thead>
        <tr>
          <th scope="col">バトル数</th>
          <th scope="col">スキン</th>
          <th scope="col">バトル結果</th>
          <th scope="col">バトル後レート</th>
          <th scope="col">タグ1</th>
          <th scope="col">タグ2</th>
          <th scope="col">コース名</th>
          <th scope="col">コースID</th>
        </tr>
    </thead>
    <tbody>
<?php
for($i = 0;$i <= 999;$i++){
  echo "<tr><td>";
  echo $i + 1 . "戦目 </td>";
  echo '
      <td>
      <select name="skin" onChange="battle_result()">
        <option value="noskin">スキンを選択</option>
        <option value="SMB">スーパーマリオブラザーズ</option>
        <option value="SMB3">スーパーマリオブラザーズ3</option>
        <option value="SMW">スーパーマリオワールド</option>
        <option value="NSMB">Newスーパーマリオブラザーズ</option>
        <option value="SM3D">スーパーマリオ3Dワールド</option>
      </select>
      </td>

      <td>
      <select name="result" onChange="battle_result()">
          <option value="noresult">バトル結果を選択</option>
          <option value="win">勝ち</option>
          <option value="lose">負け</option>
          <option value="lose_goal">ゴール負け</option>
          <option value="time">タイムアップ</option>
          <option value="giveup">ギブアップ</option>
          <option value="disconnect">回線切れ</option>
      </select>
      </td>

      <td>
      <input type="number" class="battle_rate" id="rate" maxlength="4" onKeyUp="battle_rate()" >  
      </td>

      <td>
      <select name="tags1">
          <option value="notag"> - </option>
          <option value="standard">スタンダード</option>
          <option value="mystery">なぞとき</option>
          <option value="time_attack">タイムアタック</option>
          <option value="auto_scroll">オートスクロール</option>
          <option value="auto_mario">オートマリオ</option>
          <option value="one_shot">一発ネタ</option>
          <option value="battle_everyone">みんなでバトル</option>
          <option value="gimmick">ギミック</option>
          <option value="music">音楽</option>
      </select>
      </td>

      <td>
      <select name="tags2">
          <option value="notag"> - </option>
          <option value="standard">スタンダード</option>
          <option value="mystery">なぞとき</option>
          <option value="time_attack">タイムアタック</option>
          <option value="auto_scroll">オートスクロール</option>
          <option value="auto_mario">オートマリオ</option>
          <option value="one_shot">一発ネタ</option>
          <option value="battle_everyone">みんなでバトル</option>
          <option value="gimmick">ギミック</option>
          <option value="music">音楽</option>
      </select>
      </td>

      <td>
      <input type="text" class="course_name">
      </td>

      <td>
      <input type="text" class="course_id">
      </td>';
  echo "</tr>";
}
echo "</tbody></table>";
?>
    </center>
    
    <div class="result">
      <table border="1">
        <tr>
          <th>バトル開始前レート</th>
          <th>レート差</th>
          <th>現在レート</th>
        </tr>
        <tr>
          <td><div id="start_rate" maxlength="4" value="0"></div></td>
          <td><div id="diff_rate" maxlength="4"></div></td>
          <td><div id="current_rate" maxlength="4" value="0"></div></td>
        </tr>
      </table>
      <table border="1">
        <tr>
          <th></th>
          <th>初代マリオ</th>
          <th>マリオ3</th>
          <th>ワールド</th>
          <th>New</th>
          <th>3Dワールド</th>
          <th>累計</th>
        </tr>
        <tr>
          <td>バトル数</td>
          <td><input type="text" name="smb_total" size="4" value="0"></td>
          <td><input type="text" name="smb3_total" size="4" value="0"></td>
          <td><input type="text" name="smw_total" size="4" value="0"></td>
          <td><input type="text" name="nsmb_total" size="4" value="0"> </td>
          <td><input type="text" name="sm3d_total" size="4" value="0"></td>
          <td><input type="text" name="battle_total" size="4" value="0"></td>
        </tr>
        <tr>
          <td>勝利数</td>
          <td><input type="text" name="smb_win" size="4" value="0"></td>
          <td><input type="text" name="smb3_win" size="4" value="0"></td>
          <td><input type="text" name="smw_win" size="4" value="0"></td>
          <td><input type="text" name="nsmb_win" size="4" value="0"></td>
          <td><input type="text" name="sm3d_win" size="4" value="0"></td>
          <td><input type="text" name="win_total" size="4" value="0"></td>
        </tr>
        <tr>
          <td>勝率(%)</td>
          <td><input type="text" name="smb_win_per" size="4" value="0"></td>
          <td><input type="text" name="smb3_win_per" size="4" value="0"></td>
          <td><input type="text" name="smw_win_per" size="4" value="0"></td>
          <td><input type="text" name="nsmb_win_per" size="4" value="0"></td>
          <td><input type="text" name="sm3d_win_per" size="4" value="0"></td>
          <td><input type="text" name="win_total_per" size="4" value="0"></td>
        </tr>
      </table>
      <table border="1">
        <tr>
          <th>負け</th>
          <th>ゴール負け</th>
          <th>タイムアップ</th>
          <th>ギブアップ</th>
          <th>回線切れ</th>
        </tr>
        <tr>
          <td><input type="text" name="lose_total" size="4" value="0"></td>
          <td><input type="text" name="lose_goal_total" size="4" value="0"></td>
          <td><input type="text" name="time_total" size="4" value="0"> </td>
          <td><input type="text" name="giveup_total" size="4" value="0"></td>
          <td><input type="text" name="disconnect_total" size="4" value="0"></td>
        </tr>
      </table>
      </div>
  </form>
</body>
</html>