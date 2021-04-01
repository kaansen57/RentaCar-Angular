import { PriceFilterPipe } from './price-filter.pipe';

describe('PriceFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new PriceFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
