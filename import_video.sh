#!/bin/bash

INPUT=${@:0:1}
OUTPUT=${@:2:2}

echo $OUTPUT

cp "$INPUT" temp.mp4

ffmpeg -i temp.mp4 -crf 10 -b:v 1M -c:a libvorbis -vf "scale=-2:360:flags=lanczos" video/$OUTPUT.ogv
ffmpeg -i temp.mp4 -vcodec libx264 -profile:v main -level 3.1 -preset medium -crf 23 -x264-params ref=4 -acodec copy -movflags +faststart -vf "scale=-2:360:flags=lanczos" video/$OUTPUT.mp4
ffmpeg -i temp.mp4 -c:v libvpx -crf 10 -b:v 1M -c:a libvorbis -vf "scale=-2:360:flags=lanczos" video/$OUTPUT.webm

rm temp.mp4
