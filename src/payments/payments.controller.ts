import { Controller, Get, Post } from '@nestjs/common';
import { PaymentsService } from './payments.service';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post('create-payment-session')
  createPaymentSession() {
    return this.paymentsService.createPaymentSession();
  }

  @Get('success')
  success() {
    return {
      ok: true,
      message: 'Payments successful',
    };
  }

  @Get('cancel')
  cancel() {
    return {
      ok: false,
      message: 'Payments cancelled',
    };
  }

  @Post('webhook')
  async stipeWebhook() {
    return 'stipeWebhook';
  }
}