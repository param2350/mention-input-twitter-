```markdown
# Mention Input Component

This is a simple React component that provides a mention input functionality similar to the @-mentions used in social media platforms like Twitter or Facebook. Users can type text in the input element, and when they type "@" symbol, a dropdown select box appears with mention options. Users can select an option, and it will be displayed in the input field.

## Features

- Real-time mention suggestions as you type.
- Selecting a mention option adds it to the input field.
- Pressing Enter after selecting an option adds the mention.
- Clearing the mention dropdown options when there's no mention character.

## Getting Started

To get started with this component, you can follow these steps:

1. Clone the repository to your local machine:

   ```
   git clone https://github.com/your-username/mention-input-component.git
   ```

2. Change to the project directory:

   ```
   cd mention-input-component
   ```

3. Install the project dependencies:

   ```
   npm install
   ```

4. Run the project:

   ```
   npm start
   ```

The component will be available at [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

You can use the `MentionInput` component in your React application by importing it and rendering it as shown in the following example:

```
import React from 'react';
import MentionInput from './MentionInput';

function App() {
  return (
    <div className="App">
      <MentionInput />
    </div>
  );
}

export default App;
```

## Data Source

The mention options are provided from a `data.json` file, which contains an array of mention items. You can replace this data with your own as needed.

## Customization

- You can customize the component's styling by modifying the CSS in the `styles.css` file.
- If you want to change the mention character (default is "@"), you can modify the component code.

## Tests

This project includes test cases for the `MentionInput` component. You can run the tests using the following command:

```
npm run test
```

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b feature-name`.
3. Make your changes and commit them.
4. Push the branch to your fork: `git push origin feature-name`.
5. Create a pull request to the original repository.
