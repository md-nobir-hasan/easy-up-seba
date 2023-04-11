<?php

namespace App\Exports;

use App\Models\HouseTaxDeposite;
use Maatwebsite\Excel\Concerns\FromCollection;

use Illuminate\Support\Facades\Auth;
use Illuminate\Contracts\View\View;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Concerns\FromView;

class VillLevyExpExl implements FromView
{
    /**
    * @return \Illuminate\Support\Collection
    */
    // public function collection()
    // {
    //     return HouseTaxDeposite::all();
    // }

    public function view(): View
    {
        // $n['village_levy'] = DB::table('house_tax_deposites')
        // ->join('ekhanas','house_tax_deposites.ekhana_id','=','ekhanas.id')
        // ->join('villages','ekhanas.village_id','=','villages.id')
        // ->join('words','house_tax_deposites.word_id','=','words.id')
        // ->join('financial_years','house_tax_deposites.f_year_id','=','financial_years.id')
        // ->where('ekhanas.word_id',$req->word_id)
        // ->where('ekhanas.village_id',$req->village_id)
        // ->where('ekhanas.infrastructure',$req->infrastructure)
        // ->where('house_tax_deposites.f_year_id',$req->f_year_id)
        // ->select('ekhanas.*','villages.name as vill_name','words.name as w_name','house_tax_deposites.*','financial_years.from as fy_from','financial_years.to as fy_to')
        // ->get();
        // return view('exports.ekhana', [
        //     'data' => $ekhana
        // ]);
    }
}
