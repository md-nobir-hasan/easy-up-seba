<?php

namespace App\Http\Controllers;

use App\Models\Village;
use App\Http\Requests\StoreVillageRequest;
use App\Http\Requests\UpdateVillageRequest;
use App\Models\District;
use App\Models\Division;
use App\Models\Union;
use App\Models\Upazila;
use App\Models\Word;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class VillageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        if(Auth::user()->role->name == "Power"){
            $n['villages'] = Village::with(['division','district','upazila','union','word','createdBy','updatedBy'])->where('deleted_by',null)->orderBy('id','desc')->get();
        }
        elseif(Auth::user()->role->name == "Union"){
            $n['villages'] = Village::with(['division','district','upazila','union','word','createdBy','updatedBy'])->where('deleted_by',null)->where('union_id',Auth::user()->union_id)->orderBy('id','desc')->get();
        }
        else{
            $n['villages'] = Village::with(['division','district','upazila','union','word','createdBy','updatedBy'])->where('deleted_by',null)
                                ->where('union_id',Auth::user()->union_id)
                                // ->where('word_id',Auth::user()->word_id)
                                ->orderBy('id','desc')->get();
            $n['villages'] = wordFetch($n['villages']);

        }
        // $n['villages'] = Village::with(['division','district','upazila','union','word','createdBy','updatedBy'])->where('deleted_by',null)->orderBy('id','desc')->get();
        return Inertia::render('Setup/Village/Index',$n);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $n['divisions'] = Division::where('deleted_by',null)->orderBy('id','desc')->get();
        return Inertia::render('Setup/Village/Create',$n);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreVillageRequest $request)
    {
        $insert = new Village();
        $insert->division_id = $request->division_id;
        $insert->district_id = $request->district_id;
        $insert->upazila_id = $request->upazila_id;
        $insert->union_id = $request->union_id;
        $insert->word_id = $request->word_id;
        $insert->name = $request->name;
        $insert->code = $request->code;
        $insert->created_by = Auth::user()->id;
        $insert->save();
        $request->session()->flash('suc_msg',$request->name.' সফলভাবে সরক্ষণ করা হয়েছে');
        if($request->submit_btn == 'return'){
            return redirect()->route('admin.setup.village.index');
        }else{
            return back();
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Village $village)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Village $village)
    {
        $n['village'] = Village::with(['division','district','upazila','union','word'])->find($village->id);
        $n['divisions'] = Division::where('deleted_by',null)->orderBy('id','desc')->get();
        $n['districts'] = District::where('deleted_by',null)->where('division_id',$village->division_id)->orderBy('id','desc')->get();
        $n['upazilas'] = Upazila::where('deleted_by',null)->where('district_id',$village->district_id)->orderBy('id','desc')->get();
        $n['unions'] = Union::where('deleted_by',null)->where('upazila_id',$village->upazila_id)->orderBy('id','desc')->get();
        $n['words'] = Word::where('deleted_by',null)->where('union_id',$village->union_id)->orderBy('id','desc')->get();
        return Inertia::render('Setup/Village/Edit',$n);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateVillageRequest $request, Village $village)
    {
        $village->division_id = $request->division_id;
        $village->district_id = $request->district_id;
        $village->upazila_id = $request->upazila_id;
        $village->union_id = $request->union_id;
        $village->word_id = $request->word_id;
        $village->name = $request->name;
        $village->code = $request->code;
        $village->updated_at = Carbon::now();
        $village->updated_by = Auth::user()->id;
        $village->save();
        $request->session()->flash('suc_msg',$village->name.' সফলভাবে আপডেট করা হয়েছে');
        return redirect()->route('admin.setup.village.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Village $village)
    {
        //
    }
}
