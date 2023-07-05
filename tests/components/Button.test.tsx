import * as React from 'react';
import { render } from '@testing-library/react-native';

import { Button } from '../../src/components';

it(`renders correctly`, () => {
    const { getByText } = render(<Button title='Test' onPress={jest.fn} />);

    expect(getByText('Test')).toHaveTextContent('Test');
});
