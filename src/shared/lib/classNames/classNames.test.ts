import {classNames} from 'shared/lib/classNames/classNames';

describe('Тесты classNames', () => {
  test('С 1 параметром', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('С 1 дополнительным классом', () => {
    const expected = 'someClass additionalClass';

    expect(classNames('someClass', {}, ['additionalClass'])).toBe(expected);
  });

  test('С модами', () => {
    const expected = 'someClass hovered';

    expect(
      classNames('someClass', {
        hovered: true,
        scrollable: false,
      }),
    ).toBe(expected);
  });

  test('С 1 дополнительным классом и модами', () => {
    const expected = 'someClass additionalClass hovered';

    expect(
      classNames(
        'someClass',
        {
          hovered: true,
          scrollable: false,
        },
        ['additionalClass'],
      ),
    ).toBe(expected);
  });

  test('С 1 дополнительным классом и модами c undefined', () => {
    const expected = 'someClass additionalClass hovered';

    expect(
      classNames(
        'someClass',
        {
          hovered: true,
          scrollable: false,
          disabled: undefined,
        },
        ['additionalClass'],
      ),
    ).toBe(expected);
  });
});
