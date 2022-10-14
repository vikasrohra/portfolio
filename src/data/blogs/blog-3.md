---
title: A Quick Guide To Markdown
date: July 23, 2022
category: Miscellaneous
image: {
	src: "../images/blog/3wmrhpo9v.jpg",
  url: "https://vikasrohra.hashnode.dev/a-quick-guide-to-markdown"
}
---

# Follow below steps to add your local source code to GitHub repository

1. First you need to install [Git](https://git-scm.com/) on your system. It is very simple and you need to proceed with default settings and click on next to install.
2. In the command line, navigate to the root directory of your project.
3. Initialize the local directory as a Git repository.

```
$ git init
```

4. Add the files in your new local repository. This stages them for the first commit.

```
$ git add .
# To unstage a file, use 'git reset HEAD YOUR-FILE'.
```

5. Commit the files that you've staged in your local repository.

```
$ git commit -m "First commit"
# To remove this commit and modify the file, use 'git reset --soft HEAD~1' and add and commit the file again.
```

6. Go to [GitHub](https://github.com), sign up if you are a new user or sign in if already have an account.
7. Create a repository on GitHub.
   ![Add repository image](https://cdn.hashnode.com/res/hashnode/image/upload/v1658604291489/919kefMRp.png align="center")
8. Give a suitable name to your repository and click on create repository with default settings.
   ![Create repository page image](https://cdn.hashnode.com/res/hashnode/image/upload/v1658605254526/Xs6QN8lfB.png align="center")
9. Now again open the command line make sure you are still in the root directory of your project. Create the master branch.

```
$ git branch -M master
# This branch will be created on the remote repository on GitHub.
```

10. At the top of your repository on GitHub's Quick Setup page, click to copy the remote repository URL.
    ![Remote repository URL image](https://cdn.hashnode.com/res/hashnode/image/upload/v1658605866305/9Bjl4Yr1w.png align="left")
11. Connect local repository with remote repository.

```
$ git remote add origin 'your-repository-name'
```

12. Now finally push your code to remote repository.

```
$ git push -u origin master
# -u is used for the first push. For all the subsequent pushes you can run 'git push origin master'
```

That's it. Now invite others to work with you!
