<?php

use App\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = [[
            'id' => 1,
            'name' => 'apu314',
            'email' => 'info@apu314.com',
            'password' => '$2y$10$gazB\/ob5Ev5yVXuPUSZOhuBub.7DEzFx2QtavWzTgVcQy6TS\/EtzS', // 123456
            'remember_token' => null,
        ]];

        User::insert($users);
    }
}
