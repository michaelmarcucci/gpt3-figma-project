# GPT3 Design Showcase Site Built with Figma & React

This project was built as an exploration of constructing a figma design in React. It was built following a tutorial from Javascript Mastery and making personal adjustmentss based on preferences and readability.

## Tech Used & Learning Takeaways

Tech: React(17), Figma, CSS, HTML

Takeaways: Passing props down the React tree, Keeping react component style files in the same folder as opposed to a separate Styles folder, modified BEM naming convention for classNames (Block Element Modifier), use of css variables in src/index.css using root:, css tools used: animista.net & angrytools.com/gradient.

### Why I Built This Project

This project is intended as a learning experience for assembling and properly styling information from a Figma file/design document to build a functional web page. This simulates the process of React frontend devs getting a design that they must bring to life and keep clearly readable and maintainable for all team members by writing clean code with consistent styling and formatting.

#### How the File Structure is Setup

This project was created using the standard npx create-react-app command. There are two kinds of react component folders ( components and containers ) with each containing a folder for the jsx component listed and its corresponding css file. Container files are the parent element JSX files that house the component folder JSX files. Global style variables were stored in index.css in the src folder. The App.css holds my default global styles and additional class modifiers to apply the gradients and animations to some components.

##### Improvements to be Made With More Time/Experience

The text of some elements is a bit small on the initial desktop view, but it fits nicely using the media query adjustments. With more experience I would figure out how to better utilize the responsive units (rem & em) to better fill the available page space on desktops.
