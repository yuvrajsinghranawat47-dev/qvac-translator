# QVAC Offline Translator

An offline English → Italian translator built with [Tether's QVAC SDK](https://github.com/tetherto/qvac). All translation runs **100% on-device** — no API key, no server calls, no internet needed after the model downloads once.

Built for the [QVAC Hackathon](https://whop.com/townhall) bounty.

## What it does

Takes an English sentence and translates it to Italian using QVAC's on-device neural machine translation (`translate`) function. This is a template — the same pattern (`loadModel` → `translate` → `unloadModel`) can be adapted to any language pair QVAC supports.

## SDK version

Built and tested with `@qvac/sdk` `^0.19.0`.

## Requirements

- [Node.js](https://nodejs.org) v18 or newer
- Internet connection for the **first run only** (to download the translation model — after that it works fully offline)

## Install

```bash
npm install
```

## Run

```bash
npm start
```

Or translate your own sentence:

```bash
node index.js "The weather is beautiful today"
```

## Example output

```
🚀 Loading translation model (first run will download it)...
✅ Model loaded! Model ID: ...
📝 English text: "Hello, how are you today? I hope you are having a wonderful day!"
🌍 Translating on-device (no cloud call)...
🇮🇹 Italian translation:
Ciao, come stai oggi? Spero che tu stia passando una giornata meravigliosa!
✅ Done. Model unloaded, resources freed.
```

## How it works

1. `loadModel()` downloads and loads the Bergamot `EN→IT` translation model onto the device.
2. `translate()` runs inference locally — the text never leaves the machine.
3. `unloadModel()` frees the resources once done.

## License

MIT
