<?php

namespace App\Http\Controllers;

use App\Models\Role;
use App\Http\Requests\StoreRoleRequest;
use App\Http\Requests\UpdateRoleRequest;
use App\Models\Module;
use App\Models\Permission;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $n['roles'] = Role::where('deleted_by',null)->orderBy('id','desc')->get();
        return Inertia::render('User/Role/Index',$n);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

        $n['modules'] = Module::where('deleted_by',null)->get();
        return Inertia::render('User/Role/Create',$n);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRoleRequest $request)
    {
        // dd($request->all());
        $insert = new Role();
        $insert->name = $request->name;
        $insert->created_by = Auth::user()->id;
        $insert->save();
        foreach($request->perm as $key => $value){
            $insert_perm  = new Permission();
            if($value == 'true'){
                $insert_perm->role_id =  $insert->id;
                $insert_perm->module_id =  $key;
                if(isset($request->ased[$key.'add'])){
                    if($request->ased[$key.'add'] == 'true'){
                        $insert_perm->add =  1;
                    }
                }

                if(isset($request->ased[$key.'show'])){
                    if($request->ased[$key.'show'] == 'true'){
                        $insert_perm->show =  1;
                    }
                }

                if(isset($request->ased[$key.'edit'])){
                    if($request->ased[$key.'edit'] == 'true'){
                        $insert_perm->edit =  1;
                    }
                }

                if(isset($request->ased[$key.'delete'])){
                    if($request->ased[$key.'delete'] == 'true'){
                        $insert_perm->delete =  1;
                    }
                }
                $insert_perm->save();
            }
        }

        $request->session()->flash('suc_msg',$request->name.' সফলভাবে সরক্ষণ করা হয়েছে');
        if($request->submit_btn == 'return'){
            return redirect()->route('admin.user.role.index');
        }else{
            return to_route('admin.user.role.create');
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Role $role)
    {
       //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Role $role)
    {
        $n['role'] = $role;
        $n['modules'] = Module::where('deleted_by',null)->get();
        $n['perms'] = Permission::where('deleted_by',null)->orderBy('id','desc')->where('role_id',$role->id)->get();
        return Inertia::render('User/Role/Edit',$n);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRoleRequest $request, Role $role)
    {
        $role->name = $request->name;
        $role->updated_at = Carbon::now();
        $role->updated_by = Auth::user()->id;
        $role->save();
        Permission::where('role_id',$role->id)->delete();
        foreach($request->perm as $key => $value){
            $insert_perm  = new Permission();
            if($value == 'true'){
                $insert_perm->role_id =  $role->id;
                $insert_perm->module_id =  $key;

                if(isset($request->ased[$key.'add'])){
                    if($request->ased[$key.'add'] == 'true'){
                        $insert_perm->add =  1;
                    }
                }

                if(isset($request->ased[$key.'show'])){
                    if($request->ased[$key.'show'] == 'true'){
                        $insert_perm->show =  1;
                    }
                }

                if(isset($request->ased[$key.'edit'])){
                    if($request->ased[$key.'edit'] == 'true'){
                        $insert_perm->edit =  1;
                    }
                }

                if(isset($request->ased[$key.'delete'])){
                    if($request->ased[$key.'delete'] == 'true'){
                        $insert_perm->delete =  1;
                    }
                }
                $insert_perm->save();
            }
        }
        $request->session()->flash('suc_msg',$role->name.' সফলভাবে আপডেট করা হয়েছে');
        return redirect()->route('admin.user.role.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Role $role)
    {
        //
    }
}
