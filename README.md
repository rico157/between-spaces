<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
***
***
***
*** To avoid retyping too much info. Do a search and replace for the following:
*** rico157, between-spaces, riccardo_cogoni, cogonir@live.com, Between Spaces, Move between desktop spaces from your phone
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![MIT License][license-shield]][license-url]




<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/rico157/between-spaces">
    <img src="https://github.com/rico157/between-spaces/blob/main/examples/icon.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Between Spaces</h3>

  <p align="center">
    Move between desktop spaces from your phone
    <br />
    <!-- <a href="https://github.com/rico157/between-spaces">View Demo</a> -->
    <!-- · -->
    <a href="https://github.com/rico157/between-spaces/issues">Report Bug</a>
    ·
    <a href="https://github.com/rico157/between-spaces/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

Between Spaces is an app prototype that allow you to move between desktop spaces with your phone.

![Between Spaces Screen Shot][product-screenshot]

This app runs a local server that can be accessed with a phone with a QR code or a link displayed inside the app.
Once the link is open, few buttons will appear on screen which are keyboard shortcuts emitted to OS. 

The link will also be displayed inside the app.
The default shortcuts to move between spaces are: 
* Move left - `ctrl + "left"` 
* Move right - `ctrl + "right"`
* Mission control - `ctrl + "up"` 

The buttons send a GET request to the local server that will trigger [Node Key Sender](https://www.npmjs.com/package/node-key-sender) sending the keyboard shortcuts to the OS. 

Shortcuts can be added or removed by modifying the endpoints available on `server.js` and `client/index.html`


### Built With

* [ElectronJS](https://www.electronjs.org/)
* [ExpressJS](https://expressjs.com/)
* [Node Key Sender](https://www.npmjs.com/package/node-key-sender)



<!-- GETTING STARTED -->
## Getting Started
*Java is required to run this app*





### Prerequisites

* MacOS
* A smartphone / tablet

Software

* NodeJS
* Java

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/rico157/between-spaces.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```



<!-- USAGE EXAMPLES -->
## Usage

* Run the app
* If an receive an alert grant the app access to your Mac otherwise choose Apple menu  > System Preferences, click Security & Privacy, click Privacy, click Accessibility, then select VSCode and Java tickboxes - [Apple.com](https://support.apple.com/en-gb/guide/mac-help/mh43185/mac)
* Click on the system tray icon to show a QR code OR the link with the IP address followed by the PORT
* Scan the QR code OR visit the link showed underneath the QR code from your phone
* Enjoy!


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact
[![LinkedIn][linkedin-shield]][linkedin-url]
[![Twitter][twitter-shield]][twitter-url]
[![Portfolio][Portfolio-shield]][Portfolio-url]

<!-- 
Your Name - [@riccardo_cogoni](https://twitter.com/riccardo_cogoni) - cogonir@live.com
Project Link: [https://github.com/rico157/between-spaces](https://github.com/rico157/between-spaces) -->



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

* [Node Key Sender](https://www.npmjs.com/package/node-key-sender)
* [QR Code Generator](https://www.npmjs.com/package/qrcode-generator)
* [Font Awesome](https://www.fontawesome.com)





<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[license-shield]: https://img.shields.io/github/license/rico157/between-spaces.svg?style=for-the-badge
[license-url]: https://github.com/rico157/between-spaces/blob/main/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/riccardo-cogoni
[twitter-shield]: https://img.shields.io/badge/-twitter-black.svg?style=for-the-badge&logo=twitter&colorB=555
[twitter-url]: https://twitter.com/
[Portfolio-shield]: https://img.shields.io/badge/-Portfolio-blue?style=for-the-badge&colorB=555
[Portfolio-url]: https://rico157.github.io
[product-screenshot]: https://github.com/rico157/between-spaces/blob/main/examples/banner.png
