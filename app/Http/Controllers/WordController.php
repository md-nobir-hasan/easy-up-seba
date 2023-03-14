<?php

namespace App\Http\Controllers;

use App\Models\Word;
use App\Http\Requests\StoreWordRequest;
use App\Http\Requests\UpdateWordRequest;
use App\Models\District;
use App\Models\Division;
use App\Models\Union;
use App\Models\Upazila;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class WordController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $n['words'] = Word::with(['division','district','upazila','union','createdBy','updatedBy'])->where('deleted_by',null)->orderBy('id','desc')->get();
        return Inertia::render('Setup/Word/Index',$n);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $n['divisions'] = Division::where('deleted_by',null)->orderBy('id','desc')->get();
        return Inertia::render('Setup/Word/Create',$n);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreWordRequest $request)
    {
        $insert = new Word();
        $insert->division_id = $request->division_id;
        $insert->district_id = $request->district_id;
        $insert->upazila_id = $request->upazila_id;
        $insert->union_id = $request->union_id;
        $insert->name = $request->name;
        $insert->code = $request->code;
        $insert->created_by = Auth::user()->id;
        $insert->save();
        $request->session()->flash('suc_msg',$request->name.' Saved Successfully');
        if($request->submit_btn == 'return'){
            return redirect()->route('admin.setup.word.index');
        }else{
            return back();
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Word $word)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Word $word)
    {
        $n['word'] = Word::with(['division','district','upazila','union'])->find($word->id);
        $n['divisions'] = Division::where('deleted_by',null)->orderBy('id','desc')->get();
        $n['districts'] = District::where('deleted_by',null)->where('division_id',$word->division_id)->orderBy('id','desc')->get();
        $n['upazilas'] = Upazila::where('deleted_by',null)->where('district_id',$word->district_id)->orderBy('id','desc')->get();
        $n['unions'] = Union::where('deleted_by',null)->where('upazila_id',$word->upazila_id)->orderBy('id','desc')->get();
        return Inertia::render('Setup/Word/Edit',$n);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateWordRequest $request, Word $word)
    {
        $word->division_id = $request->division_id;
        $word->district_id = $request->district_id;
        $word->upazila_id = $request->upazila_id;
        $word->union_id = $request->union_id;
        $word->name = $request->name;
        $word->code = $request->code;
        $word->updated_at = Carbon::now();
        $word->updated_by = Auth::user()->id;
        $word->save();
        $request->session()->flash('suc_msg',$word->name.' Updated Successfully');
        return redirect()->route('admin.setup.word.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Word $word)
    {
        //
    }
}
