<?php
return [
    '@class' => 'Grav\\Common\\File\\CompiledYamlFile',
    'filename' => '/Users/pj_moriarty/Desktop/grav-admin/user/config/site.yaml',
    'modified' => 1517255515,
    'data' => [
        'title' => 'XR CENTER',
        'default_lang' => 'en',
        'author' => [
            'name' => 'X Reality',
            'email' => 'xrcenter-test@newschool.edu'
        ],
        'taxonomies' => [
            0 => 'category',
            1 => 'tag',
            2 => 'designation'
        ],
        'metadata' => [
            'description' => 'Grav is an easy to use, yet powerful, open source flat-file CMS'
        ],
        'summary' => [
            'enabled' => true,
            'format' => 'short',
            'size' => 300,
            'delimiter' => '___'
        ],
        'blog' => [
            'route' => '/blog'
        ],
        'menu' => [
            0 => [
                'url' => '/search',
                'text' => '<i class="fa fa-search" aria-hidden="true"></i>'
            ]
        ]
    ]
];
