
# My Whisper App

This repository contains the code for a text-to-speech application built with SvelteKit and OpenAI's Whisper model. The application allows users to input text, which is then converted to natural-sounding speech using the Whisper model.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installation

Clone the repository to your local machine:

```bash
git clone https://github.com/break-the-build/my-whisper-app.git
cd my-whisper-app
```

Install the necessary packages:

```bash
npm install
```

### Setting Up Environment Variables

Create a `.env` file in the root of your project and add your OpenAI API key:

```plaintext
OPENAI_API_KEY=your_openai_api_token_here
```

### Running the Application

To run the application in development mode, execute:

```bash
npm run dev
```

Navigate to `http://localhost:5173` to see the application in action.

## Usage

The application features a simple UI where you can enter text into a textarea and submit it to be converted to speech. The resulting audio will be playable directly on the page.

## Built With

- [SvelteKit](https://kit.svelte.dev/) - The framework used
- [OpenAI Whisper](https://openai.com/research/whisper) - Speech synthesis model

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
