<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function index() {
        $users = User::all();

        return response()->json($users);
        //return response()->json(Hash::make('123456'));
    }
}
