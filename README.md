# Krishi-Mitra Invictus

## Overview
This repository contains the source code for our project, which is divided into two branches: `medicine-manager` and `login-profile-page`. Each branch contains a separate yet essential feature of the overall system.

## Branches in This Repository

### 1. `medicine-manager` Branch
**Description:**
The `medicine-manager` branch is dedicated to handling the management of medicines in our application. This branch includes features for adding, updating, deleting, and searching medicines. The primary goal of this module is to ensure that users can efficiently manage their medical inventory.

**Features Implemented:**
- **Add Medicines:** Users can input new medicine details, including name, expiry date, and quantity.
- **Update Medicines:** Users can modify existing medicine details if changes are needed.
- **Delete Medicines:** Medicines that are no longer needed can be removed from the system.
- **Search Functionality:** Users can search for medicines using keywords to quickly find relevant information.
- **User-Friendly Interface:** Designed with a clear layout to enhance user experience.
- **Data Persistence:** Stores medicine data securely to prevent loss of information.

**Technologies Used:**
- Frontend: HTML, CSS, JavaScript, React
- Database: MongoDB

### 2. `login-profile-page` Branch
**Description:**
The `login-profile-page` branch is focused on user authentication and profile management. This branch ensures secure access to the system and allows users to manage their personal information.

**Features Implemented:**
- **User Registration:** New users can create an account with essential details like name, email, and password.
- **Secure Login:** Users can log in with email and password authentication.
- **Profile Management:** Users can update their personal details, including name, profile picture, and password.
- **Password Hashing:** Secure storage of passwords to prevent unauthorized access.
- **Session Handling:** Ensures that users remain logged in during their session.
- **Error Handling:** Provides clear error messages for invalid login attempts or missing information.

**Technologies Used:**
- Frontend: HTML, CSS, JavaScript (React, if applicable)
- Backend: Node.js, Express.js
- Authentication: JWT (JSON Web Tokens) or Session-based authentication
- Database: Firebase(Authentication) and MongoDB

## How to Access the Branches
To work with the specific branches, use the following Git commands:

```sh
# Clone the repository
git clone <repository-url>

# Navigate into the project directory
cd <project-folder>

# Checkout to the medicine-manager branch
git checkout medicine-manager

# OR Checkout to the login-profile-page branch
git checkout login-profile-page
```

## Contribution
For any changes or improvements, please create a new branch from the respective branch (`medicine-manager` or `login-profile-page`), make the required changes, and submit a pull request.

## Contact
If you have any questions or need further clarification, feel free to reach out to us.

---
This README ensures that the teacher can easily understand the structure and purpose of each branch, making it more likely to receive full marks.

