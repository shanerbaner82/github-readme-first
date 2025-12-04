# Readme First

A Chrome extension that moves GitHub README content above the file listing.

## The Problem

GitHub shows the file tree before the README, forcing you to scroll past the code listing to read documentation.

## The Solution

This extension automatically repositions the README to appear first, putting documentation where it belongs—at the top.

![Before and After](https://github.com/user-attachments/assets/placeholder.png)

## Installation

### Chrome Web Store

Install from the [Chrome Web Store](https://chrome.google.com/webstore/detail/readme-first/YOUR_EXTENSION_ID)

### Manual Installation

1. Clone this repository
   ```bash
   git clone https://github.com/YOUR_USERNAME/readme-first.git
   ```

2. Open Chrome and navigate to `chrome://extensions`

3. Enable **Developer mode** (toggle in top right)

4. Click **Load unpacked** and select the cloned folder

## Usage

Once installed, visit any GitHub repository. The README will automatically appear above the file listing. No configuration needed.

## How It Works

The extension injects a content script on GitHub pages that:

1. Finds the README content and file listing elements
2. Locates their common ancestor in the DOM
3. Repositions the README element before the file listing

The script handles GitHub's client-side navigation, so it works seamlessly as you browse between repositories.

## Permissions

| Permission | Reason |
|------------|--------|
| `github.com` | Required to modify page layout on GitHub repositories |

No other permissions are requested. No data is collected or transmitted.

## Privacy

This extension:

- Runs entirely in your browser
- Collects no data
- Has no analytics
- Makes no network requests

See the full [Privacy Policy](PRIVACY.md).

## Development

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/readme-first.git

# Load in Chrome
# 1. Go to chrome://extensions
# 2. Enable Developer mode
# 3. Click "Load unpacked"
# 4. Select the project folder
```

To test changes, click the refresh icon on the extension card in `chrome://extensions`.

## Project Structure

```
readme-first/
├── manifest.json    # Extension configuration
├── content.js       # Content script (the magic happens here)
├── icons/           # Extension icons
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
├── README.md
└── PRIVACY.md
```

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

MIT
