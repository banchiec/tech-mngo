import React, { Suspense, act } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Exercise1View from '@/features/exercise1/Exercise1View';

describe('Exercise1View', () => {

  it('permite editar el valor mínimo', async () => {

    const user = userEvent.setup();

    const ranges = Promise.resolve({
      min: 10,
      max: 90,
    });

    await act(async () => {
      render(
        <Suspense fallback={<div>Cargando...</div>}>
          <Exercise1View ranges={ranges} />
        </Suspense>
      );
    });

    const minLabel = await screen.findByText('10');

    await user.click(minLabel);

    const input = await screen.findByRole('textbox');

    expect(input).toHaveValue('10');
    await user.clear(input);

    await user.type(input, '25');

    expect(input).toHaveValue('25');

    await user.tab();

    expect(await screen.findByText('25')).toBeInTheDocument();

  });

});