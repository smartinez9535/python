# GIT Discussion

## What is Git?

- Version Control / Source Control
    - Track changes made to our code
        - Who made those changes
        - When those changes were made
        - Tracks changes line by line
    - Back up code
- Git runs on your local machine
    - Create a repository
        - Parent folder for our code
        - Store all the git changes and files in a hidden folder called .git
        - Not required, but recommended to have a .gitignore
            - Tells git to ignore certain folders and files
    - Branches which are subsets of the repos
        - E.G. have a official production version, and a separate branch for just development

## What is Github?

- Cloud storage for our code
    - If I wipe my harddrive, i don't lose my code
- Allows us to:
    - Share our code with others: team members, public, etc.
        - Repos on github can be public or private
    - Collaboration with others
    - Access our code on any machine
- Integrated to work with git

---

## How do I use Git?

### Setting up a local git repo

1. Make our project folder (aka repository)
2. Create a `README.md` file. This is important to describe the purpose of our repo
    - Short description and name of our repository
3. We want to initialize, or create, the git repositories
    - `git init`
4. Start adding code and changes to our git repo
```
only run once after creating the repo: git branch -m master main (this changes the master branch to main)

git add <folder and or file we want to save>
git commit -m "commit message to describe what was changed"

e.g.
git add . (the dot represents the current folder)
git commit -m "init commit"

git status tells us the status of our git
```
```
make the github repo

git remote add origin <url to github repo>

git push -u origin <branch>

To retrieve code from the github
git pull origin <branchname>
```