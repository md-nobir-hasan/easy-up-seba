<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Word extends Model
{
    use HasFactory;
    public function createdBy(){
        return $this->belongsTo(User::class,'created_by');
    }
    public function updatedBy(){
        return $this->belongsTo(User::class,'updated_by');
    }
    public function deletedBy(){
        return $this->belongsTo(User::class,'deleted_by');
    }

    public function division(){
        return $this->belongsTo(Division::class,'division_id');
    }

    public function district(){
        return $this->belongsTo(District::class,'district_id');
    }
    public function upazila(){
        return $this->belongsTo(Upazila::class,'upazila_id');
    }
    public function union(){
        return $this->belongsTo(Union::class,'union_id');
    }
    public function village(){
        return $this->hasMany(Village::class,'word_id');
    }
    public function ekhana(){
        return $this->hasMany(Ekhana::class,'word_id');
    }

    public function paid(){
        $tax = Tax::latest()->first();
        return Ekhana::select('holding_no', 'yearly_house_rent', 'tax_paid', DB::raw("(yearly_house_rent *$tax->price)/100 as total_price"))->where('tax_paid','>',0)->get();
    }

    public function unpaid(){
        $tax = Tax::latest()->first();
        return Ekhana::all();
    }
    public function houseTax(){
       return $this->hasManyThrough(HouseTaxDeposite::class,Ekhana::class);
    }
    public function houseTaxPaid(){
       return $this->hasManyThrough(HouseTaxDeposite::class,Ekhana::class)->where('paid_amount','>',0);
    }
    public function prevTaxPaid(){
       return $this->hasManyThrough(HouseTaxDeposite::class,Ekhana::class)->where('paid_amount','>',0);
    }
    public function houseTaxUnpaid(){
       return $this->hasManyThrough(HouseTaxDeposite::class,Ekhana::class)->where('paid_amount','<',1);
    }
    public function prevTaxUnpaid(){
       return $this->hasManyThrough(HouseTaxDeposite::class,Ekhana::class)->where('paid_amount','<',1);
    }
    // public function prevTaxPaid(){
    //    return $this->hasManyThrough(HouseTaxDeposite::class,Ekhana::class)->where('paid_amount','<',1);
    // }


}
