# Assignment-2

Current Sketch: https://melissss4.github.io/Assignment-2/ 


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



