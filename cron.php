<?php

function addCronb($command) {
    $output = @shell_exec("crontab -l");
    file_put_contents("/tmp/crontab.txt", $output . "\n" . $command);
    shell_exec("crontab /tmp/crontab.txt");
}


function removeCron($command) {
    $output = shell_exec("crontab -l");

    $arr = explode("\n", $output);
    $cron = "";
    foreach ($arr as $cmd) {
        if(strlen($cmd) > 0) {
            if( strcmp($cmd, $command) != 0 ) {
                $cron = $cron . "\n" . $cmd;
            }
        }
    }

    file_put_contents("/tmp/crontab.txt", $cron);

    shell_exec("crontab /tmp/crontab.txt");
}
