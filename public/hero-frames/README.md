# Hero Video

The PNG frames approach was too heavy (100MB+). Use a single MP4 instead.

## How to create hero-video.mp4 from your PNG frames

### Option A — FFmpeg (recommended, best quality)
Install FFmpeg then run in the folder containing your frames:

  ffmpeg -framerate 30 -i ezgif-frame-%03d.png -c:v libx264 -crf 23 -pix_fmt yuv420p -movflags faststart hero-video.mp4

- crf 23 = good quality, small file (try crf 28 for even smaller)
- movflags faststart = video starts playing before fully downloaded

### Option B — ezgif.com (no software needed)
1. Go to ezgif.com/gif-maker
2. Upload all your PNG frames
3. Click "Make GIF"
4. Once done, click the "Video" tab above the GIF
5. Click "Convert to MP4"
6. Download the MP4

## Place the file
Put the output file here:  public/hero-video.mp4

Target size: under 5MB for fast loading.
If too large, increase crf value (28-32) or reduce resolution.
