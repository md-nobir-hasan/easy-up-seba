<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class TradeLicense extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $protected = [
        'name',
        'fathers_name',
        'mothers_name',
        'email',
        'phone',
        'nationality',
        'nid_number',
        'fee',
        'e_fee',
        'business_name',
        'type_of_business',
        'liquid_capital',
        'business_starting_date',
        'business_space_ownership',
        'business_space_rant',
];
}
