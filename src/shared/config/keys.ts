export const Keys = {
  /**
   * Action keys
   */
  Back: "BACK",
  Escape: "ESCAPE",
  Enter: "ENTER",
  /**
   * Navigation keys
   */
  Left: "LEFT",
  Up: "UP",
  Right: "RIGHT",
  Down: "DOWN",
}

export const KeyMap: Record<string, string> = {
  /**
   * Modern browser keys
   */
  "Backspace": "BACK",
  "Enter": "ENTER",
  "Escape": "ESCAPE",
  "ArrowLeft": "LEFT",
  "ArrowUp": "UP",
  "ArrowRight": "RIGHT",
  "ArrowDown": "DOWN",
  /**
   * Legacy key identifiers
  */
  // "U+0008": "BACK", -> commented out because old browsers go back when this key is pressed
  "U+001B": "ESCAPE",
  "Left": "LEFT",
  "Up": "UP",
  "Right": "RIGHT",
  "Down": "DOWN",
  /**
   * Legacy key codes
   */
  // 8: "BACK", -> commented out because old browsers go back when this key is pressed
  13: "ENTER",
  27: "ESCAPE",
  37: "LEFT",
  38: "UP",
  39: "RIGHT",
  40: "DOWN",
}