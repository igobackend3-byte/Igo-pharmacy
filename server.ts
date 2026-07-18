import express, { Request, Response } from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

// Standard port for Google AI Studio ingress
const PORT = Number(process.env.PORT) || 3001;
const app = express();

app.use(express.json());

// Initialize Gemini SDK lazily to avoid startup crashes if key is missing
let aiClient: GoogleGenAI | null = null;

function getAiClient(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.warn("WARNING: GEMINI_API_KEY environment variable is not set. AI features will run in Mock mode.");
    }
    aiClient = new GoogleGenAI({
      apiKey: apiKey || "MOCK_KEY",
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

// 1. AI Ayurvedic Chatbot Endpoint
app.post("/api/chat", async (req: Request, res: Response): Promise<void> => {
  try {
    const { message, history } = req.body;
    if (!message) {
       res.status(400).json({ error: "Message is required" });
       return;
    }

    const hasKey = process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY !== "MY_GEMINI_API_KEY";

    if (!hasKey) {
      // Fallback Mock mode if no API key is set
      setTimeout(() => {
        const mockResponses = [
          "Hari Om. As an Ayurvedic guide, I recommend taking warm ginger-tulsi tea. It helps stimulate your digestive fire (Agni) and pacifies excessive Vata/Kapha in the chest. What specific health concern would you like to explore?",
          "Namaste. According to Traditional Siddha wisdom, keeping a balanced mind is as critical as your food (Unave Marunthu). For sleep issues, massaging your feet with warm sesame oil (Seeraga Thailam) at bedtime works wonders.",
          "Greetings of health. Pure Chyawanprash is excellent for your immune system. Try taking one teaspoon of organic gold Chyawanprash in the morning with a cup of warm milk. Is there any particular symptom you are currently managing?",
          "Welcome to our virtual Vaidyasalai. For your skin health, Kumkumadi Saffron night oil is highly recommended. Apply 3 drops at night on moist skin. Let me know if you would like me to analyze your skin type!"
        ];
        const randomRes = mockResponses[Math.floor(Math.random() * mockResponses.length)];
        res.json({ text: `[MOCK MODE] ${randomRes}` });
      }, 800);
      return;
    }

    const ai = getAiClient();
    const systemInstruction = `You are Acharya Charaka, a wise, compassionate Ayurvedic sage, Siddha practitioner, and AI Wellness Guru representing IGO Pharma.
Your tone should be serene, encouraging, authoritative yet humble, and nature-connected.
Respond in structured, clean markdown. Always address queries with traditional wisdom (dietary changes, dinacharya daily routines, home remedies, beneficial herbs) and recommend a relevant category of IGO Pharma products (like Chyawanprash, Ashwagandha, Nilavembu, or Kumkumadi oil) where appropriate.
Clarify that your advice is educational and users should consult our certified on-board Siddha/Ayurvedic doctors for a full prescription. Do not generate clinical diagnoses. Keep responses under 200 words.`;

    const contents = [];
    if (history && Array.isArray(history)) {
      for (const h of history) {
        contents.push({
          role: h.role === "user" ? "user" : "model",
          parts: [{ text: h.content }]
        });
      }
    }
    contents.push({ role: "user", parts: [{ text: message }] });

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: contents,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      },
    });

    res.json({ text: response.text });
  } catch (error: any) {
    console.error("Gemini Chat API Error:", error);
    res.status(500).json({ error: "Failed to generate AI response. Please try again." });
  }
});

