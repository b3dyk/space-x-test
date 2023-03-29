
# Space X

Website contains two pages with static and dynamic content: 
- Home
- Favorites

### HOME PAGE: 
- Logo in header it’s link which always return to home page.
- Header navigation menu - have hover effect, home link navigate to home page as logo too, other links don’t have navigating action (yet).
- Header aside: “Favorite” button redirects to favorite page, “Sign in” button has pressible visual effect, but without any redirect.
- Banner section: all content is static, “Explore tours” scrolls down by pressing on it.
- Main slider section: static carousel title, carousel controls (which slides one by one), slides content with dynamic data from SpaceX API. Each slider has a “Buy” button with no action on press and “Add to favorite” button, which will add this trip to your personal favorites list.

### FAVORITES PAGE:
- Header and banner sections are static, “Favorite” button is active.
- “Clear all” - removes all flights from favorite.
- List of favorite flights - “Buy” button doesn't do anything, “Delete” button removes exact flight.

## Stack used

- TypeScript
- Atomic design Pattern
- React Apollo (to get data from API)
- Recoil for state management (favorite flights, this state manages only on FE)
- Styled Component




