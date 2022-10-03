## auto updater para A + Dynamic DNS Record namecheap ###

## FOR DOCKER

must crate a .env file and set:

YOUR_DOMAIN="your.domanin"
YOUR_DYNAMIC_PASSWORD="XXXXXXXXXXXXXXXXXXXXXXXXXX" 
YOUR_UPDATE_INTERVAL="10" # in minutes

Remember to use dynamic Password , not the account Password.

https://www.namecheap.com/support/knowledgebase/article.aspx/36/11/how-do-i-start-using-dynamic-dns/

run whith 
docker biuld -t <DDNS> .
