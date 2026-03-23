# Hero Frame Sequence

Drop all your frames here. They must be named exactly:

  frame_001.jpg
  frame_002.jpg
  frame_003.jpg
  ...
  frame_080.jpg  (or however many you have)

Then open components/sections/Hero.tsx and update line 3:

  const TOTAL_FRAMES = 80   ← set this to your actual frame count
  const FPS          = 10   ← match what you set in ezgif

That's it. The canvas player will loop them automatically.
