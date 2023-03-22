<?php

namespace App\Http\Controllers;

use App\Exports\EkhanaExport;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class ExportController extends Controller
{
    public function export()
    {
        // dd('nobir');
        return Excel::download(new EkhanaExport, 'ekhana.xlsx');
    }
}
