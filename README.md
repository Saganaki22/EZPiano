# EZ Piano

A beautiful and feature-rich virtual piano with learning mode, multiple songs, and advanced sound options.

## Features

- **Multiple Sound Options**: Choose between Piano, Synth, and Organ sounds
- **Sustain Mode**: Toggle sustain effect that persists between songs
- **Learn Mode**: Step-by-step learning for all songs with key highlighting
- **Now Playing Indicator**: Shows the currently playing song above the keyboard
- **Rich Song Library**: 
  - Classical pieces (Fur Elise, Moonlight Sonata, Turkish March, etc.)
  - Popular melodies (Amazing Grace, Happy Birthday)
  - Video game themes (Mario, Pokemon, Tetris)
  - Meme songs (Never Gonna Give You Up)
  - Virtuoso pieces (Flight of the Bumblebee)
- **Recording Capability**: Record and play back your performances
- **Responsive Design**: Works on various screen sizes
- **Visual Feedback**: Keys light up when played
- **Volume Control**: Adjust volume to your preference
- **Scale Adjustment**: Resize the piano to fit your screen

## How to Run

There are two ways to run the piano:

### Option 1: Using a Local Server (Recommended)

1. Make sure you have Node.js installed
2. Open a terminal/command prompt in this folder
3. Run `node server.js`
4. Open your browser and go to `http://localhost:8080`

### Option 2: Direct File Opening

You can also open the `index.html` file directly in your browser, but some browsers may have issues with module imports when opening files directly.

## Keyboard Controls

The piano can be played using your computer keyboard. The key mapping is shown on each piano key.

## Emergency Controls

- **ESC key or Spacebar**: Emergency stop (immediately stops all sounds)
- **Double-click Stop button**: More aggressive cleanup for stuck notes

## Learning Mode

1. Select a song from the dropdown
2. Click the "Learn" button
3. Follow the yellow key indicators to play the song step-by-step
4. Keys turn green when played correctly
5. Progress through the entire song at your own pace

## Directory Structure

- **/notes**: Contains all the song melody files
- **/favicon**: Contains app icons and manifest file
- **server.js**: Simple Node.js server for hosting the app
- **songs.js**: Imports and organizes all song files
- **index.html**: Main application file with UI and logic

## Troubleshooting

If songs don't play:

1. Make sure you're using the local server
2. Open your browser's developer console (F12 or right-click > Inspect > Console)
3. Check for any error messages
4. Try a different browser if issues persist

## Contributing

Contributions are welcome! Feel free to add more songs or features.

## License

Copyright 2025 EZ Piano

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License. 
