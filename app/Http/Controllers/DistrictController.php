<?php

namespace App\Http\Controllers;

use App\Models\District;
use App\Http\Requests\StoreDistrictRequest;
use App\Http\Requests\UpdateDistrictRequest;
use App\Models\Division;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DistrictController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $n['data'] = District::with(['division','createdBy','updatedBy'])->where('deleted_by',null)->orderBy('id','desc')->get();
        return Inertia::render('District/Index',$n);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $n['divisions'] = Division::where('deleted_by',null)->orderBy('id','desc')->get();
        return Inertia::render('District/Create',$n);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreDistrictRequest $request)
    {
        $insert = new District();
        $insert->division_id = $request->division_id;
        $insert->name = $request->name;
        $insert->created_by = Auth::user()->id;
        $insert->save();
        $request->session()->flash('suc_msg',$request->name.' Saved Successfully');
        if($request->submit_btn == 'return'){
            return redirect()->route('admin.setup.district.index');
        }else{
            return back();
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(District $district)
    {
        return Inertia::render('District/Create',['districts'=>$district]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(District $district)
    {
        $n['district'] = District::with(['division'])->find($district->id);
        $n['divisions'] = Division::where('deleted_by',null)->orderBy('id','desc')->get();
        return Inertia::render('District/Edit',$n);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateDistrictRequest $request, District $district)
    {
        $district->division_id = $request->division_id;
        $district->name = $request->name;
        $district->updated_at = Carbon::now();
        $district->updated_by = Auth::user()->id;
        $district->save();
        $request->session()->flash('suc_msg',$district->name.' Updated Successfully');
        return redirect()->route('admin.setup.district.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(District $district)
    {
        //
    }
}
