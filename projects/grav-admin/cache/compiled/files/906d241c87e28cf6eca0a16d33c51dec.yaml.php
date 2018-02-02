<?php
return [
    '@class' => 'Grav\\Common\\File\\CompiledYamlFile',
    'filename' => '/Users/pj_moriarty/Desktop/grav-admin/user/plugins/cascade-filters/blueprints.yaml',
    'modified' => 1515782707,
    'data' => [
        'name' => 'Cascade Filters',
        'version' => '0.1.0',
        'description' => 'Cascadefilters is a Grav plugin that generates a multiple layer filters collected throughout the site. main features includes: selectable taxonomy types; links have 3 states: normal, active, disable ( the plugin will loop the child items\'s taxomomies to check if a link will continue to work or not, in another words, the filters are associated; Generally, the plugin provides a pages selector to let you choice where to place the filters on, but it not designed for a site-wide usage.',
        'icon' => 'shower',
        'author' => [
            'name' => 'Elvis Cheng',
            'email' => 'ash0080@gmail.com'
        ],
        'homepage' => 'https://github.com/ash0080/grav-plugin-cascade-filters',
        'keywords' => 'filters, multiple condition filters, multiple layer filters, taxonomy, list, tags, categories, grav, plugin',
        'bugs' => 'https://github.com/ash0080/grav-plugin-cascade-filters/issues',
        'docs' => 'https://github.com/ash0080/grav-plugin-cascade-filters/blob/develop/README.md',
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
                ],
                'select_pages' => [
                    'type' => 'pages',
                    'size' => 'medium',
                    'classes' => 'fancy',
                    'label' => 'PLUGIN_CASCADE_FILTERS.FIELDS_SELECT_PAGES_LABEL',
                    'show_all' => false,
                    'show_modular' => false,
                    'show_root' => false,
                    'multiple' => true,
                    'help' => 'PLUGIN_ADMIN.HOME_PAGE_HELP',
                    'validate' => [
                        'type' => 'commalist'
                    ]
                ],
                'taxonomy_filters' => [
                    'type' => 'selectize',
                    'size' => 'medium',
                    'label' => 'PLUGIN_ADMIN.TAXONOMY_TYPES',
                    'config-default@' => 'site.taxonomies',
                    'classes' => 'fancy',
                    'help' => 'PLUGIN_ADMIN.TAXONOMY_TYPES_HELP',
                    'validate' => [
                        'type' => 'commalist'
                    ]
                ]
            ]
        ]
    ]
];
