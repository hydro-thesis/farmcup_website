<?php
$conn = mysqli_connect("154.41.240.103",'u911537442_farmcup','F4rmcup_p4ssw0rd','u911537442_farmcup');
if(!$conn){
	echo "Connection Failed: ". mysqli_connect_error();
	exit;
}else{
    echo "User Connected";
}

$user_serial = $_SESSION["user_serial"];

$sql = "SELECT ambient_light FROM sensordata;";
$result = $conn->query($sql);
  while($row = $result->fetch_assoc()) {
    $ambient_light = $row["ambient_light"];
  }


  echo json_encode($ambient_light);


  $conn->close();