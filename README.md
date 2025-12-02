# NutriWheel AI 🥗🎡

An AI-powered food randomizer and nutrition coach application using React, Tailwind CSS, and Google's Gemini API.

## Features
- **Smart Menu Randomizer**: Spin to select Main Dish, Snack, and Drink.
- **AI Menu Generation**: Generate new food databases dynamically using Gemini.
- **AI Nutrition Advisor**: Personalized health analysis of your selected meal.
- **Visuals**: Dynamic emoji-based food avatars and gamified UI.

## Setup & Run Locally

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Setup Environment**
   Create a `.env` file in the root directory:
   ```env
   API_KEY=your_google_genai_api_key_here
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```

## Deployment

### Vercel / Netlify
1. Push this repository to GitHub.
2. Import the project into Vercel or Netlify.
3. Add your `API_KEY` in the project settings (Environment Variables).
4. The build settings should auto-detect `vite build`.

### Build Locally
```bash
npm run build
npm run preview
```