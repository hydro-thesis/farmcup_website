<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="./src/assets/farm-cup.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Farm Cup Control System</title>
    <link rel="stylesheet" href="src/style.css" />
    <link href="src/indexx.css" rel="stylesheet" />
  </head>
  <body><div class="login-container">
    <div class="login-feature-card">
        <h2 class="login-text01">Login</h2>
        <form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>" style="text-align: center;">
            <input type="text" required="" placeholder="Username" name="userName" class="login-textinput input" />
            <input type="password" required="" placeholder="Password" name="passWord" class="login-textinput1 input" /><br>
            <button type="submit" name="login" class="login-navlink button">
            <div class="error-message" style="display: none;"></div>
                <span>
                    <span>LOGIN</span>
                    <br />
                </span>
            </button><br/>
        </form>
    </div>
    
    <?php
    session_start();
    
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        
      // Replace these with your actual database credentials
      $db_host = "localhost";
      $db_user = "root";
      $db_password = "";
      $db_name = "farmcup_website";
  
      // Create a database connection
      $conn = new mysqli($db_host, $db_user, $db_password, $db_name);
  
      if ($conn->connect_error) {
          die("Connection failed: " . $conn->connect_error);
      }
  
      // Get user input
      $user = $_POST["userName"];
      $pass = $_POST["passWord"];
  
      // Perform user authentication (replace with your actual SQL query)
      $sql = "SELECT * FROM userdata WHERE username = '$user' AND password = '$pass'";
      $result = $conn->query($sql);
  
      if ($result->num_rows === 1) {
          // User authentication successful
          $user = $result->fetch_assoc();
  
          header('Location: frontend-workshop/index.html');
          
      } else {
          // Invalid login credentials
          $_SESSION["error_message"] = "Invalid username or password.";
      }
  
      $conn->close();
  }
  
    ?>
</div>

    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
  </body>
</html>
