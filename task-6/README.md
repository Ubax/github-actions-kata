# Task 6

Your team realized that they spend a lot of time building apps for releases and in many cases there is something to fix on one or the other platform. Now they would like to build the application as part of the pipeline. The application is a multi-platform application, that should run on Linux, Windows and Mac.

## Definition of done

- [ ] The build is only triggered on new tag with that fulfills the pattern `desktop-app-*.*.*`
- [ ] The application is built for windows and linux (you can add MacOS when using public repository)
- [ ] After the build new release is created on Github

## Hints & help

<details>
<summary>Those hints will help you start</summary>

- `npm run make`
- [artifacts](https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts#uploading-build-and-test-artifacts)
- [matrixes](https://docs.github.com/en/actions/using-jobs/using-a-matrix-for-your-jobs)
- [Paths to executables](./paths.md) - Try to first find the paths yourself. Only if you don't know how to do it check those
</details>

<details>
<summary>In case you are stuck, you can use the resources listed below. Try to first look yourself. The resources are listed in the order from minimal to full help</summary>

1. [Branch with ready solution]()
</details>
