# L'Oréal Beauty Assistant

A web-based beauty assistant that provides information about L'Oréal products and beauty tips using AI.

## Features

- Product category selection
- Interactive chat interface
- AI-powered responses using OpenAI API

## Setup

1. Clone or download the project files.
2. Open `secrets.js` and replace `'your-openai-api-key-here'` with your actual OpenAI API key.
3. Start a local web server.

## Running the Application

To run the application locally:

```bash
python -m http.server 8000
```

Then open your browser and navigate to `http://localhost:8000`.

## Files

- `index.html` - Main HTML structure
- `style.css` - Styling
- `script.js` - JavaScript functionality
- `secrets.js` - API configuration (keep secure)
- `img/loreal-logo.svg` - Logo image

## Note

Make sure to keep `secrets.js` secure and never commit it to version control with real API keys. 
