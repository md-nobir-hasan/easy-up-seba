<?php

namespace App\Models;

use App\Enums\AddressType;
use App\Models\Bazar;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Address extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
            'title',
            'village_id',
            'union_id',
            'postal_code',
            'ward_id',
            'bazar_id',
            'upazila_id',
            'district_id',
            'division_id',
            'trade_license_id',
            'country',
    ];

    protected $casts = [
        'title' => AddressType::class,
    ];

    public function village()
    {
        return $this->belongsTo(Village::class);
    }

    public function union()
    {
        return $this->belongsTo(Union::class);
    }
    public function bazar()
    {
        return $this->belongsTo(Bazar::class);
    }
    public function ward()
    {
        return $this->belongsTo(Word::class, 'ward_id', 'id');
    }

    public function upazila()
    {
        return $this->belongsTo(Upazila::class);
    }

    public function district()
    {
        return $this->belongsTo(District::class);
    }

    public function tradeLicense()
    {
        return $this->belongsTo(TradeLicense::class);
    }

}
