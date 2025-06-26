const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playSound(frequency = 440, duration = 1) {
  const osc = audioCtx.createOscillator(); // This is a sound wave generator
  osc.type = "sawtooth";
  const envelope = audioCtx.createGain(); // Creates a gain node which controls volume
  osc.connect(envelope); // This means the raw sound wave from the oscillator goes into the volume controller.

  envelope.connect(audioCtx.destination);

  // 1. Set initial gain (volume) to 0 (mute) — start of envelope
  envelope.gain.setValueAtTime(0, audioCtx.currentTime);
  // 2. Fade in smoothly to volume 1 (max) — attack phase
  envelope.gain.linearRampToValueAtTime(1, audioCtx.currentTime);
  // 3. Fade out smoothly to 0 over duration — release phase
  envelope.gain.linearRampToValueAtTime(0, audioCtx.currentTime + duration);

  osc.frequency.setValueAtTime(frequency, audioCtx.currentTime);

  osc.start();
  osc.stop(audioCtx.currentTime + duration);
}
