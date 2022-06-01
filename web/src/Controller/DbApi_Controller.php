<?php

namespace App\Controller;

use App\Entity\Recipe;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DbApi_Controller extends AbstractController
{
       
    #[Route('/api/{id<\d+>}')]
    public function get_db($slug = null):Response
    {
       $database = [
                [
                    "instruction" => "call api slash and the index of the object for individual display",
                    "example" => "api/x. where x is the desired index of item",
                ],
          
             [
                "id" => 1,
                "username" => "nahom",
                "products" => [
                   [
                      "productName" => "RICE",
                      "shortDescription" => "a very good rice",
                      "description" => "this product was seeded and farmed in the local farms of helsinki, the minimun tu buy is 1kg",
                      "totalAmount" => 100,
                      "units" => "kg",
                      "productPrice" => 1.55,
                      "image" => null,
                      "id" => 1
                   ],
                   [
                      "productName" => "potatoes",
                      "shortDescription" => "this potatos are the best",
                      "description" => "try my potatoes and you will fall inlove for first time with a potato",
                      "totalAmount" => 20,
                      "units" => "kg",
                      "productPrice" => 2.25,
                      "image" => null,
                      "id" => 2
                   ],
                   [
                      "productName" => "zuccini",
                      "shortDescription" => "the perfect size of a zuccini",
                      "description" => "combine this zuccini with vaseline, condom and a bottle of wine then find out what climax is",
                      "totalAmount" => 10,
                      "units" => "unit",
                      "productPrice" => 0.99,
                      "image" => null,
                      "id" => 3
                   ]
                ]
             ],
             [
                "id" => 2,
                "username" => "eyoel",
                "products" => [
                   [
                      "productName" => "punkin",
                      "shortDescription" => "try my punkin",
                      "description" => "just dont be a coward an buy my punkin",
                      "totalAmount" => 1,
                      "units" => "unit",
                      "productPrice" => 100,
                      "image" => null,
                      "id" => 5
                   ],
                   [
                      "productName" => "eggplant",
                      "shortDescription" => "funny name but tasty veggy",
                      "description" => "make the best jokes about eggplants with this beauties of vegetables",
                      "totalAmount" => 20,
                      "units" => "unit",
                      "productPrice" => 2,
                      "image" => null,
                      "id" => 7
                   ],
                   [
                      "productName" => "carrots",
                      "shortDescription" => "very good for eyes health",
                      "description" => "Have you ever seen a bunny with glasses?! if you are not a doctor or a biologist dont comment",
                      "totalAmount" => 200,
                      "units" => "bunch",
                      "productPrice" => 5.99,
                      "image" => null,
                      "id" => 4
                   ],
                   [
                      "productName" => "tomatoes",
                      "shortDescription" => "in red and yellow",
                      "description" => "a salad witout tomatoes is like a a battle cruise armada ship without serial number",
                      "totalAmount" => 50,
                      "units" => "pound",
                      "productPrice" => 0.65,
                      "image" => null,
                      "id" => 6
                   ],
                   [
                      "productName" => "faba beans",
                      "shortDescription" => "get this organic jewels",
                      "description" => "get the beans and grow a magic tree in your back yard",
                      "totalAmount" => 3,
                      "units" => "bean",
                      "productPrice" => 99.99,
                      "image" => null,
                      "id" => 8
                   ]
                ]
             ],
             [
                "id" => 3,
                "username" => "vitali",
                "products" => [
                   [
                      "productName" => "cucumber",
                      "shortDescription" => "the perfect size of a cucumber",
                      "description" => "combine this cucumber with vaseline, condom and a bottle of wine then find out what climax is",
                      "totalAmount" => 10,
                      "units" => "unit",
                      "productPrice" => 10.99,
                      "image" => null,
                      "id" => 9
                   ],    
                   [
                      "productName" => "lettuce",
                      "shortDescription" => "fres as a lettuce",
                      "description" => "is so fresh you cant say no ",
                      "totalAmount" => 10,
                      "units" => "unit",
                      "productPrice" => 10.99,
                      "image" => null,
                      "id" => 10
                   ],    
                   [
                      "productName" => "couliflower",
                      "shortDescription" => "weird and delicious",
                      "description" => "you bet they are the weirdest",
                      "totalAmount" => 10,
                      "units" => "unit",
                      "productPrice" => 10.99,
                      "image" => null,
                      "id" => 11
                   ],     
                   [
                      "productName" => "onions",
                      "shortDescription" => "wanna cry.. of happiness",
                      "description" => "with more crying power that the competitors's",
                      "totalAmount" => 10,
                      "units" => "kg",
                      "productPrice" => 10.99,
                      "image" => null,
                      "id" => 12
                   ],     
                   [
                      "productName" => "chilli",
                      "shortDescription" => "feel the pain",
                      "description" => "garantee => you will taste it today and tomorrow morning",
                      "totalAmount" => 10,
                      "units" => "g",
                      "productPrice" => 10.99,
                      "image" => null,
                      "id" => 13
                   ],    
                   [
                      "productName" => "beetroot",
                      "shortDescription" => "very purple",
                      "description" => "if purpleness is the messure this are the kings",
                      "totalAmount" => 15,
                      "units" => "3 units",
                      "productPrice" => 0.99,
                      "image" => null,
                      "id" => 14
                   ]
                ]
             ],
             [
                "id" => 4,
                "username" => "victor",
                "products" => [
                   [
                      "productName" => "chick peas",
                      "shortDescription" => "already cooked",
                      "description" => "you only need to serve them",
                      "totalAmount" => 10,
                      "units" => "kg",
                      "productPrice" => 20.99,
                      "image" => null,
                      "id" => 15
                   ],
                   [
                      "productName" => "brussel sprows",
                      "shortDescription" => "terrible taste but very healthy",
                      "description" => "Trivia => did you know that brussels sprows are not from brussels",
                      "totalAmount" => 10,
                      "units" => "kg",
                      "productPrice" => 10.99,
                      "image" => null,
                      "id" => 16
                   ],
                   [
                      "productName" => "brocoli",
                      "shortDescription" => "a tree looking veggie",
                      "description" => "this are brought from the far far mellumaki",
                      "totalAmount" => 10,
                      "units" => "kg",
                      "productPrice" => 10.99,
                      "image" => null,
                      "id" => 17
                   ],
                   [
                      "productName" => "spinach",
                      "shortDescription" => "popeye food",
                      "description" => "if you want to rescue your lady from brutus you gotta eat this",
                      "totalAmount" => 10,
                      "units" => "g",
                      "productPrice" => 10.99,
                      "image" => null,
                      "id" => 18
                   ],
                   [
                      "productName" => "garlic",
                      "shortDescription" => "ideal vs vampires",
                      "description" => "its known that vampires dont eat garlic cause the bad breath it leaves after",
                      "totalAmount" => 10,
                      "units" => "g",
                      "productPrice" => 1.99,
                      "image" => null,
                      "id" => 19
                   ]
                ]
             ]
                   ];
    if (!$slug){
        return $this->json($database);
    }
    else
    {
        return $this->json($database[$slug]);
    }

       
    }
}

