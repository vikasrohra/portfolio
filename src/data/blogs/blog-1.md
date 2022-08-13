---
title: A Quick Guide To Markdown
date: July 23, 2022
category: Miscellaneous
image: {
	src: "../images/blog/3wmrhpo9v.jpg",
  url: "https://vikasrohra.hashnode.dev/a-quick-guide-to-markdown"
}
---

# What is Markdown?

> **Markdown** is a lightweight markup language that you can use to add formatting elements to plaintext text documents.
> For example, to denote a heading, you add a number sign before it (e.g., # Heading One). Or to make a phrase bold, you add two asterisks before and after it (e.g., \*\*this text is bold\*\*)

### Some interesting things about Markdown!

-   The purpose of Markdown-formatted text is to make the document as readable as possible.
-   You can add Markdown-formatting elements to a plaintext file using any text editor application.
-   Markdown is everywhere. Websites like [GitHub](https://github.com) support Markdown.
-   Markdown is platform independent. You can create Markdown-formatted text on any device running any operating system.
-   Markdown is used to create websites, documents, notes, books, presentations, email messages, and technical documentation.

### Markdown, Behind The Scenes

![markdown-flowchart](https://cdn.hashnode.com/res/hashnode/image/upload/v1658565892776/tm7vECREb.avif align="left")

### How to create a Markdown-formatted document

-   To create a Markdown-formatted document, you need to just get started, yes it is that simple!
-   Create a new text file and save it with .md extension.
-   Open this file using any text editor of your choice like [VS Code](https://code.visualstudio.com/), [Sublime Text](https://www.sublimetext.com/) etc.
-   In VS Code, when you start writing Markdown-formatted text there is preview available for that you can see how your document will look after it gets converted. (If preview is not available then you can install an extension called [Auto-Open Markdown Preview](https://marketplace.visualstudio.com/items?itemName=hnw.vscode-auto-open-markdown-preview) inside VS Code)
-   That's it now refer below syntax to get started:

#### Headers

```
# H1
## H2
### H3
#### H4
##### H5
###### H6
```

The above syntax will result the following output:

# H1

## H2

### H3

#### H4

##### H5

###### H6

#### Emphasis

```
talics, with *asterisks* or _underscores_

Strong emphasis, aka bold, with **asterisks** or __underscores__

Combined emphasis with **asterisks and _underscores_**

Strikethrough uses two tildes. ~~scratch this~~
```

The above syntax will result the following output:
talics, with _asterisks_ or _underscores_

Strong emphasis, aka bold, with **asterisks** or **underscores**

Combined emphasis with **asterisks and _underscores_**

Strikethrough uses two tildes. ~~scratch this~~

#### Lists

```
1. Ordered list item 1
  - Un-ordered sub-list item 1
  - Un-ordered sub-list item 2
2. Ordered list item 2
  1. Ordered sub-list item 1
  2. Ordered sub-list item 2
3. Ordered list item 3


- Un-ordered list item 1
   - Un-ordered sub-list item 1
   - Un-ordered sub-list item 2
- Un-ordered list item 2
- Un-ordered list item 3
   1. Ordered sub-list item 1
   2. Ordered sub-list item 2
```

The above syntax will result the following output:

1. Ordered list item 1

-   Un-ordered sub-list item 1
-   Un-ordered sub-list item 2

2. Ordered list item 2
1. Ordered sub-list item 1
1. Ordered sub-list item 2
1. Ordered list item 3

-   Un-ordered list item 1
    -   Un-ordered sub-list item 1
    -   Un-ordered sub-list item 2
-   Un-ordered list item 2
-   Un-ordered list item 3
    1. Ordered sub-list item 1
    2. Ordered sub-list item 2

#### Links

```
Click here [Google](https://www.google.com)
```

The above syntax will result the following output:

Click here [Google](https://www.google.com)

#### Blockquote

```
> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
```

The above syntax will result the following output:

> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book

#### Code Snippets

````
\\\```\\\
const helloWorld = () => {
  colsole.log("Hello World");
}
\\\```\\\
````

The above syntax will result the following output:
`const helloWorld = () => { colsole.log("Hello World"); }`

#### Images

```
![Alt text](https://cdn.hashnode.com/res/hashnode/image/upload/v1658572206459/dkYmrzCiI.png align="left")
```

The above syntax will result the following output:
![Alt text](https://cdn.hashnode.com/res/hashnode/image/upload/v1658572206459/dkYmrzCiI.png align="left")

#### Horizontal Rule

```
Lorem Ipsum is simply dummy text of the printing and typesetting industry.
<hr>
Lorem Ipsum is simply dummy text of the printing and typesetting industry.
```

The above syntax will result the following output:

Lorem Ipsum is simply dummy text of the printing and typesetting industry

<hr>
Lorem Ipsum is simply dummy text of the printing and typesetting industry.

#### Tables

```
| I |HI |Hey|
|---|---|---|
| 1 | 2 | 3 |
| 4 | 5 | 6 |
| 7 | 8 | 9 |
```

The above syntax will result the following output:

| I   | HI  | Hey |
| --- | --- | --- |
| 1   | 2   | 3   |
| 4   | 5   | 6   |
| 7   | 8   | 9   |
