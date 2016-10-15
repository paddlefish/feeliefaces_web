aws --profile personal s3 sync . s3://feeliefaces.com/ --exclude "sync.sh" --exclude ".git/*" --exclude ".gitattributes" --exclude ".gitignore" --exclude ".DS_Store"
