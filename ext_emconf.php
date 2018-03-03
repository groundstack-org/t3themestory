<?php

/**
 * Extension Manager/Repository config file for ext "themestory".
 */
$EM_CONF[$_EXTKEY] = [
    'title' => 't3themestory',
    'description' => '',
    'category' => 'templates',
    'constraints' => [
        'depends' => [
            'typo3' => '8.7.0-9.5.99',
            'fluid_styled_content' => '8.7.0-9.5.99',
            'rte_ckeditor' => '8.7.0-9.5.99'
        ],
        'conflicts' => [
        ],
    ],
    'autoload' => [
        'psr-4' => [
            'GroundStack\\T3ThemeStory\\' => 'Classes'
        ],
    ],
    'state' => 'stable',
    'uploadfolder' => 0,
    'createDirs' => '',
    'clearCacheOnLoad' => 1,
    'author' => 'Christian Hackl',
    'author_email' => 'hackl.chris@googlemail.com',
    'author_company' => 'GroundStack',
    'version' => '8.1.0',
];