/*
class ReceipeController extends AbstractController
{
    #[Route('/recipes/all', name: "get_all_recipes", methods: ['GET'])]
    public function getAllRecipe(EntityManagerInterface $em)
    {
        $recipes = $em->getRepository(Recipe::class)->findAll();
        $response = [];
        foreach ($recipes as $recipe) {
            $response[] = array(
                'id' => $recipe->getId(),
                'name' => $recipe->getName(),
                'photo' => $recipe->getPhoto(),
                'instructions' => $recipe->getInstructions(),
                'difficulty' => $recipe->getDifficulty(),
                'ingredients' => $recipe->getIngredients(),
            );
        }
        return $this->json($response);
    }

    #[Route('/recipes/add', name: "add_new_recipe", methods: ['POST'])]
    public function addRecipe(Request $request, ManagerRegistry $doctrine)
    {
        $em = $doctrine->getManager();
        $data = json_decode($request->getContent(), true);

        $newRecipe = new Recipe();

        $newRecipe->setName($data["name"]);
        $newRecipe->setPhoto($request->request->get("photo"));
        $newRecipe->setInstructions($data["instructions"]);
        $newRecipe->setDifficulty($data["difficulty"]);
        $newRecipe->setIngredients($data["ingredients"]);

        $em->persist($newRecipe);
        $em->flush();

        return new Response('Added a new recipe ' . $newRecipe->getId());
    }

    #[Route('/recipes/find/{id}', name: "find_a_recipe", methods: ['GET'])]
    public function findRecipe(int $id, EntityManagerInterface $em)
    {
        $recipe = $em->getRepository(Recipe::class)->find($id);

        if (!$recipe) {
            return $this->json('No recipe was found with the id of ' . $id, 404);
        }

        $data = [
            'id' => $recipe->getId(),
            'name' => $recipe->getName(),
            'photo' => $recipe->getPhoto(),
            'instructions' => $recipe->getInstructions(),
            'difficulty' => $recipe->getDifficulty(),
            'ingredients' => $recipe->getIngredients(),
        ];
        return $this->json($data);
    }

    #[Route('/recipes/edit/{id}', name: "edit_a_recipe", methods: ['PUT', 'PATCH'])]
    public function editRecipe(Request $request, int $id, ManagerRegistry $doctrine)
    {
        $entityManager = $doctrine->getManager();
        $recipe = $entityManager->getRepository(Recipe::class)->find($id);

        if (!$recipe) {
            return $this->json('No recipe was found with the id of ' . $id, 404);
        }

        $recipe->setName($request->request->get('name'));
        $entityManager->flush();

        $data =  [
            'id' => $recipe->getId(),
            'name' => $recipe->getName(),
        ];

        return $this->json($data);
    }
    #[Route('/recipes/remove/{id}', name: "remove_a_recipe", methods: ['DELETE'])]
    public function removeRecipe($id, ManagerRegistry $doctrine)
    {
        $recipe = $doctrine->getRepository(Recipe::class)->find($id);
        $entityManager = $doctrine->getManager();

        if (!$recipe) {
            throw $this->createNotFoundException(
                'No recipe was found with the id of ' . $id
            );
        } else {
            $entityManager->remove($recipe);
            $entityManager->flush();
            return $this->json([
                'message' => 'Removed the recipe with the id of ' . $id
            ]);
        }
    }
}
*/