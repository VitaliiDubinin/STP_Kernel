<?php

namespace App\Controller;

use App\Entity\Product;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/api', name: 'api_main')]
class ProductController extends AbstractController
{
    #[Route('/products/all', name: "get_all_products", methods: ['GET'])]
    public function getAllProducts(EntityManagerInterface $em)
    {
        $products = $em->getRepository(Product::class)->findAll();
        $response = [];
        foreach ($products as $product) {
            $response[] = array(
                'id' => $product->getId(),
                'user_id' => $product->getUserId(),
                'product_name' => $product->getProductName(),
                'price' => $product->getPrice(),
                'description' => $product->getDescription(),
                'image' => $product->getImage(),
                'quantity' => $product->getQuantity(),
                'unit' => $product->getUnit(),
            );
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

    #[Route('/products/find/{id}', name: "find_a_product", methods: ['GET'])]
    public function findProduct(int $id, EntityManagerInterface $em)
    {
        $product = $em->getRepository(Product::class)->find($id);

        if (!$product) {
            return $this->json('No product was found with the id of ' . $id, 404);
        }

        $data = [
            'id' => $product->getId(),
            'product_name' => $product->getProductName(),
            'price' => $product->getPrice(),
            'user_id' => $product->getUserId(),
            'description' => $product->getDescription(),
            'image' => $product->getImage(),
            'quantity' => $product->getQuantity(),
            'unit' => $product->getUnit(),
        ];
        return $this->json($data);
    }

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
