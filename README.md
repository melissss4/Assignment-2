# Assignment-2

Current Sketch: [https://melissss4.github.io/Assignment-2/ ](https://melissss4.github.io/Assignment-2/) 


Idea for coding exercise:

Make buttons that look like CD-rom’s and when pushed they go to the live video function that distort your face, plays on the fact that Databases are like a picture book, but with new algorithms. Like an homage to original database systems and Olia’s work that focuses on how databases now follow a new approach that is fragmented and nonlinear. 


__________________


Coding process:


Getting started on this code I knew I would have to use the loadImg function, the button function, the code I used for the live video workshop, the ball systems, and the RiTa library to call upon rhyme words to add to my random poem. I wanted to make sure I included the random poem and the ball system on the live video because I wanted to play on the idea of fragments and how these stem from non-linearity. 

What I knew would be challenging was making the image of CD’s into a button, as I have never done this before. I knew how to call images, and how to make shapes buttons, but not how to merge the two. I decided to go to the P5.js library to find some help. First I went to the [createImg](https://p5js.org/reference/p5/createImg/) page. 
This didn’t really help me figure it out, but it did  point me in the right direction. I went onto google again and searched for ‘creating image button P5.js’ and found this GitHub ReadMe file [How to make a button that is an image in p5.js ](https://gist.github.com/lizzybrooks/54045563e4e8321718cc40297db999f9)· GitHub 
With this I was able to find the button creation code: button = createImg('mod.png'); 

I also looked at some other sources [javascript - Change image on button click in p5.js - Stack Overflow](https://stackoverflow.com/questions/58678735/change-image-on-button-click-in-p5-js) and [asynchronous - createImage() vs createImg() vs loadImage() in p5. which to use to load in an array of images for use in ml5? - Stack Overflow](https://stackoverflow.com/questions/54032098/createimage-vs-createimg-vs-loadimage-in-p5-which-to-use-to-load-in-an-ar)  but did not find them as useful as the GitHub file because of how complicated they looked. I prefer to use the simple slicked back code that does not look like it has too many add ons because I am so new to coding, I have found I get confused when there are too many lines.

I also wanted to have the live video stop and go back to the starting page so for this I did some googling and found out I could use the ‘clear’ function. I searched ‘how to use clear function in p5.js’ and found this website p5.js [clear() function - GeeksforGeeks](https://www.geeksforgeeks.org/p5-js-clear-function/) I also then found the P5 Library explaining it [clear](https://p5js.org/reference/p5/clear/) and used that. I added it into my function togglevideo section. 

![Screen Shot 2025-02-12 at 1 04 42 PM](https://github.com/user-attachments/assets/abfd2253-454b-4aaf-a69a-0e6dd5515b54)



I realised I would need to add a button or some text that says to click the image of the CD’s otherwise it may not be clicked. 

![Screen Shot 2025-02-12 at 1 05 02 PM](https://github.com/user-attachments/assets/1c697935-0288-40bc-8932-94106a138afd)



I also wanted to add in another feature that would show the cloud based way of storing code, so I added in a cloud button, I will work on finding out what to add onto that. 
I came back to this after developing my code more and this was the outcome:


![Screen Shot 2025-02-14 at 12 24 19 AM](https://github.com/user-attachments/assets/17693845-702c-4f21-901d-46e79930286d)


I wanted to make sure that the add poem button and the input box only showed up when the cd’s are pushed, so I added this to my code:


![Screen Shot 2025-02-14 at 12 24 46 AM](https://github.com/user-attachments/assets/ff54ec94-ecb2-4e39-b6d7-d35eba65df1e)


 I had an idea to make the cloud structure more interactive so that it related back to Lev Manovich’s Database as Symbolic Form (chapter 2, 2007) that speaks about cloud based systems as interactive and easy to change and update. I wanted to make it so that you could move things around the screen and change their order. I wanted to also integrate back Olia Lialina’s work Online Newspapers (2004) so I wanted to make it tie in with her gif style images. I liked the idea of a diary, and the fragmented, stream of consciousness style that comes with writing in a diary. So I wanted to make it so that when words are entered into the input box it turns the canvas into a diary entry. I wanted to make it look like a page of a diary, with sparkly stickers (inspired by Lialina’s sparkly gifs in Online Newspapers (2004) )

I added the book to the canvas, I made it so that when the image of the cloud was pushed, the book showed up. I will use this as my base for adding in the rest of the interactive features. 

I also added in the hide function using this p5.js library https://p5js.org/reference/p5.Element/hide/

![Screen Shot 2025-02-14 at 12 25 21 AM](https://github.com/user-attachments/assets/920a4d94-f34b-4847-b9cd-f61686303958)


Moving onto adding in Gifs to my diary entry page I used this website to help me learn how to do that on p5.js https://stackoverflow.com/questions/56018372/adding-a-gif-to-a-p5-js-artwork and this https://editor.p5js.org/kjhollen/sketches/S1bVzeF8Z I used this website to download my gifs https://giphy.com/stickers/grandma-old-lady-rifrafgiraffe-H3HTvs2zDmAfKJmOoR


![Screen Shot 2025-02-14 at 12 26 15 AM](https://github.com/user-attachments/assets/73fc10a2-1394-4d51-bb3f-51b96f7146cd)


I ended up having one of my gifs turn out squashed so I needed to make sure I fixed the aspect ratio. I used the ‘object-fit’ and the ‘contain’ sizing for the gifs. I used this website to help me https://stackoverflow.com/questions/37127384/why-isnt-object-fit-working-in-flexbox

![Screen Shot 2025-02-14 at 12 26 46 AM](https://github.com/user-attachments/assets/aa64e0d0-82f4-4498-99aa-502660ddd6b2)


Making the second text input function, I wanted it to be different to the RiTa rhyme function, I wanted the inputted words to show up randomly on the page like a fragmented diary entry, to do this it was easy enough as I just needed to leave out the RiTa functions, but I needed to make sure that the text did not get too small or too big, I wanted to make sure it looked like words on a page, so I made sure I could change the text size is needed. 


![Screen Shot 2025-02-16 at 9 53 07 PM](https://github.com/user-attachments/assets/651ab2cb-8d70-4af9-86d9-1ae5b36c4fde)


I was happy with the fact that I was able to produce a code that showed the theme of non-linear storylines through two separate text functions. One using a RiTa rhyme function that changed words inputted, and one that randomly distributed the words inputted across a page. Both the webcam version of the code and the diary screen of the code represent the way that the viewer sees themselves, one as a fragmented image on a webcam, and one with their inner thoughts fragmented and strewn across the entry of a diary page. The RiTa text function plays on the unreliability of words we may speak and how they are interpreted by others/ seen by others (hence why we are looking at an image of a person on a webcam as these words are being changed on screen). And the journal entry plays on how our thoughts and feelings can be disjointed and fragmented when expressed. 





_______________________________

Critical reflection: 


The motivation behind my creative work was primarily the idea of non-linearity and the fragmented nature of data storage, drawing inspiration from Lev Manovich and Olia Lialina’s works. I wanted to take the literal aspects from Manovich’s text — how he mentions the CD-ROM data storing structure being linear/structured — and used the imagery of the CD-ROM’s as one of the branches that could be chosen. I also used his idea of the ‘symbolic’ system and how we can use the analogy of the photographs on a CD-ROM as a way of not just seeing the photograph, but by looking at their location in a database and the way that they are organised, we can gain more understanding and see past just the photos. I incorporated the idea of the ‘photo’ and turned it into my distorted webcam system. I wanted to play on the imagery of the photo being distorted, and needing the text over the image, placed in linear rows to create understanding.  I incorporated the RiTa function to change the text inputted because I wanted to highlight how the fragmented nature of our thoughts may not be perceived the same by others, alike to the ideas that Manovich talks about in his text; he touches on how in the 00’s and 2010’s the switch to cloud based data storage systems allowed for fragmented data storage, which allowed people to store data non-linearly, sometimes obscuring the way that we would have been able to understand data being stored on a CD-ROM. The RiTa text function plays on the this theme of fragmentation and the subjectivity of understanding, the unreliability of words we may speak and how they are interpreted by others/ seen by others; hence why we are looking at an image of a person on a webcam as these words are being changed on screen, we are interrogating the self, and our understanding of others by looking at ourselves, as our words are being changed and the meaning behind them is being mistranslated as it goes through the ‘viewpoint’ or perception of someone else, even if that someone else is a function in code. 


       The second branch — in the shape of a cloud, makes a reference to the different data storage tools mentioned in Manovich’s text — that someone could go down is inspired more by Lialina’s Online Newspapers (2004) and the way she plays on the ideas of fragmentation and unreliability, fostering an environment for self discovery and forming our own options. I wanted my work to be as personalised as hers (she often used GIFs of herself in her work) and by having the user input a journal entry I felt like this was the best way that someone could confront themselves to express their own thoughts and opinions. I still wanted to focus on the idea of Modernist fragmentation and stream of consciousness, so I had the diary entries show up on random coordinates of the page, portraying the way our thoughts can come out choppy and disjointed as we think and express them, but when taking a step back, we are able to piece them together in this non-linear way. If we were to find new ways to link different sentences inputted on the pages we would be able to make hundreds of different interpretations of what we were saying depending on our mood, influences that day or what we ate; playing on the theme of subjectiveness of the individual perception and experience. 
