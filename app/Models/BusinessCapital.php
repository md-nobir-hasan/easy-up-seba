<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class BusinessCapital extends Model
{
    use HasFactory;
    use SoftDeletes;


    protected $fillable = ['name', 'tax', 'business_type_id'];

    public function businessType()
    {
        return $this->belongsTo(BusinessType::class);
    }
}
