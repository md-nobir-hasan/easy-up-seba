<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;

class ArtisanController extends Controller
{
    public function composerUpdate(){
        Artisan::call('exec', ['command' => 'composer update']);
        echo 'Successfully composer updated';
    }
    public function composerInstall(){
        Artisan::call('composer:install');
        echo 'Successfully composer installed';
    }
    public function npmInstall(){
        Artisan::call('npm:install');
        echo 'Successfully npm installed';
    }
    public function npmBuild(){
        Artisan::call('npm:build');
        echo 'Successfully npm builded';
    }
    public function optimizeClear(){
        Artisan::call('optimize:clear');
        echo 'Successfully site optimized';
    }
    public function routeClear(){
        Artisan::call('route:clear');
        echo 'Successfully server route cleared';
    }
    public function cacheClear(){
        Artisan::call('cache:clear');
        echo 'Successfully server cache cleared';
    }
    public function migrateSeed(){
        Artisan::call('migrate:fresh --seed');
        echo 'Successfully migrated and seed the data';
    }
}
