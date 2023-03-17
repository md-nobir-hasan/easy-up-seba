<?php

namespace App\Http\Controllers;

use App\Models\Union;
use App\Http\Requests\StoreUnionRequest;
use App\Http\Requests\UpdateUnionRequest;
use App\Models\District;
use App\Models\Division;
use App\Models\Upazila;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class UnionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $n['unions'] = Union::with(['division','district','upazila','createdBy','updatedBy'])->where('deleted_by',null)->orderBy('id','desc')->get();
        return Inertia::render('Setup/Union/Index',$n);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $n['divisions'] = Division::where('deleted_by',null)->orderBy('id','desc')->get();
        return Inertia::render('Setup/Union/Create',$n);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreUnionRequest $request)
    {
        $insert = new Union();
        $insert->division_id = $request->division_id;
        $insert->district_id = $request->district_id;
        $insert->upazila_id = $request->upazila_id;
        $insert->name = $request->name;
        $insert->code = $request->code;
        $insert->created_by = Auth::user()->id;
        $insert->save();
        $request->session()->flash('suc_msg',$request->name.' সফলভাবে সরক্ষণ করা হয়েছে');
        if($request->submit_btn == 'return'){
            return redirect()->route('admin.setup.union.index');
        }else{
            return back();
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Union $union)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Union $union)
    {
        $n['union'] = Union::with(['division','district','upazila'])->find($union->id);
        $n['divisions'] = Division::where('deleted_by',null)->orderBy('id','desc')->get();
        $n['districts'] = District::where('deleted_by',null)->where('division_id',$union->division_id)->orderBy('id','desc')->get();
        $n['upazilas'] = Upazila::where('deleted_by',null)->where('district_id',$union->district_id)->orderBy('id','desc')->get();
        return Inertia::render('Setup/Union/Edit',$n);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUnionRequest $request, Union $union)
    {

        $union->division_id = $request->division_id;
        $union->district_id = $request->district_id;
        $union->upazila_id = $request->upazila_id;
        $union->name = $request->name;
        $union->code = $request->code;
        $union->updated_at = Carbon::now();
        $union->updated_by = Auth::user()->id;
        $union->save();
        $request->session()->flash('suc_msg',$union->name.' সফলভাবে আপডেট করা হয়েছে');
        return redirect()->route('admin.setup.union.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Union $union)
    {
        //
    }
}
