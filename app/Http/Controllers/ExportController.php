<?php

namespace App\Http\Controllers;

use App\Exports\EkhanaExport;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class ExportController extends Controller
{
    public function exportExcel()
    {
        // dd('nobir');
        return Excel::download(new EkhanaExport, 'ekhana.xlsx');
    }
    public function exportPdf()
    {
        // dd('nobir');
        return Excel::download(new EkhanaExport, 'invoices.pdf', \Maatwebsite\Excel\Excel::DOMPDF);

    }
}
