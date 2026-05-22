<?php

namespace Database\Seeders;

use App\Models\category;
use App\Models\Product;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
       
        $cat = category::factory(5)->create();
        Product::factory(20)->recycle($cat)->create();
        
    }
}