// 2. AI Dosha Prakriti Quiz Endpoint
app.post("/api/quiz", async (req: Request, res: Response): Promise<void> => {
  try {
    const { answers } = req.body;
    if (!answers || typeof answers !== "object") {
       res.status(400).json({ error: "Answers object is required" });
       return;
    }

    const hasKey = process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY !== "MY_GEMINI_API_KEY";

    if (!hasKey) {
      setTimeout(() => {
        res.json({
          doshaRatio: { vata: 40, pitta: 35, kapha: 25 },
          primaryDosha: "Vata-Pitta",
          summary: "Based on your physical and emotional responses, you possess a Vata-Pitta constitution. You tend to have active mental energy but are prone to digestive irregularity and dryness.",
          dietaryAdvice: [
            "Consume warm, freshly cooked foods with high-quality oils or ghee.",
            "Avoid excessive raw cold salads, carbonated beverages, and dry crackers.",
            "Incorporate sweet, sour, and salty tastes to ground Vata; avoid high spice."
          ],
          lifestyleAdvice: [
            "Establish a consistent sleep schedule (bedtime by 10 PM).",
            "Do self-massage (Abhyanga) with warm sesame oil twice a week.",
            "Incorporate grounding yoga poses like Child's Pose and slow breathing (Pranayama)."
          ],
          products: ["ayur-002", "herb-001", "ayur-004"]
        });
      }, 1000);
      return;
    }

    const ai = getAiClient();
    const prompt = `Analyze this user's physical/mental answers to determine their Ayurvedic constitution (Prakriti):
${JSON.stringify(answers)}

Respond with a strictly formatted JSON object matching this schema:
{
  "doshaRatio": { "vata": number, "pitta": number, "kapha": number }, // Must sum up to 100
  "primaryDosha": string, // e.g. "Vata", "Pitta", "Kapha", "Vata-Pitta"
  "summary": string, // 2-3 sentences explaining their constitution
  "dietaryAdvice": string[], // 3 helpful dietary bullet points
  "lifestyleAdvice": string[], // 3 daily routine (Dinacharya) tips
  "products": string[] // Recommend 2-3 of these actual product IDs: ["ayur-001", "ayur-002", "sid-001", "sid-002", "herb-001", "herb-002", "ayur-003", "ayur-004"]
}`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        temperature: 0.2,
      },
    });

    let jsonStr = response.text || "{}";
    // Strip markdown JSON fences if present
    jsonStr = jsonStr.replace(/```json/g, "").replace(/```/g, "").trim();
    res.json(JSON.parse(jsonStr));
  } catch (error: any) {
    console.error("Gemini Quiz API Error:", error);
    res.status(500).json({ error: "Failed to perform Dosha analysis. Please try again." });
  }
});

// 3. AI Skin Care Recommendation Endpoint
app.post("/api/skin-care", async (req: Request, res: Response): Promise<void> => {
  try {
    const { skinType, concerns, ingredientsSelection } = req.body;

    const hasKey = process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY !== "MY_GEMINI_API_KEY";

    if (!hasKey) {
      setTimeout(() => {
        res.json({
          analysis: "Your skin shows signs of moisture imbalance with sensitivity. Based on traditional dermo-botanical guidelines, your skin belongs to a delicate Pitta category.",
          recipeName: "Saffron & Licorice Calming Face Mask",
          ingredientsList: ["1 tsp Saffron powder or 3 drops Kumkumadi Oil", "1 tsp Licorice powder (Yashtimadhu)", "2 tsp Raw Honey or Rose Water"],
          steps: [
            "Mix the organic licorice powder with rose water to make a smooth paste.",
            "Infuse with Saffron strings or mix in Kumkumadi oil.",
            "Apply evenly over your cleansed face, avoiding the eye contour.",
            "Leave for 15 minutes, then rinse gently with lukewarm water."
          ],
          recommendation: "Use Kumkumadi Saffron facial oil as a nightly restorative treatment."
        });
      }, 1000);
      return;
    }

    const ai = getAiClient();
    const prompt = `Generate an Ayurvedic, Siddha, and Herbal skincare analysis and custom recipe for:
- Skin Type: ${skinType}
- Specific Concerns: ${concerns}
- Selected Ingredients Preference: ${ingredientsSelection?.join(", ") || "Any natural herbs"}

Respond with a strictly formatted JSON object matching this schema:
{
  "analysis": string, // 2 sentences analyzing the skin condition and its related dosha (e.g. Pitta heat or Vata dryness)
  "recipeName": string, // Name of a custom traditional face mask or treatment
  "ingredientsList": string[], // List of kitchen/herbal ingredients needed with measurements
  "steps": string[], // Step-by-step instructions for preparation and application
  "recommendation": string // 1 sentence recommendation of a relevant Ayurvedic remedy
}`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        temperature: 0.5,
      },
    });

    let jsonStr = response.text || "{}";
    jsonStr = jsonStr.replace(/```json/g, "").replace(/```/g, "").trim();
    res.json(JSON.parse(jsonStr));
  } catch (error: any) {
    console.error("Gemini Skin Care API Error:", error);
    res.status(500).json({ error: "Failed to generate skin-care recommendations." });
  }
});

// Configure Vite or Serve Static Files based on Node Env
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req: Request, res: Response) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[IGO Pharma Server] Running on http://localhost:${PORT}`);
  });
}

startServer();
