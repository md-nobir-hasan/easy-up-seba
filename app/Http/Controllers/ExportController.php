<?php

namespace App\Http\Controllers;

use App\Exports\EkhanaExport;
use App\Exports\VillLevyExpExl;
use App\Models\Ekhana;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Support\Facades\Auth;

class ExportController extends Controller
{
    public function exportExcel()
    {
        // dd('nobir');
        return Excel::download(new EkhanaExport, 'ekhana.xlsx');
    }
    public function villLevyExpExl()
    {
        // dd('nobir');
        return Excel::download(new VillLevyExpExl, 'village-levy.xlsx');
    }
    public function exportPdf()
    {

        if(Auth::user()->role->name == 'Power'){
            $ekhana = Ekhana::where('deleted_by',null)->orderBy('id','desc')->get();
        }
        elseif(Auth::user()->role->name == 'Union'){
                $ekhana = Ekhana::where('union_id',Auth::user()->union_id)->where('deleted_by',null)->orderBy('id','desc')->get();
        }
        else{
            $ekhana = Ekhana::where('union_id',Auth::user()->union_id)
                        ->whereIn('word_id',$this->aryExtrt())
                        ->where('deleted_by',null)
                        ->orderBy('id','desc')->get();

        }

        $html = '<html><head><style>body { font-family: siyam-rupali; }</style></head><body><p>আমি বাংলায় গান গাই।</p></body></html>';
        $pdf = PDF::loadHTML($html);
        return $pdf->stream();
        // return Excel::download(new EkhanaExport, 'invoices.pdf', \Maatwebsite\Excel\Excel::DOMPDF);

    }
}
