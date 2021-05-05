{"records" : [
        {"name" : "Ragnar", "languages" : "AngularJS"},
        {"name" : "Lagertha", "languages" : "RaeactJS"},
        {"name" : "Bjorn", "languages" : "VueJS"},
        {"name" : "Atheltsan", "languages" : "NodeJS"}
]}

<?php

    header("Access-Control-Allow-Origin: *");
    header("Content-Type:application/json;charset=UTF-8");
    $conn = new mysqli("localhost", "root", " " ,"angularjs");
    $conn -> set_charset("utf8");
    $result = $conn -> query("select * from customers");

    $sonuc = "";
    while($takethis = $result -> fetch_array(MYSQLI_ASSOC)){
        if($sonuc != ""){
            $sonuc .= " , ";
        }
        $sonuc .= '{Name" : "'$takethis["name"].'", "Language" : "' .$takethis["language"].'"}';
    }
    $sonuc = '{"records" : [' .$sonuc. ']}';
$conn -> close();
echo($sonuc);

?>