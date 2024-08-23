<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use App\Models\FreeOffer;

class FreeOfferCreated extends Mailable
{
    use Queueable, SerializesModels;

    public $freeOffer;

    public function __construct(FreeOffer $freeOffer)
    {
        $this->freeOffer = $freeOffer;
    }

    public function build()
    {
        return $this->subject('New Free Offer Submission')
                    ->view('emails.freeOfferCreated');
    }
}
