<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HouseTaxDeposite extends Model
{
    use HasFactory;
    protected $fillable = ['paid_amount','deposite_date','f_kisti','s_kisti','t_kisti','fo_kisti','arrears','fine'];
    public function createdBy(){
        return $this->belongsTo(User::class,'created_by');
    }
    public function updatedBy(){
        return $this->belongsTo(User::class,'updated_by');
    }
    public function deletedBy(){
        return $this->belongsTo(User::class,'deleted_by');
    }
    public function ekhana(){
        return $this->belongsTo(Ekhana::class,'ekhana_id');
    }

    public function fYear(){
        return $this->belongsTo(FinancialYear::class,'f_year_id');
    }
}
