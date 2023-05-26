<?php

namespace App\Models;

use App\Enums\OwnershipType;
use App\Enums\Status;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Ramsey\Uuid\Uuid;

class TradeLicense extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
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
        'business_type_id',
        'business_capital_id',
        'business_starting_date',
        'ownership',
        'business_space_rant',
        'size_of_signboard',
        'status',
        'code_number',
        'created_by',
        'updated_by',
        'deleted_by',
    ];

    protected $casts = [
        'business_starting_date' => 'datetime',
        'status' => Status::class,
        'ownership' => OwnershipType::class,
    ];


    /**
     * Override the default boot method to register some extra stuff for every child model.
     */
    protected static function boot()
    {
        static::creating(function ($model) {
            $model->code_number = Uuid::uuid4()->toString();
        });

        parent::boot();
    }

    public function addresses()
    {
        return $this->hasMany(Address::class);
    }

    public function businessType()
    {
        return $this->belongsTo(BusinessType::class);
    }
    public function businessCapital()
    {
        return $this->belongsTo(BusinessCapital::class);
    }
}
