/**
 * Chat Service - Handles communication with OpenRouter API
 * This service manages all chat-related API calls using OpenRouter
 */

const OPENROUTER_API_URL = "https://openrouter.ai/api/v1/chat/completions";
const OPENROUTER_API_KEY = process.env.REACT_APP_OPENROUTER_API_KEY;

// Debug: Log if API key is loaded
if (typeof window !== "undefined") {
  console.log(
    "OpenRouter API Key loaded:",
    OPENROUTER_API_KEY ? "✅ Yes" : "❌ No"
  );
}

// Store conversation history for context
let conversationHistory = [];

/**
 * Send a message to OpenRouter and get a response
 * @param {string} message - The user's message
 * @param {Object} options - Additional options (model, temperature, etc.)
 * @returns {Promise<string>} - The bot's response
 */
export const sendMessage = async (message, options = {}) => {
  if (!message || message.trim() === "") {
    throw new Error("Message cannot be empty");
  }

  if (!OPENROUTER_API_KEY) {
    throw new Error(
      "OpenRouter API key is not configured. Please set REACT_APP_OPENROUTER_API_KEY environment variable."
    );
  }

  try {
    // Add user message to conversation history
    conversationHistory.push({
      role: "user",
      content: message.trim(),
    });

    // Prepare the request payload
    const payload = {
      model: options.model || "gpt-3.5-turbo", // Default model, can be changed
      messages: conversationHistory,
      temperature: options.temperature || 0.7,
      max_tokens: options.max_tokens || 1000,
      top_p: options.top_p || 1,
      frequency_penalty: options.frequency_penalty || 0,
      presence_penalty: options.presence_penalty || 0,
    };

    const response = await fetch(OPENROUTER_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENROUTER_API_KEY}`,
        "HTTP-Referer": window.location.origin,
        "X-Title": "UTEX Travel AI",
        ...options.headers,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.error?.message ||
          errorData.message ||
          `API Error: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();

    if (!data.choices || !data.choices[0] || !data.choices[0].message) {
      throw new Error("Invalid response format from OpenRouter API");
    }

    const botReply = data.choices[0].message.content;

    // Add bot response to conversation history
    conversationHistory.push({
      role: "assistant",
      content: botReply,
    });

    // Keep conversation history manageable (last 20 messages)
    if (conversationHistory.length > 20) {
      conversationHistory = conversationHistory.slice(-20);
    }

    return botReply;
  } catch (error) {
    console.error("Chat service error:", error);
    throw error;
  }
};

/**
 * Get local conversation history
 * @param {Object} options - Query options (limit, offset, etc.)
 * @returns {Array} - Array of chat messages from current session
 */
export const getChatHistory = (options = {}) => {
  const limit = options.limit || 50;
  const offset = options.offset || 0;
  return conversationHistory.slice(offset, offset + limit);
};

/**
 * Clear conversation history
 * @returns {Object} - Confirmation response
 */
export const clearChatHistory = () => {
  conversationHistory = [];
  return { success: true, message: "Chat history cleared" };
};

/**
 * Get chat suggestions/quick replies
 * Note: These are static suggestions since we're using OpenRouter
 * @returns {Array} - Array of suggestion objects
 */
export const getChatSuggestions = () => {
  // Return empty array as per UTEX requirements (no Help/Pricing/Contact buttons)
  return [];
};

/**
 * Rate a chat response
 * Note: Rating is stored locally since we're using OpenRouter
 * @param {string} messageId - The index of the message to rate
 * @param {number} rating - Rating value (1-5)
 * @returns {Object} - Confirmation response
 */
export const rateMessage = (messageId, rating) => {
  if (rating < 1 || rating > 5) {
    throw new Error("Rating must be between 1 and 5");
  }

  // Store rating locally (could be extended to send to a backend)
  console.log(`Message ${messageId} rated: ${rating}/5`);
  return { success: true, message: "Rating recorded" };
};

const chatServiceExports = {
  sendMessage,
  getChatHistory,
  clearChatHistory,
  getChatSuggestions,
  rateMessage,
};

export default chatServiceExports;
