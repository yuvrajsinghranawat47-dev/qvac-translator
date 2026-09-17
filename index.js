// QVAC Offline Translator
// Translates English text to Italian, 100% on-device, using Tether's QVAC SDK.
// No API key, no internet needed after the model downloads once.

import { loadModel, translate, unloadModel, BERGAMOT_EN_IT } from "@qvac/sdk";

// You can change this text, or pass your own sentence as a command-line argument:
//   node index.js "Hello, how are you?"
const inputText =
  process.argv.slice(2).join(" ") ||
  "Hello, how are you today? I hope you are having a wonderful day!";

async function main() {
  try {
    console.log("🚀 Loading translation model (first run will download it)...");

    const modelId = await loadModel({
      modelSrc: BERGAMOT_EN_IT,
      modelType: "nmt",
      modelConfig: {
        engine: "Bergamot",
        from: "en",
        to: "it",
      },
      onProgress: (progress) => {
        console.log(progress);
      },
    });

    console.log(`✅ Model loaded! Model ID: ${modelId}`);
    console.log(`\n📝 English text: "${inputText}"`);
    console.log("\n🌍 Translating on-device (no cloud call)...\n");

    const result = translate({
      modelId,
      text: inputText,
      modelType: "nmt",
      stream: false,
    });

    const translatedText = await result.text;

    console.log("🇮🇹 Italian translation:");
    console.log(translatedText);

    await unloadModel({ modelId });
    console.log("\n✅ Done. Model unloaded, resources freed.");
  } catch (error) {
    console.error("❌ Error:", error);
    process.exit(1);
  }
}

main();
