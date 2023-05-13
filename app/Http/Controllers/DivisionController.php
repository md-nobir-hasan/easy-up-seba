<?php

namespace App\Http\Controllers;

use App\Models\Division;
use App\Http\Requests\StoreDivisionRequest;
use App\Http\Requests\UpdateDivisionRequest;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Carbon\Carbon;

class DivisionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $this->ncheck('nobir');
        // ncheck('nobir');
        $n['data'] = Division::with(['createdBy','updatedBy'])->where('deleted_by',null)->orderBy('id','desc')->get();
        return Inertia::render('Division/Index',$n);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Division/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreDivisionRequest $request)
    {
        $insert = new Division();
        $insert->name = $request->name;
        $insert->created_by = Auth::user()->id;
        $insert->save();
        $request->session()->flash('msg',$request->name.' সফলভাবে সরক্ষণ করা হয়েছে');
        if($request->submit_btn == 'return'){
            return redirect()->route('admin.setup.division.index');
        }else{
            return redirect()->route('admin.setup.division.create');
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Division $division)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Division $division)
    {
        $n['division'] = $division;
        return Inertia::render('Division/Edit',$n);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateDivisionRequest $request, Division $division)
    {
        $division->name = $request->name;
        $division->updated_at = Carbon::now();
        $division->updated_by = Auth::user()->id;
        $division->save();
        $request->session()->flash('suc_msg',$division->name.' সফলভাবে আপডেট করা হয়েছে');
        return redirect()->route('admin.setup.division.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Division $division)
    {
        //
    }
}
