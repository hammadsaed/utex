/**
 * Chat Widget Configuration
 * Centralized configuration for the chat widget behavior and appearance
 */

export const chatConfig = {
  // Widget appearance
  appearance: {
    title: "AI Chatbot",
    subtitle: "Ask me anything",
    senderPlaceHolder: "Type a message...",
    profileAvatar: "/bot-avatar.png",
    showCloseButton: true,
    fullScreenMode: false,
    autofocus: true,
    launcherPosition: "right",
  },

  // Quick reply buttons
  quickButtons: [
    { label: "Help", value: "help" },
    { label: "Pricing", value: "pricing" },
    { label: "Contact", value: "contact" },
  ],

  // Welcome message
  welcomeMessage: "Hello! 👋 How can I help you today?",

  // API configuration
  api: {
    baseUrl: process.env.REACT_APP_API_URL || "http://localhost:5000/api",
    timeout: 30000,
    retryAttempts: 3,
    retryDelay: 1000,
  },

  // Error messages
  errorMessages: {
    emptyMessage: "Please enter a message",
    networkError: "Network error. Please check your connection.",
    serverError: "Server error. Please try again later.",
    timeout: "Request timed out. Please try again.",
    invalidResponse: "Invalid response from server",
    default: "Oops! Something went wrong. Please try again.",
  },

  // Feature flags
  features: {
    enableMessageHistory: true,
    enableQuickButtons: true,
    enableTypingIndicator: true,
    enableMessageRating: false,
    enableSuggestions: true,
  },

  // Message settings
  messages: {
    maxLength: 1000,
    minLength: 1,
    debounceDelay: 300,
  },

  // Behavior settings
  behavior: {
    autoScroll: true,
    persistHistory: true,
    clearHistoryOnClose: false,
    showTimestamps: false,
  },

  // Styling
  styles: {
    primaryColor: "#667eea",
    secondaryColor: "#764ba2",
    backgroundColor: "#f5f5f5",
    textColor: "#333",
    borderRadius: "12px",
  },
};

/**
 * Get configuration value with fallback
 * @param {string} path - Dot notation path to config value
 * @param {*} defaultValue - Default value if path not found
 * @returns {*} - Configuration value
 */
export const getConfig = (path, defaultValue = null) => {
  const keys = path.split(".");
  let value = chatConfig;

  for (const key of keys) {
    if (value && typeof value === "object" && key in value) {
      value = value[key];
    } else {
      return defaultValue;
    }
  }

  return value;
};

/**
 * Update configuration value
 * @param {string} path - Dot notation path to config value
 * @param {*} newValue - New value to set
 */
export const setConfig = (path, newValue) => {
  const keys = path.split(".");
  const lastKey = keys.pop();
  let obj = chatConfig;

  for (const key of keys) {
    if (!(key in obj)) {
      obj[key] = {};
    }
    obj = obj[key];
  }

  obj[lastKey] = newValue;
};

export default chatConfig;

