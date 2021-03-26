# CONTRIBUTING

If you feel that there is a way to improve this project, please do! You're more than welcome to fork the project and submit any pull requests that improve the overall quality and functionality of this project.

## Our Git Branching Model

Please read and review an in-depth view of our [Git Branching Model][gitbranchingmodel] _(how we maintain branches and releases)_ before contributing.

We suggest you read the Git Branching Model document to get familiar with how we handle bug fixes, adding and removing feature, and new version releases just to name a few.

## Getting Started Quickly

Below are a list of steps to quickly get you contributing to this project.

1. Fork the project (`https://github.com/davidsaulrodriguez/mern-stack-template`)
2. Clone it on your machine (`git clone https://github.com/yourUsername/mern-stack-template.git`)
3. Add the upstream remote (`git remote add upstream https://github.com/davidsaulrodriguez/mern-stack-template.git`)
4. Stay up to date with the upstream project

- (`git fetch upstream` )
- (`git checkout main`)
- (`git merge upstream/main`) // This brings your fork's master branch into sync with the main upstream repo, without losing your local changes.
- Be sure to repeat these steps for the **develop** branch.

5. Create your branch from the **develop** branch (`git checkout -b yourBranchName develop`)
6. Commit your changes (`git commit -am 'Added yourBranchName code'`)
7. Push your branch (`git push origin yourBranchName`)
8. Open a new Pull Request

[gitbranchingmodel]: ./docs/Branching_Model.md
