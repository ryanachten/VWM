# Visual Working Memory
## Psychology Web App

![VWM Landing Page](https://mir-s3-cdn-cf.behance.net/project_modules/1400/cd21ef64144681.5ac95f806b35b.jpg)

## Overview
Visual Working Memory is a test designed to measure individual differences in working memory. Working memory is the ability to remember information for long enough to use it. This is a core function of the human information processing system.

This test has been created with the purpose of furthering psychological assessment. It provides a measure of working memory free from variables present in other tests.

![VWM User Stages](https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/49b26464144681.5ac8644fa2c9a.png)

VWM requires you to remember an increasing amount of visual information, while recognising what you saw in previous scenes. As you progress through the different stages, your score will reflect how your working memory is affected by having to hold onto an extra image.

## App Structure

![VWM App Structure](https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7b1b2964144681.5ac94c699e154.png)

VWM was built using an array of web technologies, including Three.js (for rendering stimuli), D3.js (for graphing user results), and Firebase (for authentication and database storage).

## Stimulus
An important aspect in designing VWM was deciding on what stimuli to use and how they should be presented. The aim was to use unique stimuli, so that there was little chance that any participant would have had prior experience to draw on in responding.

![Lissajous Figures](https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d195e764144681.5ac89d504518e.png)

Lissajous figures appeared to have potential. Through the addition of a z-axis, 3-dimensional forms were created. These forms, when projected onto a 2-dimensional screen created figures which appeared to be more difficult to accurately encode.

## Lissajous Groups

### Lissajous Phase Shift
By manipulating lissajous frequencies, figures of different complexity could be created. Through phase shifting the waveform on any of the axes, figures of similar complexity could be created.

![Lissajous Phase Shift](https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/567f0a64144681.5ac8a19685c73.png)

Using this process, five sets (defined by frequency combinations) of figures were created for this test, each set contained three figures (created through phase shifting).

![Lissajous Groups](https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/06178464144681.5ac89254644b7.png)

## Test Structure

![Test Structure](https://mir-s3-cdn-cf.behance.net/project_modules/1400/186a6864144681.5ac94db51194d.jpg)

### N-Back
VWM is loosely based on the _n-back task_ and the _delayed matching to sample task_.
VWM contains four variants named 0- 1-, 2-, and 3-back. The numbers correspond to the number of intervals between a figure's presentation and its expected recognition from three options.

![N-Back Structure](https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/29366f64144681.5ac895d9266a8.png)

When a target is present in the options section, it will be accompanied by the other two members of the set to which that target belongs. The order of samples is randomly generated at runtime, but samples from the same set cannot repeat until n+1 trials have passed.

![Test Scenes](https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/4c98f464144681.5ac958344f5da.png)

### Scenes
For the first one, two, or three trials in the 1-, 2-, and 3-back variants, respectively, a "click to continue" button appears in the options section instead of figures to be selected from. These memorisation-only trials are mirrored by the same number of response-only trials at the end of each stage.

In this way, there are 25 figures to be remembered, and 25 responses scored for each stage. For example, the 3-back stage contains three memorisation-only trials at the beginning, and three response-only trials at the end, so, it has 28 trials in total, 25 of which will be scored.

![Total Tests](https://mir-s3-cdn-cf.behance.net/project_modules/1400/fb817464144681.5ac94db511d4e.jpg)
