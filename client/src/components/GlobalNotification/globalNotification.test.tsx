import { render, screen } from '@testing-library/react';
import GlobalNotification from './globalNotification';
import '@testing-library/jest-dom'; // For additional matchers like `.toBeInTheDocument()`

describe('GlobalNotification Component', () => {
  test('renders the notification with active status', () => {
    // Render the component with `status` set to `true`
    render(<GlobalNotification status={true} />);

    // Check if the notification is rendered
    const notificationElement = screen.getByText(
      /SUMMER SALE FOR ALL SWIM SUITS AND FREE EXPRESS INTERNATIONAL DELIVERY - OFF 50%!/i
    );
    expect(notificationElement).toBeInTheDocument();

    // Check if the "SHOP NOW" link is rendered
    const shopNowLink = screen.getByRole('link', { name: /shop now/i });
    expect(shopNowLink).toBeInTheDocument();
    expect(shopNowLink).toHaveAttribute('href', 'shop.html');
  });
});