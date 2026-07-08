import React, { Suspense } from 'react';
import { render, screen, act } from '@testing-library/react';

import { Exercise2View } from '@/features/exercise2/Exercise2View';
import { Range } from '@/components/ui/range/Range';

jest.mock('@/components/ui/range/Range', () => ({
  Range: jest.fn(() => <div data-testid="range-component" />),
}));

describe('Exercise2View', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render the initial range values, catalog and range component', async () => {
    const dataPromise = Promise.resolve({
      catalog: [100, 200, 300, 400],
      rangeValues: [100, 400],
    });

    await act(async () => {
      render(
        <Suspense fallback={<div>Loading...</div>}>
          <Exercise2View dataPromise={dataPromise} />
        </Suspense>
      );
    });

expect(screen.getByText(/Mínimo:/i)).toBeInTheDocument();
expect(screen.getByText(/Máximo:/i)).toBeInTheDocument();

expect(screen.getByText('100€')).toBeInTheDocument();
expect(screen.getByText('200€')).toBeInTheDocument();
expect(screen.getByText('300€')).toBeInTheDocument();
expect(screen.getByText('400€')).toBeInTheDocument();
    const mockedRange = jest.mocked(Range);

    expect(mockedRange).toHaveBeenCalledWith(
      expect.objectContaining({
        minLimit: 0,
        maxLimit: 3,
        initialMin: 0,
        initialMax: 3,
        isEditableLabels: false,
        step: 1,
        onChange: expect.any(Function),
        formatLabel: expect.any(Function),
      }),
      undefined
    );
  });
});