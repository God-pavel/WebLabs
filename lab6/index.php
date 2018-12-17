<?php

$width = ($_POST['width']) ? $_POST['width'] : 7;
$height = ($_POST['height']) ? $_POST['height'] : 7;
$host='localhost';
$database='lab6';
$user='user';
$pswd='P@ss1234';
$conn = mysqli_connect($host, $user, $pswd, $database);

if (!$conn) {
      die("Connection failed: " . mysqli_connect_error());
}

echo "Connected successfully";
if($_POST['width'] && $_POST['height']){
  if ($width < 1 || $height < 1 ){
    $sql = "INSERT INTO bad (width, height) VALUES ('$width', '$height')";
    if (mysqli_query($conn, $sql)) {
          echo "New record created successfully";
    } else {
          echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
  }
  else{
    $sql = "INSERT INTO good (width, height) VALUES ('$width', '$height')";
    if (mysqli_query($conn, $sql)) {
          echo "New record created successfully";
    } else {
          echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
  }
}
mysqli_close($conn);
?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title><?=$width?> <?=$height?></title>
    <style>
    TABLE {
      table-layout: fixed;
     }
     table tr {
       height: 40px;
     }
    </style>
  </head>
  <body>
    <form action="index.php" method="post">
      <label for="width">Ширина</label>
      <input type="number" name="width" value="" />
      <label for="height">Висота</label>
      <input type="number" name="height" value="" />
      <input type="submit" name="" value="Го" />
    </form>
    <?php if ($width < 1 || $height < 1): ?>
      <h1 class="error" style="background: red">
        Некоректные данные
      </h1>
    <?php endif;?>
    <section>
      <p class = "text"> First table </p>

      <table border="3" cols="<?=$width?>" rows="<?=$height?>" width="600" height="300" id = "table1">
        <tr>
          <td colspan="<?=$width?>"></td>
        </tr>
        <?php
          $w = $width - 1;
          $h = $height - 1;
          $counter = 1;
          while ($w > 0 && $h > 0) {
            if($counter==3){
          ?>
            <tr>

              <td rowspan="<?=$h--?>"><?php $counter = 0?> 4 </td>
              <td colspan="<?=$w--?>"><?php $counter += 1?> </td>
            </tr>
          <?php
        }
            else if($counter==2){
          ?>
            <tr>

              <td rowspan="<?=$h--?>"><?php $counter += 1?> </td>
              <td colspan="<?=$w--?>"><?php $counter = 0?>4 </td>
            </tr>
          <?php
            }
            else{
          ?>
            <tr>

              <td rowspan="<?=$h--?>"><?php $counter+=1?> </td>
              <td colspan="<?=$w--?>"><?php $counter+=1?> </td>
            </tr>
          <?php
            }
          }
        ?>
      </table>


      <p class = "text"> Second table </p>

      <table border="3" cols="<?=$width?>" rows="<?=$height?>" width = 600 height = 300 id = "table2">

        <?php
          $w = $width-1;
          $h = $height;
          $counter = 0;
          while ($w > 0 && $h > 1){
            if($counter==3){
          ?>
            <tr>

              <td rowspan="<?=$h--?>"><?php $counter = 0?> 4 </td>
              <td colspan="<?=$w--?>"><?php $counter += 1?> </td>
            </tr>
          <?php
        }
            else if($counter==2){
          ?>
            <tr>

              <td rowspan="<?=$h--?>"><?php $counter += 1?> </td>
              <td colspan="<?=$w--?>"><?php $counter = 0?>4 </td>
            </tr>
          <?php
            }
            else{
          ?>
            <tr>

              <td rowspan="<?=$h--?>"><?php $counter+=1?> </td>
              <td colspan="<?=$w--?>"><?php $counter+=1?> </td>
            </tr>
          <?php
            }
          }
          if($counter == 3){
        ?>
        <tr>
          <td>4 </td>
        </tr>
        <?php
      }
      else{
       ?>
       <tr>
         <td> </td>
       </tr>
       <?php
     }
     ?>
      </table>


      <p class = "text"> Third table </p>

      <table border="3" cols="<?=$width?>" rows="<?=$height?>" width = 600 height = 300 id = "table3">

      <?php
      $counter = 0;
      for($i = 0; $i < $height; $i++){
      ?>
        <tr>
      <?php
        if($i%2==0 && $width%2==0){
          for($g = 0; $g < $width; $g+=2){
      ?>
          <td colspan="2"><?php if($counter%4 == 0) echo("4"); $counter++?></td>
      <?php
          }
        }
        if($i%2==0 && $width%2==1){
          for($g = 0; $g < $width-1; $g+=2){
      ?>
          <td colspan="2"><?php if($counter%4 == 0) echo("4"); $counter++?></td>
      <?php
          }
          ?>
              <td><?php if($counter%4 == 0) echo("4"); $counter++?></td>
          <?php
        }
        if($i%2==1 && $width%2==0){
          ?>
              <td><?php if($counter%4 == 0) echo("4"); $counter++?></td>
          <?php
          for($g = 1; $g < $width-1; $g+=2){
      ?>
          <td colspan="2"><?php if($counter%4 == 0) echo("4"); $counter++?></td>
      <?php
          }
          ?>
              <td><?php if($counter%4 == 0) echo("4"); $counter++?></td>
          <?php
        }
        if($i%2==1 && $width%2==1){
          ?>
              <td><?php if($counter%4 == 0) echo("4"); $counter++?></td>
          <?php
          for($g = 1; $g < $width; $g+=2){
      ?>
          <td colspan="2"><?php if($counter%4 == 0) echo("4"); $counter++?></td>
      <?php
          }
        }
        ?>
      </tr>
        <?php
      }
      ?>

      </table>


      <p class = "text"> Fourth table </p>

      <table border="3" cols="<?=$width?>" rows="<?=$height?>" width = 600 id="table4">
        <tr>
          <?php
          $counter = 1;
            for ($i=0; $i < $width; $i++) {
              $j = ($i+2)%3;
          ?>
            <td rowspan="<?=$j+1?>"><?php if($counter%4 == 0) echo("4"); $counter++?></td>
          <?php
            }
          ?>
        </tr>
        <?php
          for ($i=1; $i < $height; $i++) {
            echo '<tr>';
            $offset = $i%3;
            $tds = ceil(($width-$offset)/3);
            $rowspan = ($i > $height - 3) ? $height - $i : 3;
            for ($j=0; $j < $tds; $j++) {
              echo '<td rowspan="'.$rowspan.'">';
              if($counter%4 == 0) echo("4"); $counter++;
              echo'</td>';
            }
            echo '</tr>';
          }
        ?>
      </table>
    </section>
    <script src="https://code.jquery.com/jquery-3.3.1.min.js">
    </script>
    <script type="text/javascript" src="script.js">

    </script>
  </body>
</html>
