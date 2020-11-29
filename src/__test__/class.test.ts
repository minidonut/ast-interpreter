import { run } from './runner';

describe('Class expression of Eva', () => {
  it('can create class and intanciate', () => {
    expect(
      run(`
  (class Point null
      (begin
        (def constructor (this x y)
          (begin
            (set (prop this x) x)
            (set (prop this y) y)))
        (def calc (this)
          (+ (prop this x) (prop this y)))))
    (var p (new Point 10 20))
    ((prop p calc) p)
    `)
    ).toEqual(30);
  });
});
