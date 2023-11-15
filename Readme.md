# News Poet

News Poet is a Chrome extension that turns newspaper headlines into rhymes.

## Features

- Changes the headlines of newspaper sites to rhymes.
- Easy to use: loads as the website loads.

## Installation

1. Clone this repository: `git clone https://github.com/shivankkunwar/News-Poet.git`
2. Open Chrome and go to `chrome://extensions`.
3. Enable "Developer mode" at the top right.
4. Click "Load unpacked" and select the `News-Poet` directory.

## Usage

1. Navigate to a newspaper site(The Hindu).
2. When the site load automatically a confirmation pop up comes- permission for Converting headline to Rhyme


## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
Do add more websites in manifest.json and makes changes to the query selector accordingly 

`"content_scripts": [
      {
        "matches": ["https://*.thehindu.com/*"], 
        "js": ["content.js"]
      }]
`

