# Resource Booking System Frontend

This is a **Next.js** project for a Resource Booking System, featuring both server and client components for optimal performance and user experience.

## Key Features

- **Booking Management:** View, create, and delete bookings for various resources (meeting rooms, labs, etc.).
- **Server-Side Rendering:** Bookings are fetched and displayed using server components for fast initial load and SEO benefits.
- **Client-Side Interactivity:** Actions like creating or deleting bookings, filtering, and modal dialogs are handled with client components for a responsive UI.
- **Server Side Pagination & Filtering:** Easily filter bookings by resource, date, and status (Upcoming, Ongoing, Past, All) and navigate through paginated results.
- **Dynamic Static Params:** Uses `generateStaticParams` to pre-render pages for all combinations of booking status and pagination, improving performance and scalability.
- **Availability Checking:** Check available slots for resources using a calendar view.
- **Redux Toolkit:** State management for bookings and UI state.
- **Timezone Detection:** Automatically detects and stores the user's timezone for accurate booking times.

## Project Structure

- **Server Components:**  
  - Main booking page (`src/app/page.tsx`) fetches bookings server-side using [`getBookings`](src/actions/bookings.actions.ts).
  - Pagination and filtering logic is handled server-side for consistent data.
- **Client Components:**  
  - UI elements like modals, dropdowns, forms, and interactive buttons (e.g., [`AddBookingBtn`](src/components/bookings/AddBookingBtn.tsx), [`DeleteBookingBtn`](src/components/bookings/DeleteBookingBtn.tsx)).
  - State management hooks and Redux slices.
- **Shared Components:**  
  - Reusable UI components such as [`Modal`](src/components/shared/Modal.tsx), [`Select`](src/components/shared/Select.tsx), and [`Avatar`](src/components/shared/Avatar.tsx).

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install