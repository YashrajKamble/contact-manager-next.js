# 📇 Contact Manager (Next.js 15)

Welcome to the Contact Manager, a full-stack application built with the latest web technologies. This project serves as a practical guide to modern web development, showcasing the power of Next.js 15, React 19, and server-side logic. It's designed to be easily understood, forked, and extended, making it an ideal starting point for your own projects.

---

## ✨ Features

- 🔐 **Authentication:** Secure, cookie-based authentication for user login and registration, handled entirely on the server.
- 📇 **Contact Management:** Full CRUD (Create, Read, Update, Delete) functionality for managing contacts.
- 📱 **Responsive Design:** A clean and modern user interface built with Tailwind CSS, ensuring a seamless experience on all devices.
- ⚡ **Server-Side Power:** Utilizes Next.js Server Actions for efficient and secure backend operations.
- � **Automatic UI Updates:** Real-time UI updates after any changes, thanks to `revalidatePath`.
- 🧭 **Dynamic Navigation:** The navigation bar adapts to the user's authentication status, showing relevant links.

---

## 🧰 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) `15.3.3`
- **UI Library:** [React](https://react.dev/) `19`
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) `v4`
- **Language:** [TypeScript](https://www.typescriptlang.org/) `5`
- **Mock API:** [JSON Server](https://github.com/typicode/json-server) `1.0.0-beta.3`
- **API Calls:** [Axios](https://axios-http.com/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)

---

## ✅ Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/) `≥ 18.18`
- [npm](https://www.npmjs.com/) `≥ 9`

> 💡 You can check your versions by running `node -v` and `npm -v` in your terminal.

---

## 🚀 Getting Started

Follow these steps to get the project up and running on your local machine:

1.  **Fork the Repository:** Click the 'Fork' button at the top right of this page to create your own copy.
2.  **Clone Your Fork:**

    ```bash
    git clone <your-fork-url>
    cd next-js-tut
    ```

3.  **Install Dependencies:**

    ```bash
    npm install
    ```

4.  **Run the Mock API:**

    ```bash
    npm run server
    ```

    This will start the JSON server on `http://localhost:3001`.

5.  **Start the Development Server:**

    ```bash
    npm run dev
    ```

6.  **Open the App:** Visit [`http://localhost:3000`](http://localhost:3000) in your browser.


---

## 🗂️ Project Structure

```
src/
└── app/
    ├── (auth)/             # Authentication routes (login, register)
    ├── _components/        # Reusable React components
    ├── _data/              # Mock data for the JSON server
    ├── _lib/               # Helper functions and utilities
    ├── _types/             # TypeScript type definitions
    ├── actions/            # Server actions for backend logic
    ├── api/                # API-related functions
    ├── contact/            # Routes for contact management
    ├── favicon.ico         # Application favicon
    ├── globals.css         # Global CSS styles
    ├── layout.tsx          # Root layout for the application
    └── page.tsx            # The main landing page
```

---

## 🔄 Core Workflows

### Authentication

- **Login & Registration:** The `loginAction` and `registerAction` server actions handle user authentication. They communicate with the mock API, and upon success, create a session cookie.
- **Logout:** The `logoutAction` clears the session cookie and redirects the user to the login page.

### Contact Management

- **CRUD Operations:** The `createContactAction`, `updateContactAction`, and `deleteContactAction` server actions manage all contact-related operations.
- **UI Updates:** After each operation, `revalidatePath('/contact')` is called to ensure the contact list is always up-to-date.

---

## 🧪 Available npm Scripts

| Script          | Description                                       |
| --------------- | ------------------------------------------------- |
| `npm run dev`   | Starts the development server with Turbopack.     |
| `npm run build` | Creates a production-ready build of the app.      |
| `npm run start` | Starts the production server.                     |
| `npm run lint`  | Lints the code to ensure code quality.            |
| `npm run server`| Starts the mock API server on `http://localhost:3001`. |

> 🧵 For the best development experience, keep both `npm run dev` and `npm run server` running in separate terminal windows.

---

## 📦 Deployment

To deploy this application, you'll need to:

1.  **Host the Mock API:** Deploy the JSON server or migrate the data to a real database.
2.  **Configure Environment Variables:** Update the `API_URL` in your code to point to your hosted API.
3.  **Build and Start the App:**

    ```bash
    npm run build
    npm run start
    ```

4.  **Host the Application:** Deploy the application on a platform like [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/).

---

## 🛠️ How to Contribute

Contributions are welcome! If you'd like to improve this project, please follow these steps:

1.  **Fork and Clone:** Fork the repository and clone it to your local machine.
2.  **Create a Branch:** Create a new branch for your feature or bug fix.
3.  **Make Changes:** Implement your changes and test them thoroughly.
4.  **Lint Your Code:** Run `npm run lint` to ensure your code follows the project's style guidelines.
5.  **Open a Pull Request:** Push your changes to your fork and open a pull request.

---



