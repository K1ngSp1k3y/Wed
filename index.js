/**
 * Platform Spoofer - Example skeleton for Revenge
 * 
 * This is NOT a finished working plugin.
 * Use the HTML tool to generate the correct properties object,
 * then implement the actual gateway patching for your Revenge version.
 */

const { logger } = vendetta?.plugin || console;

// Paste the properties object generated from index.html here
const SPOOF_PROPERTIES = {
  os: "Android",
  browser: "Discord Android",
  device: "Pixel 8 Pro",
  system_locale: "en-US",
  // ... rest of the object from the tool
};

export default {
  onLoad() {
    logger?.log?.("[PlatformSpoofer] Loaded (skeleton only)");
    // TODO: Find the gateway socket / identify sender in the current
    // Revenge / Discord version and patch the properties object.
    // Common pattern seen in other client mods:
    // intercept op === 2 (IDENTIFY) and replace data.properties
  },

  onUnload() {
    logger?.log?.("[PlatformSpoofer] Unloaded");
    // TODO: restore original send / unpatch
  }
};
