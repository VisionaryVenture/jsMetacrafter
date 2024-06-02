/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
let num =0;

function mintNFT(name, description, imgUrl){
        let nft = {
        nftName : name,
        nftDes : description,
        nftImg : imgUrl
    };
    num++;
    return nft;
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs(){
    console.log("The total number of minted NFTs is: " + num );
}

// print the total number of NFTs we have minted to the console
function getTotalSupply(nfts){
    nfts.forEach(nft => {
        console.log("name: "+ nft.nftName);
        console.log("description: "+ nft.nftDes);
        console.log("Image url: "+ nft.nftImg);
        console.log("~~~~~~~~~~~~~~~~~~~~~~~");
    });
}

// call your functions below this line

//initilizing the nfts
let nft1 = mintNFT("NFT 1", "First NFT", "IMG1");
let nft2 = mintNFT("NFT 2", "Second NFT", "IMG2");
let nft3 = mintNFT("NFT 3", "Third NFT", "IMG3");

//storing the nfts in in array
let NFTs = [nft1, nft2, nft3];


listNFTs();

console.log("Following are the minted nfts:\n")
getTotalSupply(NFTs);
