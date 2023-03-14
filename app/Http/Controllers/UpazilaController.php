<?php

namespace App\Http\Controllers;

use App\Models\Upazila;
use App\Http\Requests\StoreUpazilaRequest;
use App\Http\Requests\UpdateUpazilaRequest;
use App\Models\District;
use App\Models\Division;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class UpazilaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $n['upazilas'] = Upazila::with(['division','district','createdBy','updatedBy'])->where('deleted_by',null)->orderBy('id','desc')->get();
        return Inertia::render('Upazila/Index',$n);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $n['divisions'] = Division::where('deleted_by',null)->orderBy('id','desc')->get();
        return Inertia::render('Upazila/Create',$n);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreUpazilaRequest $request)
    {
        $insert = new Upazila();
        $insert->division_id = $request->division_id;
        $insert->district_id = $request->district_id;
        $insert->name = $request->name;
        $insert->created_by = Auth::user()->id;
        $insert->save();
        $request->session()->flash('suc_msg',$request->name.' Saved Successfully');
        if($request->submit_btn == 'return'){
            return redirect()->route('admin.setup.upazila.index');
        }else{
            return back();
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Upazila $upazila)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Upazila $upazila)
    {
        $n['upazila'] = Upazila::with(['division','district'])->find($upazila->id);
        $n['divisions'] = Division::where('deleted_by',null)->orderBy('id','desc')->get();
        return Inertia::render('Upazila/Edit',$n);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUpazilaRequest $request, Upazila $upazila)
    {
        $upazila->division_id = $request->division_id;
        $upazila->district_id = $request->district_id;
        $upazila->name = $request->name;
        $upazila->updated_at = Carbon::now();
        $upazila->updated_by = Auth::user()->id;
        $upazila->save();
        $request->session()->flash('suc_msg',$upazila->name.' Updated Successfully');
        return redirect()->route('admin.setup.upazila.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Upazila $upazila)
    {
        //
    }
}
