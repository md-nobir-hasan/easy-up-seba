<?php

namespace App\Http\Controllers;

use App\Models\Module;
use App\Models\Permission;
use App\Models\User;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Auth;

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;
    public function ncheck($module){
        if(Auth::user()){
            $module_id = Module::where('name',$module)->first();
            if($module_id){
                $has_permissions = Permission::where('role_id',Auth::user()->id)
                                    ->where('module_id',$module_id->id)->first();

                if($has_permissions){
                    return $has_permissions;
                }else{
                    return false;
                }
            }else{
                return false;
            }
        }else{
            return false;
        }
    }
    public function ncustomUserCheck($role_id,$module){
            $module_id = Module::where('name',$module)->first();
            if($module_id){
                $has_permissions = Permission::where('role_id',$role_id)
                                    ->where('module_id',$module_id->id)->first();

                if($has_permissions){
                    return $has_permissions;
                }else{
                    return false;
                }
            }else{
                return false;
            }

    }
        // public function wordFetch($data){
        //     $i = 1;
        //     foreach(Auth::user()->uwbkdn as $word){
        //         if($i == 1){
        //                 $data =  $data->where('word_id',$word->word->id);
        //         }else{
        //                 $data =  $data->orWhere('word_id',$word->word->id);
        //         }
        //         $i++;
        //     }
        //     return  $data;
        // }
        public function aryExtrt(){
            $wrd_arr = array();
            foreach(Auth::user()->uwbkdn as $word){
                array_push($wrd_arr, $word->word_id);
            }
            return $wrd_arr;
        }

}

