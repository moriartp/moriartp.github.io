<?php
return [
    '@class' => 'Grav\\Common\\File\\CompiledYamlFile',
    'filename' => '/Users/pj_moriarty/Desktop/grav-admin/user/plugins/diagrams/blueprints.yaml',
    'modified' => 1516979477,
    'data' => [
        'name' => 'Diagrams',
        'version' => '1.0.1',
        'description' => 'This plugin allows to easily create amazing and powerful diagrams in Markdown',
        'icon' => 'edit',
        'author' => [
            'name' => 'Aurélien Wolz',
            'email' => 'wolzaurelien@gmail.com',
            'url' => 'http://wolzaurelien.com'
        ],
        'license' => 'MIT',
        'form' => [
            'validation' => 'strict',
            'fields' => [
                'enabled' => [
                    'type' => 'toggle',
                    'label' => 'Plugin status',
                    'highlight' => 1,
                    'default' => 0,
                    'options' => [
                        1 => 'Enabled',
                        0 => 'Disabled'
                    ],
                    'validate' => [
                        'type' => 'bool'
                    ]
                ]
            ]
        ]
    ]
];
