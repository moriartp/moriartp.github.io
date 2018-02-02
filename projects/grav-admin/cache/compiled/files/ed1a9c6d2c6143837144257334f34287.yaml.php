<?php
return [
    '@class' => 'Grav\\Common\\File\\CompiledYamlFile',
    'filename' => '/Users/pj_moriarty/Desktop/grav-admin/user/config/plugins/email.yaml',
    'modified' => 1516899579,
    'data' => [
        'enabled' => true,
        'from' => 'pjmoriarty+XR@newschool.edu',
        'to' => 'pjmoriarty+XR@newschool.edu',
        'mailer' => [
            'engine' => 'sendmail',
            'smtp' => [
                'server' => 'localhost',
                'port' => 25,
                'encryption' => 'none'
            ],
            'sendmail' => [
                'bin' => '/usr/sbin/sendmail -bs'
            ]
        ],
        'content_type' => 'text/html',
        'debug' => true
    ]
];
