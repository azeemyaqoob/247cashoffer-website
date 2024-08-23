<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\FreeOffer;
use App\Mail\FreeOfferCreated;
use Illuminate\Support\Facades\Mail;

class FreeOfferController extends Controller
{
    public function store(Request $request)
    {
        // Validate the incoming request data
        $validatedData = $request->validate([
            'full_address' => 'required|string',
            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'email' => 'required|email',
            'phone' => 'required|string',
            'best_time_to_contact' => 'nullable|string',
            'hear_about_us' => 'nullable|string',
        ]);

        // Create a new FreeOffer instance
        $freeOffer = FreeOffer::create($validatedData);

        // Get the email address from validated data
        $emailAddress = $validatedData['email'];

        // Send email
        Mail::to([$emailAddress, 'sellyourhouse@247cashoffer.com'])->send(new FreeOfferCreated($freeOffer));

        // Return a response indicating success
        return response()->json(['message' => 'Free offer created successfully', 'data' => $freeOffer], 201);
    }
}
