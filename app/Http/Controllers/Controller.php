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

}
