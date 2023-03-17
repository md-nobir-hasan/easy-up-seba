<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Models\Division;
use App\Models\Role;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $n['users'] = User::with(['createdBy','updatedBy','role','word'])->where('deleted_by',null)->orderBy('id','desc')->get();
        return Inertia::render('User/User/Index',$n);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $n['roles'] = Role::where('deleted_by',null)->orderBy('id','desc')->get();
        $n['divisions'] = Division::where('deleted_by',null)->orderBy('id','desc')->get();
        return Inertia::render('User/User/Create',$n);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreUserRequest $request)
    {
        $insert = new User();
        $insert->name = $request->name;
        $insert->phone = $request->phone;
        $insert->email = $request->email;
        $insert->show_pass = $request->password;
        $insert->password = Hash::make($request->password);
        $insert->address = $request->address;
        $insert->role_id = $request->role_id;
        $insert->word_id = $request->word_id;
        $insert->created_by = Auth::user()->id;
        $insert->save();
        $request->session()->flash('suc_msg',$request->name.' Saved Successfully');
        if($request->submit_btn == 'return'){
            return redirect()->route('admin.user.user.index');
        }else{
            return back();
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        $n['user'] = User::with(['role','word','word.union','word.upazila','word.district'])->find($user->id);
        $n['roles'] = Role::where('deleted_by',null)->orderBy('id','desc')->get();
        $n['divisions'] = Division::where('deleted_by',null)->orderBy('id','desc')->get();
        return Inertia::render('User/User/Edit',$n);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUserRequest $request, User $user)
    {
        $user->name = $request->name;
        $user->phone = $request->phone;
        $user->email = $request->email;
        $user->show_pass = $request->password;
        $user->password = Hash::make($request->password);
        $user->role_id = $request->role_id;
        $user->word_id = $request->word_id;
        $user->address = $request->address;
        $user->updated_at = Carbon::now();
        $user->updated_by = Auth::user()->id;
        $user->save();
        $request->session()->flash('suc_msg',$user->name.' Updated Successfully');
        return redirect()->route('admin.user.user.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        //
    }
}
