# Swiggy Clone

# git commands

- git init
- git add README.md
- git commit -m "first commit"
- git branch -M main
- git remote add origin https://github.com/RoshanMathurkar/swiggyClone.git
- git push -u origin main

# JSX

- JSX is not HTML in javascript, it is html, xml like syntax.

# Tailwind insall

- using parcel
  - npm install -D tailwindcss postcss
  - npx tailwindcss init
  - Configure PostCSS
    - {
    - "plugins": {
    -       "tailwindcss": {}
    - }
    - }
  - Configure your template paths
    - ["./src/**/*.{html,js,ts,jsx,tsx}",] inside tailwind.config.js
  - Add the Tailwind directives to your CSS
    - @tailwind base;
    - @tailwind components;
    - @tailwind utilities;
