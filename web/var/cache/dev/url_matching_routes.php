<?php

/**
 * This file has been auto-generated
 * by the Symfony Routing Component.
 */

return [
    false, // $matchHost
    [ // $staticRoutes
        '/api2/products2/all2' => [[['_route' => 'api_main2get_all_products', '_controller' => 'App\\Controller\\Product2Controller::getAllProducts'], null, ['GET' => 0], null, false, false, null]],
        '/api/products/all' => [[['_route' => 'api_mainget_all_products', '_controller' => 'App\\Controller\\ProductController::getAllProducts'], null, ['GET' => 0], null, false, false, null]],
        '/api/recipes/all' => [[['_route' => 'api_mainget_all_recipes', '_controller' => 'App\\Controller\\ReceipeController::getAllRecipe'], null, ['GET' => 0], null, false, false, null]],
        '/api/recipes/add' => [[['_route' => 'api_mainadd_new_recipe', '_controller' => 'App\\Controller\\ReceipeController::addRecipe'], null, ['POST' => 0], null, false, false, null]],
    ],
    [ // $regexpList
        0 => '{^(?'
                .'|/_error/(\\d+)(?:\\.([^/]++))?(*:35)'
                .'|/api(?'
                    .'|(\\d+)(*:54)'
                    .'|/(?'
                        .'|products/find/([^/]++)(*:87)'
                        .'|recipes/(?'
                            .'|find/([^/]++)(*:118)'
                            .'|edit/([^/]++)(*:139)'
                            .'|remove/([^/]++)(*:162)'
                        .')'
                    .')'
                .')'
                .'|/((?!api).+)?(*:186)'
            .')/?$}sDu',
    ],
    [ // $dynamicRoutes
        35 => [[['_route' => '_preview_error', '_controller' => 'error_controller::preview', '_format' => 'html'], ['code', '_format'], null, null, false, true, null]],
        54 => [[['_route' => 'app_dbapi_get_db', '_controller' => 'App\\Controller\\DbApi_Controller::get_db'], ['id'], null, null, false, true, null]],
        87 => [[['_route' => 'api_mainfind_a_product', '_controller' => 'App\\Controller\\ProductController::findProduct'], ['id'], ['GET' => 0], null, false, true, null]],
        118 => [[['_route' => 'api_mainfind_a_recipe', '_controller' => 'App\\Controller\\ReceipeController::findRecipe'], ['id'], ['GET' => 0], null, false, true, null]],
        139 => [[['_route' => 'api_mainedit_a_recipe', '_controller' => 'App\\Controller\\ReceipeController::editRecipe'], ['id'], ['PUT' => 0, 'PATCH' => 1], null, false, true, null]],
        162 => [[['_route' => 'api_mainremove_a_recipe', '_controller' => 'App\\Controller\\ReceipeController::removeRecipe'], ['id'], ['DELETE' => 0], null, false, true, null]],
        186 => [
            [['_route' => 'app_home', 'reactRouting' => null, '_controller' => 'App\\Controller\\SpaController::index'], ['reactRouting'], null, null, false, true, null],
            [null, null, null, null, false, false, 0],
        ],
    ],
    null, // $checkCondition
];
