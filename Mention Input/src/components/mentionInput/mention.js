// lubs
import React, { useState, useEffect } from "react";

// constants
import { data } from "./constant";

// styles
import "./styles.css";

const MentionInput = () => {
  const [inputText, setInputText] = useState("");
  const [mentionOptions, setMentionOptions] = useState([]);
  const [selectedMentionIndex, setSelectedMentionIndex] = useState(-1);

  // Handle input text changes
  const handleInputChange = (e) => {
    const text = e.target.value;
    setInputText(text);

    // Split the input text into words
    const words = text.split(" ");

    // Get the last word
    const lastWord = words[words.length - 1];

    if (lastWord.startsWith("@")) {
      const searchTerm = lastWord.substring(1).toLowerCase();
      const filteredOptions = data.filter((option) =>
        option.name.toLowerCase().includes(searchTerm)
      );
      setMentionOptions(filteredOptions);
    } else {
      setMentionOptions([]);
    }
  };

  // Handle mention selection
  const handleMentionSelect = (mention) => {
    const text = inputText.trim(); // Remove leading/trailing spaces
    const words = text.split(" ");
    words[words.length - 1] = `@${mention.name} `; // Replace the last word with the selected mention
    setInputText(words.join(" "));

    // Clear the mention options and reset selectedMentionIndex
    setMentionOptions([]);
    setSelectedMentionIndex(-1);
  };

  // Handle "Enter" keypress
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && mentionOptions.length > 0) {
      e.preventDefault(); // Prevent the default "Enter" behavior

      // If no mention is selected, choose the top option; otherwise, choose the selected mention
      const selected = selectedMentionIndex === -1 ? mentionOptions[0] : mentionOptions[selectedMentionIndex];
      handleMentionSelect(selected);
    }
  };

  // Update the selected mention index when mentionOptions change
  useEffect(() => {
    setSelectedMentionIndex(-1);
  }, [mentionOptions]);

  return (
    <div className="container">
      <div className="mention-input-container">
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Type a message..."
        />
        <ul className="mention-options">
          {mentionOptions.map((mention, index) => (
            <li
              key={mention.id}
              onClick={() => handleMentionSelect(mention)}
              className={`mention-option ${index === selectedMentionIndex ? "selected" : ""}`}
            >
              {mention.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MentionInput;
