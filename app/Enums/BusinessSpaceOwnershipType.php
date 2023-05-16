<?php

namespace App\Enums;

use App\Traits\EnumToArray;

enum BusinessSpaceOwnershipType: string
{
    use EnumToArray;

    case SELF = 'Self';
    case RENT = 'Rent';
}
