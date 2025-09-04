<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    table {
      font-family: arial, sans-serif;
      border-collapse: collapse;
      width: 60vw;
    }
    td, th {
      border: 1px solid #000000;
      text-align: left;
      padding: 8px;
    }
    tr:nth-child(even) {
      background-color: #dddddd;
    }
    body {
      background-color: rgba(0, 236, 216, 0);
      font-family: "Roboto", sans-serif;
    }
    #learning_material > h1 {
      color: rgba(0, 0, 0, 0.733);
      text-align: center;
    }
    #learning_material > h2 {
      color: #000000;
      text-align: center;
    }
    #learning_material > h3 {
      text-align: center;
      color: rgba(240, 5, 5, 0.733);
    }
    .circle {
      width: 400px;
      height: 400px;
      background-color: rgb(0, 255, 0);
      border-radius: 50%;
    }
    .rectangle {
      width: 400px;
      height: 200px;
      background-color: rgb(79, 185, 255);
    }
    #circleAndRectangle {
      display: flex;
      justify-content:space-between;
    }
    a:hover {
      background-color:yellow;
      font-size: 18px;
    }
    .flex-container {
      display: flex;
      flex-wrap: nowrap;
      background-color: DodgerBlue;
      width: 900px;
      height: 100px;
      justify-content: center;
    }
    .flex-container > div {
      background-color: #f1f1f1;
      width: 100px;
      margin: 10px;
      text-align: center;
      line-height: 75px;
      font-size: 30px;
    }
    p {
      text-align: left;
      font-size: 20px;
      margin-top: 0px;
    }
    /* 🔥 Countdown Blinking Style */
/* 🔥 Countdown Blinking Style */
/* 🔥 Countdown Blinking Style */
#countdown {
  color: black !important; /* ✅ Force black text */
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  text-shadow: none;
  animation: blink 1s infinite;
  width: fit-content;
  margin: auto;
  border-radius: 10px;
  padding: 10px;
}

@keyframes blink {
  0%, 100% { opacity: 1; color: black; }  /* ✅ Black when visible */
  50% { opacity: 0; color: black; }       /* ✅ Still black, just hidden */
}


  </style>
  <a href="https://www.Google.com">Google.com</a>
</head>
<body>
  <div style="align-items: center; text-align: center">
    <h1>
      Hello there, my name is Shady Mohamed Mohamed Mahfouz and this is my portfolio website
    </h1>
    <h2>
      I started programming on the 19th of July, 2025 (<span id="daysSince"></span> Days ago)
    </h2>
    <h3>These are the the projects that I was learning on.</h3>
  </div>
  <hr />
  <div id="learning_material">
    <h1>My First CSS Example</h1>
    <h4>My name is shady</h4>

    <div class="flex-container">
      <div>1</div>
      <div>2</div>
      <div>3</div>  
      <div>4</div>
      <div>5</div>
      <div>6</div>  
      <div>7</div>
      <div>8</div>
    </div>

    <a href="https://shadymahfouz20.github.io/Books/">The Books I Read</a>
    <!-- 🔥 Countdown Here -->
    <p id="countdown"></p>

<script>
// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2030 15:37:25").getTime();

setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  // 🔥 Calculate ONLY hours, minutes, seconds
  var hours = Math.floor(distance / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML =
    hours + "h " + minutes + "m " + seconds + "s left To 2030";

  if (distance < 0) {
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);
</script>

    <p>I Have And My Brother Ahmed A <span style="color:rgba(255, 0, 0, 0.76);">Wite Skin</span></p>

    <p id="shady_name">Shady</p>
    <p class="sons-names">Ahmed and Shady</p>

    <table>
      <tr>
        <th>1</th>
        <th>2</th>
        <th>3</th>
        <th>4</th>
      </tr>
      <tr>
        <td>5</td><td>6</td><td>7</td><td>8</td>
      </tr>
      <tr>
        <td>9</td><td>10</td><td>11</td><td>12</td>
      </tr>
      <tr>
        <td>13</td><td>14</td><td>15</td><td>16</td>
      </tr>
      <tr>
        <td>17</td><td>18</td><td>19</td><td>20</td>
      </tr>
      <tr>
        <td>21</td><td>22</td><td>23</td><td>24</td>
      </tr>
      <tr>
        <td><h1>Shady</h1></td><td>26</td><td><p class="Shady">I Love Food</p></td><td>28</td>
      </tr>
      <tr>
        <td colspan="2">
          <h2>An Ordered HTML List</h2>
          <ol>
            <li>Coffee</li><li>Tea</li><li>Milk</li>
          </ol>
        </td>
        <td colspan="2">
          <h2>An Unordered HTML List</h2>
          <ul>
            <li>Coffee</li><li>Tea</li><li>Milk</li>
          </ul>
        </td>
      </tr>
    </table>
    
    <h2>Circle and a rectangle with one next to each other.</h2>
    <div id="circleAndRectangle">
      <div class="circle"></div>
      <div class="rectangle"></div>
    </div>
  </div>
  <script>
    const start = new Date("2025-07-19");
    const today = new Date();
    const diff = Math.floor((today - start) / (1000 * 60 * 60 * 24));
    document.getElementById("daysSince").textContent = diff;
  </script>
</body>
</html>
