# acs-assessment
A simple React application featuring a user-friendly contact form with phone number validation. The form includes fields for name, country code, and phone number. Built with React, Bootstrap, and Zod for validation.

# Contact Form React App

## Overview

This project is a simple React application that provides a contact form with phone number validation. The form includes fields for the user's name, country code, and phone number. Phone number validation is performed using the `react-input-mask` library and the `zod` validation schema.

## Prerequisites

Before running the project locally, ensure that you have the following prerequisites installed on your machine:

- Node.js: [https://nodejs.org/](https://nodejs.org/)
- npm (Node Package Manager): It is included with Node.js.

## Installation

1. Clone the repository to your local machine.

    ```bash
    git clone https://github.com/your-username/contact-form-react-app.git
    ```

2. Navigate to the project directory.

    ```bash
    cd contact-form-react-app
    ```

3. Install project dependencies.

    ```bash
    npm install
    ```

## Running the Application Locally

1. Start the development server.

    ```bash
    npm start
    ```

2. Open your web browser and navigate to [http://localhost:3000](http://localhost:3000).

3. The contact form should be visible on the page, allowing you to interact with the form.

## Usage

1. **Name Field**: Enter your name in the provided text field.

2. **Tel Field**:
   - **Country Code Selector**: Choose your country code from the dropdown menu.
   - **Phone Number Input**: Enter your phone number with the provided mask (99-999-9999).

3. **Validation Feedback**:
   - If there is a validation error, a red error message will be displayed.
   - If the phone number is valid, a green checkmark will be displayed.

4. **Submit Button**: Click the "Submit" button to log the form data to the console (in a real application, this is where you would handle form submission logic).

## Project Structure

- **src/components/ContactForm.js**: React component containing the contact form.
- **src/data/africanCountryCodes.js**: Array of African country codes and labels.
- **src/validation/schema.js**: Zod validation schema for phone numbers.
- **public/**: Static assets and HTML template.

## Dependencies

- **React**: JavaScript library for building user interfaces.
- **react-input-mask**: Input masking library for React.
- **zod**: TypeScript-first schema declaration and validation library.

## Additional Notes

- This project uses Bootstrap for styling. Feel free to customize the styling based on your requirements.

## License

This project is licensed under the [MIT License](LICENSE).
