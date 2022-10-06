<?php

date_default_timezone_set('Europe/Riga');

$current_timezone = date_default_timezone_get();

echo $current_timezone.'<br>';

echo date("Y-m-d H:i:s").'<br>';

?>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title></title>
</head>
<body>

<?php

if (isset($_POST['submit']))
{
	echo "First Name: ".$_POST['name'].'<br>';
	echo "Surname: ".$_POST['surname'].'<br>';
	echo "Date of Birth: ".$_POST['dob'].'<br>';
}

?>

<form action="" method="POST">
<label name="name">Name:</label><br>
<input type="text" name="name" value=""><br>

<label name="surname">Surname:</label><br>
<input type="text" name="surname" value=""><br>

<label name="dob">Date of Birth:</label><br>
<input type="date" name="dob" value=""><br>

<input type="submit" name="submit" value="Submit">
</form><br>

</body>
</html>

