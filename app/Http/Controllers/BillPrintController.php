<?php

namespace App\Http\Controllers;

use App\Models\Ekhana;
use App\Models\FinancialYear;
use App\Models\HouseTaxDeposite;
use App\Models\Village;
use App\Models\Word;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class BillPrintController extends Controller
{

    public function single(){

        if(Auth::user()->role->name == 'Power'){
            $n['words'] = Word::with(['union'])->where('deleted_by',null)->get();
            $n['ekhanas'] = Ekhana::with(['union','word'])->where('deleted_by',null)->get();
        }
        elseif(Auth::user()->role->name == 'Union'){
            $n['words'] = Word::with(['union'])->where('deleted_by',null)->where('union_id',Auth::user()->union_id)->get();
            $n['ekhanas'] = Ekhana::with(['union','word'])->where('deleted_by',null)->where('union_id',Auth::user()->union_id)->get();
        }
        else{
            $n['words'] = Word::with(['union'])->where('deleted_by',null)
                        // ->where('id',Auth::user()->word_id)
                        ->get();
            $n['ekhanas'] = Ekhana::with(['union','word'])->where('deleted_by',null)
                            // ->where('word_id',Auth::user()->word_id)
                            ->get();
            $n['words'] = wordFetch($n['words']);
            $n['ekhanas'] = wordFetch($n['ekhanas']);
        }
        $n['f_years'] = FinancialYear::where('deleted_at',null)->orderBy('id','desc')->get();

        return Inertia::render('Tax/BillPrint/Single/Index',$n);
    }

    public function singleShow(Request $req){
        $n['bill'] = HouseTaxDeposite::query()->with(['fYear','ekhana','ekhana.word'])
                                        ->where('ekhana_id',$req->ekhana_id)
                                        ->where('f_year_id',$req->f_y_id)
                                        ->whereDate('deposite_date','=',$req->deposite_date)
                                        ->first();
            if(!$n['bill']){
                return back()->with('msg','কোন তথ্য পাওয়া যায়নি');
            }
        $n['previous_arrears'] = $n['bill']->previousArrears();

        return Inertia::render('Tax/BillPrint/Single/Show',$n);
    }


    public function all(){

        if(Auth::user()->role->name == 'Power'){
            $n['words'] = Word::with(['union'])->where('deleted_by',null)->get();
        }
        elseif(Auth::user()->role->name == 'Union'){
            $n['words'] = Word::with(['union'])->where('deleted_by',null)->where('union_id',Auth::user()->union_id)->get();
        }
        else{
            $n['words'] = Word::with(['union'])->where('deleted_by',null)
                            // ->where('id',Auth::user()->word_id)
                            ->get();
            $n['words'] = wordFetch($n['words']);
        }
        $n['f_years'] = FinancialYear::where('deleted_at',null)->orderBy('id','desc')->get();

        return Inertia::render('Tax/BillPrint/All/Index',$n);
    }

    public function allShow(Request $req){

        $n['billds'] = HouseTaxDeposite::with(['fYear','ekhana'=>function ($query) use ($req){$query->where('word_id',$req->word_id)->where('village_id',$req->village_id);},
                                            'ekhana.word'])
                                        ->where('f_year_id',$req->f_y_id)
                                        ->whereDate('deposite_date','=',$req->deposite_date)
                                        ->where('id','>=',$req->page_start)
                                        ->limit($req->page_no)
                                        ->get();

        $n['bills'] = DB::table('house_tax_deposites')
                            ->join('financial_years','house_tax_deposites.f_year_id','=','financial_years.id')
                            ->join('ekhanas','house_tax_deposites.ekhana_id','=','ekhanas.id')
                            ->join('words','house_tax_deposites.ekhana_id','=','words.id')
                            ->where('ekhanas.word_id',$req->word_id)
                            ->where('ekhanas.village_id',$req->village_id)
                            ->where('house_tax_deposites.f_year_id',$req->f_y_id)
                            ->whereDate('house_tax_deposites.deposite_date','=',$req->deposite_date)
                            ->where('house_tax_deposites.id','>=',$req->page_start)
                            ->limit($req->page_no)
                            ->select('house_tax_deposites.*','ekhanas.holding_no','ekhanas.bn_name','ekhanas.spouse_name','financial_years.from','financial_years.to','words.name as w_name')
                            ->get();
            if(count($n['bills'])<1){
                return back()->with('msg','কোন তথ্য পাওয়া যায়নি');
            }
        foreach($n['billds'] as $b){
            $n["pars$b->id"] = $b->previousArrears();
        }

        return Inertia::render('Tax/BillPrint/All/Show',$n);
    }


    public function singleOld(){

        if(Auth::user()->role->name == 'Power'){
            $n['words'] = Word::with(['union'])->where('deleted_by',null)->get();
            $n['ekhanas'] = Ekhana::with(['union','word'])->where('deleted_by',null)->get();
        }
        elseif(Auth::user()->role->name == 'Union'){
            $n['words'] = Word::with(['union'])->where('deleted_by',null)->where('union_id',Auth::user()->union_id)->get();
            $n['ekhanas'] = Ekhana::with(['union','word'])->where('deleted_by',null)->where('union_id',Auth::user()->union_id)->get();
        }
        else{
            $n['words'] = Word::with(['union'])->where('deleted_by',null)
                        // ->where('id',Auth::user()->word_id)
                        ->get();
            $n['ekhanas'] = Ekhana::with(['union','word'])->where('deleted_by',null)
                            // ->where('word_id',Auth::user()->word_id)
                            ->get();
            $n['words'] = wordFetch($n['words']);
            $n['ekhanas'] = wordFetch($n['ekhanas']);
        }
        $n['f_years'] = FinancialYear::where('deleted_at',null)->orderBy('id','desc')->get();

        return Inertia::render('Tax/BillPrint/SingleOld/Index',$n);
    }

    public function singleOldShow(Request $req){
        $n['bill'] = HouseTaxDeposite::query()->with(['fYear','ekhana','ekhana.word'])
                                        ->where('ekhana_id',$req->ekhana_id)
                                        ->where('f_year_id',$req->f_y_id)
                                        ->whereDate('deposite_date','=',$req->deposite_date)
                                        ->first();
            if(!$n['bill']){
                return back()->with('msg','কোন তথ্য পাওয়া যায়নি');
            }
        $n['previous_arrears'] = $n['bill']->previousArrears();

        return Inertia::render('Tax/BillPrint/SingleOld/Show',$n);
    }

    public function allOld(){

        if(Auth::user()->role->name == 'Power'){
            $n['words'] = Word::with(['union'])->where('deleted_by',null)->get();
        }
        elseif(Auth::user()->role->name == 'Union'){
            $n['words'] = Word::with(['union'])->where('deleted_by',null)->where('union_id',Auth::user()->union_id)->get();
        }
        else{
            $n['words'] = Word::with(['union'])->where('deleted_by',null)
                            // ->where('id',Auth::user()->word_id)
                            ->get();
            $n['words'] = wordFetch($n['words']);
        }
        $n['f_years'] = FinancialYear::where('deleted_at',null)->orderBy('id','desc')->get();

        return Inertia::render('Tax/BillPrint/AllOld/Index',$n);
    }

    public function allOldShow(Request $req){

        $n['billds'] = HouseTaxDeposite::with(['fYear','ekhana'=>function ($query) use ($req){$query->where('word_id',$req->word_id)->where('village_id',$req->village_id);},
                                            'ekhana.word'])
                                        ->where('f_year_id',$req->f_y_id)
                                        ->whereDate('deposite_date','=',$req->deposite_date)
                                        ->where('id','>=',$req->page_start)
                                        ->limit($req->page_no)
                                        ->get();

        $n['bills'] = DB::table('house_tax_deposites')
                            ->join('financial_years','house_tax_deposites.f_year_id','=','financial_years.id')
                            ->join('ekhanas','house_tax_deposites.ekhana_id','=','ekhanas.id')
                            ->join('words','house_tax_deposites.ekhana_id','=','words.id')
                            ->where('ekhanas.word_id',$req->word_id)
                            ->where('ekhanas.village_id',$req->village_id)
                            ->where('house_tax_deposites.f_year_id',$req->f_y_id)
                            ->whereDate('house_tax_deposites.deposite_date','=',$req->deposite_date)
                            ->where('house_tax_deposites.id','>=',$req->page_start)
                            ->limit($req->page_no)
                            ->select('house_tax_deposites.*','ekhanas.holding_no','ekhanas.phone','ekhanas.bn_name','ekhanas.spouse_name','financial_years.from','financial_years.to','words.name as w_name')
                            ->get();
            if(count($n['bills'])<1){
                return back()->with('msg','কোন তথ্য পাওয়া যায়নি');
            }
        foreach($n['billds'] as $b){
            $n["pars$b->id"] = $b->previousArrears();
        }

        return Inertia::render('Tax/BillPrint/AllOld/Show',$n);
    }

    //All POS bill
    public function allpos(Request $req){
        if(Auth::user()->role->name == 'Power'){
            $n['words'] = Word::with(['union'])->where('deleted_by',null)->get();
        }
        elseif(Auth::user()->role->name == 'Union'){
            $n['words'] = Word::with(['union'])->where('deleted_by',null)->where('union_id',Auth::user()->union_id)->get();
        }
        else{
            $n['words'] = Word::with(['union'])->where('deleted_by',null)
                            // ->where('id',Auth::user()->word_id)
                            ->get();
            $n['words'] = wordFetch($n['words']);
        }
        $n['f_years'] = FinancialYear::where('deleted_at',null)->orderBy('id','desc')->get();

        return Inertia::render('Tax/BillPrint/AllPos/Index',$n);
    }

    //Single POS bill
    public function singlepos(){

        if(Auth::user()->role->name == 'Power'){
            $n['words'] = Word::with(['union'])->where('deleted_by',null)->get();
            $n['ekhanas'] = Ekhana::with(['union','word'])->where('deleted_by',null)->get();
        }
        elseif(Auth::user()->role->name == 'Union'){
            $n['words'] = Word::with(['union'])->where('deleted_by',null)->where('union_id',Auth::user()->union_id)->get();
            $n['ekhanas'] = Ekhana::with(['union','word'])->where('deleted_by',null)->where('union_id',Auth::user()->union_id)->get();
        }
        else{
            $n['words'] = Word::with(['union'])->where('deleted_by',null)
                        ->where('id',Auth::user()->word_id)
                        ->get();
            $n['ekhanas'] = Ekhana::with(['union','word'])->where('deleted_by',null)
                            ->where('word_id',Auth::user()->word_id)
                            ->get();
            $n['words'] = wordFetch($n['words']);
            $n['ekhanas'] = wordFetch($n['ekhanas']);
        }
        $n['f_years'] = FinancialYear::where('deleted_at',null)->orderBy('id','desc')->get();

        return Inertia::render('Tax/BillPrint/SinglePos/Index',$n);
    }

    //All POS Show
    public function allposShow(Request $req){

        $n['billds'] = HouseTaxDeposite::with(['fYear','ekhana'=>function ($query) use ($req){$query->where('word_id',$req->word_id)->where('village_id',$req->village_id);},
                                            'ekhana.word'])
                                        ->where('f_year_id',$req->f_y_id)
                                        ->whereDate('deposite_date','=',$req->deposite_date)
                                        ->where('id','>=',$req->page_start)
                                        ->limit($req->page_no)
                                        ->get();

        $n['bills'] = DB::table('house_tax_deposites')
                            ->join('financial_years','house_tax_deposites.f_year_id','=','financial_years.id')
                            ->join('ekhanas','house_tax_deposites.ekhana_id','=','ekhanas.id')
                            ->join('words','house_tax_deposites.ekhana_id','=','words.id')
                            ->where('ekhanas.word_id',$req->word_id)
                            ->where('ekhanas.village_id',$req->village_id)
                            ->where('house_tax_deposites.f_year_id',$req->f_y_id)
                            ->whereDate('house_tax_deposites.deposite_date','=',$req->deposite_date)
                            ->where('house_tax_deposites.id','>=',$req->page_start)
                            ->limit($req->page_no)
                            ->select('house_tax_deposites.*','ekhanas.holding_no','ekhanas.bn_name','ekhanas.phone','ekhanas.spouse_name','financial_years.from','financial_years.to','words.name as w_name')
                            ->get();
            if(count($n['bills'])<1){
                return back()->with('msg','কোন তথ্য পাওয়া যায়নি');
            }
        foreach($n['billds'] as $b){
            $n["pars$b->id"] = $b->previousArrears();
        }

        return Inertia::render('Tax/BillPrint/AllPos/Show',$n);
    }

    //Single POS Show
    public function singleposShow(Request $req){
        $n['bill'] = HouseTaxDeposite::query()->with(['fYear','ekhana','ekhana.word'])
                                        ->where('ekhana_id',$req->ekhana_id)
                                        ->where('f_year_id',$req->f_y_id)
                                        ->whereDate('deposite_date','=',$req->deposite_date)
                                        ->first();
            if(!$n['bill']){
                return back()->with('msg','কোন তথ্য পাওয়া যায়নি');
            }
        $n['previous_arrears'] = $n['bill']->previousArrears();

        return Inertia::render('Tax/BillPrint/SinglePos/Show',$n);
    }
}
