import AIChat from "../models/AIChat.js";

// ==========================
// Save AI Chat
// ==========================
export const saveChat = async (req, res) => {
  try {
    const { userId, question, answer } = req.body;

    const chat = await AIChat.create({
      user: userId,
      question,
      answer,
    });

    res.status(201).json({
      success: true,
      message: "Chat saved successfully",
      chat,
    });
  } catch (error) {
    console.error("Save Chat Error:", error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// ==========================
// Get Chat History
// ==========================
export const getChatHistory = async (req, res) => {
  try {
    const { userId } = req.params;

    const chats = await AIChat.find({
      user: userId,
    }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      chats,
    });
  } catch (error) {
    console.error("Get Chat Error:", error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// ==========================
// Delete Chat History
// ==========================
export const deleteChatHistory = async (req, res) => {
  try {
    const { userId } = req.params;

    await AIChat.deleteMany({
      user: userId,
    });

    res.status(200).json({
      success: true,
      message: "Chat history deleted",
    });
  } catch (error) {
    console.error("Delete Chat Error:", error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};