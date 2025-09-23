# React JS Technical Test Scenarios

This document outlines several scenario-based technical tests designed for a  experienced React JS developer. Each scenario focuses on different aspects of React development, including performance optimization, advanced state management, and UI logic.

---

## Scenario 1: Optimize a Data Display Component

**Task:** You are provided with a React application that includes an `ItemList` component (`src/ItemList.tsx`). This component is responsible for fetching and displaying a list of items. Upon reviewing the code, you've identified several areas for improvement in terms of performance, code quality, and adherence to React best practices.

**Your Task:**

1.  **Identify Issues:** Analyze `src/ItemList.tsx` and identify all performance bottlenecks, potential bugs, and areas where React best practices are not followed. Pay close attention to unnecessary re-renders, inefficient data handling, and missing optimizations.
2.  **Fix & Optimize:** Refactor and optimize the `ItemList` component and its sub-components to address the identified issues. Specifically, focus on:
    *   **Preventing Unnecessary Re-renders:** Utilize `React.memo`, `useCallback`, and `useMemo` effectively where appropriate.
    *   **Efficient Data Fetching:** Ensure data is fetched only when necessary and handle loading/error states gracefully.
    *   **List Rendering:** Correctly use the `key` prop for list items.
    *   **Code Quality:** Improve readability, maintainability, and adhere to modern React patterns.
    *   **Error Handling:** Implement robust error handling and display user-friendly messages.
    *   **Loading Indicators:** Provide clear visual feedback during data fetching.
3.  **Explain Changes:** Document your changes, explaining:
    *   What issues you identified.
    *   How your changes address these issues.
    *   The reasoning behind your chosen optimization techniques (e.g., why `useCallback` was used for a specific function).

**Evaluation Criteria:**

*   **Accuracy of Issue Identification:** How well the developer identifies the problems in the original code.
*   **Effectiveness of Solutions:** How well the implemented fixes and optimizations resolve the identified issues.
*   **Correct Use of React Hooks & APIs:** Proper application of `React.memo`, `useCallback`, `useMemo`, `useEffect`, `useState`, etc.
*   **Performance Improvement:** Observable reduction in unnecessary re-renders and efficient data handling.
*   **Code Quality:** Readability, maintainability, modularity, and adherence to best practices.
*   **Clarity of Explanation:** The ability to articulate the problems and solutions clearly and concisely.


## Scenario 2: Interactive Canvas Editor with History

**Task:** Develop a simplified interactive canvas editor where users can perform basic actions and manage a history of these actions with undo/redo functionality.

**Your Task:**

1.  **Build a Canvas Component:**
    *   Create a main `Canvas` component that will host interactive elements.
    *   Implement functionality to add simple shapes (e.g., a colored square or circle) to the canvas. A new shape should appear at the click location.
    *   Each shape should be its own React component.

2.  **Implement Undo/Redo Functionality:**
    *   Design and implement a state management solution that tracks all actions performed on the canvas (adding shapes, changing shape properties).
    *   Provide "Undo" and "Redo" buttons that correctly revert the canvas to a previous state or re-apply a undone action.

3.  **Apply Performance Optimizations:**
    *   Demonstrate the appropriate and justified use of `React.memo` for shape components and other potentially re-rendering elements.
    *   Utilize `useCallback` for event handlers and functions passed down to child components to prevent unnecessary re-creations.
    *   Employ `useMemo` for expensive calculations or memoizing derived state if applicable (e.g., complex shape properties).
    *   Explain *why* and *where* these optimizations were applied in your code or a brief accompanying document.

**Evaluation Focus:**

*   **Advanced State Management:** How the undo/redo mechanism is implemented (e.g., using a custom hook, reducer, or other patterns for managing historical state).
*   **Component Design:** Modularity, reusability, and separation of concerns for the canvas and shape components.
*   **Performance Optimization:** Correct and effective application of `React.memo`, `useCallback`, and `useMemo` in an interactive context.
*   **Code Quality:** Readability, maintainability, and adherence to React best practices.
*   **Problem Solving:** Approach to handling complex UI interactions and state transitions.


## Scenario 3: Employee Time Tracker

**Task:** Develop a simple React application that simulates an employee time tracking system. The application should allow a user to clock in, clock out, and start/end breaks, while maintaining a clear history of all these actions.

**Your Task:**

1.  **Time Tracking Controls:**
    *   Implement buttons for "Clock In", "Clock Out", "Start Break", and "End Break".
    *   These buttons should be conditionally enabled/disabled based on the current state (e.g., cannot "Clock Out" if not "Clocked In"; cannot "Start Break" if already "On Break").
    *   Each action should record the current timestamp.

2.  **Current Status Display:**
    *   Clearly display the employee's current status (e.g., "Currently Clocked Out", "Clocked In since [timestamp]", "On Break since [timestamp]").

3.  **Event History:**
    *   Display a chronological list of all recorded events: "Clock In", "Clock Out", "Start Break", and "End Break".
    *   Each history entry should show the event type and the exact timestamp.

**Evaluation Focus:**

*   **State Management:** How the application's current state (clocked in/out, on break) and the history of events are managed.
*   **Conditional Rendering & Logic:** Correctly enabling/disabling buttons and displaying status based on the application's state.
*   **Date/Time Handling:** Accurate capture, storage, and display of timestamps.
*   **Component Design:** Logical structure and separation of concerns within the React components.
*   **User Experience:** Intuitive flow for the time tracking actions.
