<?php
/**
 * Created by PhpStorm.
 * User: alexast
 * Date: 07.08.2022
 * Time: 07:24
 */

$ladder = array();
for ($i = 1; $i <= 99; $i++) {
    array_push($ladder, $i);
}

for ($y = 0; $y < count($ladder); $y++) {
    for ($e = 0; $e <= $y; $e++) {
        printf("%d ",$ladder[$e] . ' ');
    }
    printf("\n");
}
