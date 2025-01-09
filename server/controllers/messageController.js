import Conversation from "../models/conversationModel.js";
import Message from "../models/messageModel.js";

// Function: sendMessage
// Purpose: Handles the sending of a message between two users. If a conversation does not already exist between the sender and receiver, it creates a new one.
// Steps:
// 1. Retrieves the sender's ID from the request and the receiver's ID from route parameters.
// 2. Searches for an existing conversation between the two participants. If none exists, it creates a new conversation.
// 3. Creates a new message with the sender's ID, receiver's ID, and the message content.
// 4. Adds the message to the conversation's message array and saves the updated conversation.
// 5. Responds with a success message or logs errors if any occur.

export const sendMessage = async (req, res) => {
  try {
    const senderId = req.id;
    const receiverId = req.params.id;
    const { message } = req.body;

    let gotConversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!gotConversation) {
      gotConversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = await Message.create({
      senderId,
      receiverId,
      message,
    });

    gotConversation.messages.push(newMessage._id);
    await gotConversation.save();

    res.status(200).json({
      message: "Message sent successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getMessage = async (req, res) => {
  try {
    const senderId = req.id;
    const receiverId = req.params.id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    }).populate("messages");

    console.log(conversation);

    // const messagesOnly = conversation.messages.map((msg) => msg.message);
    // console.log(messagesOnly);
    // res.status(200).json({ messages: `Get all messages ${messagesOnly}`, success: true });
  } catch (error) {
    console.log(error);
  }
};
