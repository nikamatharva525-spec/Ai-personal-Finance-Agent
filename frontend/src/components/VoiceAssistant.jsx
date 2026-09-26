import React, { useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { pageDescriptions } from "../data/pageDescriptions";

const VoiceAssistant = () => {
  const [userMessage, setUserMessage] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const [listening, setListening] = useState(false);

  const recognitionRef = useRef(null);
  const navigate = useNavigate();

  const getRecognition = () => {
    if (recognitionRef.current) return recognitionRef.current;

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech Recognition is not supported in this browser.");
      return null;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      setListening(true);
      console.log("🎤 Listening...");
    };

    recognition.onresult = async (event) => {
      const text = event.results[0][0].transcript;

      setUserMessage(text);

      try {
        const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
        const response = await axios.post(
          `${API_URL}/api/voice/chat`,
          {
            message: text,
          }
        );

        const data = response.data;

        setAiResponse(data.aiResponse);

        // Stop previous speech
        window.speechSynthesis.cancel();

        // Speak AI Response
        const speech = new SpeechSynthesisUtterance(data.aiResponse);
        speech.lang = "en-US";
        speech.rate = 1;
        speech.pitch = 1;

        window.speechSynthesis.speak(speech);

        // Open page if requested
        if (data.action === "OPEN_PAGE" && data.page) {
          console.log("Opening:", data.page);

          navigate(data.page);

          // Explain page after navigation
          if (data.explain) {
            setTimeout(() => {
              window.speechSynthesis.cancel();

              const pageKey = data.page.replace(/^\//, "");
              const explanation =
                pageDescriptions[pageKey] ||
                pageDescriptions[data.page] ||
                "This page contains financial information.";

              const explainSpeech =
                new SpeechSynthesisUtterance(explanation);

              explainSpeech.lang = "en-US";
              explainSpeech.rate = 1;
              explainSpeech.pitch = 1;

              window.speechSynthesis.speak(explainSpeech);
            }, 1500);
          }
        }
      } catch (error) {
        console.error(error);

        setAiResponse("Unable to contact AI server.");

        const speech = new SpeechSynthesisUtterance(
          "Unable to contact AI server."
        );

        window.speechSynthesis.speak(speech);
      }
    };

    recognition.onerror = (event) => {
      console.error("Speech Error:", event.error);

      if (event.error !== "aborted") {
        alert(event.error);
      }

      setListening(false);
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognitionRef.current = recognition;

    return recognition;
  };

  const startListening = () => {
    const recognition = getRecognition();

    if (!recognition || listening) return;

    recognition.start();
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }

    window.speechSynthesis.cancel();
    setListening(false);
  };

  return (
    <div className="flex flex-col items-center justify-center text-white">

      <div className="flex gap-4">

        <button
          onClick={startListening}
          disabled={listening}
          className={`px-8 py-4 rounded-xl text-lg font-semibold ${
            listening
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {listening ? "🎙 Listening..." : "🎤 Start Talking"}
        </button>

        <button
          onClick={stopListening}
          className="px-8 py-4 rounded-xl text-lg font-semibold bg-red-600 hover:bg-red-700"
        >
          ⏹ Stop Talking
        </button>

      </div>

      <div className="w-full mt-8 space-y-5">

        <div className="bg-slate-800 rounded-xl p-4">
          <h3 className="font-bold text-blue-400 mb-2">You</h3>
          <p>{userMessage || "Say something..."}</p>
        </div>

        <div className="bg-slate-800 rounded-xl p-4">
          <h3 className="font-bold text-green-400 mb-2">AI</h3>
          <p>{aiResponse || "Waiting for your question..."}</p>
        </div>

      </div>

    </div>
  );
};

export default VoiceAssistant;