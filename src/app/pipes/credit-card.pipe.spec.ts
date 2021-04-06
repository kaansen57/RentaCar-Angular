import { CreditCardPipe } from './credit-card.pipe';

describe('CreditCardPipe', () => {
  it('create an instance', () => {
    const pipe = new CreditCardPipe();
    expect(pipe).toBeTruthy();
  });
});
