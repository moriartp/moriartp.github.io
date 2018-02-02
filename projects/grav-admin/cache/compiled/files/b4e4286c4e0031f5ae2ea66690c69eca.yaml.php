<?php
return [
    '@class' => 'Grav\\Common\\File\\CompiledYamlFile',
    'filename' => '/Users/pj_moriarty/Desktop/grav-admin/user/themes/hpstr/blueprints.yaml',
    'modified' => 1516636871,
    'data' => [
        'name' => 'HPSTR',
        'version' => '1.5.0',
        'description' => 'HPSTR theme by mademistakes ported to **Grav**',
        'icon' => 'camera-retro',
        'author' => [
            'name' => 'Team Grav',
            'email' => 'devs@getgrav.org',
            'url' => 'http://getgrav.org'
        ],
        'homepage' => 'https://github.com/getgrav/grav-theme-hpstr',
        'demo' => 'http://demo.getgrav.org/hpstr-skeleton',
        'keywords' => 'hpstr, theme, modern, fast, responsive, blog',
        'bugs' => 'https://github.com/getgrav/grav-theme-hpstr/issues',
        'license' => 'MIT',
        'form' => [
            'validation' => 'loose',
            'fields' => [
                'dropdown.enabled' => [
                    'type' => 'toggle',
                    'label' => 'Dropdown in navbar',
                    'highlight' => 1,
                    'default' => 0,
                    'options' => [
                        1 => 'Enabled',
                        0 => 'Disabled'
                    ],
                    'validate' => [
                        'type' => 'bool'
                    ]
                ],
                'color' => [
                    'type' => 'text',
                    'label' => 'Color',
                    'default' => 'blue',
                    'validate' => [
                        'type' => 'text'
                    ]
                ]
            ]
        ]
    ]
];
