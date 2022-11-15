# nba-player-stats
<!DOCTYPE html>
<html lang="en">

<head>
  <style>
  </style>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">



  <meta charset="UTF-8">

  <link rel="stylesheet" href="" />

  <title>NBA-PLAYER-STATS</title>
</head>

<body>
  <p class= "photo" style="text-align: center;">
  <img src="pictures/nba-logo.jpg"
    width="150"
    height="auto"
    align="center"
    />
    </p>
  <header>
    <h1 class="h1">NBA PLAYER STATS</h1>
  </header>
               <!-- Search Bar-->
  <div class="container" >
    <form>
      <input type="search" placeholder="Search NBA Player">
      <button type="submit">Search</button>
  </form>
  </div>
                 <!-- table \-->
    <table class="tablez" bgcolor="black" align="center" width="500">
      
        <caption><B>Player Stats</B></caption>
        <tr bgcolor="white"align="center">
          <th width="50"> PTS </th>
          <th width="50"> RBS </th>
          <th width="50"> AST </th>
          <th width="50"> STL </th>
          <th width="50"> BLK </th>
          <th width="50"> TO </th>
          <th width="50"> FG% </th>
          <th width="50"> FT%</th>
          <th width="50"> 3PT% </th>
          
        </tr>
        <tr bgcolor="white" align="center">
          <td width="50">26</td>
          <td width="50">25</td>
          <td width="50">13</td>
          <td width="50">26</td>
          <td width="50">25</td>
          <td width="50">13</td>
          <td width="50">26</td>
          <td width="50">25</td>
          <td width="50">13</td>
        </tr>
      </table>


    
  <div class="player-cards">
    <div class="card">
      <div class="header"></div>
      <div class="body"></div>

    </div>
</body>

</html>


/** css
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}
  .container{

    margin-left:600px;
    width: 50%;
    height: 10%;
    padding:50px;
 
    display: flex;
    
  }
  form{
    width: 600px;
    height:55px;
    display:flex;
  }
  form input {
    font-size: 1rem
    

  }
.style{
  padding-bottom: 40px;

}
  .user-cards{
    display:grid;
    grid-template-columns: repeat(autofill,minmax(150px, 1fr)); 
    gap: .25rem
    margin-top: 1rem;
  }

.card > .body{
  font-size:.8rem
}
.h1{
  text-align: center;
  margin-top:10px;
}

.photo{
  margin-top:20px;
}
.tablez{

    margin:center;
    position: absolute;
    transform:translatY(-50%);
    text-align:center;
    margin-left:375px;
    width: 50%;
    height: 25%;


 
}

