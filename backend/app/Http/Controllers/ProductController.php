<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        
        $products= Product::all();
        return response()->json([
            "data" => $products,
            "status" => 200,
        ],200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
{
    $request->validate([
        'name' => 'required',
        'desc' => 'required',
        'price'=> 'required|integer',
        'category_id' => "required",
        'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
    ]);

    $input = $request->all();

    if ($image = $request->file('image')) {
        $destinationPath = 'images/';
        $productImage = date('YmdHis') . "." . $image->getClientOriginalExtension();
        $image->move(public_path($destinationPath), $productImage);

        $input['image'] = "http://127.0.0.1:8000/$destinationPath$productImage";
    }

    $product = Product::create($input);

    return response()->json([
        "message" => "Product created successfully",
        "data" => $product,
        "status" => 201
    ], 201);
}

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        return response()->json([
            "data"=>$product ,
            "status" => 200,
            "id" =>$product->id,
        ],200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        //
    }
}
