<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FreeOffer extends Model
{
    use HasFactory;

    protected $fillable = [
        'full_address',
        'first_name',
        'last_name',
        'email',
        'phone',
        'best_time_to_contact',
        'hear_about_us',
    ];
}
