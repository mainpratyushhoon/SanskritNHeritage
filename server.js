require('dotenv').config();
const express = require('express');
const cors = require('cors');
const OpenAI = require('openai');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.')); // Serve static files from root

// Initialize OpenAI (you'll need to set OPENAI_API_KEY in .env)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Chat endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { prompt } = req.body;
    
    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    // For free/public API alternative, you could replace this with another LLM
    // Example: Hugging Face Inference API (uncomment and modify if using free API)
    /*
    const response = await fetch('https://api-inference.huggingface.co/models/gpt2', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.HF_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ inputs: prompt }),
    });
    const data = await response.json();
    const answer = data[0]?.generated_text || 'Sorry, I could not generate a response.';
    */

    // OpenAI implementation
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 500,
    });

    const answer = completion.choices[0].message.content;

    res.json({ answer });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to get response from LLM' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});