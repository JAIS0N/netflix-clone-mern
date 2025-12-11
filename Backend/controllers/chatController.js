// backend/controllers/chatController.js
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// POST /api/chat/movie
export const movieChat = async (req, res) => {
  try {
    // Support BOTH shapes:
    // { context, messages }   (old)
    // { movieContext, question } (new)
    const { context, messages, movieContext, question } = req.body;

    const movie = context || movieContext;

    if (!movie || !movie.title) {
      return res.status(400).json({ message: "Missing movie context (title required)" });
    }

    // Figure out the user’s actual question
    const userQuestion =
      question ||
      (Array.isArray(messages) && messages.length
        ? messages[messages.length - 1].content
        : "Give me an overview of this movie.");

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash", // stable model
    });

    const prompt = `
You are Ovi, a friendly movie assistant embedded in the OvieHub site.

Use ONLY the information in the MOVIE CONTEXT below when answering.
If the user asks about unrelated topics (other movies, personal life, politics, etc.),
politely say you can only answer questions about this movie and guide them back.

MOVIE CONTEXT (JSON):
${JSON.stringify(movie, null, 2)}

User question:
${userQuestion}

Answer in short, clear paragraphs. If you are unsure about something, say so instead of inventing details.
    `.trim();

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text() || "Sorry, I could not generate a response.";

    return res.json({ reply: text });
  } catch (error) {
    console.error("Movie chat (Gemini) error:", error?.response?.data || error);
    return res.status(500).json({
      message:
        "Something went wrong while contacting the movie assistant. Please try again later.",
    });
  }
};
