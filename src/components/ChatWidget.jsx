import { useEffect, useRef, useState } from "react";
import {
  Widget,
  addResponseMessage,
  addUserMessage,
  toggleMsgLoader,
} from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
import "../styles/chatWidget.css";

function ChatWidget({ sendMessageToBackend }) {
  const messageCountRef = useRef(0);
  const [isWidgetOpen, setIsWidgetOpen] = useState(false); // Track widget open state

  useEffect(() => {
    // No default message - user sends first message
    // The heading "Ask me anything" is displayed in the widget header

    // Disable send button when input is empty
    const disableSendButtonOnEmptyInput = () => {
      const inputField = document.querySelector(".rcw-input");
      const sendButton = document.querySelector(".rcw-send-button");

      if (inputField && sendButton) {
        const updateButtonState = () => {
          const isEmpty = inputField.value.trim() === "";
          sendButton.disabled = isEmpty;
        };

        // Initial state
        updateButtonState();

        // Listen for input changes
        inputField.addEventListener("input", updateButtonState);
        inputField.addEventListener("change", updateButtonState);

        return () => {
          inputField.removeEventListener("input", updateButtonState);
          inputField.removeEventListener("change", updateButtonState);
        };
      }
    };

    // Set up the listener with a small delay to ensure DOM is ready
    const timer = setTimeout(disableSendButtonOnEmptyInput, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleNewUserMessage = async (newMessage) => {
    console.log("User said:", newMessage);
    messageCountRef.current += 1;

    try {
      // Show loading indicator
      toggleMsgLoader();

      // Send message to backend
      const botReply = await sendMessageToBackend(newMessage);

      // Hide loading indicator and add response
      toggleMsgLoader();
      addResponseMessage(botReply);
    } catch (error) {
      console.error("Chat error:", error);

      // Hide loading indicator
      toggleMsgLoader();

      // Add error message
      const errorMessage =
        error.message || "Oops! Something went wrong. Please try again.";
      addResponseMessage(errorMessage);
    }
  };

  const handleToggle = (isOpen) => {
    console.log("Widget toggled:", isOpen);
    setIsWidgetOpen(isOpen);
  };

  return (
    <Widget
      handleNewUserMessage={handleNewUserMessage}
      handleToggle={handleToggle}
      title="UTEX AI"
      subtitle="Ask me anything"
      senderPlaceHolder="Type a message..."
      showCloseButton={true}
      fullScreenMode={false}
      autofocus={true}
      launcherPosition="right"
      handleQuickButtonClicked={(quickButton) => {
        console.log("Quick button clicked:", quickButton);
        addUserMessage(quickButton.label);
        handleNewUserMessage(quickButton.value);
      }}
    />
  );
}

export default ChatWidget;
