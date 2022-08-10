<?php
/**
 * Created by PhpStorm.
 * User: alexast
 * Date: 07.08.2022
 * Time: 08:01
 */

$array = array();

for ($i = 0; $i < 5; ++$i) {
    $sum = 0;
    for ($e = 0; $e < 7; ++$e) {
        $array[$i][$e] = rand(0, 1000);
        $sum += $array[$i][$e];
        printf("%d ",$array[$i][$e] . ' ');
    }
    printf(" = $sum\n");
}
