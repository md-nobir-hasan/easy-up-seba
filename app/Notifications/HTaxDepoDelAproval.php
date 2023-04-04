<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class HTaxDepoDelAproval extends Notification
{
    use Queueable;

    /**
     * Create a new notification instance.
     */
    public $user;
    public $msg;
    public function __construct($user,$msg)
    {

        $this->user = $user;
        $this->msg = $msg;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['database'];
    }


    public function toArray(object $notifiable): array
    {
        return [
            'user_id' => $this->user->id,
            'name' => $this->user->name,
            'msg' => $this->msg,
        ];
    }
}
