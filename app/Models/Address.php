<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Address extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $protected = [
            'title',
            'village_id',
            'union_id',
            'postal_code',
            'ward_number',
            'upazila_id',
            'district_id',
            'division_id',
            'trade_license_id',
            'country',
    ];
}
