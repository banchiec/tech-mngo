import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Range } from '@/components/ui/range/Range';

const mockInnerHandler = jest.fn();

const mockHandlePointerDown = jest.fn(() => {
  return (e: React.PointerEvent) => {
    mockInnerHandler(e);
  };
});

const mockUpdateValueManually = jest.fn();

jest.mock('@/hooks/useRange', () => ({
  useRange: (
    _minLimit: number,
    _maxLimit: number,
    initialMin: number,
    initialMax: number,
    _step: number,
    onChange: (min: number, max: number) => void
  ) => {
    mockInnerHandler.mockImplementation(() => {
      onChange(30, initialMax);
    });

    return {
      values: {
        min: initialMin,
        max: initialMax,
      },
      trackRef: { current: null },
      activeHandle: null,
      handlePointerDown: mockHandlePointerDown,
      handlePointerMove: jest.fn(),
      handlePointerUp: jest.fn(),
      updateValueManually: mockUpdateValueManually,
      minPct: `${initialMin}px`,
      maxPct: `${initialMax}px`,
    };
  },
}));

describe('<Range />', () => {
  const mockOnChange = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Should render both handles with their initial positions', () => {
    render(
      <Range
        minLimit={0}
        maxLimit={100}
        initialMin={20}
        initialMax={80}
        step={1}
        onChange={mockOnChange}
      />
    );

    const minHandle = screen.getByRole('button', {
      name: /selector de valor mínimo/i,
    });

    const maxHandle = screen.getByRole('button', {
      name: /selector de valor máximo/i,
    });

    expect(minHandle).toBeInTheDocument();
    expect(maxHandle).toBeInTheDocument();

    expect(minHandle).toHaveStyle({
      left: '20px',
    });

    expect(maxHandle).toHaveStyle({
      left: '80px',
    });
  });

  it('should notify the parent when the minimum handle is dragged', () => {
    render(
      <Range
        minLimit={0}
        maxLimit={100}
        initialMin={20}
        initialMax={80}
        step={1}
        onChange={mockOnChange}
      />
    );

    const minHandle = screen.getByRole('button', {
      name: /selector de valor mínimo/i,
    });

    fireEvent.pointerDown(minHandle);

    expect(mockHandlePointerDown).toHaveBeenCalledWith('min');
    expect(mockInnerHandler).toHaveBeenCalledTimes(1);

    expect(mockOnChange).toHaveBeenCalledWith(30, 80);
  });

  it('It should not allow manual editing of values ​​when isEditableLabels is false.', () => {
    render(
      <Range
        minLimit={0}
        maxLimit={100}
        initialMin={20}
        initialMax={80}
        isEditableLabels={false}
        onChange={mockOnChange}
      />
    );

    fireEvent.click(screen.getByText('20'));

    expect(screen.queryByRole('textbox')).not.toBeInTheDocument();

    expect(screen.getByText('20')).toBeInTheDocument();
    expect(screen.getByText('80')).toBeInTheDocument();
  });
});