# Assignment-2

Idea for coding exercise:

Current Sketch: https://melissss4.github.io/Assignment-2/ 

Make buttons that look like CD-rom’s and when pushed they go to the live video function that distort your face, plays on the fact that Databases are like a picture book, but with new algorithms. Like an homage to original database systems and Olia’s work that focuses on how databases now follow a new approach that is fragmented and nonlinear. 

Getting started on this code I knew I would have to use the loadImg function, the button function, the code I used for the live video workshop, the ball systems, and the RiTa library to call upon rhyme words to add to my random poem. I wanted to make sure I included the random poem and the ball system on the live video because I wanted to play on the idea of fragments and how these stem from non-linearity. 

What I knew would be challenging was making the image of CD’s into a button, as I have never done this before. I knew how to call images, and how to make shapes buttons, but not how to merge the two. I decided to go to the P5.js library to find some help. First I went to the createImg page. 
This didn’t really help me figure it out, but it did  point me in the right direction. I went onto google again and searched for ‘creating image button P5.js’ and found this GitHub ReadMe file How to make a button that is an image in p5.js · GitHub 
With this I was able to find the button creation code: button = createImg('mod.png'); 

I also looked at some other sources javascript - Change image on button click in p5.js - Stack Overflow and asynchronous - createImage() vs createImg() vs loadImage() in p5. which to use to load in an array of images for use in ml5? - Stack Overflow but did not find them as useful as the GitHub file because of how complicated they looked. I prefer to use the simple slicked back code that does not look like it has too many add ons because I am so new to coding, I have found I get confused when there are too many lines.

I also wanted to have the live video stop and go back to the starting page so for this I did some googling and found out I could use the ‘clear’ function. I searched ‘how to use clear function in p5.js’ and found this website p5.js clear() function - GeeksforGeeks I also then found the P5 Library explaining it clear and used that. I added it into my function togglevideo section. 

![Screen Shot 2025-02-12 at 1 04 42 PM](https://github.com/user-attachments/assets/abfd2253-454b-4aaf-a69a-0e6dd5515b54)



I realised I would need to add a button or some text that says to click the image of the CD’s otherwise it may not be clicked. 

![Screen Shot 2025-02-12 at 1 05 02 PM](https://github.com/user-attachments/assets/1c697935-0288-40bc-8932-94106a138afd)



