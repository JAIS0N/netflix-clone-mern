// backend/controllers/chatController.js
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const movieChat = async (req, res) => {
  try {
    const { context, messages } = req.body;

    if (!context || !context.title) {
      return res.status(400).json({ message: "Missing movie context" });
    }

    const userMessages = messages || [];

    const systemPrompt = `
You are a movie expert assistant embedded in a site called Ovi.
You ONLY answer questions about a single movie, using the context provided below.
If the user asks about something unrelated (like another movie, personal advice, politics, etc.), 
politely say that you are only here to talk about this movie and gently bring them back.

MOVIE CONTEXT (from TMDB, Wiki, and the page):
- Title: ${context.title}
- Tagline: ${context.tagline || "N/A"}
- Overview: ${context.overview || "N/A"}
- Release date: ${context.release_date || "N/A"}
- Runtime (minutes): ${context.runtime || "N/A"}
- Original language: ${context.original_language || "N/A"}
- Genres: ${(context.genres || []).map((g) => g.name).join(", ") || "N/A"}
- Average rating: ${context.vote_average || "N/A"} (based on ${context.vote_count || 0} votes)
- Director: ${context.director || "N/A"}
- Producers: ${(context.producers || []).join(", ") || "N/A"}
- Main cast (name - character): 
  ${(context.cast || [])
    .map((c) => `${c.name} as ${c.character || "Unknown"}`)
    .join("; ") || "N/A"}
- Wikipedia summary: ${context.wikiSummary || "N/A"}

Answer in short, clear paragraphs. If you are not sure about some detail, say so instead of making it up.
    `.trim();

    // Gemini expects a list of messages; we will push system as the first "user" turn.
    const history = [
      {
        role: "user",
        parts: [{ text: systemPrompt }],
      },
      ...userMessages.map((m) => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: m.content }],
      })),
    ];

    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const chat = model.startChat({
      history,
    });

    // Last user message is already in history; we can send an empty message or 
    // just let Gemini respond to the conversation so far. To keep it simple,
    // send a short meta prompt:
    const result = await chat.sendMessage("Respond as the movie expert based on our conversation.");
    const response = await result.response;
    const reply = response.text() || "Sorry, I could not think of a good answer right now.";

    res.json({ reply });
  } catch (error) {
    console.error("Movie chat (Gemini) error:", error);
    res.status(500).json({ message: "Movie chat failed" });
  }
};
