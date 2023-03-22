<?php

namespace App\Exports;

use App\Models\Ekhana;
use Illuminate\Support\Facades\Auth;
use Maatwebsite\Excel\Concerns\FromCollection;

class EkhanaExport implements FromCollection
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        if(Auth::user()->role->name == 'Power'){
            $ekhana = Ekhana::where('deleted_by',null)->orderBy('id','desc')->get();
        }
        elseif(Auth::user()->role->name == 'Union'){
             $ekhana = Ekhana::where('union_id',Auth::user()->word->union_id)->where('deleted_by',null)->orderBy('id','desc')->get();
        }
        else{
            $ekhana = Ekhana::where('union_id',Auth::user()->word->union_id)->where('word_id',Auth::user()->word_id)->where('deleted_by',null)->orderBy('id','desc')->get();
        }
        return $ekhana;
    }
}
