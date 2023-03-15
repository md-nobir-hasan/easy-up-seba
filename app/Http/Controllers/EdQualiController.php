<?php

namespace App\Http\Controllers;

use App\Models\EducationQualification;
use App\Http\Requests\StoreEducationQualificationRequest;
use App\Http\Requests\UpdateEducationQualificationRequest;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class EdQualiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $n['data'] = EducationQualification::with(['createdBy','updatedBy'])->where('deleted_by',null)->orderBy('id','desc')->get();
        return Inertia::render('Setup/EdQuali/Index',$n);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Setup/EdQuali/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreEducationQualificationRequest $request)
    {
        $insert = new EducationQualification();
        $insert->name = $request->name;
        $insert->des = $request->des;
        $insert->created_by = Auth::user()->id;
        $insert->save();
        $request->session()->flash('suc_msg',$request->name.' Saved Successfully');
        if($request->submit_btn == 'return'){
            return redirect()->route('admin.setup.education-qualification.index');
        }else{
            return to_route('admin.setup.education-qualification.create');
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(EducationQualification $educationQualification)
    {

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(EducationQualification $educationQualification)
    {
        $n['mdata'] = $educationQualification;
        return Inertia::render('Setup/EdQuali/Edit',$n);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateEducationQualificationRequest $request, EducationQualification $educationQualification)
    {
        $educationQualification->name = $request->name;
        $educationQualification->des = $request->des;
        $educationQualification->updated_at = Carbon::now();
        $educationQualification->updated_by = Auth::user()->id;
        $educationQualification->save();
        $request->session()->flash('suc_msg',$educationQualification->name.' Updated Successfully');
        return redirect()->route('admin.setup.education-qualification.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(EducationQualification $educationQualification)
    {
        //
    }
}
