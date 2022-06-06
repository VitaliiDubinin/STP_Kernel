<?php

namespace App\Controller;

use App\Entity\Product2;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/api2', name: 'api_main2')] //'/api2/products2/all2'
class Product2Controller extends AbstractController
{

    #[Route('/products2/all2', name: "get_all_products", methods: ['GET'])]
    public function getAllProducts(EntityManagerInterface $em)
    {
        $products = $em->getRepository(Product2::class)->findAll();

        $response = [];
        foreach ($products as $product2) {
            $response[] = array(
                'id' => $product2->getId(),
                'user_id' => $product2->getUserId(),
                'product_name' => $product2->getProductName(),
                'price' => $product2->getPrice(),
                'description' => $product2->getDescription(),
                'image' => $product2->getImage(),
                'quantity' => $product2->getQuantity(),
                'unit' => $product2->getUnit(),
            );
            //$em->persist($product2);
            $em->flush();
        }
        return $this->json($response);
    }

    // #[Route('/recipes/add', name: "add_new_recipe", methods: ['POST'])]
    // public function addRecipe(Request $request, ManagerRegistry $doctrine)
    // {
    //     $em = $doctrine->getManager();
    //     $data = json_decode($request->getContent(), true);

    //     $newRecipe = new Recipe();

    //     $newRecipe->setName($data["name"]);
    //     $newRecipe->setPhoto($request->request->get("photo"));
    //     $newRecipe->setInstructions($data["instructions"]);
    //     $newRecipe->setDifficulty($data["difficulty"]);
    //     $newRecipe->setIngredients($data["ingredients"]);

    //     $em->persist($newRecipe);
    //     $em->flush();

    //     return new Response('Added a new recipe ' . $newRecipe->getId());
    // }

    // #[Route('/recipes/find/{id}', name: "find_a_recipe", methods: ['GET'])]
    // public function findRecipe(int $id, EntityManagerInterface $em)
    // {
    //     $recipe = $em->getRepository(Recipe::class)->find($id);

    //     if (!$recipe) {
    //         return $this->json('No recipe was found with the id of ' . $id, 404);
    //     }

    //     $data = [
    //         'id' => $recipe->getId(),
    //         'name' => $recipe->getName(),
    //         'photo' => $recipe->getPhoto(),
    //         'instructions' => $recipe->getInstructions(),
    //         'difficulty' => $recipe->getDifficulty(),
    //         'ingredients' => $recipe->getIngredients(),
    //     ];
    //     return $this->json($data);
    // }

    // #[Route('/recipes/edit/{id}', name: "edit_a_recipe", methods: ['PUT', 'PATCH'])]
    // public function editRecipe(Request $request, int $id, ManagerRegistry $doctrine)
    // {
    //     $entityManager = $doctrine->getManager();
    //     $recipe = $entityManager->getRepository(Recipe::class)->find($id);

    //     if (!$recipe) {
    //         return $this->json('No recipe was found with the id of ' . $id, 404);
    //     }

    //     $recipe->setName($request->request->get('name'));
    //     $entityManager->flush();

    //     $data =  [
    //         'id' => $recipe->getId(),
    //         'name' => $recipe->getName(),
    //     ];

    //     return $this->json($data);
    // }
    // #[Route('/recipes/remove/{id}', name: "remove_a_recipe", methods: ['DELETE'])]
    // public function removeRecipe($id, ManagerRegistry $doctrine)
    // {
    //     $recipe = $doctrine->getRepository(Recipe::class)->find($id);
    //     $entityManager = $doctrine->getManager();

    //     if (!$recipe) {
    //         throw $this->createNotFoundException(
    //             'No recipe was found with the id of ' . $id
    //         );
    //     } else {
    //         $entityManager->remove($recipe);
    //         $entityManager->flush();
    //         return $this->json([
    //             'message' => 'Removed the recipe with the id of ' . $id
    //         ]);
    //     }
    // }
}
