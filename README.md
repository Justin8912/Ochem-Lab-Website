![Screen Shot 2023-04-26 at 8 28 32 PM](https://user-images.githubusercontent.com/95107100/234743932-cb5812f1-6068-4a47-959e-ff835df6ff32.png)

![Screen Shot 2023-04-26 at 9 23 35 PM](https://user-images.githubusercontent.com/95107100/234743936-d58ae9bf-b552-4f20-855e-1166280508d9.png)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

How to use
==========
Customizing content
-------------------
### Class specific content
To change information that is specfic to a specific section follow the following steps:

1. Go to the following directory: 'resources/classinfo'
2. Choose which section you would like to change

From here, you will see two files: 'RelevantInfo.txt' and 'Start.txt':
- 'RelevantInfo.txt'
    - This refers to the information that is rendered on each class homepage. It is the content that is rendered in the 'Important Documents' modal. There are two types of information that you can render, as is shown in the picture:
        - Text, which will be shown at the top of the modal in the order in which it typed in the txt document.
            - To render a single line of text which will wrap in the modal width, just write one line of text. Do not press enter, as it will mess up the formatting.
            - If you would like to insert line breaks on the webpage, place `<br/>` and a line break will be inserted. Please refer to the following example which shows how a list of elements is presented:
            ```
              For labs you will need the following: <br/> 1. A combination lock <br/> 2. A lab notebook with carbon copy capability <br/> 3. The Course Ebook (Access through Longhorn Access Program)
            ```
        - Buttons, which will link to outside resources.
            - To create a button, you will need to follow the structure that is outlined here:
            ```
            Lab: Kinetics vs thermo lecture
            Link: https://fjetland.cm.utexas.edu/courses/organiclab/Videos/Lectures_files/KvT%20Lecture.mp4
            ```
            - This will render a button in the center of the modal which will display the text following 'Lab: ' and link to the resource that is linked after 'Link: '
            - It is important that you maintain this structure.

    - There is one other important thing to remember. Between differing content on the page, PLEASE remember to separate it with one blank line of text. This is important for how the text is parsed.
- 'Start.txt'
    - This is similar to the previous document but a bit simpler.
    - You will have the ability to add information in text, and list formats:
        - The text format is exactly the same as the previous, however, there is not ability to use the `<br/>`.
        - The list format is done by placing subsequent list elements in the line directly after the previous list element like so:
        ```
          Your first lab will be:
          Monday: 1-23-23
          Tuesday: 1-24-23
          Wednesday: 1-25-23
          Thursday: 1-26-23
        ```
        - So in the above example, `Your first lab will be: ` will be on the first line, and will not be included in this list group.
        - The subsequent lines: `Monday: 1-23-23...` will be shown as list elements coming one after the other.
        - In this document, text will be displayed in the order in which you add it into the document.
    - Please separate separate information by a blank line.