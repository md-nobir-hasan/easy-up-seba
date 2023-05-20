<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserWordBkdn extends Model
{
    use HasFactory;

    public function words(){
        return $this->belongsTo(Word::class,'word_id');
    }
}
