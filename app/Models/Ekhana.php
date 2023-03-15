<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ekhana extends Model
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
    public function word(){
        return $this->belongsTo(Word::class,'word_id');
    }
    public function village(){
        return $this->belongsTo(Village::class,'word_id');
    }
    public function edQuali(){
        return $this->belongsTo(Word::class,'ed_quali_id');
    }
    public function religion(){
        return $this->belongsTo(Word::class,'religion_id');
    }
    public function profession(){
        return $this->belongsTo(Word::class,'profession_id');
    }
    public function houseStruc(){
        return $this->hasMany(HstuEkhanaBkdn::class,'ekhana_id');
    }
}
