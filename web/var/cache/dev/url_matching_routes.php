<?php

/**
 * This file has been auto-generated
 * by the Symfony Routing Component.
 */

return [
    false, // $matchHost
    [ // $staticRoutes
    ],
    [ // $regexpList
        0 => '{^(?'
                .'|/_error/(\\d+)(?:\\.([^/]++))?(*:35)'
                .'|/api(?:/([^/]++))?(*:60)'
                .'|/((?!api).+)?(*:80)'
            .')/?$}sDu',
    ],
    [ // $dynamicRoutes
        35 => [[['_route' => '_preview_error', '_controller' => 'error_controller::preview', '_format' => 'html'], ['code', '_format'], null, null, false, true, null]],
        60 => [[['_route' => 'app_dbapi_get_db', 'slug' => null, '_controller' => 'App\\Controller\\DbApi_Controller::get_db'], ['slug'], null, null, false, true, null]],
        80 => [
            [['_route' => 'app_home', 'reactRouting' => null, '_controller' => 'App\\Controller\\SpaController::index'], ['reactRouting'], null, null, false, true, null],
            [null, null, null, null, false, false, 0],
        ],
    ],
    null, // $checkCondition
];
