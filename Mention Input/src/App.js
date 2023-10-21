
import './App.css';
import MentionInput from './components/mentionInput/mention';


// Currently Supported Features:
// 1. Input Text Changes: Handles changes in the input text.
// 2. Mention Selection: Allows the selection of mention options.
// 3. "Enter" Keypress: Supports the selection of mentions using the "Enter" key.
// 4. Mention Options: Displays a list of mention options.
// 5. Real-time Filtering: Filters mention options based on user input.


// Potential Future Scopes and Improvements:
// 1. Accessibility: Add ARIA attributes for accessibility.
// 2. Testing: Implement more test cases
// 3. Search Algorithm Optimization: Optimize filtering with more efficient algorithms.
// 4. Debouncing: Implement input debouncing for performance.
// 5. API Integration: Fetch data dynamically from an API.
// 6. Customization: Allow customization of appearance and behavior.
// 7. Keyboard Navigation: Add keyboard navigation. eg : up down arrow keys
// 8. Suggestions List Styling: Enhance styling of the options list.
// 9. Error Handling: Handle errors gracefully.


function App() {
  return (
    <div className="App">
        <MentionInput />
    </div>
  );
}

export default App;
