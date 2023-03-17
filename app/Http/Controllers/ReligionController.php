<?php

namespace App\Http\Controllers;

use App\Models\Religion;
use App\Http\Requests\StoreReligionRequest;
use App\Http\Requests\UpdateReligionRequest;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ReligionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $n['data'] = Religion::with(['createdBy','updatedBy'])->where('deleted_by',null)->orderBy('id','desc')->get();
        return Inertia::render('Setup/Religion/Index',$n);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Setup/Religion/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreReligionRequest $request)
    {
        $insert = new Religion();
        $insert->name = $request->name;
        $insert->des = $request->des;
        $insert->created_by = Auth::user()->id;
        $insert->save();
        $request->session()->flash('suc_msg',$request->name.' সফলভাবে সরক্ষণ করা হয়েছে');
        if($request->submit_btn == 'return'){
            return redirect()->route('admin.setup.religion.index');
        }else{
            return back();
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Religion $Religion)
    {

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Religion $Religion)
    {
        $n['mdata'] = $Religion;
        return Inertia::render('Setup/Religion/Edit',$n);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateReligionRequest $request, Religion $Religion)
    {
        $Religion->name = $request->name;
        $Religion->des = $request->des;
        $Religion->updated_at = Carbon::now();
        $Religion->updated_by = Auth::user()->id;
        $Religion->save();
        $request->session()->flash('suc_msg',$Religion->name.' সফলভাবে আপডেট করা হয়েছে');
        return redirect()->route('admin.setup.religion.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Religion $Religion)
    {
        //
    }
}
