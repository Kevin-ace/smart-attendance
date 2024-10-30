# Smart Attendance System

## Project Overview

The Smart Attendance System is a web-based application designed to automate the attendance management process for educational institutions. It aims to enhance the efficiency and accuracy of attendance tracking while providing user-friendly interfaces for both professors and students.

## Objectives

1. **Efficient Attendance Tracking:** Allow professors to generate unique QR codes for their classes, enabling students to mark their attendance by scanning the code.
2. **Secure User Authentication:** Implement robust authentication mechanisms to safeguard sensitive information.
3. **Real-Time Updates:** Provide instant updates of attendance records, allowing professors to monitor attendance.

## Technologies Used

- **Backend:** FastAPI
- **Database:** PostgreSQL
- **Authentication:** JWT (JSON Web Token)

## Features

- QR code generation for attendance marking.
- Separate interfaces for professors and students.
- Secure user authentication and authorization.
- Real-time attendance tracking and updates.
- Attendance report generation for professors.

## Installation

### Prerequisites

- Python 3.12 or higher
- PostgreSQL

### Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/smart-attendance-system.git
   cd smart-attendance-system
2. Set up the backend:
   # Create a virtual environment
      python -m venv venv
      source venv/bin/activate
   # Install dependencies
      pip install -r requirements.txt
   # Set up the database:

      Create a PostgreSQL database and user.
      Run the migrations to set up the database schema.

3. Run the applications:

   uvicorn main:app --host 0.0.0.0 --port 8069 --reload

# Usage
   1. For Professors:
      Register.
      Log in using your credentials.
      Generate QR codes for your classes.
      View attendance reports and manage classes.

   2. For Students:
      Register.
      Log in using your registration number.
      Scan the QR code to mark attendance.
      View your attendance records.

# Contributing
   Contributions are welcome! Please feel free to submit a pull request or open an issue.

