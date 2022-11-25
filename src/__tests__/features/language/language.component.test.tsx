import { LanguageComponent } from 'features/language';
import { customRender } from 'utils/test-utils';
import { fireEvent, screen } from '@testing-library/react';

describe('Language Component', () => {
  it('should render english active by default', () => {
    customRender(<LanguageComponent />);
    expect(screen.getByText('English')).toHaveStyle(`color: white`);
  });
  it('should render all three options', () => {
    customRender(<LanguageComponent />);
    expect(screen.getByText('English')).toBeInTheDocument();
    expect(screen.getByText('Portuguese')).toBeInTheDocument();
    expect(screen.getByText('Spanish')).toBeInTheDocument();
  });
  it('should change to spanish upon click', () => {
    customRender(<LanguageComponent />);
    fireEvent.click(screen.getByText('Spanish'));
    expect(screen.getByText('Español')).toBeInTheDocument();
  });
});
